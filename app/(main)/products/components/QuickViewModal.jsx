import Link from "next/link";
import { motion } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import Image from "next/image";

const QuickViewModal = ({ quickViewProduct, setQuickViewProduct, renderRatingStars }) => {
  return (
    <>
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-end p-2">
              <button
                onClick={() => setQuickViewProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={quickViewProduct?.images?.[0] || "/placeholder.png"}
                    alt={quickViewProduct?.name}
                    fill
                 
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="mb-1 flex items-center">
                  {renderRatingStars(quickViewProduct.rating)}
                  <span className="text-sm text-gray-500 ml-2">
                    ({quickViewProduct.reviewCount} রিভিউ)
                  </span>
                </div>

                <h2 className="text-2xl font-bengali font-medium text-amber-900 mb-2">
                  {quickViewProduct.name}
                </h2>

                <div className="mb-4">
                  <span className="text-amber-800 font-bold text-2xl">
                    {quickViewProduct.salePrice
                      ? `৳${quickViewProduct.salePrice.toLocaleString()}`
                      : `৳${quickViewProduct.price.toLocaleString()}`}
                  </span>
                  {quickViewProduct.salePrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ৳{quickViewProduct.price.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-6 font-bengali">
                  {quickViewProduct.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-20 text-gray-600 font-bengali">
                      উপাদান:
                    </div>
                    <div className="text-amber-900 font-bengali">
                      {quickViewProduct.material}
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-20 text-gray-600 font-bengali">রঙ:</div>
                    <div className="text-amber-900 font-bengali">
                      {quickViewProduct.color}
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-20 text-gray-600 font-bengali">
                      উপযোগী:
                    </div>
                    <div className="text-amber-900 font-bengali">
                      {quickViewProduct.occasion === "wedding" && "বিয়ে"}
                      {quickViewProduct.occasion === "festive" && "উৎসব"}
                      {quickViewProduct.occasion === "daily" && "দৈনন্দিন"}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 text-gray-600 font-bengali">স্টক:</div>
                    <div
                      className={`font-bengali ${
                        quickViewProduct.stock <= 5
                          ? "text-red-600 font-medium"
                          : "text-green-600"
                      }`}
                    >
                      {quickViewProduct.stock <= 5
                        ? `শুধুমাত্র ${quickViewProduct.stock}টি বাকি`
                        : "স্টকে আছে"}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => {
                      handleAddToCart(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-bengali flex-1 flex items-center justify-center transition-colors"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    কার্টে যোগ করুন
                  </button>

                  <Link
                    href={`/products/${quickViewProduct.id}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-6 py-3 rounded-md font-bengali flex-1 flex items-center justify-center transition-colors"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default QuickViewModal;
