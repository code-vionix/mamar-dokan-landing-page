import { ArrowRight, ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = ({ categories }) => {
  return (
    <>
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bengali font-bold">বিশেষ কালেকশন</h2>
            <Link href="/categories">
              <span className="text-amber-700 hover:text-amber-900 flex items-center font-bengali">
                সব কালেকশন
                <ChevronRight size={16} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ y: -10 }}
                className="relative rounded-lg overflow-hidden shadow-lg group"
              >
                <Image
                  src={category?.imageUrl || "/placeholder.png"}
                  alt={category?.name}
                  width={500}
                  height={600}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bengali font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <Link href={`/products?category=${category.slug}`}>
                      <span className="text-amber-300 hover:text-amber-400 transition-colors font-bengali inline-flex items-center">
                        আরো দেখুন
                        <ArrowRight size={16} className="ml-1" />
                      </span>
                    </Link>
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

export default FeaturedCategories;
