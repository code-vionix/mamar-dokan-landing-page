"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, XCircle } from "lucide-react";
import Link from "next/link";

export function WishlistEmptyState({ onStartShopping }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-10 text-center max-w-xl mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-28 h-28 mx-auto mb-6">
          <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-20"></div>
          <div className="relative bg-amber-50 rounded-full w-full h-full flex items-center justify-center">
            <Heart className="w-12 h-12 text-amber-300" />
          </div>
        </div>
        <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-4">
          আপনার উইশলিস্ট খালি
        </h2>
        <p className="text-gray-600 font-bengali mb-8">
          আপনি এখনও কোনো পণ্য উইশলিস্টে যোগ করেননি। অনুগ্রহ করে আমাদের কালেকশন
          দেখুন এবং আপনার পছন্দের শাড়িগুলি উইশলিস্টে যোগ করুন।
        </p>
        <Link
          href="/products"
          className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors font-bengali inline-flex items-center"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          শাড়ি দেখুন
        </Link>
      </motion.div>
    </div>
  );
}

export function FilterEmptyState({ onResetFilters }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <XCircle className="w-16 h-16 mx-auto text-amber-300 mb-4" />
      <h3 className="font-bengali text-lg font-medium text-gray-700 mb-2">
        কোন পণ্য পাওয়া যায়নি
      </h3>
      <p className="text-gray-600 font-bengali mb-6">
        বর্তমান ফিল্টার অনুযায়ী কোন পণ্য পাওয়া যায়নি। ফিল্টার পরিবর্তন করে
        আবার চেষ্টা করুন।
      </p>
      <button
        onClick={onResetFilters}
        className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali"
      >
        ফিল্টার রিসেট করুন
      </button>
    </div>
  );
}
