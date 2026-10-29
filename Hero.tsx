'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { DISHES } from '@/lib/data';

export function Hero() {
  const { addToCart } = useCart();
  const truffleBurger = DISHES.find((d) => d.id === 'dish-7') || DISHES[0];

  return (
    <section className="relative overflow-hidden px-6 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto w-full">
      {/* Ambient Culinary Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ff5722]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-24 w-[32rem] h-[32rem] bg-[#ffab69]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & Conversions */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-[0_4px_16px_-2px_rgba(180,130,90,0.08)] border border-[#e4beb4]/30">
            <span className="text-base">🍲</span>
            <span className="text-sm font-semibold text-[#b02f00]">#1 Rated Food Delivery in Town</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1b1b21] tracking-tight leading-[1.1]">
            Fresh Food, Delivered <br className="hidden sm:inline" />
            <span className="text-[#ff5722] drop-shadow-[0_4px_16px_rgba(255,87,34,0.3)]">
              Hot to Your Door
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#5b4039] max-w-2xl leading-relaxed">
            Savor gourmet chef-crafted dishes made from farm-fresh organic ingredients. Delivered sizzling hot right to your doorstep in under 30 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#popular-dishes"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ff5722] hover:bg-[#b02f00] text-white font-semibold text-sm shadow-[0_8px_24px_-2px_rgba(255,87,34,0.35)] active:scale-[0.98] transition-all group"
            >
              <span>Order Now</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                shopping_bag
              </span>
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#f5f2fb] text-[#1b1b21] font-semibold text-sm shadow-[0_4px_16px_-2px_rgba(180,130,90,0.08)] border border-[#e4beb4]/30 transition-all"
            >
              <span>View Menu</span>
              <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex -space-x-3">
              <img
                className="w-11 h-11 rounded-full object-cover shadow-sm bg-[#efecf5] border-2 border-white"
                alt="Happy customer enjoying gourmet food"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzgbbNni6mw0F5l_Pb63O7psxtxbXbFwvxRjfDATtyPPcnH8WNxrWfEafPrHhARzdzNPG053wdYWPCxgQ_nt3MHRDfxlczV0hdrUcUI6o0nlpBlB33D1ru8YsGQ4NqmbFZE2THSBPEcN56atpCKMcscUrbWSuipSaPmHi5bWyxaSbrRsJJhTQXkGz0Zd3A-g2z9DpS_mr_O38-pHBeaqb3UuDOweBZNEGxXwkUMemOKhFuSVtwd5eh"
              />
              <img
                className="w-11 h-11 rounded-full object-cover shadow-sm bg-[#efecf5] border-2 border-white"
                alt="Customer with food bag"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgzEcItXokcTUZzNAImbgHAk1GFLfBA_d0Mrtdk2SshD0uT246rvKCpNbRSuqQpjFXmbl65rzNPdXBMn-XyjRU_i3X-OEfZGVTw0mpbyHEkrsx1zILLY8DxCf2HEO80JpDmyEe15Q4eh8zcqVFdiNFu5mLkS-xDkBhi1QdfHZjNj5wJWOFhX9no9LOTL7kVqYNaiBnIsHCqIRcKeOPVJC_AfoZtHlK9IKAOozpzE78Cu8LxcEzs_7f"
              />
              <img
                className="w-11 h-11 rounded-full object-cover shadow-sm bg-[#efecf5] border-2 border-white"
                alt="Smiling foodie customer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvrwH55KbF1xABC96e8i9pLPHfZNcQLo1ms_qtq4GhqPTn4KLFG13giQCRJ-aeTRBegi9b2Mmh-bonCWHEs4iBOWThwsr7EPqLjcjAL6llJoYRJssYmdQz8_0ZFn7nF9gggMsWrGiIe5_RtngrlI9dYdBfmVi7KZWbb7WC16WYqWRjhReI9qalZc1dJJUGceVGdwr7-HSdSecMNkGZVuVVGUfLkuHINwpbMyQj5zknMqxC32Eyg9W"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#ffab69]">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span className="text-xs text-[#1b1b21] font-bold ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-[#5b4039] font-medium">
                <strong className="text-[#1b1b21] font-semibold">50,000+ Happy Foodies</strong> served this month
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Center Food Plate & Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-full p-4 flex items-center justify-center">
            {/* Halo background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffdbd1]/50 via-[#ffab69]/30 to-[#ffdad2]/40 rounded-full blur-2xl" />

            {/* Food Image */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-[0_20px_50px_-10px_rgba(180,100,50,0.22)] bg-white border-4 border-white">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                alt="Gourmet artisan beef burger with golden brioche bun and fries"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQYquVtz6e0827S1Zd9RyXbpePNVDX9q1jghi_qp5ou3SEanGdR2nduZee7boFORRzkh6WJmdCetJvd4DImdESG4DYZJlTmHnGqRguZ6rIwYX3o0lvBa8YjRbaWl2j8hMGIDiyz9l6phRFLh8p7Xf5Wfcz3iIZl7OxVm__FpqzJ5RewRxaLJ7ZZz8fr7XIib3U5Q-eYuBCjrDiFfIl7pM_18k9VxrQ3YdKzA14PeQzAb4IrmIm1sex"
              />
            </div>

            {/* Floating Badge 1: Speed Delivery */}
            <div className="absolute -top-2 left-0 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-[0_12px_28px_-4px_rgba(180,100,50,0.14)] flex items-center gap-2.5 border border-[#e4beb4]/40 animate-bounce" style={{ animationDuration: '3.5s' }}>
              <div className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </div>
              <div>
                <p className="text-[10px] text-[#ff5722] font-bold uppercase tracking-wider">Fast Track</p>
                <p className="text-xs text-[#1b1b21] font-bold">25-Min Delivery</p>
              </div>
            </div>

            {/* Floating Badge 2: Promo Tag */}
            <div className="absolute top-10 -right-2 sm:-right-6 z-20 bg-[#ff5722] text-white px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase shadow-[0_8px_24px_-2px_rgba(255,87,34,0.35)] flex items-center gap-1.5">
              <span>🔥</span>
              <span>20% OFF FIRST ORDER</span>
            </div>

            {/* Floating Badge 3: Mini Product Pill Card */}
            <div
              onClick={() => addToCart(truffleBurger)}
              className="absolute -bottom-4 right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_16px_40px_-6px_rgba(40,25,20,0.16)] flex items-center gap-3 max-w-[240px] border border-[#e4beb4]/40 cursor-pointer hover:scale-105 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#efecf5] overflow-hidden shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  alt="Cheesy truffle burger thumbnail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY3y5Yb2Bz2o45hgmXnjG8MIjYxBwaV1B9VQf_-R5mbcfVnD-9E9t9gsKh5w1l7Yf8ERr6ZKOEsWqrHKJD4HkCZTz2cXE5zIYG6rQAzTKQCj15oWXVhG-8t3DGGh40GP_Y4xFsU5QKGQTzqdJO2M95c7yhW00HAcHxXgh91r-cTB1nxfR5_NW9C7CxUX_iCDrqgx_zNytV_gkduQhyULw2IWobbuPpDF3G4xCY7leRa64st3n-oszL"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs text-[#1b1b21] font-bold truncate">Cheesy Truffle Burger</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-[#b02f00] font-extrabold">$14.99</span>
                  <span className="inline-flex items-center text-[11px] font-bold text-[#5b4039]">
                    <span className="material-symbols-outlined text-[13px] text-[#ffab69]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}