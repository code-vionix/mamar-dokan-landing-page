import { motion } from "framer-motion";
import { Heart, Percent, Plus, Search, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";
// import { set } from "react-hook-form";

const ProductGrid = ({
  sortedProducts,
  viewMode,
  setHoveredProduct,
  favorites,
  renderRatingStars,
  setQuickViewProduct,
  setFavorites,
  
}) => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const router = useRouter();

  const calculateDiscount = (price, salePrice) => {
    if (!salePrice) return 0;
    return Math.round(((price - salePrice) / price) * 100);
  };

  // //  === Fetch Favorite on mount ====

  useEffect(() => {
    if (!userId) return;

    async function fetchFavorite() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/wishlist/${userId}`
        );
        const data = await res.json();

        if (res.ok) {
          setFavorites(data.data.map((item) => item.productId) || []);
        } else {
          console.error("Error fetching favorites:", data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchFavorite();
  }, [userId, setFavorites]);

  // // === toggle favorite ===
  const toggleFavorite = async (productId) => {
    if (!userId) {
      // === redirect user to login page ===
      router.push("/login");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wishlist/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        // console.log("Wishlist updated:", data);
        setFavorites((prev) => {
          if (prev.includes(productId)) {
            // remove from favorites
            return prev.filter((id) => id !== productId);
          } else {
            // add to favorites
            return [...prev, productId];
          }
        });
      } else {
        console.error("Error:", data.message);
      }
    } catch (err) {
      console.error("Error toggling wishlist:", err);
    }
  };



  return (
    <>
      <div className="lg:w-3/4">
        {sortedProducts?.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
            }
          >
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product image */}
                <div
                  className={`relative ${
                    viewMode === "list" ? "md:w-1/3" : "h-80"
                  }`}
                >
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      className="bg-white/70 hover:bg-white p-2 rounded-full backdrop-blur-sm transition"
                    >
                      <Heart
                        size={20}
                        className={`hover:cursor-pointer ${
                          favorites?.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        } transition-colors`}
                      />
                    </button>
                  </div>

                  {product.isNew && (
                    <div className="absolute top-3 left-3 z-10 bg-amber-600 text-white px-2 py-1 text-xs font-medium rounded-md font-bengali">
                      নতুন
                    </div>
                  )}

                  {product.salePrice && (
                    <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded-md font-bengali flex items-center">
                      <Percent size={12} className="mr-1" />
                      {calculateDiscount(product.price, product.salePrice)}%
                      ছাড়
                    </div>
                  )}

                  <Link
                    href={`/products/${product.slug}`}
                    className="block h-full"
                  >
                    <div className="w-full h-full relative overflow-hidden group">
                      <Image
                        src={product?.images?.[0] || "/placeholder.png"}
                        alt={product?.name}
                        fill
                        className="transition-transform duration-500 group-hover:scale-110 object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setQuickViewProduct(product);
                          }}
                          className="bg-white text-amber-800 px-4 py-2 rounded-md font-bengali hover:bg-amber-50 transition-all transform translate-y-4 hover:cursor-pointer group-hover:translate-y-0 duration-300"
                        >
                          দ্রুত দেখুন
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Product details */}
                <div
                  className={`p-4 flex flex-col ${
                    viewMode === "list" ? "md:w-2/3" : ""
                  }`}
                >
                  <div className="mb-1 flex items-center">
                    {renderRatingStars(product.rating)}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-bengali text-lg font-medium text-amber-900 hover:text-amber-700 mb-1">
                      {product.name}
                    </h3>
                  </Link>

                  {viewMode === "list" && (
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2 font-bengali">
                      {product.description}
                    </p>
                  )}

                  <div className="mb-2">
                    <span className="text-amber-800 font-bold text-lg">
                      {product.salePrice
                        ? `৳${product.salePrice.toLocaleString()}`
                        : `৳${product.price.toLocaleString()}`}
                    </span>
                    {product.salePrice && (
                      <span className="text-gray-500 line-through ml-2 text-sm">
                        ৳{product.price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center mt-auto gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-md font-bengali flex items-center justify-center flex-1 transition-colors"
                    >
                      <ShoppingCart size={16} className="mr-1" />
                      <span>কার্টে যোগ করুন</span>
                    </button>

                    <Link
                      href={`/products/${product.id}`}
                      className="bg-white border border-amber-600 text-amber-700 hover:bg-amber-50 p-2 rounded-md transition-colors"
                    >
                      <Plus size={20} />
                    </Link>
                  </div>

                  {product.stock <= 5 && (
                    <div className="mt-2 text-sm text-red-600 font-bengali">
                      শুধুমাত্র {product.stock}টি বাকি আছে
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-amber-50 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Search size={48} className="text-amber-400" />
            </div>
            <h3 className="text-xl font-bengali mb-2 text-amber-800">
              কোন শাড়ি পাওয়া যায়নি
            </h3>
            <p className="text-amber-700 mb-6 font-bengali">
              আপনার ফিল্টার অনুযায়ী কোন শাড়ি পাওয়া যায়নি। ফিল্টার পরিবর্তন
              করে আবার চেষ্টা করুন।
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedOccasion("all");
                setSelectedMaterial("all");
                setPriceRange([0, 30000]);
                setSearchQuery("");
                setShowFavorites(false);
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-bengali inline-block"
            >
              ফিল্টার রিসেট করুন
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
