"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeritageSection = () => {
  return (
    <>
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="inline-block bg-amber-700 text-white px-4 py-1 rounded-sm mb-4 font-bengali text-sm">
                আমাদের ঐতিহ্য
              </div>
              <h2 className="text-3xl font-bengali font-bold mb-6">
                বাংলাদেশের জামদানি: একটি ঐতিহ্য
              </h2>
              <p className="text-gray-700 mb-4 font-bengali">
                জামদানি হল বাংলাদেশের ঐতিহ্যবাহী শিল্প যা কয়েক শতাব্দী ধরে চলে
                আসছে। এর সূক্ষ্ম বুনন পদ্ধতি এবং জটিল নকশা এটিকে বিশ্বের সবচেয়ে
                মূল্যবান শাড়ীতে পরিণত করেছে।
              </p>
              <p className="text-gray-700 mb-6 font-bengali">
                ২০১৩ সালে ইউনেস্কো ঢাকার জামদানিকে অমূর্ত সাংস্কৃতিক ঐতিহ্য
                হিসাবে স্বীকৃতি দিয়েছে, যা এই শিল্পের গুরুত্ব ও মূল্যকে প্রমাণ
                করে।
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <button className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-md font-medium transition-all font-bengali">
                    আমাদের গল্প জানুন
                  </button>
                </Link>
                <Link href="/craftsmanship">
                  <button className="px-6 py-3 border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white rounded-md font-medium transition-all font-bengali">
                    কারুশিল্প দেখুন
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <Image
                  src="/assets/heritage-jamdani.jpg"
                  alt="Jamdani Weaving"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-200 rounded-full -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500 rounded-full -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeritageSection;
