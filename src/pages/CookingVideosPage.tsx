import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Play, Clock, ChefHat } from 'lucide-react';

const VIDEOS = [
  { id: '1', title: 'Quick Healthy Breakfast Ideas', duration: '8:30', thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format' },
  { id: '2', title: 'Meal Prep Sunday Guide', duration: '15:00', thumbnail: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format' },
  { id: '3', title: 'Easy Dinner Recipes Under 30 Min', duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format' },
  { id: '4', title: 'Smoothie Bowl Masterclass', duration: '6:20', thumbnail: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&auto=format' },
  { id: '5', title: 'Healthy Snack Ideas for Work', duration: '9:15', thumbnail: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&auto=format' },
  { id: '6', title: 'Budget-Friendly Healthy Cooking', duration: '18:00', thumbnail: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&auto=format' },
];

const CookingVideosPage = () => (
  <PageLayout activePage="cooking-videos">
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2"><Video size={28} /> Cooking Videos</h1>
        <p className="text-muted-foreground">Learn healthy cooking techniques and recipes</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {VIDEOS.map((video, i) => (
          <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-video relative overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary rounded-full p-3"><Play className="text-primary-foreground" size={24} /></div>
                </div>
                <span className="absolute bottom-2 right-2 bg-foreground/80 text-background text-xs px-2 py-0.5 rounded flex items-center gap-1"><Clock size={10} /> {video.duration}</span>
              </div>
              <CardContent className="p-3"><h3 className="text-sm font-semibold text-foreground">{video.title}</h3></CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default CookingVideosPage;
