import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart as BarChartIcon, Droplet, Moon, Flame, Scale, Dumbbell, Target,
  PlusCircle, TrendingUp
} from 'lucide-react';
import { getLS, setLS, LS_KEYS, CalorieEntry, SleepEntry, ExerciseEntry, HydrationEntry, BMIEntry } from '@/utils/localStorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';
import { useNutrition } from '@/contexts/NutritionContext';

const ProgressPage = () => {
  const { nutritionGoal } = useNutrition();
  const [calorieLog, setCalorieLog] = useState<CalorieEntry[]>(() => getLS(LS_KEYS.CALORIE_LOG, []));
  const [sleepLog, setSleepLog] = useState<SleepEntry[]>(() => getLS(LS_KEYS.SLEEP_LOG, []));
  const [exerciseLog, setExerciseLog] = useState<ExerciseEntry[]>(() => getLS(LS_KEYS.EXERCISE_LOG, []));
  const [hydrationLog, setHydrationLog] = useState<HydrationEntry[]>(() => getLS(LS_KEYS.HYDRATION_LOG, []));

  // New entry states
  const [newCalories, setNewCalories] = useState('');
  const [newMeal, setNewMeal] = useState('');
  const [newSleepHours, setNewSleepHours] = useState('');
  const [newExerciseType, setNewExerciseType] = useState('');
  const [newExerciseDuration, setNewExerciseDuration] = useState('');
  const [newHydration, setNewHydration] = useState('');

  const addCalorieEntry = () => {
    if (!newCalories) return;
    const entry: CalorieEntry = {
      id: crypto.randomUUID(), date: new Date().toISOString(),
      calories: parseInt(newCalories), meal: newMeal || 'Meal', notes: ''
    };
    const updated = [entry, ...calorieLog];
    setCalorieLog(updated);
    setLS(LS_KEYS.CALORIE_LOG, updated);
    setNewCalories(''); setNewMeal('');
    toast.success('Calories logged! ✅');
  };

  const addSleepEntry = () => {
    if (!newSleepHours) return;
    const entry: SleepEntry = {
      id: crypto.randomUUID(), date: new Date().toISOString(),
      hours: parseFloat(newSleepHours), quality: 3
    };
    const updated = [entry, ...sleepLog];
    setSleepLog(updated);
    setLS(LS_KEYS.SLEEP_LOG, updated);
    setNewSleepHours('');
    toast.success('Sleep logged! 😴');
  };

  const addExerciseEntry = () => {
    if (!newExerciseType || !newExerciseDuration) return;
    const entry: ExerciseEntry = {
      id: crypto.randomUUID(), date: new Date().toISOString(),
      type: newExerciseType, duration: parseInt(newExerciseDuration), calories_burned: parseInt(newExerciseDuration) * 8
    };
    const updated = [entry, ...exerciseLog];
    setExerciseLog(updated);
    setLS(LS_KEYS.EXERCISE_LOG, updated);
    setNewExerciseType(''); setNewExerciseDuration('');
    toast.success('Exercise logged! 💪');
  };

  const addHydration = () => {
    const today = new Date().toDateString();
    const todayEntry = hydrationLog.find(e => new Date(e.date).toDateString() === today);
    let updated: HydrationEntry[];
    if (todayEntry) {
      updated = hydrationLog.map(e =>
        e.id === todayEntry.id ? { ...e, cups: e.cups + 1 } : e
      );
    } else {
      updated = [{ id: crypto.randomUUID(), date: new Date().toISOString(), cups: 1 }, ...hydrationLog];
    }
    setHydrationLog(updated);
    setLS(LS_KEYS.HYDRATION_LOG, updated);
    toast.success('💧 +1 cup of water!');
  };

  const today = new Date().toDateString();
  const todayCalories = calorieLog
    .filter(e => new Date(e.date).toDateString() === today)
    .reduce((sum, e) => sum + e.calories, 0);
  const todayCups = hydrationLog.find(e => new Date(e.date).toDateString() === today)?.cups || 0;

  const last7DaysCalories = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    const dayStr = date.toDateString();
    return {
      day: date.toLocaleDateString('en', { weekday: 'short' }),
      calories: calorieLog.filter(e => new Date(e.date).toDateString() === dayStr).reduce((s, e) => s + e.calories, 0),
    };
  });

  return (
    <PageLayout activePage="progress">
      <div className="space-y-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold text-foreground">Progress Tracker</h1>
          <p className="text-muted-foreground">Track your health metrics and stay on course</p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Flame className="mx-auto text-primary mb-2" size={24} />
              <p className="text-2xl font-bold text-foreground">{todayCalories}</p>
              <p className="text-xs text-muted-foreground">Calories Today</p>
              <Progress value={(todayCalories / nutritionGoal.dailyCalories) * 100} className="mt-2 h-1.5" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Droplet className="mx-auto text-primary mb-2" size={24} />
              <p className="text-2xl font-bold text-foreground">{todayCups}</p>
              <p className="text-xs text-muted-foreground">Cups of Water</p>
              <Progress value={(todayCups / 8) * 100} className="mt-2 h-1.5" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Moon className="mx-auto text-accent mb-2" size={24} />
              <p className="text-2xl font-bold text-foreground">{sleepLog[0]?.hours || '-'}</p>
              <p className="text-xs text-muted-foreground">Last Sleep (hrs)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Dumbbell className="mx-auto text-secondary mb-2" size={24} />
              <p className="text-2xl font-bold text-foreground">{exerciseLog.length}</p>
              <p className="text-xs text-muted-foreground">Workouts Logged</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="calories" className="space-y-4">
          <TabsList className="flex-wrap">
            <TabsTrigger value="calories" className="gap-1"><Flame size={14} /> Calories</TabsTrigger>
            <TabsTrigger value="hydration" className="gap-1"><Droplet size={14} /> Water</TabsTrigger>
            <TabsTrigger value="sleep" className="gap-1"><Moon size={14} /> Sleep</TabsTrigger>
            <TabsTrigger value="exercise" className="gap-1"><Dumbbell size={14} /> Exercise</TabsTrigger>
          </TabsList>

          {/* Calories Tab */}
          <TabsContent value="calories" className="space-y-4">
            <Card>
              <CardHeader><CardTitle className="text-lg">Log Calories</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Input placeholder="Meal name" value={newMeal} onChange={e => setNewMeal(e.target.value)} className="flex-1 min-w-[120px]" />
                  <Input placeholder="Calories" type="number" value={newCalories} onChange={e => setNewCalories(e.target.value)} className="w-28" />
                  <Button onClick={addCalorieEntry} disabled={!newCalories}><PlusCircle size={16} /></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Weekly Overview</CardTitle></CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={last7DaysCalories}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                      <Bar dataKey="calories" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {calorieLog.length > 0 && (
              <Card>
                <CardHeader><CardTitle className="text-lg">Recent Entries</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {calorieLog.slice(0, 10).map(entry => (
                      <div key={entry.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <div>
                          <p className="text-sm font-medium text-foreground">{entry.meal}</p>
                          <p className="text-xs text-muted-foreground">{new Date(entry.date).toLocaleDateString()}</p>
                        </div>
                        <Badge variant="secondary">{entry.calories} kcal</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Hydration Tab */}
          <TabsContent value="hydration">
            <Card>
              <CardContent className="p-8 text-center">
                <Droplet className="mx-auto text-primary mb-4" size={48} />
                <p className="text-4xl font-bold text-foreground mb-2">{todayCups} / 8</p>
                <p className="text-muted-foreground mb-4">cups of water today</p>
                <Progress value={(todayCups / 8) * 100} className="h-3 mb-4 max-w-xs mx-auto" />
                <Button onClick={addHydration} size="lg" className="gap-2">
                  <Droplet size={18} /> Add Cup
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sleep Tab */}
          <TabsContent value="sleep">
            <Card>
              <CardHeader><CardTitle className="text-lg">Log Sleep</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-2 items-end">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Hours slept</p>
                    <Input placeholder="Hours" type="number" step="0.5" value={newSleepHours} onChange={e => setNewSleepHours(e.target.value)} />
                  </div>
                  <Button onClick={addSleepEntry} disabled={!newSleepHours}><PlusCircle size={16} /></Button>
                </div>
                {sleepLog.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {sleepLog.slice(0, 7).map(entry => (
                      <div key={entry.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <p className="text-sm text-foreground">{new Date(entry.date).toLocaleDateString()}</p>
                        <Badge variant="secondary">{entry.hours} hrs</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Exercise Tab */}
          <TabsContent value="exercise">
            <Card>
              <CardHeader><CardTitle className="text-lg">Log Exercise</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Input placeholder="Exercise type" value={newExerciseType} onChange={e => setNewExerciseType(e.target.value)} className="flex-1 min-w-[120px]" />
                  <Input placeholder="Duration (min)" type="number" value={newExerciseDuration} onChange={e => setNewExerciseDuration(e.target.value)} className="w-32" />
                  <Button onClick={addExerciseEntry} disabled={!newExerciseType || !newExerciseDuration}><PlusCircle size={16} /></Button>
                </div>
                {exerciseLog.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {exerciseLog.slice(0, 7).map(entry => (
                      <div key={entry.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <div>
                          <p className="text-sm font-medium text-foreground">{entry.type}</p>
                          <p className="text-xs text-muted-foreground">{new Date(entry.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{entry.duration} min</Badge>
                          <p className="text-xs text-muted-foreground mt-1">~{entry.calories_burned} kcal</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default ProgressPage;
