import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Gift, Star } from "lucide-react";

export default function TopBar() {
  return (
    <motion.div
      className="w-full z-50 relative overflow-hidden"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700"></div>
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1200 40">
          <defs>
            <pattern
              id="top-pattern"
              x="0"
              y="0"
              width="60"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10,20 Q20,10 30,20 Q40,30 50,20"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.3)" />
              <circle cx="45" cy="25" r="0.8" fill="rgba(255,255,255,0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#top-pattern)" />
        </svg>
      </div>

      <div className="hidden md:block relative">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-white">
            <motion.div
              className="flex items-center space-x-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center text-sm font-medium">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-bengali">+880 1712-345678</span>
              </div>
              <div className="flex items-center text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="font-bengali">ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center text-sm font-medium">
                <Gift className="w-4 h-4 mr-2" />
                <span className="font-bengali">ফ্রি ডেলিভারি ৩০০০+ অর্ডারে</span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 text-sm"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link
                href="/track-order"
                className="hover:text-amber-200 transition-colors duration-300 font-bengali flex items-center"
              >
                <Star className="w-3 h-3 mr-1" />
                অর্ডার ট্র্যাকিং
              </Link>
              <Link
                href="/faq"
                className="hover:text-amber-200 transition-colors duration-300 font-bengali"
              >
                সাধারণ প্রশ্ন
              </Link>
              <Link
                href="/about"
                className="hover:text-amber-200 transition-colors duration-300 font-bengali"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="/contact"
                className="hover:text-amber-200 transition-colors duration-300 font-bengali"
              >
                যোগাযোগ
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}