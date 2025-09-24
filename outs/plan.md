# শপিং কার্ট ম্যানেজমেন্টের বিস্তারিত পরিকল্পনা (সেশন স্টোরেজ)

এই পরিকল্পনাটিতে, আমরা লোকাল সেশন স্টোরেজ ব্যবহার করে একটি শপিং কার্ট তৈরি করবো। এর ফলে, ব্যবহারকারী পেজ রিলোড করলেও কার্টের ডেটা থেকে যাবে, কিন্তু ব্রাউজার বা ট্যাব বন্ধ করে দিলে ডেটা মুছে যাবে। কার্টে আমরা শুধুমাত্র প্রোডাক্টের ID গুলো একটি অ্যারে হিসেবে রাখব।

## ধাপ ১: কার্টের জন্য Context এবং Provider তৈরি করা

প্রথমে, আমরা কার্টের স্টেট এবং ফাংশনগুলো ম্যানেজ করার জন্য একটি সেন্ট্রাল ফাইল তৈরি করব।

**ফাইল লোকেশন:** `lib/CartContext.js` (যদি `lib` ফোল্ডার না থাকে, তাহলে প্রজেক্টের রুটে একটি তৈরি করে নিন)

এই ফাইলে আমরা React Context API ব্যবহার করব। এর ফলে পুরো অ্যাপ্লিকেশনে আমরা কার্টের ডেটা সহজেই ব্যবহার করতে পারব।

```javascript
"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// ১. কনটেক্সট তৈরি করা
const CartContext = createContext();

// ৩. কাস্টম হুক তৈরি করা (সহজে ব্যবহারের জন্য)
export const useCart = () => useContext(CartContext);

// ২. প্রোভাইডার কম্পোনেন্ট তৈরি করা
export const CartProvider = ({ children }) => {
  // কার্টের স্টেট, যেখানে প্রোডাক্টের ID গুলো থাকবে
  const [cart, setCart] = useState([]);

  // প্রথমবার অ্যাপ লোড হওয়ার সময় সেশন স্টোরেজ থেকে ডেটা আনার জন্য
  useEffect(() => {
    try {
      const storedCart = sessionStorage.getItem('cart');
      if (storedCart) {
        // যদি ডেটা থাকে, সেটাকে JSON থেকে অবজেক্টে কনভার্ট করে স্টেটে রাখা
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("সেশন স্টোরেজ থেকে কার্ট ডেটা পার্স করতে সমস্যা হয়েছে", error);
    }
  }, []); // খালি dependency array মানে এটা শুধু প্রথমবার রান হবে

  // কার্টের স্টেট পরিবর্তন হলেই সেশন স্টোরেজে ডেটা সেভ করার জন্য
  useEffect(() => {
    // কার্ট অ্যারে-কে JSON স্ট্রিং-এ কনভার্ট করে সেশন স্টোরেজে সেভ করা
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // [cart] মানে হলো, কার্টের স্টেট পরিবর্তন হলেই এই ইফেক্ট রান হবে

  // কার্টে প্রোডাক্ট যোগ করার ফাংশন
  const addToCart = (productId) => {
    setCart((prevCart) => {
      // যদি প্রোডাক্টটি আগে থেকেই কার্টে না থাকে, তাহলেই শুধু যোগ করা হবে
      if (!prevCart.includes(productId)) {
        return [...prevCart, productId];
      }
      return prevCart; // যদি আগে থেকেই থাকে, তাহলে কোনো পরিবর্তন হবে না
    });
  };

  // কার্ট থেকে প্রোডাক্ট মুছে ফেলার ফাংশন
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };

  // পুরো কার্ট খালি করার ফাংশন
  const clearCart = () => {
    setCart([]);
  };

  // একটি প্রোডাক্ট কার্টে আছে কিনা, তা চেক করার ফাংশন
  const isInCart = (productId) => {
    return cart.includes(productId);
  };

  // প্রোভাইডারের মাধ্যমে কার্টের স্টেট এবং ফাংশনগুলো পুরো অ্যাপে সরবরাহ করা
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
```

## ধাপ ২: `CartProvider`-কে ইন্টিগ্রেট করা

এখন আমাদের `CartProvider`-টি অ্যাপের প্রধান লেআউটে যুক্ত করতে হবে যাতে সব পেজ এবং কম্পোনেন্ট এই কনটেক্সট ব্যবহার করতে পারে।

**ফাইল লোকেশন:** `app/(main)/layout.jsx`

