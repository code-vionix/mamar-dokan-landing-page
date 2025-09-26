"use client";
import { ChevronDown, Filter, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function OrderHeader({
  totalOrders,
  searchTerm,
  handleSearch,
  filterOpen,
  setFilterOpen,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between mb-6 gap-4">
      <div>
        <h2 className="text-2xl font-bold font-bengali text-gray-800">
          আমার অর্ডার
        </h2>
        <p className="text-gray-600 font-bengali">মোট {totalOrders}টি অর্ডার</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">
        {/* Search */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="অর্ডার নম্বর দিয়ে খুঁজুন..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-bengali"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Filter Button */}
        <button
          className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-bengali"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Filter size={16} />
          <span>ফিল্টার</span>
          <ChevronDown
            size={16}
            className={`transform transition-transform ${
              filterOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Continue Shopping Button */}
        <Link
          href="/products"
          className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali justify-center"
        >
          <ShoppingBag size={16} />
          <span>আরও শপিং করুন</span>
        </Link>
      </div>
    </div>
  );
}
