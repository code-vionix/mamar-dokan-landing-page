"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Trash2, X } from "lucide-react";

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  address,
  isDeleting,
}) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && address && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bengali text-lg font-medium text-red-800">
                ঠিকানা মুছে ফেলুন
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="font-bengali text-gray-700">
                আপনি কি নিশ্চিত যে আপনি এই ঠিকানাটি মুছে ফেলতে চান?
              </p>
              
              <div className="bg-red-50 rounded-md p-4 border border-red-200">
                <p className="font-bengali font-medium text-gray-800">
                  {address.firstName} {address.lastName}
                </p>
                <p className="text-sm text-gray-600 font-bengali">
                  {address.addressLine1}
                </p>
                {address.addressLine2 && (
                  <p className="text-sm text-gray-600 font-bengali">
                    {address.addressLine2}
                  </p>
                )}
                <p className="text-sm text-gray-600 font-bengali">
                  {address.city}
                </p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={onConfirm}
                  disabled={isDeleting}
                  className="bg-red-600 text-white px-6 py-2 rounded-md flex items-center hover:bg-red-700 font-bengali disabled:opacity-50"
                >
                  {isDeleting ? (
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Trash2 className="h-4 w-4 mr-2" />
                  )}
                  হ্যাঁ, মুছে ফেলুন
                </button>
                <button
                  onClick={onClose}
                  className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 font-bengali"
                >
                  না, বাতিল করুন
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