এই ফাইলে গিয়ে `CartProvider`-কে ইম্পোর্ট করতে হবে এবং `children`-কে এটি দিয়ে র‍্যাপ (wrap) করতে হবে।

```javascript
import { CartProvider } from '@/lib/CartContext'; // পাথ ঠিক আছে কিনা নিশ্চিত হন
import Navbar from './components/Navbar'; // উদাহরণস্বরূপ
import Footer from './components/Footer'; // উদাহরণস্বরূপ

export default function MainLayout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
}
```

## ধাপ ৩: বিভিন্ন কম্পোনেন্টে কার্ট কনটেক্সট ব্যবহার করা

এখন আমরা `useCart` হুক ব্যবহার করে বিভিন্ন কম্পোনেন্টে কার্টের কার্যকারিতা যুক্ত করব।

### ৩.১. "Add to Cart" বাটন (প্রোডাক্ট পেজ)

যেসব জায়গায় "Add to Cart" বাটন আছে, সেখানে `addToCart` ফাংশনটি ব্যবহার করতে হবে।

**উদাহরণ ফাইল:** `app/(main)/products/[productId]/component/UserActionSection.jsx`

- প্রথমে `useCart` হুক ইম্পোর্ট করুন: `import { useCart } from '@/lib/CartContext';`
- কম্পোনেন্টের ভেতরে `useCart` কল করে প্রয়োজনীয় ফাংশন ও স্টেট নিন: `const { addToCart, isInCart } = useCart();`
- বাটনের `onClick` ইভেন্টে `addToCart(productId)` ফাংশনটি কল করুন। `productId` আপনি props বা URL থেকে পাবেন।
- `isInCart(productId)` ব্যবহার করে আপনি বাটনের লেখা বা স্টাইল পরিবর্তন করতে পারেন। যেমন: `isInCart(productId) ? 'কার্টে যোগ হয়েছে' : 'কার্টে যোগ করুন'`।

### ৩.২. কার্ট পেজ

কার্ট পেজে আমরা কার্টে থাকা প্রোডাক্টগুলো দেখাব এবং সেগুলো ম্যানেজ করার অপশন দেব।

**ফাইল লোকেশন:** `app/(main)/cart/page.jsx`

- `useCart` হুক ইম্পোর্ট করুন।
- `const { cart, removeFromCart, clearCart } = useCart();` দিয়ে কার্টের ডেটা ও ফাংশন নিন।
- `cart` এখন একটি ID-র অ্যারে (যেমন: `[1, 5, 3]`)। আপনাকে এই ID গুলো ব্যবহার করে প্রতিটি প্রোডাক্টের সম্পূর্ণ ডেটা (নাম, দাম, ছবি ইত্যাদি) আপনার ডেটা সোর্স (API বা লোকাল `mockProducts.json`) থেকে খুঁজে বের করতে হবে।
- এরপর, প্রোডাক্টের তালিকাটি ম্যাপ করে প্রতিটি আইটেমকে UI-তে দেখান।
- প্রতিটি আইটেমের পাশে একটি "Remove" বাটন রাখুন, যার `onClick`-এ `removeFromCart(product.id)` কল হবে।
- একটি "Clear Cart" বাটন রাখতে পারেন, যা `clearCart()` ফাংশনটিকে কল করবে।

### ৩.৩. নেভিগেশন বার (Navbar)

নেভিগেশন বারে কার্ট আইকনের পাশে কার্টে থাকা আইটেমের সংখ্যা দেখাতে হবে।

**ফাইল লোকেশন:** `app/(main)/components/Navbar.jsx` বা `app/(main)/components/Navbar/NavIcons.jsx`

- `useCart` হুক ইম্পোর্ট করুন।
- `const { cart } = useCart();` দিয়ে কার্টের স্টেট নিন।
- কার্টে থাকা আইটেমের সংখ্যা হলো `cart.length`।
- এই সংখ্যাটি কার্ট আইকনের পাশে একটি ব্যাজ (badge) হিসেবে দেখান। কার্টে কোনো আইটেম যোগ বা حذف করা হলে এটি স্বয়ংক্রিয়ভাবে আপডেট হয়ে যাবে।

এই পদ্ধতি অনুসরণ করলে, আপনার কার্ট ম্যানেজমেন্টের কোড অনেক পরিষ্কার, গোছানো এবং সহজে রক্ষণাবেক্ষণযোগ্য হবে।