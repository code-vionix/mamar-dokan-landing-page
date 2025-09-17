import Link from "next/link";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function Logo() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Link href="/" className="relative z-10 flex items-center">
        <div className="flex items-center space-x-3">
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              জামদানি সংগ্রহ
            </h1>
            <p className="text-xs text-gray-500 font-bengali">ঐতিহ্যের স্পর্শে</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}