"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function FilterPanel({
  filterOpen,
  statusFilter,
  setStatusFilter,
  dateFilter,
  setDateFilter,
}) {
  const handleReset = () => {
    setStatusFilter("all");
    setDateFilter("all");
  };

  return (
    <AnimatePresence>
      {filterOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden"
        >
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h3 className="font-bengali font-medium">ফিল্টার অপশন</h3>
              <button
                className="text-sm text-amber-600 hover:text-amber-700 font-bengali"
                onClick={handleReset}
              >
                সব রিসেট করুন
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Status Filter */}
              <div>
                <h4 className="font-bengali font-medium mb-3 text-gray-700">
                  অর্ডার স্ট্যাটাস
                </h4>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "সব স্ট্যাটাস" },
                    { value: "processing", label: "প্রসেসিং" },
                    { value: "shipped", label: "শিপিং হয়েছে" },
                    { value: "delivered", label: "ডেলিভারি সম্পন্ন" },
                    { value: "cancelled", label: "বাতিল করা হয়েছে" },
                  ].map((filter) => (
                    <label
                      key={filter.value}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name="status"
                        checked={statusFilter === filter.value}
                        onChange={() => setStatusFilter(filter.value)}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-sm font-bengali">
                        {filter.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Filter */}
              <div>
                <h4 className="font-bengali font-medium mb-3 text-gray-700">
                  অর্ডারের সময়কাল
                </h4>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "সব সময়ের" },
                    { value: "last30days", label: "গত ৩০ দিন" },
                    { value: "last3months", label: "গত ৩ মাস" },
                    { value: "last6months", label: "গত ৬ মাস" },
                  ].map((filter) => (
                    <label
                      key={filter.value}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name="dateRange"
                        checked={dateFilter === filter.value}
                        onChange={() => setDateFilter(filter.value)}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-sm font-bengali">
                        {filter.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
