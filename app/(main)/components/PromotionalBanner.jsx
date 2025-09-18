"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const PromotionalBanner = () => {
  const [showPromo, setShowPromo] = useState(true);
  return (
    <>
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-amber-700 text-white text-center py-2 px-4 relative"
          >
            <p className="font-bengali text-sm">
              ঈদ উপলক্ষে সব শাড়িতে <span className="font-bold">২০% ছাড়!</span>{" "}
              কোড ব্যবহার করুন:{" "}
              <span className="bg-white text-amber-700 px-2 py-0.5 rounded font-bold mx-1">
                EID20
              </span>{" "}
              <Link href="/products" className="underline font-semibold">
                এখনই কিনুন
              </Link>
            </p>
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-200"
              aria-label="Close promotion"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PromotionalBanner;
