import {ShoppingBag  } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <>
    <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <ShoppingBag size={60} className="text-amber-300" />
              </div>
              <h2 className="text-2xl font-bengali mb-4 text-gray-700">
                আপনার কার্ট খালি
              </h2>
              <p className="text-gray-500 font-bengali mb-6 max-w-md mx-auto">
                আপনি এখনও কোনো পণ্য আপনার কার্টে যোগ করেন নি। আমাদের বিস্তৃত
                শাড়ি কালেকশন দেখুন।
              </p>
              <Link
                href="/products"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md font-bengali hover:bg-amber-700 transition-colors"
              >
                শপিং চালিয়ে যান
              </Link>
            </div>
    </>
  );
};

export default EmptyCart;