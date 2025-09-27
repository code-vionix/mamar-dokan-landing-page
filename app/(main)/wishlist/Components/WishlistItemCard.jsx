"use client";

import { motion } from "framer-motion";
import { Check, Share2, ShoppingCart, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function WishlistItemCard({
  item,
  isAddedToCart,
  onAddToCart,
  onRemove,
}) {

  const { data: session, status } = useSession();
    const userId = session?.user?.id;

// === toggle favorite ===
  const toggleFavorite = async (productId) => {
    if (!userId) {
      // === redirect user to login page ===
      router.push("/login");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wishlist/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        onRemove(productId)
      } else {
        console.error("Error:", data.message);
      }
    } catch (err) {
      console.error("Error toggling wishlist:", err);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-sm overflow-hidden border ${
        item.isAvailable ? "border-gray-100" : "border-gray-100 opacity-75"
      }`}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden group">
        <Image
         
           src={item?.images?.[0] || "/placeholder.png"}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Discount Badge */}
        {item.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full font-bengali">
            {item.discount}% ছাড়
          </div>
        )}

        {/* Availability Badge */}
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white/90 text-red-600 px-4 py-2 rounded-md font-bengali font-medium text-sm">
              স্টকে নেই
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <button
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
            onClick={() => toggleFavorite(item.id)}
            aria-label="Remove from wishlist"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
          <button
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
            aria-label="Share"
          >
            <Share2 size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${item.id}`}>
          <h3 className="font-bengali font-medium text-lg mb-1 hover:text-amber-600 transition-colors">
            {item.name}
          </h3>
        </Link>

        {/* Material & Occasion */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600 font-bengali">{item.material}</p>
          <p className="text-xs bg-amber-100/50 text-amber-800 px-2 py-0.5 rounded-full font-bengali">
            {item.occasion}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <p className="font-bengali font-medium text-amber-800 text-lg">
              ৳ {item?.price?.toLocaleString()}
            </p>
            {item.price > item.discountPrice && (
              <p className="text-sm text-gray-500 line-through ml-2">
                ৳ {item.price.toLocaleString()}
              </p>
            )}
            
          </div>
          {/* Color Options */}
          <div className="flex items-center space-x-1">
            {item?.colors?.map((color, idx) => (
              <div
                key={idx}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Link
            href={`/products/${item.id}`}
            className="flex-1 bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali text-sm text-center"
          >
            বিস্তারিত দেখুন
          </Link>
          <button
            disabled={!item.isAvailable || isAddedToCart}
            onClick={() => onAddToCart(item.id)}
            className={`flex-1 py-2 rounded-md transition-colors font-bengali text-sm flex items-center justify-center space-x-1 ${
              !item.isAvailable
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : isAddedToCart
                ? "bg-green-500 text-white"
                : "bg-white border border-amber-600 text-amber-600 hover:bg-amber-50"
            }`}
          >
            {isAddedToCart ? (
              <>
                <Check size={14} />
                <span>কার্টে যোগ হয়েছে</span>
              </>
            ) : (
              <>
                <ShoppingCart size={14} />
                <span>কার্টে যোগ করুন</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
