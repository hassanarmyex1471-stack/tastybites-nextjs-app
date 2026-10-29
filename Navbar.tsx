'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { CartDrawer } from './CartDrawer';

export function Navbar() {
  const pathname = usePathname();
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/#popular-dishes' },
    { label: 'About', href: '/#about-us' },
    { label: 'Contact', href: '/#contact-us' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf8ff]/85 backdrop-blur-xl shadow-[0_4px_16px_-2px_rgba(180,130,90,0.08)] border-b border-[#e4beb4]/20 transition-all">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              alt="TastyBites Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WELZObKexreUxAEu56azqk_SmzMuiuS6go04AMVzCvBsU1RFefQhBVOWTGycTBPaDLhB8ITxUTg8CXY5zrhhX14MH1eyByGk2Ipn1HEAWieoybukI1QXFUqWGsJtQKVal-kP7xey0t0enmCp2_8Z7IjyU1yqGTisnmtkhFzQy3ZgVtNBqOVb4UOI_sMGRFzDK5Ce4wuylW2qSWlb6SD2UVrScW943u9KFeVOVMWhAvZGLIVP4yoGVzbVk"
            />
            <span className="font-extrabold text-2xl text-[#b02f00] tracking-tight">TastyBites</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 bg-[#f5f2fb] rounded-full border border-[#e4e1ea]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    isActive
                      ? 'bg-[#ff5722] text-white shadow-[0_4px_14px_rgba(255,87,34,0.25)]'
                      : 'text-[#5b4039] hover:bg-[#efecf5] hover:text-[#1b1b21]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Zone: Cart, Order Now, Avatar */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-[#f5f2fb] hover:bg-[#efecf5] text-[#1b1b21] transition-all flex items-center justify-center border border-[#e4e1ea] hover:scale-105"
              aria-label="View Shopping Cart"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 bg-[#ff5722] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(255,87,34,0.35)] animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Order Now CTA */}
            <a
              href="#popular-dishes"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#ff5722] hover:bg-[#b02f00] text-white font-semibold text-sm rounded-full shadow-[0_8px_24px_-2px_rgba(255,87,34,0.35)] active:scale-[0.98] transition-all"
            >
              Order Now
            </a>

            {/* User Avatar */}
            <div className="flex items-center p-0.5 rounded-full ring-2 ring-[#ff5722]/20">
              <img
                alt="Profile Avatar"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJyOXDvttnBXbXiSVRe5_sR8tfNTrBLKfKXn3gQbBWIcUsF_Q6oX3rU701Ejv5Ly_pUJ5yx_N-GpGM1n8JHzSSATYV3B77a-9tinfZswBmLvJlm3n6wrS2qy9PmHaDUwMEfDmVpC6PcVGqLGslkVK51aX8y64RSOTAZVPbCRFL-SK8YdI3P275F4g3qF6bLghByapB4D9rTMYbArodp1UQ7Q-clwmNIuMVEEa56H-prAJI8_ZxCl7D"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}