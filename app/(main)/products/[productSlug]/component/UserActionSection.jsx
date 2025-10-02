"use client";
import { useCart } from "@/lib/cart";
import { motion } from "framer-motion";
import { CheckCircle, Share2, ShoppingCart } from "lucide-react";
import { useState } from "react";

const UserActionSection = ({ product }) => {
  const [colorChoice, setColorChoice] = useState("সাদা এবং নীল");
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const totalStock = product.stock?.[0]?.quantity;
  const { addToCart } = useCart();

  // Handle quantity changes
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      {/* Color options
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 font-bengali mb-2">
          কালার বাছাই করুন:
        </h3>
        <div className="flex space-x-2">
          {["সাদা এবং নীল", "গোলাপি এবং লাল", "সবুজ এবং কালো"].map((color) => (
            <button
              key={color}
              onClick={() => setColorChoice(color)}
              className={`px-3 py-1 border rounded-full text-sm font-bengali ${
                colorChoice === color
                  ? "border-amber-500 bg-amber-50 text-amber-800"
                  : "border-gray-300 text-gray-700 hover:border-amber-300"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div> */}

      {/* Size Guide
      <div className="mb-6">
        <button
          onClick={() => setShowSizeGuide(!showSizeGuide)}
          className="text-amber-700 underline text-sm font-bengali flex items-center hover:text-amber-800"
        >
          <span>শাড়ির সাইজ গাইড দেখুন</span>
          {showSizeGuide ? (
            <ChevronUp className="h-4 w-4 ml-1" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-1" />
          )}
        </button>

        <AnimatePresence>
          {showSizeGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
              transition={{ duration: 0.3 }}
            >
              <div className="mt-2 p-4 border border-amber-200 bg-amber-50 rounded-md">
                <h4 className="font-semibold mb-2 font-bengali">
                  স্ট্যান্ডার্ড জামদানি শাড়ি সাইজ
                </h4>
                <ul className="text-sm font-bengali">
                  <li>• শাড়ির দৈর্ঘ্য: ৫.৫ মিটার (১৮ ফুট)</li>
                  <li>• শাড়ির প্রস্থ: ১.২ মিটার (৪৮ ইঞ্চি)</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}

      {/* Add to cart section */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <span className="mr-3 text-gray-700 font-bengali">পরিমাণ:</span>
          <div className="flex items-center border border-amber-300 rounded-md bg-white">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-3 py-2 text-amber-800 hover:bg-amber-100 transition-colors"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-6 py-2 text-gray-800 font-medium border-x border-amber-200">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-3 py-2 text-amber-800 hover:bg-amber-100 transition-colors"
            >
              +
            </button>
          </div>
          <div className="ml-4 text-sm text-gray-500 font-bengali">
            (অবশিষ্ট: {totalStock - quantity || 0})
          </div>
        </div>

        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart({ ...product, quantity })}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md font-bengali flex items-center justify-center"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            <span>কার্টে যোগ করুন</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-3 border border-amber-600 text-amber-600 hover:bg-amber-50 rounded-md flex items-center justify-center"
            onClick={() => alert("Share functionality coming soon!")}
          >
            <Share2 className="h-5 w-5" />
          </motion.button>
        </div>

        <div
          id="cart-success-message"
          className="mt-3 bg-green-50 border border-green-200 text-green-700 p-3 rounded-md flex items-center opacity-0 transition-opacity duration-300"
        >
          <CheckCircle className="h-5 w-5 mr-2" />
          <span className="font-bengali text-sm">
            পণ্যটি সফলভাবে কার্টে যোগ করা হয়েছে!
          </span>
        </div>
      </div>
    </>
  );
};

export default UserActionSection;
