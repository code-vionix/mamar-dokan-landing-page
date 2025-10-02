"use client";

import { useCart } from "@/lib/cart";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import Header from "./Header";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const {
    cartItems,
    totalAmount,
    removeFromCart,
    updateQuantity,
    clearCart,
    isLoaded,
  } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  // Show loading state while cart data is being fetched from localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={40} className="animate-spin text-amber-600" />
      </div>
    );
  }

  return (
    <div className="bg-amber-50/30 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* === Page Header === */}
          <Header cartItems={cartItems} />
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* === Cart Items Section === */}

              <CartItems
                cartItems={cartItems}
                clearCart={clearCart}
                handleQuantityChange={handleQuantityChange}
                removeFromCart={removeFromCart}
              />

              {/* Order Summary Section */}

              <OrderSummary
                totalAmount={totalAmount}
                isCheckingOut={isCheckingOut}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
