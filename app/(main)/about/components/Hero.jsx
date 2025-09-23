"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <div
      ref={heroRef}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-amber-800"
    >
      <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
        <Image
          src="/assets/heritage-jamdani.jpg"
          alt="জামদানি বয়ন শিল্প"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="opacity-40"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/70"></div>
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-bengali">
            ঐতিহ্যবাহী জামদানির
            <br />
            <span className="text-amber-300">বাংলাদেশি প্রতিষ্ঠান</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-bengali">
            ২০০৫ সাল থেকে আমরা উন্নতমানের জামদানি শাড়ির উত্পাদন ও বিক্রয় করে
            আসছি, বাংলাদেশের ঐতিহ্যবাহী কারুশিল্পকে সংরক্ষণ ও প্রচার করার
            লক্ষ্যে।
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
