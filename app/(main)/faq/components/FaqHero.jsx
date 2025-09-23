import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const FaqHero = () => {
  return (
     <div className="relative bg-gradient-to-r from-amber-700 to-amber-500 py-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/hero-jamdani.jpg"
            alt="Frequently Asked Questions"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-bengali">
              সাধারণ জিজ্ঞাসা
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-bengali">
              আপনার প্রশ্নের উত্তর এখানে খুঁজে পান। আরও সাহায্যের জন্য আমাদের
              সাথে যোগাযোগ করুন।
            </p>
          </motion.div>
        </div>
      </div>
  )
}

export default FaqHero