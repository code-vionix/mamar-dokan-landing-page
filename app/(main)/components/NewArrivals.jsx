"use client";
import { motion } from "framer-motion";
import { ShoppingCart, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { newArrivals } from "./mockData/data";
const NewArrivals = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bengali font-bold">
              সাম্প্রতিক শাড়ি
            </h2>
            <Link href="/products/new">
              <span className="text-amber-700 hover:text-amber-900 flex items-center font-bengali">
                সব দেখুন
                <ChevronRight size={16} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group relative"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs py-1 px-2 rounded-sm font-bengali">
                    নতুন
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bengali font-semibold text-lg mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 font-bengali">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">৳{product.price}</span>
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
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
