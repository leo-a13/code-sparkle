import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MEAL_DATABASE } from '@/data/mealDatabase';
import { Heart } from 'lucide-react';
import { getLS, setLS, LS_KEYS, FavoriteMeal } from '@/utils/localStorage';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useState } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<FavoriteMeal[]>(() => getLS(LS_KEYS.FAVORITES, []));

  const toggleFavorite = (meal: typeof MEAL_DATABASE[0]) => {
    const exists = favorites.find(f => f.id === meal.id);
    let updated: FavoriteMeal[];
    if (exists) {
      updated = favorites.filter(f => f.id !== meal.id);
      toast.success(`Removed "${meal.name}" from favorites`);
    } else {
      updated = [...favorites, {
        id: meal.id, name: meal.name, calories: meal.nutrition.calories,
        protein: meal.nutrition.protein, carbs: meal.nutrition.carbs,
        fats: meal.nutrition.fats, imageUrl: meal.image, category: meal.category,
      }];
      toast.success(`Added "${meal.name}" to favorites! ❤️`);
    }
    setFavorites(updated);
    setLS(LS_KEYS.FAVORITES, updated);
  };

  const isFavorite = (id: string) => favorites.some(f => f.id === id);

  return (
    <PageLayout activePage="favorites">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
            <Heart size={28} /> Favorites
          </h1>
          <p className="text-muted-foreground">Your saved meals and recipes</p>
        </motion.div>

        {favorites.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Heart className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-lg font-semibold text-foreground">No favorites yet</h3>
              <p className="text-muted-foreground">Browse meals and tap the heart to save them here</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((meal, i) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="overflow-hidden">
                  {meal.imageUrl && (
                    <div className="aspect-video overflow-hidden">
                      <img src={meal.imageUrl} alt={meal.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{meal.name}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          const dbMeal = MEAL_DATABASE.find(m => m.id === meal.id);
                          if (dbMeal) toggleFavorite(dbMeal);
                        }}
                      >
                        <Heart className="text-destructive fill-destructive" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary">{meal.calories} kcal</Badge>
                      <span>P: {meal.protein}g</span>
                      <span>C: {meal.carbs}g</span>
                      <span>F: {meal.fats}g</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Browse all meals for adding favorites */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Browse Meals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MEAL_DATABASE.map(meal => (
              <Card key={meal.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden relative">
                  <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" loading="lazy" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm h-8 w-8"
                    onClick={() => toggleFavorite(meal)}
                  >
                    <Heart size={16} className={isFavorite(meal.id) ? 'text-destructive fill-destructive' : 'text-foreground'} />
                  </Button>
                </div>
                <CardContent className="p-3">
                  <h3 className="text-sm font-semibold text-foreground">{meal.name}</h3>
                  <p className="text-xs text-muted-foreground">{meal.nutrition.calories} kcal</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FavoritesPage;
