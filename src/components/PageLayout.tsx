import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Star, Flame, User, Home, Settings, Bell, X, 
  LayoutDashboard, Utensils, TrendingUp, Award, BookOpen, Heart, 
  Trophy, Calendar, Video, Lightbulb, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/Logo';
import { getLS, LS_KEYS } from '@/utils/localStorage';
import { useTheme } from '@/contexts/ThemeContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { useScreenSize } from '@/utils/mobile';

const NAV_ITEMS = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/meal-planning', label: 'Meal Plans', icon: Utensils },
  { path: '/progress', label: 'Progress', icon: TrendingUp },
  { path: '/challenges', label: 'Challenges', icon: Award },
  { path: '/journal', label: 'Journal', icon: BookOpen },
  { path: '/favorites', label: 'Favorites', icon: Heart },
  { path: '/cooking-videos', label: 'Cooking Videos', icon: Video },
  { path: '/health-tips', label: 'Health Tips', icon: Lightbulb },
  { path: '/gamification', label: 'Rewards', icon: Trophy },
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/settings', label: 'Settings', icon: Settings },
];

interface PageLayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, activePage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { unreadCount } = useNotifications();
  const { isMobile } = useScreenSize();
  const points = getLS(LS_KEYS.POINTS, 0);
  const streak = getLS(LS_KEYS.STREAK, 0);

  const currentUser = JSON.parse(localStorage.getItem('th_current_user') || 'null');
  const displayName = currentUser ? `${currentUser.firstName}` : 'User';

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
              <Logo size="md" />
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
            {NAV_ITEMS.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'}
                  `}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-full justify-start gap-2">
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu size={20} />
              </Button>
              <span className="text-sm font-medium text-muted-foreground hidden sm:block">
                Welcome, <span className="text-foreground font-semibold">{displayName}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Points */}
              <div className="flex items-center gap-1 bg-secondary/30 px-2.5 py-1 rounded-full">
                <Star size={14} className="text-secondary" />
                <span className="text-xs font-bold text-secondary-foreground">{points}</span>
              </div>

              {/* Streak */}
              <div className="flex items-center gap-1 bg-destructive/10 px-2.5 py-1 rounded-full">
                <Flame size={14} className="text-destructive" />
                <span className="text-xs font-bold text-foreground">{streak}</span>
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/notifications')}>
                <Bell size={18} />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-destructive text-destructive-foreground">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
