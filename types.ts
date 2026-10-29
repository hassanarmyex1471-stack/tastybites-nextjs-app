export interface Dish {
  id: string;
  name: string;
  category: 'burgers' | 'pizzas' | 'biryani' | 'desserts' | 'drinks' | 'wings';
  categoryLabel: string;
  price: number;
  rating: number;
  reviewsCount: number;
  tag: string;
  image: string;
  description: string;
  ingredients?: string[];
  prepTime?: string;
  calories?: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  notes?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  countLabel: string;
  iconName: string;
  bgClass: string;
  textClass: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}