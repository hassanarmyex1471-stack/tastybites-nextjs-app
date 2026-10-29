'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const {
    items,
    totalCount,
    subtotal,
    deliveryFee,
    discount,
    total,
    couponCode,
    applyCoupon,
    removeCoupon,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyCoupon(inputCode)) {
      setCouponError('');
      setInputCode('');
    } else {
      setCouponError('Invalid code. Try "HOTBITES" or "TASTY20"');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      clearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#e4e1ea] flex items-center justify-between bg-[#fbf8ff]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[24px] text-[#ff5722]">
                shopping_bag
              </span>
              <h2 className="text-xl font-bold text-[#1b1b21]">Your Order ({totalCount})</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-[#efecf5] text-[#5b4039] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Body: Items or Empty */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1b1b21]">Order Placed!</h3>
                <p className="text-sm text-[#5b4039] max-w-xs mx-auto">
                  Your meal is sizzling in our flagship kitchen. Estimated arrival: 25 minutes!
                </p>
                <button
                  onClick={() => {
                    setOrderSuccess(false);
                    setIsCartOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#ff5722] text-white text-sm font-bold shadow-md hover:bg-[#b02f00]"
                >
                  Order More Food
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <span className="material-symbols-outlined text-[54px] text-[#5b4039]/40">
                  lunch_dining
                </span>
                <p className="text-lg font-bold text-[#1b1b21]">Your cart is hungry!</p>
                <p className="text-xs text-[#5b4039]">Add delicious meals from the kitchen to get started.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#ff5722] text-white text-sm font-semibold hover:bg-[#b02f00]"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map(({ dish, quantity }) => (
                <div
                  key={dish.id}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#fbf8ff] border border-[#e4beb4]/30"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1b1b21] truncate">{dish.name}</h4>
                    <p className="text-xs text-[#b02f00] font-bold mt-0.5">
                      ${dish.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="inline-flex items-center bg-white rounded-full border border-[#e4beb4] px-2 py-0.5 shadow-sm">
                        <button
                          onClick={() => updateQuantity(dish.id, quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#5b4039] hover:text-[#ff5722]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-[#1b1b21]">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(dish.id, quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#5b4039] hover:text-[#ff5722]"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(dish.id)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer: Summary & Checkout */}
          {!orderSuccess && items.length > 0 && (
            <div className="p-6 border-t border-[#e4e1ea] bg-[#fbf8ff] space-y-4">
              {/* Promo input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code (e.g. HOTBITES)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-white border border-[#e4beb4]/60 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#5b4039] hover:bg-[#1b1b21] text-white text-xs font-bold transition-colors"
                >
                  Apply
                </button>
              </form>
              {couponError && <p className="text-xs text-red-500">{couponError}</p>}
              {couponCode && (
                <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <span>Code <strong>{couponCode}</strong> applied</span>
                  <button onClick={removeCoupon} className="text-emerald-900 font-bold hover:underline">
                    Remove
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5b4039] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1b1b21]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <strong className="text-emerald-600 uppercase font-bold">Free</strong>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-[#1b1b21] pt-2 border-t border-[#e4beb4]/40">
                  <span>Total</span>
                  <span className="text-[#b02f00]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                disabled={isCheckingOut}
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-full bg-[#ff5722] hover:bg-[#b02f00] text-white font-bold text-sm shadow-[0_8px_24px_-2px_rgba(255,87,34,0.35)] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <span>Dispatching Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}