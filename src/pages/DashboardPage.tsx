import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import DashboardGreeting from '@/components/DashboardGreeting';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScreenSize } from '@/utils/mobile';
import { getLS, LS_KEYS, CalorieEntry, MealPlan } from '@/utils/localStorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { LayoutDashboard, Apple, Calendar, Smile, Award, TrendingUp, Droplet } from 'lucide-react';
import { useNutrition } from '@/contexts/NutritionContext';
import { Progress } from '@/components/ui/progress';

const MACRO_COLORS = ['hsl(142, 72%, 29%)', 'hsl(36, 100%, 65%)', 'hsl(270, 76%, 53%)', 'hsl(0, 84%, 60%)'];

const DashboardPage = () => {
  const { language } = useLanguage();
  const { isMobile } = useScreenSize();
  const { nutritionGoal } = useNutrition();
  const calorieLog = getLS<CalorieEntry[]>(LS_KEYS.CALORIE_LOG, []);
  const mealPlans = getLS<MealPlan[]>(LS_KEYS.MEAL_PLANS, []);
  
  const today = new Date().toDateString();
  const todayCalories = calorieLog
    .filter(e => new Date(e.date).toDateString() === today)
    .reduce((sum, e) => sum + e.calories, 0);
  
  const calorieProgress = Math.min((todayCalories / nutritionGoal.dailyCalories) * 100, 100);

  const macroData = [
    { name: 'Protein', value: nutritionGoal.proteinPercentage },
    { name: 'Carbs', value: nutritionGoal.carbsPercentage },
    { name: 'Fats', value: nutritionGoal.fatsPercentage },
  ];

  // Generate last 7 days of calorie data
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    const dayStr = date.toDateString();
    const dayCalories = calorieLog
      .filter(e => new Date(e.date).toDateString() === dayStr)
      .reduce((sum, e) => sum + e.calories, 0);
    return {
      day: date.toLocaleDateString('en', { weekday: 'short' }),
      calories: dayCalories,
      goal: nutritionGoal.dailyCalories,
    };
  });

  return (
    <PageLayout activePage="dashboard">
      <div className="space-y-6 max-w-6xl mx-auto">
        <DashboardGreeting />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Apple className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today's Calories</p>
                  <p className="text-lg font-bold text-foreground">{todayCalories}</p>
                </div>
              </div>
              <Progress value={calorieProgress} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                {todayCalories} / {nutritionGoal.dailyCalories} kcal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Calendar className="text-secondary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Meal Plans</p>
                  <p className="text-lg font-bold text-foreground">{mealPlans.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <TrendingUp className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Entries</p>
                  <p className="text-lg font-bold text-foreground">{calorieLog.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Droplet className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Daily Goal</p>
                  <p className="text-lg font-bold text-foreground">{nutritionGoal.dailyCalories}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calorie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weekly Calories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={last7Days}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="calories" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Macro Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Macro Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={macroData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {macroData.map((_, i) => (
                        <Cell key={i} fill={MACRO_COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-2">
                {macroData.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MACRO_COLORS[i] }} />
                    <span className="text-xs text-muted-foreground">{item.name} {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
