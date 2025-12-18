"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  // const heroRef = useRef(null);

  // // Parallax effect for hero section
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (heroRef.current) {
  //       heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div
        // ref={heroRef}
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center"
        style={{
          backgroundImage: 'url("/assets/hero-jamdani.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-sm mb-4 font-bengali text-sm">
              নতুন কালেকশন
            </div>
            <h1 className="text-5xl md:text-6xl font-bengali font-bold mb-4">
              ঐতিহ্যবাহী জামদানি শাড়ি
            </h1>
            <p className="text-xl mb-8 font-bengali">
              বাংলাদেশের উত্তরাধিকারী শিল্পকলার নিদর্শন, সূক্ষ্ম কারুকার্যের
              অনন্য জামদানি শাড়ি
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium transition-all font-bengali w-full sm:w-auto text-center"
                >
                  কালেকশন দেখুন
                </motion.button>
              </Link>
              <Link href="/products/featured">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white hover:bg-white/20 text-white rounded-md font-medium transition-all font-bengali w-full sm:w-auto text-center"
                >
                  জনপ্রিয় শাড়ি
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
