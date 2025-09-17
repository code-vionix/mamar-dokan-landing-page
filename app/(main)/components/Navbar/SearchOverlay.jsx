import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import navigationData from "./navigationData";

export default function SearchOverlay({ searchOpen, setSearchOpen }) {
  const popularSearches = navigationData.find(item => item.key === "mega-menu")?.sections.flatMap(section => section.links).map(link => link.label) || [];
  
  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-amber-100 z-50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/30"></div>
          <div className="relative container mx-auto p-6">
            <div className="flex items-center bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
              <Search className="w-5 h-5 text-amber-500 ml-4" />
              <input
                type="text"
                placeholder="শাড়ি খুঁজুন... (যেমন: জামদানি, রেশমি, প্রিমিয়াম)"
                className="w-full p-4 font-bengali text-lg focus:outline-none bg-transparent"
                autoFocus
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(false)}
                className="mr-4 text-gray-500 hover:text-amber-600 p-2 rounded-full hover:bg-amber-50 transition-all duration-300"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 font-bengali">
                জনপ্রিয় খোঁজ:
              </span>
              {popularSearches.slice(0, 4).map((term, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bengali hover:bg-amber-200 transition-all duration-300"
                >
                  {term}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}