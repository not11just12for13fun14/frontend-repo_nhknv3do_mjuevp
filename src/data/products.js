// Blinkit-like static product and category data
export const CATEGORIES = [
  { key: 'fruits-vegetables', label: 'Fruits & Vegetables', icon: 'Apple' },
  { key: 'dairy-bread', label: 'Dairy & Bread', icon: 'Milk' },
  { key: 'munchies', label: 'Munchies', icon: 'Cookie' },
  { key: 'drinks-juices', label: 'Cold Drinks & Juices', icon: 'CupSoda' },
  { key: 'instant-frozen', label: 'Instant & Frozen', icon: 'IceCream2' },
  { key: 'bakery-biscuits', label: 'Bakery & Biscuits', icon: 'Croissant' },
  { key: 'home-kitchen', label: 'Home & Kitchen', icon: 'Utensils' },
  { key: 'meats-eggs', label: 'Meats & Eggs', icon: 'Egg' },
];

// 30+ products across categories
export const PRODUCTS = [
  // Fruits & Vegetables
  { id: 'p1', name: 'Fresh Bananas', category: 'fruits-vegetables', price: 39, weight: '6 pcs', imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=800&auto=format&fit=crop', description: 'Naturally ripened, sweet bananas rich in potassium.' },
  { id: 'p2', name: 'Tomatoes', category: 'fruits-vegetables', price: 29, weight: '500 g', imageUrl: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=800&auto=format&fit=crop', description: 'Juicy red tomatoes, perfect for salads and curries.' },
  { id: 'p3', name: 'Onions', category: 'fruits-vegetables', price: 25, weight: '1 kg', imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop', description: 'Fresh onions with a sharp, savory flavor.' },
  { id: 'p4', name: 'Baby Spinach', category: 'fruits-vegetables', price: 45, weight: '250 g', imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop', description: 'Cleaned, tender spinach leaves packed with nutrients.' },

  // Dairy & Bread
  { id: 'p5', name: 'Whole Milk', category: 'dairy-bread', price: 62, weight: '1 L', imageUrl: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=800&auto=format&fit=crop', description: 'Creamy and fresh whole milk sourced locally.' },
  { id: 'p6', name: 'Brown Bread', category: 'dairy-bread', price: 45, weight: '400 g', imageUrl: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop', description: 'Soft, fiber-rich brown bread.' },
  { id: 'p7', name: 'Greek Yogurt', category: 'dairy-bread', price: 80, weight: '400 g', imageUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop', description: 'Thick and creamy Greek yogurt with probiotics.' },
  { id: 'p8', name: 'Butter Salted', category: 'dairy-bread', price: 52, weight: '100 g', imageUrl: 'https://images.unsplash.com/photo-1518943708175-2ecf8c82178f?q=80&w=800&auto=format&fit=crop', description: 'Rich, salted butter perfect for cooking and baking.' },

  // Munchies
  { id: 'p9', name: 'Potato Chips Classic', category: 'munchies', price: 20, weight: '52 g', imageUrl: 'https://images.unsplash.com/photo-1599599810769-6d5c1e1ad3a6?q=80&w=800&auto=format&fit=crop', description: 'Crispy salted potato chips.' },
  { id: 'p10', name: 'Masala Peanuts', category: 'munchies', price: 35, weight: '100 g', imageUrl: 'https://images.unsplash.com/photo-1604908554028-4b30c09c5007?q=80&w=800&auto=format&fit=crop', description: 'Spicy and crunchy peanuts for snacking.' },
  { id: 'p11', name: 'Chocolate Cookies', category: 'munchies', price: 49, weight: '120 g', imageUrl: 'https://images.unsplash.com/photo-1599785209797-5d4a1f5f3d98?q=80&w=800&auto=format&fit=crop', description: 'Delicious chocolate chip cookies.' },
  { id: 'p12', name: 'Nacho Chips', category: 'munchies', price: 50, weight: '150 g', imageUrl: 'https://images.unsplash.com/photo-1599597431917-295d59c1c86e?q=80&w=800&auto=format&fit=crop', description: 'Crispy nacho chips with corn goodness.' },

  // Drinks & Juices
  { id: 'p13', name: 'Orange Juice', category: 'drinks-juices', price: 99, weight: '1 L', imageUrl: 'https://images.unsplash.com/photo-1572188863110-46d457c9234a?q=80&w=800&auto=format&fit=crop', description: 'Refreshing orange juice with real pulp.' },
  { id: 'p14', name: 'Cola Soda', category: 'drinks-juices', price: 40, weight: '750 ml', imageUrl: 'https://images.unsplash.com/photo-1559656914-a30970c1affd?q=80&w=800&auto=format&fit=crop', description: 'Classic cola beverage, serve chilled.' },
  { id: 'p15', name: 'Tender Coconut Water', category: 'drinks-juices', price: 55, weight: '200 ml', imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop', description: 'Hydrating and light coconut water.' },
  { id: 'p16', name: 'Iced Tea Lemon', category: 'drinks-juices', price: 35, weight: '250 ml', imageUrl: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=800&auto=format&fit=crop', description: 'Zesty lemon iced tea.' },

  // Instant & Frozen
  { id: 'p17', name: 'Instant Noodles Masala', category: 'instant-frozen', price: 28, weight: '70 g', imageUrl: 'https://images.unsplash.com/photo-1589301773859-baf941bff5bf?q=80&w=800&auto=format&fit=crop', description: 'Quick-cook masala noodles.' },
  { id: 'p18', name: 'Frozen Green Peas', category: 'instant-frozen', price: 120, weight: '500 g', imageUrl: 'https://images.unsplash.com/photo-1604908177089-46c50a49d15e?q=80&w=800&auto=format&fit=crop', description: 'Individually quick frozen green peas.' },
  { id: 'p19', name: 'Veggie Burger Patty', category: 'instant-frozen', price: 160, weight: '4 pcs', imageUrl: 'https://images.unsplash.com/photo-1610903677576-0e4f33b9da9f?q=80&w=800&auto=format&fit=crop', description: 'Crispy, delicious veg burger patties.' },
  { id: 'p20', name: 'Frozen Fries', category: 'instant-frozen', price: 150, weight: '750 g', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop', description: 'Crispy golden fries at home.' },

  // Bakery & Biscuits
  { id: 'p21', name: 'Croissants', category: 'bakery-biscuits', price: 120, weight: '4 pcs', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop', description: 'Buttery, flaky French croissants.' },
  { id: 'p22', name: 'Multigrain Biscuits', category: 'bakery-biscuits', price: 30, weight: '100 g', imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop', description: 'Healthy multigrain biscuits.' },
  { id: 'p23', name: 'Muffins Chocolate', category: 'bakery-biscuits', price: 99, weight: '2 pcs', imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d4a5b2ff8?q=80&w=800&auto=format&fit=crop', description: 'Moist chocolate muffins.' },
  { id: 'p24', name: 'Garlic Bread', category: 'bakery-biscuits', price: 85, weight: '200 g', imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop', description: 'Ready-to-bake garlic bread.' },

  // Home & Kitchen
  { id: 'p25', name: 'Dishwash Liquid', category: 'home-kitchen', price: 99, weight: '500 ml', imageUrl: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop', description: 'Tough on grease, gentle on hands.' },
  { id: 'p26', name: 'Kitchen Towels', category: 'home-kitchen', price: 85, weight: '2 rolls', imageUrl: 'https://images.unsplash.com/photo-1604881985966-41f8c11d1807?q=80&w=800&auto=format&fit=crop', description: 'Ultra-absorbent kitchen towels.' },
  { id: 'p27', name: 'Garbage Bags', category: 'home-kitchen', price: 65, weight: '15 bags', imageUrl: 'https://images.unsplash.com/photo-1582401653270-fca6f0d1d2b9?q=80&w=800&auto=format&fit=crop', description: 'Durable, leak-proof garbage bags.' },
  { id: 'p28', name: 'Aluminum Foil', category: 'home-kitchen', price: 110, weight: '9 m', imageUrl: 'https://images.unsplash.com/photo-1601050690032-e6f7f2df3eb8?q=80&w=800&auto=format&fit=crop', description: 'Food-grade aluminum foil.' },

  // Meats & Eggs
  { id: 'p29', name: 'Farm Eggs', category: 'meats-eggs', price: 65, weight: '6 pcs', imageUrl: 'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=800&auto=format&fit=crop', description: 'Fresh, protein-rich farm eggs.' },
  { id: 'p30', name: 'Chicken Breast', category: 'meats-eggs', price: 199, weight: '500 g', imageUrl: 'https://images.unsplash.com/photo-1514511547114-2a4d9c7c0e5c?q=80&w=800&auto=format&fit=crop', description: 'Boneless, skinless chicken breast.' },
  { id: 'p31', name: 'Chicken Sausages', category: 'meats-eggs', price: 175, weight: '250 g', imageUrl: 'https://images.unsplash.com/photo-1604908554014-1f0e3a962f8d?q=80&w=800&auto=format&fit=crop', description: 'Ready-to-cook chicken sausages.' },
  { id: 'p32', name: 'Paneer Cubes', category: 'dairy-bread', price: 85, weight: '200 g', imageUrl: 'https://images.unsplash.com/photo-1625944529434-9d34658f6c24?q=80&w=800&auto=format&fit=crop', description: 'Soft and fresh paneer cubes.' },
];

export const getProductById = (id) => PRODUCTS.find(p => p.id === id);
export const getProductsByCategory = (key) => PRODUCTS.filter(p => p.category === key);
