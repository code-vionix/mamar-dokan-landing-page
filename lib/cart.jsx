"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// Mock cart data for testing
const mockCartItems = [
  {
    id: "1",
    name: "ডোরা জামদানি শাড়ি",
    price: 15500,
    quantity: 1,
    image: "/assets/product-1.jpg",
  },
  {
    id: "2",
    name: "ফুলবুটি জামদানি",
    price: 12800,
    salePrice: 10900,
    quantity: 2,
    image: "/assets/product-2.jpg",
  },
  {
    id: "3",
    name: "কাটারি জামদানি শাড়ি",
    price: 18200,
    quantity: 1,
    image: "/assets/product-3.jpg",
  },
];

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  // Initialize with empty array to avoid hydration mismatch
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Track if client-side code has loaded

  // Load cart from localStorage only on the client side
  useEffect(() => {
    const savedCart = localStorage.getItem("jamdani-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        setCartItems(mockCartItems);
      }
    } else {
      setCartItems(mockCartItems);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes, but only after initial load
  useEffect(() => {
    if (!isLoaded) return;

    if (cartItems.length > 0) {
      localStorage.setItem("jamdani-cart", JSON.stringify(cartItems));
    }

    const items = cartItems.reduce((total, item) => total + item.quantity, 0);
    const amount = cartItems.reduce((total, item) => {
      const price = item.salePrice || item.price;
      return total + price * item.quantity;
    }, 0);

    setTotalItems(items);
    setTotalAmount(amount);
  }, [cartItems, isLoaded]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

    if (cartItems.length === 1) {
      localStorage.removeItem("jamdani-cart");
    }
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("jamdani-cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalAmount,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
