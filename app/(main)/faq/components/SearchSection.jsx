import React from "react";
import { Search } from "lucide-react";

const SearchSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="আপনার প্রশ্ন লিখুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-bengali"
            />
            <Search className="absolute left-4 top-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
