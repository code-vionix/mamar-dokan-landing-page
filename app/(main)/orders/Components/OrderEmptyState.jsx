"use client";
import { ShoppingBag, XCircle } from "lucide-react";
import Link from "next/link";

export default function OrderEmptyState({
  searchTerm,
  statusFilter,
  dateFilter,
  setSearchTerm,
  setStatusFilter,
  setDateFilter,
}) {
  const isFiltered =
    searchTerm || statusFilter !== "all" || dateFilter !== "all";

  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setDateFilter("all");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <XCircle className="w-16 h-16 mx-auto text-amber-300 mb-4" />
      <h3 className="font-bengali text-lg font-medium text-gray-700 mb-2">
        কোন অর্ডার পাওয়া যায়নি
      </h3>
      <p className="text-gray-600 font-bengali mb-6">
        {isFiltered
          ? "বর্তমান ফিল্টার অনুযায়ী কোন অর্ডার পাওয়া যায়নি। ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।"
          : "আপনি এখনও কোনও অর্ডার করেননি। আমাদের কালেকশন থেকে আপনার পছন্দের শাড়ি নির্বাচন করুন।"}
      </p>
      {isFiltered ? (
        <button
          onClick={handleReset}
          className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali"
        >
          ফিল্টার রিসেট করুন
        </button>
      ) : (
        <Link
          href="/products"
          className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali inline-flex items-center"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          শপিং শুরু করুন
        </Link>
      )}
    </div>
  );
}
