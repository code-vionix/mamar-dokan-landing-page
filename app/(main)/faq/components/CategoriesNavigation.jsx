"use client";
import React from "react";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Clock,
  CreditCard,
  HelpCircle,
  RotateCw,
  ShoppingBag,
  Truck,
  User,
} from "lucide-react";

const CategoriesNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // List of FAQ categories
  const categories = [
    { id: "all", name: "সকল", icon: <HelpCircle size={20} /> },
    {
      id: "ordering",
      name: "অর্ডার সম্পর্কিত",
      icon: <ShoppingBag size={20} />,
    },
    { id: "shipping", name: "শিপিং", icon: <Truck size={20} /> },
    { id: "returns", name: "রিটার্ন ও রিফান্ড", icon: <RotateCw size={20} /> },
    { id: "payment", name: "পেমেন্ট", icon: <CreditCard size={20} /> },
    { id: "products", name: "পণ্য সম্পর্কিত", icon: <Clock size={20} /> },
    { id: "account", name: "অ্যাকাউন্ট", icon: <User size={20} /> },
  ];

  
  const activeCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (id) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("category"); 
    } else {
      params.set("category", id);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="bg-amber-50 py-6 border-y border-amber-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              } shadow-sm font-bengali`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesNavigation;
