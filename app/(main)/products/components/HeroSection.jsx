import { Search, X, Tag, CheckCircle, Truck, Award } from "lucide-react";
const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className="pt-24 pb-8 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h1 className="text-4xl md:text-5xl font-bengali font-bold mb-4">
            জামদানি শাড়ি কালেকশন
          </h1>
          <p className="text-amber-100 max-w-2xl font-bengali mb-6">
            আমাদের বিশেষভাবে নির্বাচিত জামদানি শাড়ির কালেকশন দেখুন। প্রতিটি
            শাড়ি বাংলাদেশের দক্ষ কারিগরদের হাতে তৈরি।
          </p>

          <div className="max-w-xl relative mb-4 group">
            <input
              type="text"
              placeholder="শাড়ি খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 backdrop-blur-sm border border-amber-600/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            />
            <Search className="absolute left-4 top-3.5 text-amber-200 group-focus-within:text-amber-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3.5 text-amber-200 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center">
              <CheckCircle className="text-amber-300 mr-2" size={18} />
              <span className="text-amber-100 font-bengali">
                ১০০% হাতে বোনা
              </span>
            </div>
            <div className="flex items-center">
              <Truck className="text-amber-300 mr-2" size={18} />
              <span className="text-amber-100 font-bengali">
                ফ্রি শিপিং (৳২,০০০+)
              </span>
            </div>
            <div className="flex items-center">
              <Tag className="text-amber-300 mr-2" size={18} />
              <span className="text-amber-100 font-bengali">
                ৩০ দিনের রিটার্ন
              </span>
            </div>
            <div className="flex items-center">
              <Award className="text-amber-300 mr-2" size={18} />
              <span className="text-amber-100 font-bengali">
                প্রিমিয়াম গুণমান
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
