'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dish, CartItem } from '@/lib/types';

interface CartContextType {
  items: CartItem[];
  addToCart: (dish: Dish, quantity?: number, notes?: string) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  couponCode: string;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    {
      dish: {
        id: 'dish-1',
        name: 'Signature Double Smash Burger',
        category: 'burgers',
        categoryLabel: 'Burgers',
        price: 12.99,
        rating: 4.9,
        reviewsCount: 420,
        tag: 'Popular',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5_ZcT_mYD2uLFgInZfQK5yVU9p_s3JisZ95SSLBadwt-WOlgO9-Ay0eSL_eLrpQSNEsvUDBR-t3g_xLLMJTrr9AXvi-TVCtXOGTINGXoswj3QHVkkC4k0JrjybUXejP3j9C_oJ5QVGkTyuaeo69dIGRsQQDgo1-jrt_78Isvgyl9NOYFisoej50SOgNi7MztTYWidraJmdimsuaFwO4JzFXmE1exuJre30UnLX9y1eMCvIVCA4NJl',
        description: 'Double Angus beef patty, melted aged cheddar, caramelized onions, house truffle aioli on brioche.',
      },
      quantity: 1,
    },
    {
      dish: {
        id: 'dish-7',
        name: 'Cheesy Truffle Burger',
        category: 'burgers',
        categoryLabel: 'Burgers',
        price: 14.99,
        rating: 4.9,
        reviewsCount: 512,
        tag: 'Featured',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY3y5Yb2Bz2o45hgmXnjG8MIjYxBwaV1B9VQf_-R5mbcfVnD-9E9t9gsKh5w1l7Yf8ERr6ZKOEsWqrHKJD4HkCZTz2cXE5zIYG6rQAzTKQCj15oWXVhG-8t3DGGh40GP_Y4xFsU5QKGQTzqdJO2M95c7yhW00HAcHxXgh91r-cTB1nxfR5_NW9C7CxUX_iCDrqgx_zNytV_gkduQhyULw2IWobbuPpDF3G4xCY7leRa64st3n-oszL',
        description: 'Prime ground brisket, fontina cheese fondue, black summer truffle carpaccio.',
      },
      quantity: 1,
    },
    {
      dish: {
        id: 'dish-6',
        name: 'Tropical Mango Passion Cooler',
        category: 'drinks',
        categoryLabel: 'Drinks',
        price: 5.99,
        rating: 4.7,
        reviewsCount: 180,
        tag: 'Cold Sip',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqlTzcSNf46rLiJrskgnyJTnBKbfT2zmD5kFapNyd1qUUa7rmQNQ2ntmCh3_u7of9z_HeXDgezprNPm1VV1u7So8Alj2aRCnLEHG4owf_uZuD49JYXqPXGtOVByL3SWPi0nBoZMzOCYSq0-O-3S5xyXDrB38H-J2PV7T0379xt0sLI82mik77SWEGojkOJEb01ERv3lCjKICiE8C6fgxV-y6QY9cKrGfsOJD2SQ0CZ1zUc48SogPw',
        description: 'Fresh Alphonso mango pulp, crushed passion fruit, sparkling soda, and mint leaves.',
      },
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState<string>('HOTBITES');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (dish: Dish, quantity = 1, notes = '') => {
    setItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity, notes: notes || item.notes }
            : item
        );
      }
      return [...prev, { dish, quantity, notes }];
    });
  };

  const removeFromCart = (dishId: string) => {
    setItems((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.dish.id === dishId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyCoupon = (code: string) => {
    const formatted = code.trim().toUpperCase();
    if (formatted === 'HOTBITES' || formatted === 'TASTY20') {
      setCouponCode(formatted);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCouponCode('');
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.dish.price * item.quantity, 0);

  const rawDeliveryFee = subtotal > 25 || couponCode === 'HOTBITES' ? 0 : 3.99;
  const deliveryFee = subtotal === 0 ? 0 : rawDeliveryFee;

  let discount = 0;
  if (couponCode === 'TASTY20') {
    discount = subtotal * 0.2;
  } else if (couponCode === 'HOTBITES' && subtotal > 0) {
    discount = 3.99; // Free delivery credit
  }

  const total = Math.max(0, subtotal + deliveryFee - (couponCode === 'TASTY20' ? discount : 0));

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        deliveryFee,
        discount,
        total,
        couponCode,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}