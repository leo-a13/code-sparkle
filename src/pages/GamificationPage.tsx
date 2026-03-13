import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getLS, setLS, LS_KEYS, Reward } from '@/utils/localStorage';
import { Trophy, Star, Flame, Target, Gift, Sparkles, Medal } from 'lucide-react';
import { toast } from 'sonner';
import { playMilestoneSound } from '@/utils/sounds';

const AVAILABLE_REWARDS: Reward[] = [
  { id: 'r1', name: 'Meal Plan Template', description: 'Unlock a premium meal plan template', points: 100, claimed: false, icon: '📋' },
  { id: 'r2', name: 'Recipe Book', description: 'Access to exclusive healthy recipes', points: 250, claimed: false, icon: '📖' },
  { id: 'r3', name: 'Custom Badge', description: 'Custom profile badge to show off', points: 500, claimed: false, icon: '🏅' },
  { id: 'r4', name: 'Nutrition Report', description: 'Detailed weekly nutrition analysis', points: 150, claimed: false, icon: '📊' },
  { id: 'r5', name: 'Achievement Trophy', description: 'Special golden trophy for your profile', points: 1000, claimed: false, icon: '🏆' },
];

const GamificationPage = () => {
  const [points, setPoints] = useState(() => getLS<number>(LS_KEYS.POINTS, 0));
  const [level, setLevel] = useState(() => getLS<number>(LS_KEYS.LEVEL, 1));
  const [streak, setStreak] = useState(() => getLS<number>(LS_KEYS.STREAK, 0));
  const [rewards, setRewards] = useState<Reward[]>(() => getLS(LS_KEYS.REWARDS, AVAILABLE_REWARDS));

  const pointsForNextLevel = level * 200;
  const levelProgress = (points % pointsForNextLevel) / pointsForNextLevel * 100;

  const claimReward = (rewardId: string) => {
    const reward = rewards.find(r => r.id === rewardId);
    if (!reward || reward.claimed) return;
    if (points < reward.points) {
      toast.error('Not enough points!');
      return;
    }
    const newPoints = points - reward.points;
    const updated = rewards.map(r => r.id === rewardId ? { ...r, claimed: true } : r);
    setPoints(newPoints);
    setRewards(updated);
    setLS(LS_KEYS.POINTS, newPoints);
    setLS(LS_KEYS.REWARDS, updated);
    playMilestoneSound('reward');
    toast.success(`Claimed "${reward.name}"! 🎉`);
  };

  return (
    <PageLayout activePage="gamification">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
            <Trophy size={28} /> Rewards & Gamification
          </h1>
          <p className="text-muted-foreground">Earn points and unlock rewards for healthy habits</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-6 text-center">
              <Star className="mx-auto text-secondary mb-2" size={32} />
              <p className="text-3xl font-bold text-foreground">{points}</p>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
            <CardContent className="p-6 text-center">
              <Medal className="mx-auto text-primary mb-2" size={32} />
              <p className="text-3xl font-bold text-foreground">Level {level}</p>
              <Progress value={levelProgress} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-1">{Math.round(levelProgress)}% to next level</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5">
            <CardContent className="p-6 text-center">
              <Flame className="mx-auto text-destructive mb-2" size={32} />
              <p className="text-3xl font-bold text-foreground">{streak}</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>
        </div>

        {/* Rewards */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Gift size={18} /> Available Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map(reward => (
              <Card key={reward.id} className={reward.claimed ? 'opacity-60' : 'hover:shadow-md transition-shadow'}>
                <CardContent className="p-4 flex items-center gap-4">
                  <span className="text-3xl">{reward.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{reward.name}</h3>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                    <Badge variant="secondary" className="mt-1">{reward.points} pts</Badge>
                  </div>
                  <Button
                    size="sm"
                    disabled={reward.claimed || points < reward.points}
                    onClick={() => claimReward(reward.id)}
                    variant={reward.claimed ? "outline" : "default"}
                  >
                    {reward.claimed ? 'Claimed' : 'Claim'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GamificationPage;
