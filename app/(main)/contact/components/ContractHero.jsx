import Image from "next/image";
import { motion } from "framer-motion";


const ContractHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-700 to-amber-500 py-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/hero-jamdani.jpg"
            alt="Contact us"
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
              যোগাযোগ করুন
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-bengali">
              আমাদের টীম আপনার সমস্ত প্রশ্ন ও অনুরোধের জন্য অপেক্ষা করছে। যে কোন
              প্রয়োজনে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </motion.div>
        </div>
      </div>
  )
}

export default ContractHero