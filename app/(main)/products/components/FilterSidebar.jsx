import { motion } from "framer-motion"

const FilterSidebar = ({filterOpen, categories, occasions, materials, priceRange, setPriceRange, selectedCategory, setSelectedCategory, selectedOccasion, setSelectedOccasion, selectedMaterial, setSelectedMaterial}) => {

 const handlePriceRangeChange = (index, value) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(value);
    setPriceRange(newPriceRange);
  };




  return (
    <>
      <motion.div
            className={`lg:w-1/4 ${
              filterOpen ? "block" : "hidden lg:block"
            } bg-white p-5 rounded-lg shadow-sm self-start lg:sticky lg:top-28`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-bengali font-medium mb-3 text-amber-900">
                শ্রেণী
              </h3>
              <div className="space-y-2">
                {categories?.map(category => (
                  <div key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category.id}`}
                      name="category"
                      checked={selectedCategory === category.id}
                      onChange={() => setSelectedCategory(category.id)}
                      className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500"
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="ml-2 text-amber-900 font-bengali"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bengali font-medium mb-3 text-amber-900">
                অনুষ্ঠান
              </h3>
              <div className="space-y-2">
                {occasions?.map(occasion => (
                  <div key={occasion.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`occasion-${occasion.id}`}
                      name="occasion"
                      checked={selectedOccasion === occasion.id}
                      onChange={() => setSelectedOccasion(occasion.id)}
                      className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500"
                    />
                    <label
                      htmlFor={`occasion-${occasion.id}`}
                      className="ml-2 text-amber-900 font-bengali"
                    >
                      {occasion.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bengali font-medium mb-3 text-amber-900">
                উপাদান
              </h3>
              <div className="space-y-2">
                {materials?.map(material => (
                  <div key={material.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`material-${material.id}`}
                      name="material"
                      checked={selectedMaterial === material.id}
                      onChange={() => setSelectedMaterial(material.id)}
                      className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500"
                    />
                    <label
                      htmlFor={`material-${material.id}`}
                      className="ml-2 text-amber-900 font-bengali"
                    >
                      {material.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bengali font-medium mb-3 text-amber-900">
                দাম সীমা
              </h3>
              <div className="px-2">
                <div className="flex justify-between mb-2">
                  <span className="text-amber-800">
                    ৳{priceRange[0].toLocaleString()}
                  </span>
                  <span className="text-amber-800">
                    ৳{priceRange[1].toLocaleString()}
                  </span>
                </div>
                <div className="relative mb-4 pt-1">
                  <input
                    type="range"
                    min="0"
                    max="30000"
                    step="500"
                    value={priceRange[0]}
                    onChange={e => handlePriceRangeChange(0, e.target.value)}
                    className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer range-slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="30000"
                    step="500"
                    value={priceRange[1]}
                    onChange={e => handlePriceRangeChange(1, e.target.value)}
                    className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer range-slider "
                  />
                </div>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={e => handlePriceRangeChange(0, e.target.value)}
                    className="w-1/2 px-2 py-1 border border-amber-200 rounded text-amber-800 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={e => handlePriceRangeChange(1, e.target.value)}
                    className="w-1/2 px-2 py-1 border border-amber-200 rounded text-amber-800 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setSelectedOccasion("all")
                  setSelectedMaterial("all")
                  setPriceRange([0, 30000])
                  setSearchQuery("")
                  setShowFavorites(false)
                }}
                className="bg-amber-100 text-amber-800 hover:bg-amber-200 py-2 rounded-md font-bengali transition-colors"
              >
                ফিল্টার রিসেট করুন
              </button>
            </div>
          </motion.div>
    </>
  );
};

export default FilterSidebar;