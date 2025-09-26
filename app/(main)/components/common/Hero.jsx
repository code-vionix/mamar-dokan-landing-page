"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, description }) {
  return (
    <div className="relative bg-gradient-to-r from-amber-700 to-amber-500 py-10">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/hero-jamdani.jpg"
          alt="Settings"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-bengali">
            {title}
          </h1>
          <p className="text-white/80 max-w-2xl text-center font-bengali">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
