import {
  Heart,
  Filter,
  ArrowDownUp,
  Grid,
  List,
  ChevronDown,
} from "lucide-react";

const StickyFilterBar = ({
  isScrolled,
  filterOpen,
  setFilterOpen,
  viewMode,
  setViewMode,
  showFavorites,
  setShowFavorites,
  sortedProducts,
  sortOption,
  setSortOption,
}) => {
  return (
    <>
      <div
        className={`py-4 mb-6 ${
          isScrolled
            ? "sticky top-0 bg-amber-50/95 shadow-md z-10 backdrop-blur-sm rounded-lg px-4"
            : ""
        } transition-all duration-300`}
      >
        <div className="flex flex-wrap md:flex-row justify-between gap-4 items-center">
          <button
            className={`flex items-center font-bengali font-medium px-3 py-2 rounded-md transition ${
              filterOpen
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter size={18} className="mr-2" />
            <span>ফিল্টার {filterOpen ? "বন্ধ করুন" : "দেখুন"}</span>
          </button>

          <div className="flex items-center space-x-2 bg-amber-100/50 p-1 rounded-md">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded ${
                viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-white/50"
              }`}
              title="গ্রিড ভিউ"
            >
              <Grid size={18} className="text-amber-700" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded ${
                viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-white/50"
              }`}
              title="লিস্ট ভিউ"
            >
              <List size={18} className="text-amber-700" />
            </button>
          </div>

          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`flex items-center font-bengali font-medium px-3 py-2 rounded-md transition ${
              showFavorites
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            <Heart
              size={18}
              className={`mr-2 ${showFavorites ? "fill-white" : ""}`}
            />
            <span>প্রিয় শাড়ি {showFavorites ? "✓" : ""}</span>
          </button>

          <div className="text-amber-800 font-bengali font-medium">
            {sortedProducts?.length} টি শাড়ি পাওয়া গেছে
          </div>

          <div className="relative">
            <div className="flex items-center">
              <ArrowDownUp size={16} className="text-amber-700 mr-2" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-amber-200 rounded-md px-3 py-2 bg-white text-amber-800 font-bengali focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none pr-8"
              >
                <option value="popular">জনপ্রিয়তা</option>
                <option value="price-low">কম দাম থেকে বেশি</option>
                <option value="price-high">বেশি দাম থেকে কম</option>
                <option value="newest">নতুন আগমন</option>
                <option value="discount">সর্বাধিক ছাড়</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={16} className="text-amber-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyFilterBar;
