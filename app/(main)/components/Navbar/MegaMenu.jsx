// app/components/layout/navbar/components/MegaMenu.jsx
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Crown } from "lucide-react";
import { megaMenuCategories } from "../constants/navigationData";

export default function MegaMenu({
  isOpen,
  menuRef,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-0 mt-4 w-[700px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden z-50 border border-amber-100"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/30"></div>
          <div className="relative grid grid-cols-3 gap-0">
            {/* Category Column */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-r border-amber-100">
              <h3 className="font-bengali font-bold text-xl mb-4 text-amber-800 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                শাড়ির ধরন
              </h3>
              <ul className="space-y-3">
                {megaMenuCategories.types.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="font-bengali text-gray-700 hover:text-amber-700 hover:bg-amber-50 py-2 px-3 rounded-lg transition-all duration-300 flex items-center group"
                    >
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Occasion Column */}
            <div className="p-6 border-r border-amber-100">
              <h3 className="font-bengali font-bold text-xl mb-4 text-amber-800 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                সুযোগ অনুযায়ী
              </h3>
              <ul className="space-y-3">
                {megaMenuCategories.occasions.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="font-bengali text-gray-700 hover:text-amber-700 hover:bg-amber-50 py-2 px-3 rounded-lg transition-all duration-300 flex items-center group"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Featured product */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur opacity-30"></div>
                <div className="relative h-32 w-32 mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/product-1.jpg"
                    fill
                    alt="Featured Product"
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <h3 className="font-bengali font-bold text-lg mb-2 text-amber-800">
                বিশেষ অফার
              </h3>
              <p className="font-bengali text-sm text-gray-600 mb-4 leading-relaxed">
                দারুচিনি রেশমি জামদানি শাড়ি
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products/1"
                  className="font-bengali bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg flex items-center"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  দেখুন
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}