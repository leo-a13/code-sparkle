import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, Calendar, TrendingUp } from 'lucide-react';
import { getLS, LS_KEYS, MoodEntry, MealPlan, CalorieEntry } from '@/utils/localStorage';
import { Card } from '@/components/ui/card';

const DashboardGreeting: React.FC = () => {
  const currentUser = JSON.parse(localStorage.getItem('th_current_user') || 'null');
  const firstName = currentUser?.firstName || 'User';
  const points = getLS<number>(LS_KEYS.POINTS, 0);
  const streak = getLS<number>(LS_KEYS.STREAK, 0);
  const moodLog = getLS<MoodEntry[]>(LS_KEYS.MOOD_LOG, []);
  const lastMood = moodLog.length > 0 ? moodLog[0] : null;
  const mealPlans = getLS<MealPlan[]>(LS_KEYS.MEAL_PLANS, []);
  const calorieLog = getLS<CalorieEntry[]>(LS_KEYS.CALORIE_LOG, []);
  const today = new Date().toDateString();
  const todayCalories = calorieLog.filter(e => new Date(e.date).toDateString() === today);

  const hour = new Date().getHours();
  let greeting = 'Good Morning';
  let emoji = '🌅';
  if (hour >= 12 && hour < 17) { greeting = 'Good Afternoon'; emoji = '☀️'; }
  else if (hour >= 17 && hour < 21) { greeting = 'Good Evening'; emoji = '🌿'; }
  else if (hour >= 21 || hour < 5) { greeting = 'Good Night'; emoji = '🌙'; }

  const moodEmojis: Record<string, string> = { great: '😄', good: '😊', neutral: '😐', bad: '😔', terrible: '😢' };
  const lastMoodEmoji = lastMood ? (moodEmojis[lastMood.mood] || '😐') : null;

  const reminders: string[] = [];
  if (todayCalories.length === 0) reminders.push('📊 Track your calories today!');
  if (mealPlans.length === 0) reminders.push('📅 Create a meal plan to stay on track!');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {emoji} {greeting}, {firstName}!
            </h2>
            <p className="text-muted-foreground mt-1">
              {lastMoodEmoji && `Feeling ${lastMoodEmoji} • `}
              Ready to make today count?
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 shadow-sm">
              <Star className="text-secondary" size={18} />
              <div>
                <p className="text-xs text-muted-foreground">Points</p>
                <p className="font-bold text-foreground">{points}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 shadow-sm">
              <Flame className="text-destructive" size={18} />
              <div>
                <p className="text-xs text-muted-foreground">Streak</p>
                <p className="font-bold text-foreground">{streak} days</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 shadow-sm">
              <Calendar className="text-primary" size={18} />
              <div>
                <p className="text-xs text-muted-foreground">Plans</p>
                <p className="font-bold text-foreground">{mealPlans.length}</p>
              </div>
            </div>
          </div>
        </div>

        {reminders.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {reminders.map((r, i) => (
              <span key={i} className="text-xs bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full">
                {r}
              </span>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default DashboardGreeting;
