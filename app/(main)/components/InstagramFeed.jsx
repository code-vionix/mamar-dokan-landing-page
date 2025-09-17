"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { instagramFeed } from "./mockData/data";

const InstagramFeed = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bengali font-bold mb-2">
                ইন্সটাগ্রামে আমাদের ফলো করুন
              </h2>
              <p className="text-gray-600 font-bengali">
                @jamdani.saree.bd হ্যাশট্যাগ দিয়ে আপনার ফটো শেয়ার করুন
              </p>
            </div>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 md:mt-0 flex items-center text-amber-700 hover:text-amber-900 font-bengali">
                <Instagram size={20} className="mr-2" />
                আমাদের ফলো করুন
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {instagramFeed.map((image, idx) => (
              <motion.div
                key={idx}
                className="aspect-square relative overflow-hidden group"
                whileHover={{ scale: 0.97 }}
              >
                <Image
                  src={image}
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramFeed;
