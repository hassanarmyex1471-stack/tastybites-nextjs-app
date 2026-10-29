'use client';

import React, { useState } from 'react';
import { Dish } from '@/lib/types';
import { useCart } from '@/context/CartContext';

interface DishGridProps {
  dishes: Dish[];
}

export function DishGrid({ dishes }: DishGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'pizzas', label: 'Pizzas' },
    { id: 'biryani', label: 'Biryani' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      dish.category === selectedCategory ||
      (selectedCategory === 'burgers' && dish.id === 'dish-4');
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (dish: Dish) => {
    addToCart(dish, 1);
    setAddedIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  return (
    <section className="px-6 lg:px-12 py-16 bg-[#f5f2fb]/40 w-full" id="popular-dishes">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-[#b02f00] text-xs uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              Fresh From The Kitchen
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b1b21]">Most Popular Dishes</h2>
            <p className="text-sm text-[#5b4039] mt-1">Prepared to perfection by our culinary specialists</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-full shadow-[0_2px_8px_rgba(180,130,90,0.08)] border border-[#e4beb4]/30">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#ff5722] text-white shadow-[0_4px_14px_rgba(255,87,34,0.25)]'
                    : 'text-[#5b4039] hover:text-[#1b1b21] hover:bg-[#efecf5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => {
            const isAdded = !!addedIds[dish.id];
            return (
              <div
                key={dish.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_-2px_rgba(180,130,90,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(180,100,50,0.12)] hover:-translate-y-1.5 transition-all flex flex-col"
              >
                <div className="relative w-full h-56 overflow-hidden bg-[#efecf5]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 border border-[#e4beb4]/20">
                    <span
                      className="material-symbols-outlined text-[15px] text-[#ffab69]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-[11px] font-bold text-[#1b1b21]">{dish.rating.toFixed(1)}</span>
                    <span className="text-[11px] text-[#5b4039]">({dish.reviewsCount})</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#ff5722] text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase shadow-sm">
                    {dish.tag}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#1b1b21] group-hover:text-[#b02f00] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#5b4039] mt-2 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#5b4039] block">Price</span>
                      <span className="text-xl font-extrabold text-[#b02f00] tabular-nums">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(dish)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_4px_14px_rgba(255,87,34,0.3)] active:scale-95 ${
                        isAdded
                          ? 'bg-[#2a9d8f] text-white'
                          : 'bg-[#ff5722] hover:bg-[#b02f00] text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {isAdded ? 'check' : 'add_shopping_cart'}
                      </span>
                      <span>{isAdded ? 'Added!' : 'Add'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
