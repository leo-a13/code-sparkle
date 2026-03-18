export interface MealDBItem {
  // item
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
  // BREAKFAST
  {
    id: 'b1', name: 'Achu & Yellow Soup', description: 'Pounded cocoyam served with vibrant yellow soup made from palm oil, beef broth, and limestone solution, accompanied by garden eggs and huckleberry leaves.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['Achu: 1 kg Achu cocoyam (Taro)', 'water', 'Soup: 1 cup heated palm oil', '2 cups beef broth', '1 1/2 tbsp Achu spice mix', '1/3 cup limestone solution (kangwa mix)', 'salt', 'bouillon', 'Sides: Boiled garden eggs', 'Njama Njama (huckleberry leaves)'],
      method: ['Wash cocoyams thoroughly.', 'Peel before or after boiling (traditional method is peeling after).', 'Boil until very tender (2–3 hours).', 'Pound cocoyams in a mortar with a pestle while they are still hot until completely smooth, elastic, and dense.', 'Shape into smooth balls.', 'For Yellow Soup: Boil assorted meats to extract rich stock.', 'Heat palm oil just until slightly warm (do not bleach).', 'Dissolve limestone solution in boiling water.', 'In a blender, combine stock, heated oil, limestone solution, and Achu spice mix.', 'Blend briefly until it turns vibrantly yellow and emulsified.', 'Stir in salt and bouillon cubes to taste.', 'Serve Achu fufu with a side of yellow soup, assorted meats, and garden eggs.']
    },
    nutrition: { calories: 720, protein: 32, carbs: 105, fats: 28, fiber: 8, sugar: 4, sodium: 850 }
  },
  {
    id: 'b2', name: 'Millet Pap (Breakfast Porridge)', description: 'Nutritious fermented millet porridge served hot with evaporated milk and sugar.',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['500g Millet paste', 'water', 'evaporated milk (Peak milk)', 'granulated sugar'],
      method: ['Mix millet paste with cold water to thin slightly.', 'Pour this mixture into a pot of vigorously boiling water, stirring constantly and rapidly to prevent lumps.', 'Cook until the pap is thick and translucent (about 5 minutes).', 'Serve hot, stirred with evaporated milk and sugar.']
    },
    nutrition: { calories: 180, protein: 5, carbs: 38, fats: 2, fiber: 4, sugar: 0, sodium: 8 }
  },
  {
    id: 'b3', name: 'Garri Soaked with Sugar', description: 'Quick cassava cereal with roasted groundnuts - a staple breakfast across Cameroon.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['1 cup Garri (cassava)', '1/2 cup roasted groundnuts', '1/2 cup granulated sugar'],
      method: ['Mix garri with cold water in a bowl.', 'Drain excess water.', 'Stir in sugar.', 'Serve soft garri with a side of groundnuts.']
    },
    nutrition: { calories: 290, protein: 4, carbs: 62, fats: 5, fiber: 3, sugar: 25, sodium: 15 }
  },
  {
    id: 'b4', name: 'Traditional Omelette', description: 'Fluffy Cameroonian-style omelette with tomatoes, onions, and spices.',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['6 eggs', '3 tomatoes', '1 onion', 'garlic', 'pebe (African nutmeg)', 'bouillon cube', 'salt'],
      method: ['Dice tomatoes and onions finely.', 'Mince garlic.', 'Crack eggs into a bowl and whisk until frothy.', 'Add diced vegetables, minced garlic, pebe, crumbled bouillon cube, and salt to the eggs.', 'Mix well to combine.', 'Heat a pan with oil over medium heat.', 'Pour egg mixture into the pan.', 'Cook until edges are set, then fold and cook through.', 'Serve hot.']
    },
    nutrition: { calories: 280, protein: 18, carbs: 8, fats: 20, fiber: 2, sugar: 4, sodium: 480 }
  },
  {
    id: 'b5', name: 'Boiled Yam & Egg Sauce', description: 'Tender boiled yam served with rich tomato and egg sauce.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['Yam: 1 kg Yam (Puna)', 'water', 'Sauce: 6 eggs', '3 tomatoes', '1 onion', 'garlic', 'pebe', 'bouillon cube', 'salt'],
      method: ['Peel yam and cut into chunks.', 'Boil yam chunks until tender.', 'For sauce: Dice tomatoes and onions, mince garlic.', 'Heat oil in a pan.', 'Sauté onions and garlic until fragrant.', 'Add tomatoes and cook until soft.', 'Crack eggs into the pan and scramble with vegetables.', 'Add crumbled bouillon cube, pebe, and salt to taste.', 'Serve boiled yam with egg sauce on top.']
    },
    nutrition: { calories: 550, protein: 16, carbs: 78, fats: 22, fiber: 7, sugar: 4, sodium: 490 }
  },
  {
    id: 'b6', name: 'Masa with Pepper Sauce', description: 'Northern-style fermented rice cakes served with spicy pepper sauce.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['Masa: 1 kg Cornflour', 'Sauce: 1 bulb garlic', 'thumb-sized ginger', 'pebe', '2 crayfish seasoning cubes', '1 cup vegetable oil', 'salt'],
      method: ['For Masa: Prepare rice batter and ferment overnight.', 'Add sugar and mix well.', 'Heat special masa pan with indentations.', 'Pour batter into each indentation.', 'Cook until golden brown, flip and cook other side.', 'For Sauce: Blend garlic, ginger, and pebe.', 'Heat oil in a pan.', 'Add blended mixture and fry until fragrant.', 'Crumble in crayfish cubes and add salt.', 'Simmer for 5 minutes.', 'Serve masa with pepper sauce.']
    },
    nutrition: { calories: 350, protein: 6, carbs: 68, fats: 5, fiber: 2, sugar: 18, sodium: 410 }
  },
  {
    id: 'b7', name: 'Koki Corn (Breakfast Wrap)', description: 'Steamed fresh corn pudding wrapped in banana leaves - a nutritious morning meal.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['Corn: 1 kg fresh corn', 'palm oil', '2 cups spinach', 'thumb-sized ginger', 'crayfish', 'salt', 'Fufu: 1 kg Rice flour'],
      method: ['Grate fresh corn kernels and ginger into a coarse paste.', 'Whisk the paste rigorously to incorporate air (this makes it fluffy).', 'Add palm oil, crayfish, salt, and finely chopped spinach.', 'Mix well to form a thick, yellow batter.', 'Place small portions of the batter into softened banana leaves.', 'Fold securely to create flat, sealed packages.', 'In a pot, lay down several banana leaves.', 'Arrange the koki packages on top.', 'Add water to cover.', 'Cover the pot and steam for 1.5–2 hours until firm.', 'Prepare rice fufu separately by stirring rice flour into boiling water until thick.', 'Serve koki corn with rice fufu.']
    },
    nutrition: { calories: 350, protein: 9, carbs: 52, fats: 12, fiber: 7, sugar: 6, sodium: 420 }
  },
  {
    id: 'b8', name: 'Puff Puff & Beans', description: 'Deep-fried sweet dough balls served with stewed brown beans - a classic Cameroonian breakfast.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['Puff Puff: 500g All-purpose flour', '150g sugar', '2 tsp active dry yeast', '1 tsp salt', '500ml lukewarm water', 'Vegetable oil (for frying)', 'Beans: 1 kg brown beans (kidney beans)', '1 large onion (chopped)', '3 tomatoes (diced)', '1/4 cup palm oil', '2 crayfish seasoning cubes', 'salt to taste'],
      method: ['For Puff Puff: Mix dry yeast with sugar and warm water; let sit for 10 mins until frothy.', 'Whisk flour and salt in a large bowl.', 'Add yeast mixture and mix until a smooth, thick batter forms.', 'Cover and let rise in a warm place for 1–2 hours.', 'Heat oil in a deep pot.', 'Scoop batter by hand or spoon into balls and deep-fry until golden brown.', 'For Beans: Soak beans overnight.', 'Drain and boil until tender.', 'In a separate pot, heat palm oil.', 'Sauté onions, then add tomatoes.', 'Cook until soft.', 'Add crayfish cubes, salt, and the cooked beans with some of their broth.', 'Simmer for 15 minutes.', 'Serve puff puff with beans.']
    },
    nutrition: { calories: 550, protein: 18, carbs: 85, fats: 22, fiber: 12, sugar: 14, sodium: 350 }
  },
  {
    id: 'b9', name: 'White Corn Pap (Akamu)', description: 'Smooth fermented white corn porridge, traditionally served as breakfast or for weaning babies.',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['500g White corn paste (fermented)', 'water', 'evaporated milk (Peak milk)', 'granulated sugar'],
      method: ['Mix white corn paste with cold water to thin slightly.', 'Pour this mixture into a pot of vigorously boiling water, stirring constantly and rapidly to prevent lumps.', 'Cook until the pap is thick and translucent (about 5 minutes).', 'Serve hot, stirred with evaporated milk and sugar.']
    },
    nutrition: { calories: 150, protein: 3, carbs: 32, fats: 1, fiber: 2, sugar: 1, sodium: 5 }
  },
  {
    id: 'b10', name: 'Fried Bread & Stew', description: 'Golden fried bread served with savory tomato and egg stew.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&auto=format',
    category: 'breakfast',
    recipe: {
      ingredients: ['Bread: 1 kg All-purpose flour', 'water', 'Stew: 6 eggs', '3 tomatoes', '1 onion', 'garlic', 'pebe', 'bouillon cube', 'salt'],
      method: ['For Bread: Prepare standard dough with flour, water, and salt.', 'Knead until smooth.', 'Divide into small portions and roll out.', 'Fold and fry wraps in hot oil until golden brown on both sides.', 'For Stew: Dice tomatoes and onions, mince garlic.', 'Heat oil in a pan.', 'Sauté onions and garlic.', 'Add tomatoes and cook until soft.', 'Crack eggs into the pan and scramble with vegetables.', 'Add crumbled bouillon cube, pebe, and salt.', 'Serve fried bread with egg stew.']
    },
    nutrition: { calories: 460, protein: 16, carbs: 50, fats: 22, fiber: 2, sugar: 5, sodium: 540 }
  },
  // LUNCH
  {
    id: 'l1', name: 'Ndole (Littoral Peanut Stew)', description: 'Cameroon\'s national dish - bitter leaves cooked in rich peanut sauce with beef, shrimp, and smoked fish.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 kg bitter leaves (fresh or dried, washed)', '600g raw skinless peanuts (groundnuts)', '500g boiled beef chunks', '300g fresh shrimp (peeled)', '1/4 lb smoked fish (deboned)', '2 large onions (1 chopped, 1 sliced)', '1 small ginger root', '4 cloves garlic', '1 cup vegetable oil', '2 crayfish cubes', 'salt', 'white pepper'],
      method: ['Boil peanuts until soft, then blend them with ginger, garlic, and chopped onion into a fine paste.', 'In a large pot, heat oil.', 'Fry the sliced onions until translucent.', 'Pour in the blended peanut paste; stir well and let simmer for 7 minutes.', 'Add boiled beef, deboned smoked fish, crayfish cubes, white pepper, and salt.', 'Stir in the bitter leaves (if using dried, rehydrate first).', 'Let the stew simmer on low heat for 15–20 minutes.', 'Keep an eye on moisture and add water if needed.', 'At the end, quickly sear the fresh shrimp with the remaining sliced onions and fold them into the stew just before serving.', 'Serve with fried plantains.']
    },
    nutrition: { calories: 820, protein: 52, carbs: 45, fats: 48, fiber: 9, sugar: 6, sodium: 710 }
  },
  {
    id: 'l2', name: 'Eru & Waterfufu', description: 'Southwest Cameroon specialty - wild spinach (Eru) cooked with waterleaf, cow skin, and tripe, served with cassava fufu.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['Greens: 6 cups dried Eru (Okazi)', '3 bundles fresh waterleaf (or spinach)', '2 lbs canda (cow skin, cleaned/boiled)', '1 lb beef tripe (boiled)', '2 cups ground crayfish', '3 cups palm oil', '1/2 cup canola oil', '1 crayfish cube', '1 Habanero pepper (optional)', 'salt', 'Fufu: 1 kg Waterfufu (Akpu) paste'],
      method: ['For Eru: Soak dried Eru in warm water for 1 hour.', 'Wash thoroughly and drain.', 'In a large pot, bring canda and tripe to a simmer in their broth.', 'Add chopped fresh waterleaf; stir and cook until it shrinks (about 5 minutes).', 'Drain Eru and add to the pot.', 'Add crayfish cube, pepper, canola oil, and a substantial portion of palm oil.', 'Stir continuously; the small liquid from the waterleaf will soften the Eru.', 'Cook until the Eru is tender and oils are well incorporated (20 minutes).', 'For Waterfufu: Stir fufu paste into boiling water, mixing rigorously to prevent lumps.', 'Cover and cook for 10 minutes until smooth and elastic.', 'Serve Eru alongside Waterfufu.']
    },
    nutrition: { calories: 850, protein: 38, carbs: 95, fats: 42, fiber: 12, sugar: 2, sodium: 580 }
  },
  {
    id: 'l3', name: 'Koki Corn (Steamed Corn Cake)', description: 'Steamed corn cake made from fresh corn, palm oil, and spinach, wrapped in banana leaves.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 kg fresh yellow corn kernels', '300g palm oil', '2 cups spinach (or koki leaves)', 'thumb-sized ginger', '2 crayfish cubes', 'salt', 'banana leaves (softened by flame)'],
      method: ['Grind fresh corn kernels and ginger into a coarse paste.', 'Whisk the paste rigorously to incorporate air (this makes it fluffy).', 'Add palm oil, crayfish cubes, salt, and finely chopped spinach.', 'Mix well to form a thick, yellow batter.', 'Place small portions of the batter into softened banana leaves, depending on the size of the leaf.', 'Fold securely to create flat, sealed packages.', 'In a pot, lay down several banana leaves.', 'Arrange the koki packages on top.', 'Add water to cover.', 'Cover the pot and steam for 1.5–2 hours until firm.', 'Serve warm.']
    },
    nutrition: { calories: 550, protein: 15, carbs: 75, fats: 20, fiber: 12, sugar: 8, sodium: 480 }
  },
  {
    id: 'l4', name: 'Mbongo Tchobi (Black Spicy Stew)', description: 'Dark, aromatic stew made with roasted black spices (Mbongo) and fish or beef.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 kg fresh Tilapia fish (or beef)', '2 cups Mbongo spice powder (black spices)', '3 tomatoes', '2 onions', 'thumb-sized ginger', '4 cloves garlic', 'pebe (African nutmeg)', 'alligator pepper', 'hiomi bark', 'vegetable oil', 'salt', 'bouillon cubes'],
      method: ['If using raw barks/seeds, roast them slightly and grind into a fine black powder (Mbongo spice).', 'Grind tomatoes, onions, ginger, and garlic into a paste.', 'Season fish or beef and steam until half-cooked.', 'Heat oil in a large pot.', 'Sauté the tomato-onion-garlic paste until the water evaporates.', 'Add the blended Mbongo spice powder and stir well, allowing it to cook and release its aroma (5 minutes).', 'Add the half-cooked meat/fish and their broth.', 'Add pebe, alligator pepper, and bouillon cubes.', 'Simmer on low heat for 15 minutes until the black sauce is thick and savory.', 'Serve with steamed plantains or cassava.']
    },
    nutrition: { calories: 550, protein: 40, carbs: 15, fats: 35, fiber: 6, sugar: 3, sodium: 480 }
  },
  {
    id: 'l5', name: 'Poulet DG (Plantain & Chicken)', description: 'Celebration dish of fried chicken and ripe plantains sautéed with vegetables in a rich sauce.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 whole chicken (cut)', '6 ripe plantains', '3 tomatoes', '2 onions', '3 carrots (diced)', '1 bell pepper (diced)', '1/2 cup green beans (cut)', 'thumb-sized ginger', '4 cloves garlic', 'pebe (African nutmeg, optional)', 'salt', 'bouillon', 'oil (for frying chicken/plantains)'],
      method: ['Season chicken with ginger, garlic, pebe, and salt; steam until half-cooked.', 'Deep-fry chicken until golden.', 'Slice plantains and deep-fry until golden.', 'In a new pot, heat a small amount of oil.', 'Sauté onions until translucent.', 'Add tomatoes, carrots, bell pepper, and green beans.', 'Cook until vegetables are tender.', 'Add chicken, plantains, a bit of broth or water, and bouillon.', 'Stir well and simmer on low heat for 10 minutes to allow flavors to meld.', 'Serve hot.']
    },
    nutrition: { calories: 800, protein: 45, carbs: 65, fats: 38, fiber: 7, sugar: 18, sodium: 710 }
  },
  {
    id: 'l6', name: 'Kondre (Ceremonial Plantain Stew)', description: 'Rich plantain and meat stew where plantains slow-cook in savory sauce until soft.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['6 large unripe or semi-ripe plantains', '1 kg beef chunks (or goat)', '3 tomatoes', '2 onions', 'thumb-sized ginger', '4 cloves garlic', 'palm oil', 'crayfish', 'pebe', '2 crayfish seasoning cubes', 'salt'],
      method: ['Grind tomatoes, onions, ginger, garlic, pebe, and crayfish into a smooth paste.', 'Season beef and steam until half-cooked.', 'In a large pot, bring the ground spice paste and semi-cooked beef with its broth to a boil.', 'Add the peeled and roughly chopped plantains.', 'Add a substantial amount of palm oil, crayfish seasoning cubes, and salt.', 'Cover and simmer on low heat, allowing the plantains to slow-cook and absorb the savory sauce (about 40 minutes).', 'The end product should be a thick, rich stew with plantains that are soft and well-incorporated.']
    },
    nutrition: { calories: 710, protein: 38, carbs: 82, fats: 24, fiber: 11, sugar: 14, sodium: 520 }
  },
  {
    id: 'l7', name: 'Ekwang (Grated Cocoyam Wrap)', description: 'Grated cocoyam wrapped in cocoyam leaves and steamed in a rich palm oil broth.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 kg Ekwang cocoyam (Malanga)', '500g cocoyam leaves (waterleaf can substitute)', 'thumb-sized ginger', '4 cloves garlic', '1 cup palm oil', '1 cup ground crayfish', 'deboned smoked fish', '1 crayfish cube', 'pebe', 'salt', 'warm water'],
      method: ['Wash and peel cocoyams.', 'Clean with cold water and grate.', 'Whisk grated cocoyam with a bit of salt to obtain a smooth, sticky paste.', 'Clean cocoyam leaves, then soften them by moving back and forth over a flame.', 'Place small quantities of the paste on each leaf and wrap carefully into small, sealed bundles.', 'In a large pot, lay down several cocoyam leaves.', 'Place all the ekwang packages tightly on top of the leaves.', 'Mix remaining crayfish, deboned fish, spices, bouillon, palm oil, and ginger with warm water to create a broth.', 'Pour the broth over the ekwang bundles.', 'Add enough warm water to almost cover.', 'Cover tightly and steam for 1.5–2 hours on low heat.']
    },
    nutrition: { calories: 780, protein: 22, carbs: 92, fats: 35, fiber: 14, sugar: 5, sodium: 540 }
  },
  {
    id: 'l8', name: 'Poisson Braisé (Grilled Mackerel)', description: 'Whole mackerel marinated in spicy paste and grilled over charcoal until charred and flavorful.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['2 large whole fresh Mackerel', '1 bulb garlic', 'thumb-sized ginger', 'pebe', 'alligator pepper', '2 onions (1 blended, 1 sliced)', '2 bouillon cubes', '1 cup vegetable oil', 'salt', 'Side: Fried ripe plantains or miondo'],
      method: ['For Sauce: Blend ginger, garlic, pebe, alligator pepper, blended onion, oil, bouillon, and salt into a thick paste.', 'Clean fish, making diagonal cuts on both sides.', 'Coat the fish thoroughly, including the inside, with the marinade.', 'Cover and refrigerate for 2 hours.', 'Prepare a hot charcoal grill.', 'Place the fish on the grill.', 'While grilling, baste continuously with the remaining marinade using a brush.', 'Turn the fish carefully, grilling each side until charred and cooked through (15–20 minutes per side).', 'Serve hot with fried ripe plantains or miondo and spicy pepper sauce.']
    },
    nutrition: { calories: 480, protein: 42, carbs: 4, fats: 30, fiber: 1, sugar: 1, sodium: 790 }
  },
  {
    id: 'l9', name: 'Ebeu (Fish & Nightshade Leaves)', description: 'Southern Cameroonian dish of Tilapia steamed with Zom leaves (nightshade) and unrefined palm oil.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 kg Tilapia (or White fish)', '6 bundles Zom leaves (Nightshade)', '1 cup unrefined palm oil', '1 onion', 'salt'],
      method: ['Boil Zom leaves separately with a pinch of canwa (optional) to remove tartness; drain and set aside.', 'Season fish with salt and onion; steam until half-cooked.', 'Place the half-cooked fish in a new pot.', 'Add the boiled nightshade leaves and unrefined oil.', 'Mix gently.', 'Simmer for 15 minutes.', 'Serve warm.']
    },
    nutrition: { calories: 490, protein: 40, carbs: 12, fats: 32, fiber: 9, sugar: 4, sodium: 520 }
  },
  {
    id: 'l10', name: 'Katt-Katt (West Region Mash)', description: 'Western Cameroonian specialty of fresh corn mashed with greens and cow skin.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format',
    category: 'lunch',
    recipe: {
      ingredients: ['1 kg fresh yellow corn kernels', '4 bundles fresh greens (Huckleberry leaves or waterleaf)', 'thumb-sized ginger', '1/4 cup palm oil', '2 crayfish seasoning cubes', 'salt'],
      method: ['Grind fresh corn kernels and ginger into a coarse paste.', 'Boil the greens until tender.', 'Boil canda (cow skin) until soft.', 'Combine canda, greens, and corn-ginger mix in a pot.', 'Add crayfish cubes, salt, and palm oil.', 'Stir and cook until thick and well combined.', 'Serve warm.']
    },
    nutrition: { calories: 610, protein: 20, carbs: 85, fats: 18, fiber: 15, sugar: 5, sodium: 440 }
  },
  // DINNER
  {
    id: 'd1', name: 'Corn Fufu & Njama Njama', description: 'Smooth corn fufu served with sautéed huckleberry leaves in palm oil.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['Fufu: 1 kg Cornflour', 'Greens: 1 bulb garlic', 'thumb-sized ginger', '4 bundles huckleberry leaves', '1 crayfish cube', '1/4 cup palm oil', 'salt'],
      method: ['For Greens: Wash huckleberry leaves thoroughly.', 'If using dried Eru, soak for 1 hour.', 'Sauté Candawan (if using) with leaves and spice mix.', 'Add spices and bouillon.', 'Boil gizzards if using.', 'Fry canda.', 'Sauté mixture with palm oil until well combined.', 'For Fufu: Bring water to a rolling boil in a large pot.', 'Stir cornflour rigorously into boiling water until thick and starchy.', 'Continue stirring until smooth and elastic.', 'Cover and let steam for 5 minutes.', 'Serve corn fufu with Njama Njama greens.']
    },
    nutrition: { calories: 580, protein: 22, carbs: 92, fats: 15, fiber: 12, sugar: 5, sodium: 440 }
  },
  {
    id: 'd2', name: 'Fish Pepper Soup', description: 'Light, spicy broth with Tilapia chunks, seasoned with traditional pepper soup spices.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['500g Tilapia chunks', '1 onion (chopped)', 'thumb-sized ginger', '4 cloves garlic', '1 tbsp pepper soup spice mix', '2 crayfish seasoning cubes', 'salt', 'white pepper', 'optional chili'],
      method: ['Clean fish chunks thoroughly.', 'In a pot, bring water to a boil.', 'Add chopped onion, ginger, garlic, and pepper soup spices.', 'Add fish chunks to the boiling broth.', 'Crumble in crayfish cubes.', 'Add salt and white pepper to taste.', 'Simmer until fish is cooked through (about 10-15 minutes).', 'Add optional chili for extra heat.', 'Serve hot in bowls.']
    },
    nutrition: { calories: 280, protein: 35, carbs: 8, fats: 8, fiber: 2, sugar: 2, sodium: 690 }
  },
  {
    id: 'd3', name: 'Rice Fufu & Okra Stew', description: 'Smooth rice fufu served with slimy okra stew containing beef and smoked fish.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['Okra: 6 cups chopped fresh okra', '1 kg beef', '4 bundles spinach', '1 crayfish cube', 'thumb-sized ginger', 'deboned smoked fish', 'pebe', '1 cup palm oil', 'salt', 'white pepper', 'Fufu: 1 kg Rice flour'],
      method: ['For Okra: Steam beef until half-cooked.', 'Boil huckleberry leaves with Candawan and Candawan spice mix.', 'Fry Candawan spices in palm oil.', 'Sauté until fragrant.', 'Mix in Egusi paste if using.', 'Add meat, smoked fish, and broth.', 'Simmer for 15 minutes.', 'Stir in fresh okra and spinach.', 'Cook until okra is tender and stew is slimy.', 'For Rice Fufu: Stir rice flour rigorously into boiling water until thick and starchy.', 'Continue stirring until smooth and elastic.', 'Shape into balls.', 'Serve rice fufu with okra stew.']
    },
    nutrition: { calories: 610, protein: 28, carbs: 95, fats: 15, fiber: 10, sugar: 2, sodium: 580 }
  },
  {
    id: 'd4', name: 'Pounded Yam & Egusi', description: 'Smooth, elastic pounded yam served with rich melon seed (egusi) soup.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['Yam: 1 kg Yam (Puna)', 'water', 'Egusi: 2 cups ground melon seeds', '1 bulb garlic', '4 bundles spinach', '1 crayfish cube', 'thumb-sized ginger', 'deboned smoked fish', 'pebe', '1 cup palm oil', 'salt', 'white pepper'],
      method: ['For Egusi: Grind melon seeds (egusi) into powder.', 'Mix ground egusi with a little water to form a paste.', 'In a pot, heat palm oil.', 'Fry egusi paste until it starts to dry.', 'Add meat broth, smoked fish, crayfish cube, and spices.', 'Simmer for 15 minutes.', 'Stir in spinach and cook until wilted.', 'For Pounded Yam: Peel yam and cut into chunks.', 'Boil yam chunks until very tender.', 'Pound boiled yam in a mortar with a pestle while still hot.', 'Continue pounding until smooth, elastic, and dense.', 'Shape into smooth balls.', 'Serve pounded yam with egusi soup.']
    },
    nutrition: { calories: 820, protein: 40, carbs: 90, fats: 32, fiber: 8, sugar: 5, sodium: 610 }
  },
  {
    id: 'd5', name: 'Dried Fish Stew', description: 'Rich stew made from rehydrated dried fish, simmered in tomato and pepper sauce.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['1 kg assorted dried fish (stockfish, cod, catfish)', '4 tomatoes (diced)', '2 onions (1 chopped, 1 sliced)', 'thumb-sized ginger', '4 cloves garlic', '1 cup palm oil or vegetable oil', '2 crayfish seasoning cubes', 'salt', 'white pepper'],
      method: ['Soak dried fish in warm water for 1 hour to rehydrate and remove excess salt.', 'Rinse thoroughly, removing bones if possible.', 'Boil briefly until tender (10 minutes); drain.', 'Blend ginger, garlic, and chopped onion into a paste.', 'In a pot, heat oil.', 'Sauté sliced onions until translucent.', 'Add the tomato-ginger-garlic paste.', 'Cook until the water evaporates (about 10 minutes).', 'Add deboned dried fish, crayfish cubes, salt, and white pepper.', 'Simmer on low heat for 15 minutes, allowing flavors to combine.', 'Serve with boiled plantains, rice, or fufu.']
    },
    nutrition: { calories: 420, protein: 40, carbs: 15, fats: 22, fiber: 4, sugar: 6, sodium: 610 }
  },
  {
    id: 'd6', name: 'Plantain Hot Pot', description: 'Hearty one-pot meal of plantains cooked with meat and vegetables.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['6 large unripe or semi-ripe plantains', 'thumb-sized ginger', '4 bundles spinach', '1 crayfish cube', 'ginger', 'garlic', 'deboned smoked fish', 'Candawan spice mix', 'palm oil', 'salt'],
      method: ['Grind huckleberry leaves with Candawan and Candawan spice mix.', 'Fry Candawan spices in palm oil.', 'Sauté Njama Njama mix (huckleberry leaves).', 'For Plantain: Peel and slice plantains.', 'Boil plantains until tender.', 'Pound boiled plantains slightly.', 'Serve hot pot mixture over pounded plantains.']
    },
    nutrition: { calories: 690, protein: 32, carbs: 78, fats: 25, fiber: 8, sugar: 14, sodium: 610 }
  },
  {
    id: 'd7', name: 'Chicken Suya', description: 'Spicy grilled chicken skewers coated in peanut-based suya spice.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['1 kg Chicken breast strips', 'thumb-sized ginger', '1 cup raw skinless peanuts (groundnuts)', 'pebe', 'chili pepper', 'salt', 'white pepper'],
      method: ['For Suya Spice: Roast raw peanuts until golden.', 'Grind peanuts with pebe, chili pepper, and salt into a coarse powder.', 'For Chicken: Cut chicken breast into thin strips.', 'Grate ginger and mix with the chicken.', 'Coat chicken strips generously with the suya spice mixture.', 'Thread chicken onto skewers.', 'Let marinate for 30 minutes.', 'Grill over hot charcoal, turning frequently, until chicken is cooked through and slightly charred.', 'Serve hot with sliced onions and fresh tomatoes.']
    },
    nutrition: { calories: 440, protein: 42, carbs: 10, fats: 24, fiber: 3, sugar: 4, sodium: 750 }
  },
  {
    id: 'd8', name: 'Eba & Egusi Stew', description: 'Cassava fufu (eba) served with rich melon seed soup.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['Eba: 2 cups Garri (processed cassava)', '4 cups boiling water', 'Egusi Stew: 2 cups ground melon seeds (Egusi)', '1 kg beef', '4 bundles spinach', '1 crayfish cube', 'ginger', 'garlic', 'deboned smoked fish', '1 cup palm oil', 'salt', 'white pepper'],
      method: ['For Egusi Stew: Steam beef until half-cooked.', 'Blanch spinach; drain.', 'Mix ground Egusi with a little water to form a paste.', 'In a pot, heat palm oil.', 'Fry Egusi paste until it starts to dry.', 'Add meat with broth, smoked fish, crayfish cube, and spices.', 'Simmer for 15 minutes.', 'Stir in spinach.', 'For Eba: Bring water to a rolling boil.', 'Vigorously stir Garri into boiling water with a wooden spoon.', 'Continue stirring until a smooth, firm, and elastic dough forms.', 'Cover for 2 minutes, then pound slightly to smooth out.', 'Shape into balls.', 'Serve eba with egusi stew.']
    },
    nutrition: { calories: 780, protein: 38, carbs: 75, fats: 40, fiber: 7, sugar: 4, sodium: 710 }
  },
  {
    id: 'd9', name: 'Macabo & Peanut Dip', description: 'Boiled macabo cocoyam served with rich, spicy peanut dipping sauce.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['1 kg Macabo cocoyam', '2 cups raw skinless peanuts (groundnuts)', '1 onion', '4 cloves garlic', 'pebe (African nutmeg)', 'chili pepper', '1 cup vegetable oil', '2 crayfish cubes', 'salt', 'white pepper'],
      method: ['For Macabo: Peel macabo cocoyams.', 'Boil until tender (about 30-40 minutes).', 'Drain and set aside.', 'For Peanut Dip: Boil peanuts until soft.', 'Blend softened peanuts with onion, garlic, pebe, and chili into a smooth paste.', 'Heat oil in a pan.', 'Sauté the peanut paste until fragrant.', 'Crumble in crayfish cubes.', 'Add salt and white pepper to taste.', 'Add water if needed to achieve desired consistency.', 'Simmer for 5-7 minutes.', 'Serve boiled macabo with peanut dipping sauce.']
    },
    nutrition: { calories: 510, protein: 15, carbs: 80, fats: 18, fiber: 11, sugar: 6, sodium: 380 }
  },
  {
    id: 'd10', name: 'Beef Pepper Soup', description: 'Spicy medicinal broth with tender beef tripe and traditional spices.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format',
    category: 'dinner',
    recipe: {
      ingredients: ['1 kg beef tripe (cow skin cleaned/boiled)', '1 deboned mackerel tin', '1 bulb garlic', 'thumb-sized ginger', '2 crayfish seasoning cubes', '1 crayfish seasoning cube', 'salt', 'white pepper'],
      method: ['Clean beef tripe thoroughly with lime and salt until no slime remains.', 'Cut into bite-sized pieces.', 'Boil tripe until tender (about 1-2 hours depending on cut).', 'In a pot, bring fresh water to a boil.', 'Add minced garlic, grated ginger, and pepper soup spices.', 'Add the cooked tripe.', 'Crumble in crayfish cubes.', 'Add deboned mackerel.', 'Simmer for 15-20 minutes.', 'Add salt and white pepper to taste.', 'Serve hot in bowls.']
    },
    nutrition: { calories: 380, protein: 42, carbs: 10, fats: 18, fiber: 2, sugar: 3, sodium: 750 }
  },
  // SNACKS
  {
    id: 's1', name: 'Puff Puff', description: 'Deep-fried sweet dough balls - the most popular street snack in Cameroon.',
    image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['500g All-purpose flour', '150g sugar', '2 tsp active dry yeast', '1 tsp salt', '500ml lukewarm water', 'Vegetable oil (for frying)'],
      method: ['Mix dry yeast with sugar and warm water; let sit for 10 minutes until frothy.', 'In a large bowl, whisk flour and salt.', 'Add yeast mixture to flour.', 'Mix until a smooth, thick batter forms.', 'Cover with a clean cloth and let rise in a warm place for 1–2 hours.', 'Heat oil in a deep pot to medium heat.', 'Scoop batter by hand or with a spoon and drop into hot oil.', 'Fry until golden brown, turning occasionally.', 'Drain excess oil on paper towels.', 'Serve warm.']
    },
    nutrition: { calories: 420, protein: 6, carbs: 68, fats: 15, fiber: 2, sugar: 18, sodium: 180 }
  },
  {
    id: 's2', name: 'Plantain Chips (Salty)', description: 'Thinly sliced green plantains fried until crispy and salted.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['6 very green (unripe) plantains', 'vegetable oil (for frying)', 'salt'],
      method: ['Peel very green plantains.', 'Slice plantains horizontally into very thin discs using a knife or mandoline.', 'Heat oil in a deep pot to medium-high heat.', 'Fry plantain slices in small batches until light golden brown and crispy.', 'Remove with a slotted spoon.', 'Drain excess oil on paper towels.', 'Drizzle with salt immediately while hot.', 'Allow to cool and crisp up.', 'Store in an airtight container.']
    },
    nutrition: { calories: 330, protein: 2, carbs: 55, fats: 12, fiber: 6, sugar: 2, sodium: 420 }
  },
  {
    id: 's3', name: 'Chin Chin', description: 'Crunchy fried pastry bites flavored with nutmeg - a beloved snack across Cameroon.',
    image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['5 cups All-purpose flour', '1/2 cup granulated sugar', '1 tsp baking powder', '1 tsp salt', '1/2 cup margarine (softened)', '2 eggs', '1 cup evaporated milk', 'nutmeg', 'orange zest (optional)', 'vegetable oil (for frying)'],
      method: ['Combine all dry ingredients: flour, sugar, baking powder, salt, and nutmeg.', 'Rub in softened margarine until mixture resembles breadcrumbs.', 'In a separate bowl, beat eggs and evaporated milk.', 'Add wet ingredients to dry ingredients.', 'Add orange zest if using.', 'Mix to form a smooth, stiff dough.', 'Knead by hand until smooth.', 'Roll out dough and cut into small strips or squares.', 'Heat oil in a deep pot.', 'Deep-fry the strips in small batches in medium-hot oil until golden brown.', 'Stir chin chin as it fries to promote even browning.', 'Drain on paper towels.', 'Allow to cool completely before storing.']
    },
    nutrition: { calories: 480, protein: 7, carbs: 72, fats: 20, fiber: 1, sugar: 28, sodium: 210 }
  },
  {
    id: 's4', name: 'Fish Roll', description: 'Savory pastry filled with spiced mackerel and fried until golden.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['Dough: 3 cups flour', '3 tbsp butter', '1 tsp yeast', '1 tsp baking powder', '1 tsp sugar', '1/2 tsp salt', '1 1/4 cups warm water', 'Filling: 1 tin deboned mackerel', '1 onion', 'chili pepper', 'salt'],
      method: ['For Filling: Debone mackerel and flake with a fork.', 'Finely chop onion and chili.', 'Sauté onion and chili in a pan.', 'Add flaked mackerel and stir-fry for 3-4 minutes.', 'Season with salt.', 'Set aside to cool.', 'For Dough: Mix yeast, sugar, and warm water; let sit until frothy.', 'Combine flour, salt, and baking powder in a bowl.', 'Add yeast mixture and butter.', 'Knead dough until smooth; let rise for 45 minutes.', 'Roll dough into oval discs.', 'Place a tablespoon of filling on each.', 'Fold over, seal edges with a fork.', 'Deep-fry in hot oil until golden brown.', 'Drain on paper towels.']
    },
    nutrition: { calories: 320, protein: 12, carbs: 35, fats: 15, fiber: 2, sugar: 3, sodium: 480 }
  },
  {
    id: 's5', name: 'Dodo (Fried Ripe Plantain)', description: 'Caramelized sweet plantains fried until golden and soft.',
    image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['6 very ripe plantains', 'vegetable oil (for frying)', 'pinch of salt (optional)'],
      method: ['Peel ripe plantains.', 'Slice diagonally into 1/2-inch thick pieces.', 'Heat oil in a frying pan over medium heat.', 'Place plantain slices in hot oil in a single layer.', 'Fry until the bottom side is caramelized and deep golden-brown (about 3-4 minutes).', 'Flip and fry the other side until golden.', 'Remove with a slotted spoon.', 'Drain excess oil on paper towels.', 'Sprinkle with a pinch of salt if desired.', 'Serve warm.']
    },
    nutrition: { calories: 220, protein: 2, carbs: 35, fats: 9, fiber: 3, sugar: 14, sodium: 10 }
  },
  {
    id: 's6', name: 'Akara (Accra Beans)', description: 'Fluffy deep-fried bean cakes made from peeled black-eyed peas.',
    image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['1 kg peeled black-eyed peas', '1 onion', 'parsley', 'chili pepper', 'salt', 'vegetable oil (for frying)'],
      method: ['Soak black-eyed peas overnight.', 'Peel the beans by rubbing between palms to remove skins.', 'Blend peeled beans with onion, parsley, and chili into a very smooth, airy batter.', 'Add salt to taste.', 'Whisk rigorously for 10 minutes to introduce air (this makes them fluffy).', 'Heat oil in a deep pot.', 'Scoop the batter with a spoon and drop into hot oil.', 'Deep-fry until light golden brown, turning occasionally.', 'Drain on paper towels.', 'Serve hot with pap or bread.']
    },
    nutrition: { calories: 310, protein: 14, carbs: 32, fats: 14, fiber: 9, sugar: 2, sodium: 380 }
  },
  {
    id: 's7', name: 'Roasted Groundnuts', description: 'Dry-roasted peanuts, often sold in newspaper cones on street corners.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['1 kg raw skinless peanuts', 'salt (optional)'],
      method: ['If peanuts have skins, rub to remove most of the skins.', 'Heat a large, heavy-bottomed pan over medium heat.', 'Add peanuts to the dry pan.', 'Stir continuously with a wooden spoon to prevent burning.', 'Roast until peanuts are golden brown and aromatic (about 10-15 minutes).', 'If using salt, sprinkle while peanuts are hot.', 'Transfer to a bowl to cool.', 'Peanuts will become crunchier as they cool.', 'Store in an airtight container.']
    },
    nutrition: { calories: 560, protein: 25, carbs: 16, fats: 48, fiber: 9, sugar: 4, sodium: 110 }
  },
  {
    id: 's8', name: 'Koki Beans (Snack Wrap)', description: 'Steamed black-eyed pea pudding wrapped in banana leaves.',
    image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['1 kg peeled black-eyed peas', '1 onion', 'thumb-sized ginger', 'pebe', 'chili pepper', 'salt', 'white pepper', 'banana leaves'],
      method: ['Blend peeled black-eyed peas into a very smooth, airy batter.', 'Add chopped onions, ginger, and chili.', 'Season with salt and pebe.', 'Whisk rigorously for 10 minutes to incorporate air.', 'Add palm oil and mix well.', 'Place small portions of the batter into softened banana leaves.', 'Fold securely to create flat, sealed packages.', 'In a pot, lay down several banana leaves.', 'Arrange the koki packages on top.', 'Add water to cover.', 'Cover the pot and steam for 1.5–2 hours until firm.', 'Serve warm.']
    },
    nutrition: { calories: 410, protein: 24, carbs: 48, fats: 18, fiber: 14, sugar: 4, sodium: 390 }
  },
  {
    id: 's9', name: 'Roasted Corn', description: 'Whole corn on the cob roasted over hot coals until charred and smoky.',
    image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['6 whole yellow corn', 'salt'],
      method: ['Peel back corn husks but leave attached at the base.', 'Remove corn silk.', 'Pull husks back up to cover corn.', 'Soak in cold water for 30 minutes (optional, prevents burning).', 'Prepare hot charcoal grill.', 'Place corn on the grill.', 'Roast, turning frequently, until kernels are tender and charred in spots (about 15-20 minutes).', 'Remove from grill.', 'Serve hot with salt, or with butter and chili powder.']
    },
    nutrition: { calories: 150, protein: 4, carbs: 32, fats: 1, fiber: 6, sugar: 4, sodium: 380 }
  },
  {
    id: 's10', name: 'Meat Pie', description: 'Savory pastry filled with minced beef, carrots, and potatoes.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&auto=format',
    category: 'snacks',
    recipe: {
      ingredients: ['Dough: 5 cups all-purpose flour', '250g butter', '1 tsp baking powder', '1 tsp salt', 'cold water', 'Filling: 1 lb minced beef', '2 carrots (diced)', '2 potatoes (diced)', '1 onion (chopped)', 'garlic', 'salt', 'pepper'],
      method: ['For Filling: Sauté onion and garlic until fragrant.', 'Add minced beef and cook until browned.', 'Add diced carrots and potatoes.', 'Season with salt and pepper.', 'Add a little water and simmer until vegetables are tender.', 'Allow to cool completely.', 'For Dough: Mix flour, baking powder, and salt.', 'Rub in cold butter until mixture resembles breadcrumbs.', 'Add cold water gradually and form into a stiff dough.', 'Rest dough for 30 minutes.', 'Roll out dough and cut into circles.', 'Place filling on one half, fold over, and seal edges with a fork.', 'Brush with egg wash.', 'Bake at 180°C until golden brown (about 25-30 minutes).']
    },
    nutrition: { calories: 380, protein: 14, carbs: 40, fats: 18, fiber: 3, sugar: 4, sodium: 550 }
  },
  // DRINKS
  {
    id: 'dr1', name: 'Ginger Juice (Djino)', description: 'Spicy and refreshing ginger drink, often fermented for a slight fizz.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['thumb-sized ginger (grated)', '1 pineapple skin', '1 kg granulated sugar', 'thumb-sized ginger', 'water'],
      method: ['Wash and grate fresh ginger.', 'Wash pineapple skin thoroughly.', 'Boil grated ginger and pineapple skin in water for 30 minutes.', 'Strain the liquid through a fine sieve.', 'Allow to cool until warm.', 'Add sugar and stir until dissolved.', 'Add yeast if a fermented version is desired.', 'Cover and let ferment for 24 hours.', 'Chill before serving.', 'Serve over ice.']
    },
    nutrition: { calories: 90, protein: 0, carbs: 24, fats: 0, fiber: 1, sugar: 22, sodium: 8 }
  },
  {
    id: 'dr2', name: 'Folere (Hibiscus Drink)', description: 'Deep red drink made from dried hibiscus calyces, similar to Jamaican sorrel or Mexican agua de Jamaica.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['2 cups dried hibiscus calyces (Folere leaves)', '1 pineapple skin', '1 kg granulated sugar', '2 tsp active dry yeast', '1 thumb-sized ginger', 'water'],
      method: ['Rinse dried hibiscus calyces.', 'Wash pineapple skin thoroughly.', 'Boil hibiscus, pineapple skin, and ginger in water for 30-40 minutes.', 'Strain the liquid through a fine sieve.', 'Discard solids.', 'Add sugar while liquid is still warm and stir until dissolved.', 'Allow to cool completely.', 'Add yeast if fermented version is desired.', 'Cover and let ferment for 24 hours.', 'Chill thoroughly.', 'Serve over ice.']
    },
    nutrition: { calories: 110, protein: 0, carbs: 28, fats: 0, fiber: 1, sugar: 25, sodium: 5 }
  },
  {
    id: 'dr3', name: 'Fresh Orange Juice', description: 'Squeezed highland oranges - known for their sweet-tart flavor.',
    image: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['1 kg fresh oranges'],
      method: ['Wash oranges thoroughly.', 'Roll oranges on the counter with palm pressure to loosen juices.', 'Cut oranges in half.', 'Squeeze oranges using a manual or electric juicer.', 'Strain if pulp-free juice is desired.', 'Serve immediately over ice or at room temperature.', 'Best consumed fresh.']
    },
    nutrition: { calories: 110, protein: 2, carbs: 26, fats: 0, fiber: 1, sugar: 22, sodium: 2 }
  },
  {
    id: 'dr4', name: 'Palm Wine (Matango)', description: 'Sweet, mildly alcoholic sap tapped from palm trees, naturally fermented.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['Fresh palm wine'],
      method: ['Fresh palm sap is collected by tappers who climb palm trees.', 'A cut is made in the palm inflorescence.', 'A gourd or container is attached to collect the dripping sap.', 'Collection is typically done twice daily - morning and evening.', 'The sap begins fermenting naturally immediately upon collection.', 'Palm wine is best consumed fresh on the day of collection.', 'Serve at room temperature or slightly chilled.', 'Fermentation continues, so flavor changes throughout the day.']
    },
    nutrition: { calories: 150, protein: 1, carbs: 15, fats: 0, fiber: 0, sugar: 12, sodium: 12 }
  },
  {
    id: 'dr5', name: 'Millet Drink (Kunnu)', description: 'Northern Nigerian/Cameroonian drink made from fermented millet with spices.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['1 cup Millet (Kunnu) paste', '1 pineapple skin', '1 kg granulated sugar', '2 tsp active dry yeast', '1 thumb-sized ginger', 'water'],
      method: ['Wash millet thoroughly and soak overnight.', 'Drain and sprout millet for 1-2 days if desired.', 'Blend sprouted millet with ginger and pineapple skin.', 'Add water and blend into a smooth paste.', 'Strain through a fine cloth, squeezing out all liquid.', 'Add sugar and stir to dissolve.', 'Add yeast for fermentation.', 'Cover and let ferment for 24 hours.', 'Chill thoroughly.', 'Serve cold.']
    },
    nutrition: { calories: 180, protein: 5, carbs: 35, fats: 3, fiber: 4, sugar: 12, sodium: 45 }
  },
  {
    id: 'dr6', name: 'Mango Nectar', description: 'Thick, sweet mango puree drink - like drinking liquid gold.',
    image: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['1 kg ripe mangoes', 'water (optional)', 'sugar to taste (optional)'],
      method: ['Wash mangoes thoroughly.', 'Peel mangoes and cut flesh away from the pit.', 'Place mango flesh in a blender.', 'Blend until completely smooth.', 'Add a little water if thinner consistency is desired.', 'Add sugar if mangoes are not sweet enough.', 'Blend again.', 'Strain if smoother texture is desired.', 'Chill thoroughly.', 'Serve cold.']
    },
    nutrition: { calories: 160, protein: 1, carbs: 42, fats: 0, fiber: 3, sugar: 38, sodium: 5 }
  },
  {
    id: 'dr7', name: 'Hot Ginger Tea', description: 'Warming, spicy ginger tea - the classic remedy for colds and sore throats.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['thumb-sized ginger (grated)', 'water', 'honey or sugar to taste', 'lemon (optional)'],
      method: ['Wash and peel ginger.', 'Grate or thinly slice ginger.', 'Bring water to a boil in a pot.', 'Add grated ginger to boiling water.', 'Reduce heat and simmer for 10-15 minutes.', 'Remove from heat.', 'Strain ginger pieces out.', 'Add honey or sugar to taste.', 'Add lemon juice if desired.', 'Serve hot.']
    },
    nutrition: { calories: 40, protein: 0, carbs: 10, fats: 0, fiber: 1, sugar: 8, sodium: 2 }
  },
  {
    id: 'dr8', name: 'Pineapple Juice', description: 'Fresh pressed pineapple juice, often sold by street vendors.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['1 whole ripe pineapple', 'mint leaves (optional)', 'water (optional)'],
      method: ['Peel pineapple and remove eyes.', 'Cut pineapple into chunks.', 'Place pineapple chunks in a blender.', 'Blend until completely smooth.', 'Add a little water if needed.', 'Strain through a fine sieve if pulp-free juice is desired.', 'Press firmly to extract all juice.', 'Add fresh mint leaves if desired.', 'Chill thoroughly.', 'Serve over ice.']
    },
    nutrition: { calories: 130, protein: 1, carbs: 34, fats: 0, fiber: 2, sugar: 30, sodium: 2 }
  },
  {
    id: 'dr9', name: 'Soursop Juice', description: 'Creamy, sweet-sour drink made from the spiny green soursop fruit.',
    image: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['1 ripe soursop', 'water', 'sugar to taste', 'milk or condensed milk (optional)'],
      method: ['Wash soursop thoroughly.', 'Cut soursop in half.', 'Remove the white flesh, separating from the core and seeds.', 'Place flesh in a blender.', 'Add water and blend until smooth.', 'Strain through a sieve to remove any remaining fibers.', 'Add sugar to taste.', 'Add milk or condensed milk for creamy version.', 'Stir well.', 'Chill thoroughly.', 'Serve cold.']
    },
    nutrition: { calories: 190, protein: 3, carbs: 40, fats: 2, fiber: 6, sugar: 35, sodium: 15 }
  },
  {
    id: 'dr10', name: 'Lemonade (Citronnelle)', description: 'Refreshing lemongrass and lemon drink - perfect for hot days.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&auto=format',
    category: 'drinks',
    recipe: {
      ingredients: ['fresh lemons', 'lemongrass stalks', 'sugar', 'water'],
      method: ['Wash and bruise lemongrass stalks to release flavor.', 'Bring water to a boil with lemongrass.', 'Simmer for 10 minutes.', 'Remove from heat and let steep for 30 minutes.', 'Strain out lemongrass.', 'Squeeze fresh lemons to get juice.', 'Add lemon juice to the lemongrass-infused water.', 'Add sugar and stir until dissolved.', 'Chill thoroughly.', 'Serve over ice with a slice of lemon.']
    },
    nutrition: { calories: 80, protein: 0, carbs: 22, fats: 0, fiber: 1, sugar: 20, sodium: 5 }
  }
];

export const MEAL_CATEGORIES = ['breakfast', 'lunch', 'dinner', 'snacks', 'drinks'] as const;
export type MealCategory = typeof MEAL_CATEGORIES[number];
