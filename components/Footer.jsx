"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Send,
  Heart,
  Award,
  Shield,
  Truck,
  Clock,
  Youtube
} from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = e => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  // Jamdani pattern background component
  const JamdaniPattern = ({ className = "" }) => (
    <div className={`absolute inset-0 ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="footerJamdaniPattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <path
              d="M20,10 Q25,15 20,20 Q15,15 20,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M10,20 Q15,25 20,20 Q15,15 10,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footerJamdaniPattern)" />
      </svg>
    </div>
  )

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section */}
      <motion.section
        className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <JamdaniPattern className="text-white/10" />

        {/* Floating elements */}
        <motion.div
          className="absolute top-8 right-16 w-20 h-20 rounded-full bg-white/10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-8 left-16 w-16 h-16 rounded-full bg-white/10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <Mail className="w-4 h-4 mr-2" />
                <span className="font-bengali text-sm font-medium">
                  বিশেষ অফার পান
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bengali font-bold mb-4">
                আমাদের পরিবারে যোগ দিন
              </h2>
              <p className="text-xl mb-8 font-bengali opacity-90 max-w-2xl mx-auto">
                নতুন কালেকশন, বিশেষ ছাড় এবং এক্সক্লুসিভ অফার সবার আগে পেতে
                আমাদের নিউজলেটার সাবস্ক্রাইব করুন
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল এড্রেস..."
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/95 backdrop-blur-sm font-bengali placeholder-gray-500"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="group px-8 py-4 bg-white text-rose-600 hover:bg-gray-100 rounded-full font-bengali font-semibold transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  সাবস্ক্রাইব করুন
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.form>

            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full inline-flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-bengali">
                    🎉 ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust badges */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <badge.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bengali font-semibold text-sm mb-1">
                    {badge.title}
                  </h4>
                  <p className="font-bengali text-xs opacity-80">
                    {badge.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Main Footer */}
      <motion.section
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <JamdaniPattern className="text-gray-700" />

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/assets/logo-light.png"
                    alt="Jamdani Saree"
                    width={150}
                    height={40}
                    className="h-12 w-auto"
                    priority
                  />
                </Link>
              </motion.div>

              <p className="text-gray-300 mb-6 font-bengali leading-relaxed text-sm">
                আমরা বাংলাদেশের ঐতিহ্যবাহী জামদানি শাড়ি বিক্রি করি। আমাদের সব
                পণ্য অথেনটিক এবং মানসম্মত। প্রতিটি শাড়ি হাতে বোনা এবং
                নিখুঁতভাবে তৈরি করা হয়।
              </p>

              {/* Social Media */}
              <div className="mb-6">
                <h5 className="text-white font-bengali font-semibold mb-3">
                  আমাদের ফলো করুন
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-4 h-4 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Awards/Badges */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-bengali font-semibold text-sm">
                    ইউনেস্কো স্বীকৃত
                  </span>
                </div>
                <p className="font-bengali text-xs text-gray-400">
                  ঐতিহ্যবাহী জামদানি শিল্প
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-white font-bengali text-lg font-semibold mb-6 relative">
                কুইক লিংক
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="group text-gray-300 hover:text-white transition-colors font-bengali flex items-center py-1"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-rose-400" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Customer Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-white font-bengali text-lg font-semibold mb-6 relative">
                কাস্টমার কেয়ার
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              </h4>
              <ul className="space-y-3">
                {customerServices.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={service.href}
                      className="group text-gray-300 hover:text-white transition-colors font-bengali flex items-center py-1"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-emerald-400" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-white font-bengali text-lg font-semibold mb-6 relative">
                যোগাযোগ
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </h4>

              <address className="not-italic space-y-4">
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bengali text-gray-300 text-sm leading-relaxed">
                      বাড়ি #১২, রোড #৮,
                      <br />
                      ধানমন্ডি, ঢাকা-১২০৫
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="tel:+8801712345678"
                    className="font-bengali text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    +৮৮০ ১৭১২ ৩৪৫৬৭৮
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="mailto:info@jamdanisaree.com"
                    className="font-bengali text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    info@jamdanisaree.com
                  </a>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-2xl mt-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="font-bengali font-semibold text-white text-sm">
                      দোকান খোলা
                    </span>
                  </div>
                  <p className="font-bengali text-gray-300 text-xs">
                    প্রতিদিন সকাল ১০টা থেকে রাত ৮টা
                  </p>
                </motion.div>
              </address>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Bottom Footer */}
      <motion.section
        className="bg-gray-950 text-gray-300 border-t border-gray-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 text-sm font-bengali flex items-center">
                <Heart className="w-4 h-4 text-red-500 mr-2 fill-current" />
                &copy; {currentYear} জামদানি শাড়ি - সর্বস্বত্ব সংরক্ষিত
              </p>
              <div className="flex space-x-4">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-500 hover:text-white text-xs transition-colors font-bengali hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-gray-400 text-sm font-bengali flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                নিরাপদ পেমেন্ট:
              </p>
              <div className="flex space-x-3 items-center">
                {paymentMethods.map((payment, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={payment.image}
                      alt={payment.name}
                      width={40}
                      height={30}
                      className="h-6 w-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Made with love */}
          <motion.div
            className="text-center mt-8 pt-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-gray-500 text-xs font-bengali flex items-center justify-center">
              তৈরি করা হয়েছে
              <Heart className="w-3 h-3 text-red-500 mx-1 fill-current animate-pulse" />
              দিয়ে বাংলাদেশে
              <span className="ml-2 text-gray-600">|</span>
              <span className="ml-2 flex items-center">
                গর্বিত সদস্য
                <Award className="w-3 h-3 text-yellow-500 ml-1" />
              </span>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </footer>
  )
}

// Data arrays
const trustBadges = [
  {
    icon: Shield,
    title: "১০০% অথেনটিক",
    description: "সর্বোচ্চ মানের গ্যারান্টি"
  },
  {
    icon: Truck,
    title: "দ্রুত ডেলিভারি",
    description: "২-৩ দিনের মধ্যে"
  },
  {
    icon: Award,
    title: "ইউনেস্কো স্বীকৃত",
    description: "ঐতিহ্যবাহী শিল্প"
  },
  {
    icon: Heart,
    title: "গ্রাহক সন্তুষ্টি",
    description: "৯৯% পজিটিভ রিভিউ"
  }
]

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/jamdanisaree",
    label: "Facebook"
  },
  {
    icon: Instagram,
    href: "https://instagram.com/jamdanisaree",
    label: "Instagram"
  },
  {
    icon: Youtube,
    href: "https://youtube.com/jamdanisaree",
    label: "YouTube"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/jamdanisaree",
    label: "Twitter"
  }
]

const quickLinks = [
  { label: "হোম", href: "/" },
  { label: "শাড়ি কালেকশন", href: "/products" },
  { label: "নতুন আগমন", href: "/new-arrivals" },
  { label: "ছাড়ের অফার", href: "/offers" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "যোগাযোগ", href: "/contact" }
]

const customerServices = [
  { label: "অর্ডার ট্র্যাকিং", href: "/track-order" },
  { label: "রিটার্ন পলিসি", href: "/return-policy" },
  { label: "শিপিং ইনফরমেশন", href: "/shipping" },
  { label: "প্রায়সই জিজ্ঞাসিত প্রশ্ন", href: "/faq" },
  { label: "সাইজ গাইড", href: "/size-guide" },
  { label: "কাস্টমার সাপোর্ট", href: "/support" }
]

const legalLinks = [
  { label: "প্রাইভেসি পলিসি", href: "/privacy-policy" },
  { label: "শর্তাবলী", href: "/terms-and-conditions" },
  { label: "কুকি পলিসি", href: "/cookie-policy" },
  { label: "সাইটম্যাপ", href: "/sitemap" }
]

const paymentMethods = [
  { name: "bKash", image: "/assets/payment-bkash.png" },
  { name: "Nagad", image: "/assets/payment-nagad.png" },
  { name: "Visa", image: "/assets/payment-visa.png" },
  { name: "Mastercard", image: "/assets/payment-mastercard.png" },
  { name: "Rocket", image: "/assets/payment-rocket.png" }
]
