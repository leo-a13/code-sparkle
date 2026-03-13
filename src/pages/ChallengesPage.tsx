import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getLS, setLS, LS_KEYS, Challenge } from '@/utils/localStorage';
import { Award, Target, Flame, PlusCircle, CheckCircle2, Clock, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { playMilestoneSound } from '@/utils/sounds';

const SAMPLE_CHALLENGES: Omit<Challenge, 'startDate' | 'progress' | 'completed'>[] = [
  { id: 'c1', name: 'Log 7 Days Straight', types: ['tracking'], duration: 7, difficulty: 1, target: 7 },
  { id: 'c2', name: 'Drink 8 Cups of Water Daily', types: ['hydration'], duration: 7, difficulty: 2, target: 56 },
  { id: 'c3', name: 'Try 5 New Recipes', types: ['cooking'], duration: 14, difficulty: 2, target: 5 },
  { id: 'c4', name: 'Hit Calorie Goal 5 Days', types: ['nutrition'], duration: 7, difficulty: 3, target: 5 },
  { id: 'c5', name: 'Exercise 30 Min Daily', types: ['exercise'], duration: 7, difficulty: 3, target: 210 },
  { id: 'c6', name: '10 Day Streak', types: ['streak'], duration: 10, difficulty: 4, target: 10 },
];

const ChallengesPage = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(() => getLS(LS_KEYS.CHALLENGES, []));

  const joinChallenge = (challenge: typeof SAMPLE_CHALLENGES[0]) => {
    if (challenges.find(c => c.id === challenge.id)) {
      toast.error('Already joined this challenge!');
      return;
    }
    const newChallenge: Challenge = {
      ...challenge,
      startDate: new Date().toISOString(),
      progress: 0,
      completed: false,
    };
    const updated = [...challenges, newChallenge];
    setChallenges(updated);
    setLS(LS_KEYS.CHALLENGES, updated);
    playMilestoneSound('success');
    toast.success(`Joined "${challenge.name}"! 🎉`);
  };

  const incrementProgress = (challengeId: string) => {
    const updated = challenges.map(c => {
      if (c.id === challengeId && !c.completed) {
        const newProgress = c.progress + 1;
        const completed = newProgress >= c.target;
        if (completed) {
          playMilestoneSound('levelup');
          toast.success(`Challenge "${c.name}" completed! 🏆`);
        }
        return { ...c, progress: newProgress, completed };
      }
      return c;
    });
    setChallenges(updated);
    setLS(LS_KEYS.CHALLENGES, updated);
  };

  const activeChallenges = challenges.filter(c => !c.completed);
  const completedChallenges = challenges.filter(c => c.completed);
  const availableChallenges = SAMPLE_CHALLENGES.filter(sc => !challenges.find(c => c.id === sc.id));

  return (
    <PageLayout activePage="challenges">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
            <Award size={28} /> Challenges
          </h1>
          <p className="text-muted-foreground">Push yourself with health & nutrition challenges</p>
        </motion.div>

        {/* Active Challenges */}
        {activeChallenges.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Flame size={18} className="text-destructive" /> Active Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeChallenges.map(challenge => (
                <Card key={challenge.id} className="border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{challenge.name}</h3>
                      <Badge variant="secondary">{challenge.progress}/{challenge.target}</Badge>
                    </div>
                    <Progress value={(challenge.progress / challenge.target) * 100} className="h-2 mb-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock size={12} /> {challenge.duration} days
                      </span>
                      <Button size="sm" variant="outline" onClick={() => incrementProgress(challenge.id)} className="gap-1">
                        <PlusCircle size={14} /> Progress
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Completed */}
        {completedChallenges.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary" /> Completed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedChallenges.map(challenge => (
                <Card key={challenge.id} className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{challenge.name}</h3>
                      <p className="text-xs text-muted-foreground">Completed! 🏆</p>
                    </div>
                    <CheckCircle2 className="text-primary" size={24} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Available */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Zap size={18} className="text-secondary" /> Explore Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableChallenges.map(challenge => (
              <Card key={challenge.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{challenge.name}</h3>
                    <Badge variant="outline">
                      {'⭐'.repeat(challenge.difficulty)}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{challenge.duration} days • Target: {challenge.target}</span>
                    <Button size="sm" onClick={() => joinChallenge(challenge)} className="gap-1">
                      <Target size={14} /> Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ChallengesPage;
