"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { featuredProducts } from "./mockData/data";

const FeaturedProducts = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 h-px bg-amber-200 top-1/2 transform -translate-y-1/2 z-0"></div>
            <h2 className="text-3xl font-bengali font-bold text-center relative z-10 bg-white inline-block mx-auto px-8">
              জনপ্রিয় শাড়ি
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.salePrice && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-sm py-1 px-2 rounded-sm font-bengali">
                        ছাড়
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-amber-700 px-4 py-2 rounded-md font-bengali">
                        বিস্তারিত দেখুন
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-bengali font-semibold text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 font-bengali line-clamp-1">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      {product.salePrice ? (
                        <>
                          <span className="text-red-500 font-semibold">
                            ৳{product.salePrice}
                          </span>
                          <span className="text-gray-400 line-through ml-2">
                            ৳{product.price}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold">৳{product.price}</span>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-amber-50 hover:bg-amber-100 text-amber-700 p-2 rounded-full"
                    >
                      <ShoppingCart size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 rounded-md font-medium transition-all font-bengali"
              >
                সকল শাড়ি দেখুন
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
