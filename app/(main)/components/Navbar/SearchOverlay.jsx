"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import navigationData from "./navigationData";
import { useEffect, useMemo, useState } from "react";

// const products = [
//   {
//     id: "1",
//     name: "ডোরা জামদানি শাড়ি",
//     description: "নীল পাড়ের সাথে সাদা শাড়ি",
//     price: "15,500",
//     image: "/assets/product-1.jpg",
//   },
//   {
//     id: "2",
//     name: "ফুলবুটি জামদানি",
//     description: "লাল পাড়ের সাথে গোলাপি শাড়ি",
//     price: "12,800",
//     salePrice: "10,900",
//     image: "/assets/product-2.jpg",
//   },
//   {
//     id: "3",
//     name: "কাটারি জামদানি শাড়ি",
//     description: "কালো পাড়ের সাথে সবুজ শাড়ি",
//     price: "18,200",
//     image: "/assets/product-3.jpg",
//   },
//   {
//     id: "4",
//     name: "তারা জামদানি শাড়ি",
//     description: "সোনালি পাড়ের সাথে লাল শাড়ি",
//     price: "22,500",
//     image: "/assets/product-4.jpg",
//   },
// ];

export default function SearchOverlay({ searchOpen, setSearchOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const popularSearches =
    navigationData
      .find((item) => item.key === "mega-menu")
      ?.sections.flatMap((section) => section.links)
      .map((link) => link.label) || [];

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
        );
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== "") {
        console.log(searchQuery);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const updateSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

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
                value={searchQuery}
                onChange={updateSearchQuery}
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
              {/* {popularSearches.slice(0, 4).map((term, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bengali hover:bg-amber-200 transition-all duration-300"
                >
                  {term}
                </motion.button>
              ))} */}
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bengali hover:bg-amber-200 transition-all duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))
              ) : (
                <p className="text-sm text-gray-600 font-bengali">
                  কোন ফলাফল নেই
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
