import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Apple, Droplet, Moon, Dumbbell, Heart, Brain } from 'lucide-react';

const TIPS = [
  { icon: Apple, title: 'Eat the Rainbow', desc: 'Include colorful fruits and vegetables in every meal for diverse nutrients.', color: 'text-primary' },
  { icon: Droplet, title: 'Stay Hydrated', desc: 'Drink at least 8 cups of water daily. Start your morning with a glass of water.', color: 'text-primary' },
  { icon: Moon, title: 'Quality Sleep', desc: 'Aim for 7-9 hours of sleep. Avoid screens 30 minutes before bed.', color: 'text-accent' },
  { icon: Dumbbell, title: 'Move Daily', desc: 'Even 30 minutes of moderate exercise can improve your mood and energy.', color: 'text-secondary' },
  { icon: Heart, title: 'Mindful Eating', desc: 'Eat slowly, savor your food, and listen to your body\'s hunger cues.', color: 'text-destructive' },
  { icon: Brain, title: 'Mental Wellness', desc: 'Practice gratitude, meditation, or journaling to support mental health.', color: 'text-accent' },
];

const HealthTipsPage = () => (
  <PageLayout activePage="health-tips">
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2"><Lightbulb size={28} /> Health Tips</h1>
        <p className="text-muted-foreground">Evidence-based tips for a healthier lifestyle</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TIPS.map((tip, i) => (
          <motion.div key={tip.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <tip.icon className={tip.color} size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default HealthTipsPage;
