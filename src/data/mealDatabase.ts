export interface MealDBItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'drinks';
  recipe: {
    ingredients: string[];
    method: string[];
  };
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
    sugar: number;
    sodium: number;
  };
}

export const MEAL_DATABASE: MealDBItem[] = [
  {
    id: 'b1', name: 'Classic Oatmeal Bowl', description: 'Warm oats topped with fresh berries and honey',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['1 cup rolled oats', '2 cups water or milk', '1/2 cup mixed berries', '1 tbsp honey', '1 tbsp chia seeds', 'Pinch of cinnamon'],
      method: ['Bring water/milk to a boil.', 'Add oats, reduce heat, cook 5 min.', 'Top with berries, honey, chia, cinnamon.']
    },
    nutrition: { calories: 320, protein: 10, carbs: 55, fats: 6, fiber: 8, sugar: 15, sodium: 10 }
  },
  {
    id: 'b2', name: 'Avocado Toast', description: 'Smashed avocado on sourdough with poached egg',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['2 slices sourdough', '1 ripe avocado', '2 eggs', '1 tbsp lemon juice', 'Salt & pepper', 'Red pepper flakes'],
      method: ['Toast sourdough.', 'Mash avocado with lemon juice.', 'Poach eggs 3-4 min.', 'Spread avocado, top with egg.']
    },
    nutrition: { calories: 420, protein: 18, carbs: 35, fats: 24, fiber: 10, sugar: 3, sodium: 380 }
  },
  {
    id: 'b3', name: 'Greek Yogurt Parfait', description: 'Layered yogurt with granola and fresh fruit',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['1 cup Greek yogurt', '1/2 cup granola', '1/2 cup mixed berries', '1 tbsp honey', '1 tbsp sliced almonds'],
      method: ['Layer yogurt, granola, berries.', 'Repeat.', 'Drizzle honey, top with almonds.']
    },
    nutrition: { calories: 350, protein: 20, carbs: 45, fats: 10, fiber: 4, sugar: 25, sodium: 80 }
  },
  {
    id: 'l1', name: 'Grilled Chicken Caesar Salad', description: 'Crisp romaine with grilled chicken and parmesan',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['200g grilled chicken', '2 cups romaine', '1/4 cup parmesan', '1/2 cup croutons', '3 tbsp Caesar dressing'],
      method: ['Grill chicken, slice.', 'Chop romaine.', 'Top with chicken, parmesan, croutons.', 'Drizzle dressing.']
    },
    nutrition: { calories: 450, protein: 42, carbs: 18, fats: 22, fiber: 3, sugar: 4, sodium: 680 }
  },
  {
    id: 'l2', name: 'Quinoa Buddha Bowl', description: 'Nutrient-rich bowl with roasted vegetables and tahini',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 cup quinoa', '1/2 cup roasted sweet potato', '1/2 cup chickpeas', '1 cup mixed greens', '1/4 avocado', '2 tbsp tahini'],
      method: ['Cook quinoa.', 'Roast sweet potato at 200°C for 25 min.', 'Arrange all in bowl.', 'Drizzle tahini.']
    },
    nutrition: { calories: 520, protein: 18, carbs: 65, fats: 20, fiber: 12, sugar: 8, sodium: 320 }
  },
  {
    id: 'd1', name: 'Grilled Salmon with Vegetables', description: 'Herb-crusted salmon fillet with seasonal vegetables',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['200g salmon fillet', '1 cup broccoli', '1 cup asparagus', '2 tbsp olive oil', '1 lemon', 'Dill, salt & pepper'],
      method: ['Preheat oven to 200°C.', 'Season salmon.', 'Toss vegetables in oil.', 'Bake 15-18 min.']
    },
    nutrition: { calories: 480, protein: 42, carbs: 12, fats: 28, fiber: 5, sugar: 3, sodium: 340 }
  },
  {
    id: 'd2', name: 'Chicken Stir-Fry', description: 'Colorful stir-fry with tender chicken and crisp vegetables',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['200g chicken breast', '1 bell pepper', '1 cup broccoli', '1 carrot', '3 tbsp soy sauce', '1 tbsp sesame oil'],
      method: ['Heat sesame oil in wok.', 'Cook chicken.', 'Stir-fry vegetables 3-4 min.', 'Combine, add soy sauce.']
    },
    nutrition: { calories: 550, protein: 38, carbs: 55, fats: 16, fiber: 6, sugar: 8, sodium: 920 }
  },
  {
    id: 's1', name: 'Mixed Nuts & Dried Fruit', description: 'A healthy mix of almonds, walnuts, and dried cranberries',
    image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['1/4 cup almonds', '1/4 cup walnuts', '2 tbsp dried cranberries', '1 tbsp pumpkin seeds'],
      method: ['Combine all in a bowl.', 'Store in airtight container.']
    },
    nutrition: { calories: 280, protein: 8, carbs: 18, fats: 22, fiber: 4, sugar: 10, sodium: 50 }
  },
  {
    id: 'dr1', name: 'Green Detox Smoothie', description: 'Refreshing blend of spinach, banana, and ginger',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['1 cup spinach', '1 banana', '1/2 cup mango', '1 cup almond milk', '1 tsp ginger', '1 tbsp chia seeds'],
      method: ['Add all to blender.', 'Blend until smooth.', 'Serve immediately.']
    },
    nutrition: { calories: 220, protein: 6, carbs: 42, fats: 5, fiber: 7, sugar: 24, sodium: 160 }
  },
  {
    id: 'dr2', name: 'Berry Protein Shake', description: 'High-protein shake with mixed berries and whey',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['1 scoop whey protein', '1 cup mixed berries', '1 cup milk', '1 tbsp almond butter', '1/2 banana'],
      method: ['Add all to blender.', 'Blend until creamy.']
    },
    nutrition: { calories: 350, protein: 30, carbs: 35, fats: 10, fiber: 5, sugar: 20, sodium: 200 }
  },
];
