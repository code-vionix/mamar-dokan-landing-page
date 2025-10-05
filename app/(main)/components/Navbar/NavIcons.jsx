import { useCart } from "@/lib/cart";
import { motion } from "framer-motion";
import { Heart, LogIn, Search, ShoppingCart, UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

export default function NavIcons({
  searchOpen,
  setSearchOpen,
  session,
  isMobile,
}) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <div
      className={`flex items-center space-x-6 ${
        isMobile ? "md:hidden" : "hidden md:flex"
      }`}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSearchOpen(!searchOpen)}
        className="text-gray-700 hover:text-amber-600 transition-all duration-300 p-2 rounded-full hover:bg-amber-50"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </motion.button>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/wishlist"
          className="text-gray-700 hover:text-amber-600 transition-all duration-300 relative p-2 rounded-full hover:bg-amber-50"
          aria-label="Wishlist"
        >
          <Heart className="w-5 h-5" />
          <motion.span
            className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            2
          </motion.span>
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/cart"
          className="text-gray-700 hover:text-amber-600 transition-all duration-300 relative p-2 rounded-full hover:bg-amber-50"
          aria-label="Cart"
        >
          <ShoppingCart className="w-5 h-5" />
          <motion.span
            className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            {cartItems.length || 0}
          </motion.span>
        </Link>
      </motion.div>

      {!isMobile && (
        <>
          <div className="border-l border-gray-300 h-8 mx-2"></div>
          {session ? (
            <ProfileMenu
              isProfileMenuOpen={isProfileMenuOpen}
              setIsProfileMenuOpen={setIsProfileMenuOpen}
            />
          ) : (
            <div className="flex space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center text-sm font-medium bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full border border-amber-200 hover:border-amber-300"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  <span className="font-bengali font-medium">লগইন</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/register"
                  className="text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center text-sm font-medium px-4 py-2 rounded-full shadow-lg"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  <span className="font-bengali font-medium">রেজিস্টার</span>
                </Link>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
