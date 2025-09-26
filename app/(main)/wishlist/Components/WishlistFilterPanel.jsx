"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function WishlistFilterPanel({
  filterOpen,
  filters,
  onFilterChange,
  onResetFilters,
}) {
  const materialsList = ["সিল্ক", "সিল্ক-কটন", "তাঁত সিল্ক", "জামদানি সিল্ক"];
  const occasionsList = ["বিয়ে", "পার্টি", "উৎসব", "দৈনন্দিন"];

  return (
    <div className="container mx-auto px-6">
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
                  onClick={onResetFilters}
                >
                  সব রিসেট করুন
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Availability */}
                <div>
                  <h4 className="font-bengali font-medium mb-2 text-gray-700">
                    অবস্থা
                  </h4>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "সব দেখুন" },
                      { value: "available", label: "স্টকে আছে" },
                      { value: "unavailable", label: "স্টকে নেই" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name="availability"
                          checked={filters.availability === option.value}
                          onChange={() =>
                            onFilterChange("availability", option.value)
                          }
                          className="text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-sm font-bengali">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-bengali font-medium mb-2 text-gray-700">
                    মূল্য
                  </h4>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "সব মূল্য" },
                      { value: "under10k", label: "১০,০০০৳ এর নিচে" },
                      { value: "10k-15k", label: "১০,০০০৳ - ১৫,০০০৳" },
                      { value: "15k-20k", label: "১৫,০০০৳ - ২০,০০০৳" },
                      { value: "above20k", label: "২০,০০০৳ এর উপরে" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === option.value}
                          onChange={() =>
                            onFilterChange("priceRange", option.value)
                          }
                          className="text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-sm font-bengali">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h4 className="font-bengali font-medium mb-2 text-gray-700">
                    উপাদান
                  </h4>
                  <div className="space-y-2">
                    {materialsList.map((material) => (
                      <label
                        key={material}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={filters.materials.includes(material)}
                          onChange={() => onFilterChange("materials", material)}
                          className="rounded text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-sm font-bengali">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <h4 className="font-bengali font-medium mb-2 text-gray-700">
                    অনুষ্ঠান
                  </h4>
                  <div className="space-y-2">
                    {occasionsList.map((occasion) => (
                      <label
                        key={occasion}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={filters.occasions.includes(occasion)}
                          onChange={() => onFilterChange("occasions", occasion)}
                          className="rounded text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-sm font-bengali">{occasion}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
