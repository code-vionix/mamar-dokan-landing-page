"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect } from "react";

export default function SuccessMessage({ message, isVisible, onDismiss }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 3000); // Message disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onDismiss]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-20 right-4 z-50 pointer-events-none"
        >
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg flex items-center">
            <Check className="h-5 w-5 mr-2" />
            <span className="font-bengali">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
