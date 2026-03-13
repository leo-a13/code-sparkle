import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NutritionProvider } from "./contexts/NutritionContext";
import { NotificationProvider } from "./contexts/NotificationContext";

const queryClient = new QueryClient();

// Lazy-loaded pages
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const MealPlanningPage = lazy(() => import("./pages/MealPlanningPage"));
const ProgressPage = lazy(() => import("./pages/ProgressPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));
const ChallengesPage = lazy(() => import("./pages/ChallengesPage"));
const DailyJournalPage = lazy(() => import("./pages/DailyJournalPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const GamificationPage = lazy(() => import("./pages/GamificationPage"));
const CookingVideosPage = lazy(() => import("./pages/CookingVideosPage"));
const HealthTipsPage = lazy(() => import("./pages/HealthTipsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <NutritionProvider>
            <NotificationProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Suspense fallback={<LoadingFallback />}>
                    <AnimatePresence mode="wait">
                      <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/meal-planning" element={<MealPlanningPage />} />
                        <Route path="/progress" element={<ProgressPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/notifications" element={<NotificationsPage />} />
                        <Route path="/challenges" element={<ChallengesPage />} />
                        <Route path="/journal" element={<DailyJournalPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/gamification" element={<GamificationPage />} />
                        <Route path="/cooking-videos" element={<CookingVideosPage />} />
                        <Route path="/health-tips" element={<HealthTipsPage />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </AnimatePresence>
                  </Suspense>
                </BrowserRouter>
              </TooltipProvider>
            </NotificationProvider>
          </NutritionProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
