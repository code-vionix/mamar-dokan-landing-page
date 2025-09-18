// app/components/layout/navbar/constants/navigationData.js
import {
    User, Heart, ShoppingBag, MapPin, Settings, Phone, Crown, Star, Gift,
  } from "lucide-react";
  
  // টপ বারের ডান পাশের লিংকগুলো
  export const topBarLinks = [
    { href: "/track-order", label: "অর্ডার ট্র্যাকিং", icon: Star },
    { href: "/faq", label: "সাধারণ প্রশ্ন" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/contact", label: "যোগাযোগ" },
  ];
  
  // প্রধান নেভিগেশন লিংকগুলো (ডেস্কটপ)
  export const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/new-arrivals", label: "নতুন আগমন" },
    { href: "/offers", label: "ছাড়ের অফার", icon: Gift },
  ];
  
  // মেগা মেনুর ক্যাটাগরিগুলো
  export const megaMenuCategories = {
    types: [
      { href: "/products?category=premium", label: "প্রিমিয়াম জামদানি" },
      { href: "/products?category=classic", label: "ক্লাসিক জামদানি" },
      { href: "/products?material=রেশম", label: "রেশমি জামদানি" },
      { href: "/products?material=সুতি", label: "সুতি জামদানি" },
    ],
    occasions: [
      { href: "/products?occasion=wedding", label: "বিবাহ উপলক্ষে" },
      { href: "/products?occasion=festive", label: "উৎসব উপলক্ষে" },
      { href: "/products?occasion=daily", label: "দৈনন্দিন ব্যবহারের" },
    ],
  };
  
  // প্রোফাইল ড্রপডাউন মেনুর আইটেমগুলো
  export const profileMenuItems = {
    account: [
      { href: "/profile", icon: User, label: "প্রোফাইল" },
      { href: "/wishlist", icon: Heart, label: "পছন্দের তালিকা" },
    ],
    orders: [
      { href: "/orders", icon: ShoppingBag, label: "অর্ডার" },
      { href: "/orders/tracking", icon: MapPin, label: "অর্ডার ট্র্যাকিং" },
    ],
    support: [
      { href: "/settings", icon: Settings, label: "সেটিংস" },
      { href: "/help", icon: Phone, label: "সাহায্য" },
    ],
  };
  
  // সার্চ সাজেশনগুলো
  export const searchSuggestions = [
    "প্রিমিয়াম জামদানি", "রেশমি শাড়ি", "বিবাহের শাড়ি", "ঈদ কালেকশন",
  ];
  
  // মোবাইল মেনুর নিচের দিকের লিংকগুলো
  export const mobileBottomLinks = [
      { href: "/track-order", label: "অর্ডার ট্র্যাকিং", icon: MapPin },
      { href: "/faq", label: "সাধারণ প্রশ্ন", icon: Star },
      { href: "/contact", label: "যোগাযোগ", icon: Phone },
  ];