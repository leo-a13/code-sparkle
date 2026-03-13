import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Plus, Smile, Calendar } from 'lucide-react';
import { getLS, setLS, LS_KEYS, MoodEntry } from '@/utils/localStorage';
import { toast } from 'sonner';

const MOODS = [
  { value: 'great', emoji: '😄', label: 'Great' },
  { value: 'good', emoji: '😊', label: 'Good' },
  { value: 'neutral', emoji: '😐', label: 'Neutral' },
  { value: 'bad', emoji: '😔', label: 'Bad' },
  { value: 'terrible', emoji: '😢', label: 'Terrible' },
];

const DailyJournalPage = () => {
  const [moodLog, setMoodLog] = useState<MoodEntry[]>(() => getLS(LS_KEYS.MOOD_LOG, []));
  const [selectedMood, setSelectedMood] = useState('');
  const [notes, setNotes] = useState('');

  const addEntry = () => {
    if (!selectedMood) { toast.error('Please select a mood'); return; }
    const entry: MoodEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      mood: selectedMood,
      notes,
    };
    const updated = [entry, ...moodLog];
    setMoodLog(updated);
    setLS(LS_KEYS.MOOD_LOG, updated);
    setSelectedMood('');
    setNotes('');
    toast.success('Journal entry added! 📝');
  };

  return (
    <PageLayout activePage="journal">
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
            <BookOpen size={28} /> Daily Journal
          </h1>
          <p className="text-muted-foreground">Track your mood and reflect on your day</p>
        </motion.div>

        <Card>
          <CardHeader><CardTitle className="text-lg">New Entry</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">How are you feeling?</p>
              <div className="flex gap-2 flex-wrap">
                {MOODS.map(mood => (
                  <Button
                    key={mood.value}
                    variant={selectedMood === mood.value ? "default" : "outline"}
                    onClick={() => setSelectedMood(mood.value)}
                    className="gap-1"
                  >
                    {mood.emoji} {mood.label}
                  </Button>
                ))}
              </div>
            </div>
            <Textarea
              placeholder="Write about your day, meals, feelings..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
            <Button onClick={addEntry} className="w-full gap-2" disabled={!selectedMood}>
              <Plus size={16} /> Add Entry
            </Button>
          </CardContent>
        </Card>

        {moodLog.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Past Entries</h2>
            {moodLog.map((entry, i) => {
              const moodInfo = MOODS.find(m => m.value === entry.mood);
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg">{moodInfo?.emoji} {moodInfo?.label}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(entry.date).toLocaleDateString()}
                        </span>
                      </div>
                      {entry.notes && <p className="text-sm text-muted-foreground">{entry.notes}</p>}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default DailyJournalPage;
