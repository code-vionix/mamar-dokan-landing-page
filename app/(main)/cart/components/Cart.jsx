"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import Header from "./Header";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
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

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, you would redirect to checkout page
    setTimeout(() => {
      setIsCheckingOut(false);
      // For demo purposes only
      alert(
        "Proceeding to checkout! This would normally redirect to a checkout page."
      );
    }, 1500);
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
                handleCheckout={handleCheckout}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
