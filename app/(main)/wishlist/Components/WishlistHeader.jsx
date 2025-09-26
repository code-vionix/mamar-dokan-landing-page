"use client";

import { ArrowLeft, Filter, Trash2 } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "../../components/common/Breadcrumb";
import Hero from "../../components/common/Hero";

export default function WishlistHeader({
  totalItems,
  onToggleFilter,
  onClearWishlist,
}) {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="আমার উইশলিস্ট"
        description="আপনার পছন্দের শাড়িগুলো এখানে সংরক্ষিত আছে"
      />

      {/* Breadcrumb */}
      <Breadcrumb pageName={"উইশলিস্ট"} />

      {/* Wishlist Summary and Actions */}
      <div className="container mx-auto px-6 pt-8">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold font-bengali text-gray-800">
              আমার উইশলিস্ট
            </h2>
            <p className="text-gray-600 font-bengali">
              মোট {totalItems}টি পণ্য
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-bengali"
              onClick={onToggleFilter}
            >
              <Filter size={16} />
              <span>ফিল্টার</span>
            </button>

            <Link
              href="/products"
              className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-bengali"
            >
              <ArrowLeft size={16} />
              <span>শপিং চালিয়ে যান</span>
            </Link>

            <button
              className="flex items-center space-x-2 text-red-600 border border-gray-300 px-4 py-2 rounded-md hover:bg-red-50 transition-colors font-bengali"
              onClick={onClearWishlist}
            >
              <Trash2 size={16} />
              <span>উইশলিস্ট খালি করুন</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
