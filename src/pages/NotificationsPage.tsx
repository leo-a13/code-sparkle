import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNotifications, Notification } from '@/contexts/NotificationContext';
import { Bell, CheckCheck, Trash2, Droplet, Award, Utensils, Clock, Info } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const ICON_MAP: Record<string, React.ReactNode> = {
  water: <Droplet className="text-primary" size={18} />,
  achievement: <Award className="text-secondary" size={18} />,
  meal: <Utensils className="text-primary" size={18} />,
  reminder: <Clock className="text-accent" size={18} />,
  info: <Info className="text-muted-foreground" size={18} />,
};

const NotificationsPage = () => {
  const { notifications, markAsRead, markAllAsRead, clearNotifications, deleteNotification, unreadCount } = useNotifications();

  return (
    <PageLayout activePage="notifications">
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
                <Bell size={28} /> Notifications
              </h1>
              <p className="text-muted-foreground">
                {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
              </p>
            </div>
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <Button variant="outline" size="sm" onClick={markAllAsRead} className="gap-1">
                  <CheckCheck size={14} /> Mark all read
                </Button>
              )}
              {notifications.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearNotifications} className="gap-1 text-destructive">
                  <Trash2 size={14} /> Clear
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {notifications.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-lg font-semibold text-foreground">No notifications</h3>
              <p className="text-muted-foreground">You're all caught up!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2">
            {notifications.map((notif, i) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className={`transition-colors cursor-pointer ${!notif.isRead ? 'border-primary/30 bg-primary/5' : ''}`}
                  onClick={() => markAsRead(notif.id)}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-0.5">{ICON_MAP[notif.type] || ICON_MAP.info}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-foreground">{notif.title}</h4>
                        {!notif.isRead && <Badge className="h-2 w-2 p-0 bg-primary rounded-full" />}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">{notif.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDistanceToNow(notif.timestamp, { addSuffix: true })}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 h-8 w-8"
                      onClick={(e) => { e.stopPropagation(); deleteNotification(notif.id); }}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default NotificationsPage;
