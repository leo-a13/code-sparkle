import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, ChefHat, Heart, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import { MEAL_DATABASE, MealDBItem } from "@/data/mealDatabase";
import { getLS, setLS, LS_KEYS, MealPlan, createEmptyWeek } from "@/utils/localStorage";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = ['all', 'breakfast', 'lunch', 'dinner', 'snacks', 'drinks'] as const;

const MealPlanningPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mealPlans, setMealPlans] = useState<MealPlan[]>(() => getLS(LS_KEYS.MEAL_PLANS, []));
  const [newPlanName, setNewPlanName] = useState("");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setLS(LS_KEYS.MEAL_PLANS, mealPlans);
  }, [mealPlans]);

  const filteredMeals = MEAL_DATABASE.filter(meal => {
    const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || meal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreatePlan = () => {
    if (!newPlanName.trim()) return;
    const newPlan: MealPlan = {
      id: crypto.randomUUID(),
      name: newPlanName,
      description: '',
      created_at: new Date().toISOString(),
      days: createEmptyWeek(),
    };
    setMealPlans(prev => [...prev, newPlan]);
    setNewPlanName("");
    setCreateDialogOpen(false);
    toast.success(`"${newPlanName}" meal plan created!`);
  };

  const handleDeletePlan = (planId: string) => {
    setMealPlans(prev => prev.filter(p => p.id !== planId));
    toast.success("Meal plan deleted");
  };

  return (
    <PageLayout activePage="meal-planning">
      <div className="space-y-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">Meal Planning</h1>
              <p className="text-muted-foreground">Plan your meals for the week ahead</p>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="plans" className="space-y-4">
          <TabsList>
            <TabsTrigger value="plans" className="gap-2">
              <Calendar size={16} /> My Plans
            </TabsTrigger>
            <TabsTrigger value="search" className="gap-2">
              <Search size={16} /> Meal Search
            </TabsTrigger>
          </TabsList>

          {/* My Plans Tab */}
          <TabsContent value="plans" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Your Meal Plans</h3>
              <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="gap-2">
                    <Plus size={16} /> New Plan
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create Meal Plan</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Plan name (e.g., Week 1 Healthy Plan)"
                      value={newPlanName}
                      onChange={(e) => setNewPlanName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleCreatePlan()}
                    />
                    <Button onClick={handleCreatePlan} className="w-full" disabled={!newPlanName.trim()}>
                      Create Plan
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {mealPlans.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="p-8 text-center">
                  <ChefHat className="mx-auto text-muted-foreground mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No meal plans yet</h3>
                  <p className="text-muted-foreground mb-4">Create your first meal plan to start organizing your meals</p>
                  <Button onClick={() => setCreateDialogOpen(true)} className="gap-2">
                    <Plus size={16} /> Create Your First Plan
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mealPlans.map(plan => (
                  <motion.div key={plan.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{plan.name}</CardTitle>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => handleDeletePlan(plan.id)}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">
                          Created {new Date(plan.created_at).toLocaleDateString()}
                        </p>
                        <div className="flex gap-1 mt-2 flex-wrap">
                          {Object.keys(plan.days).slice(0, 3).map(day => (
                            <Badge key={day} variant="secondary" className="text-[10px]">{day.slice(0, 3)}</Badge>
                          ))}
                          <Badge variant="outline" className="text-[10px]">+4 more</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Meal Search Tab */}
          <TabsContent value="search" className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search meals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-2">
              {CATEGORIES.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className="capitalize shrink-0"
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMeals.map((meal, i) => (
                <motion.div
                  key={meal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <Badge className="absolute top-2 right-2 capitalize">{meal.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{meal.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{meal.nutrition.calories} kcal</span>
                        <span>P: {meal.nutrition.protein}g</span>
                        <span>C: {meal.nutrition.carbs}g</span>
                        <span>F: {meal.nutrition.fats}g</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default MealPlanningPage;
