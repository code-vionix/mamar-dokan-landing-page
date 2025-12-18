"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  Heart,
  ChevronDown,
  LogIn,
  UserPlus,
  Phone,
  MapPin,
  Sparkles,
  LogOut,
  ShoppingBag,
  Settings,
  Crown,
  Star,
  Gift,
} from "lucide-react";

// Mock user state - replace with your actual auth system
const useAuth = () => {
  // Mock user data
  const mockUser = { name: "আফিফা আহমেদ", email: "afifa@example.com" };

  // Initialize with mock authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(mockUser);
  

  // Mock login function
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Mock logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const categoryMenuTimeout = useRef(null);
  const { isAuthenticated, user, login, logout } = useAuth();
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSearchOpen(false);
    setActiveMegaMenu(null);
    setIsProfileMenuOpen(false);
  }, [pathname]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setActiveMegaMenu(null);
      }

      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryMouseEnter = (category) => {
    if (categoryMenuTimeout.current) {
      clearTimeout(categoryMenuTimeout.current);
    }
    setActiveMegaMenu(category);
  };

  const handleCategoryMouseLeave = () => {
    categoryMenuTimeout.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300);
  };

  const handleMegaMenuMouseEnter = () => {
    if (categoryMenuTimeout.current) {
      clearTimeout(categoryMenuTimeout.current);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    categoryMenuTimeout.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300);
  };

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
  };

  return (
    <>
      {/* Enhanced top bar with gradient and pattern */}
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
                  <span className="font-bengali">
                    ফ্রি ডেলিভারি ৩০০০+ অর্ডারে
                  </span>
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

      {/* Enhanced main navbar with glassmorphism effect */}
      <motion.header
        className={`w-full z-40 relative transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl py-3 border-b border-amber-100"
            : "bg-white/90 backdrop-blur-lg py-5"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 1200 80">
            <defs>
              <pattern
                id="jamdani-pattern-nav"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1.5" fill="rgba(217, 119, 6, 0.1)" />
                <circle cx="60" cy="40" r="1" fill="rgba(217, 119, 6, 0.08)" />
                <circle
                  cx="100"
                  cy="20"
                  r="1.2"
                  fill="rgba(217, 119, 6, 0.06)"
                />
                <circle
                  cx="40"
                  cy="80"
                  r="0.8"
                  fill="rgba(217, 119, 6, 0.05)"
                />
                <circle
                  cx="80"
                  cy="100"
                  r="1.1"
                  fill="rgba(217, 119, 6, 0.07)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#jamdani-pattern-nav)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
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
                    <p className="text-xs text-gray-500 font-bengali">
                      ঐতিহ্যের স্পর্শে
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/"
                  className={`font-bengali text-lg font-semibold relative ${
                    pathname === "/"
                      ? "text-amber-600"
                      : "text-gray-800 hover:text-amber-600"
                  } transition-all duration-300 group`}
                >
                  হোম
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform ${
                      pathname === "/"
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } transition-transform duration-300 origin-left`}
                  ></span>
                </Link>
              </motion.div>

              {/* Enhanced Categories with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleCategoryMouseEnter("categories")}
                onMouseLeave={handleCategoryMouseLeave}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  className={`flex items-center font-bengali text-lg font-semibold relative ${
                    activeMegaMenu === "categories" ||
                    pathname.includes("/products")
                      ? "text-amber-600"
                      : "text-gray-800 hover:text-amber-600"
                  } transition-all duration-300 group`}
                >
                  <span>শাড়ি কালেকশন</span>
                  <motion.div
                    animate={{
                      rotate: activeMegaMenu === "categories" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </motion.div>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform ${
                      activeMegaMenu === "categories" ||
                      pathname.includes("/products")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } transition-transform duration-300 origin-left`}
                  ></span>
                </motion.button>

                <AnimatePresence>
                  {activeMegaMenu === "categories" && (
                    <motion.div
                      ref={megaMenuRef}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-0 mt-4 w-[700px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden z-50 border border-amber-100"
                      onMouseEnter={handleMegaMenuMouseEnter}
                      onMouseLeave={handleMegaMenuMouseLeave}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/30"></div>
                      <div className="relative grid grid-cols-3 gap-0">
                        {/* Category Column */}
                        <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-r border-amber-100">
                          <h3 className="font-bengali font-bold text-xl mb-4 text-amber-800 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2" />
                            শাড়ির ধরন
                          </h3>
                          <ul className="space-y-3">
                            {[
                              {
                                href: "/products?category=premium",
                                label: "প্রিমিয়াম জামদানি",
                              },
                              {
                                href: "/products?category=classic",
                                label: "ক্লাসিক জামদানি",
                              },
                              {
                                href: "/products?material=রেশম",
                                label: "রেশমি জামদানি",
                              },
                              {
                                href: "/products?material=সুতি",
                                label: "সুতি জামদানি",
                              },
                            ].map((item, index) => (
                              <motion.li
                                key={index}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  href={item.href}
                                  className="font-bengali text-gray-700 hover:text-amber-700 hover:bg-amber-50 py-2 px-3 rounded-lg transition-all duration-300 flex items-center group"
                                >
                                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                                  {item.label}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Occasion Column */}
                        <div className="p-6 border-r border-amber-100">
                          <h3 className="font-bengali font-bold text-xl mb-4 text-amber-800 flex items-center">
                            <Star className="w-5 h-5 mr-2" />
                            সুযোগ অনুযায়ী
                          </h3>
                          <ul className="space-y-3">
                            {[
                              {
                                href: "/products?occasion=wedding",
                                label: "বিবাহ উপলক্ষে",
                              },
                              {
                                href: "/products?occasion=festive",
                                label: "উৎসব উপলক্ষে",
                              },
                              {
                                href: "/products?occasion=daily",
                                label: "দৈনন্দিন ব্যবহারের",
                              },
                            ].map((item, index) => (
                              <motion.li
                                key={index}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  href={item.href}
                                  className="font-bengali text-gray-700 hover:text-amber-700 hover:bg-amber-50 py-2 px-3 rounded-lg transition-all duration-300 flex items-center group"
                                >
                                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                                  {item.label}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Featured product with enhanced design */}
                        <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center text-center">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                          >
                            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur opacity-30"></div>
                            <div className="relative h-32 w-32 mb-4 rounded-xl overflow-hidden shadow-lg">
                              <Image
                                src="/assets/product-1.jpg"
                                fill
                                alt="Featured Product"
                                className="object-cover"
                              />
                            </div>
                          </motion.div>
                          <h3 className="font-bengali font-bold text-lg mb-2 text-amber-800">
                            বিশেষ অফার
                          </h3>
                          <p className="font-bengali text-sm text-gray-600 mb-4 leading-relaxed">
                            দারুচিনি রেশমি জামদানি শাড়ি
                          </p>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              href="/products/1"
                              className="font-bengali bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg flex items-center"
                            >
                              <Crown className="w-4 h-4 mr-2" />
                              দেখুন
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/new-arrivals"
                  className={`font-bengali text-lg font-semibold relative ${
                    pathname === "/new-arrivals"
                      ? "text-amber-600"
                      : "text-gray-800 hover:text-amber-600"
                  } transition-all duration-300 group`}
                >
                  নতুন আগমন
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform ${
                      pathname === "/new-arrivals"
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } transition-transform duration-300 origin-left`}
                  ></span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/offers"
                  className={`font-bengali text-lg font-semibold relative ${
                    pathname === "/offers"
                      ? "text-amber-600"
                      : "text-gray-800 hover:text-amber-600"
                  } transition-all duration-300 group flex items-center`}
                >
                  ছাড়ের অফার
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform ${
                      pathname === "/offers"
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } transition-transform duration-300 origin-left`}
                  ></span>
                </Link>
              </motion.div>
            </nav>

            {/* Enhanced Desktop Right Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 p-2 rounded-full hover:bg-amber-50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
                
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/wishlist"
                  className="text-gray-700 hover:text-amber-600 transition-all duration-300 relative p-2 rounded-full hover:bg-amber-50"
                  aria-label="Wishlist"
                >
                  <Heart className="w-5 h-5" />
                  <motion.span
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    2
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-amber-600 transition-all duration-300 relative p-2 rounded-full hover:bg-amber-50"
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <motion.span
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    3
                  </motion.span>
                </Link>
              </motion.div>

              <div className="border-l border-gray-300 h-8 mx-2"></div>

              {isAuthenticated ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center text-sm font-medium bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full border border-amber-200 hover:border-amber-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bengali font-medium">
                      {user?.name}
                    </span>
                    <motion.div
                      animate={{ rotate: isProfileMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-2 w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div
                        ref={profileMenuRef}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute right-0 mt-4 w-72 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden z-50 border border-amber-100"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-orange-50/20"></div>

                        {/* Enhanced User info section */}
                        <div className="relative px-6 py-4 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900 font-bengali">
                                {user?.name}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {user?.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Account section */}
                        <div className="relative py-2">
                          {[
                            { href: "/profile", icon: User, label: "প্রোফাইল" },
                            {
                              href: "/wishlist",
                              icon: Heart,
                              label: "পছন্দের তালিকা",
                            },
                          ].map((item, index) => (
                            <motion.div key={index} whileHover={{ x: 5 }}>
                              <Link
                                href={item.href}
                                className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300"
                              >
                                <item.icon className="w-4 h-4 mr-4 text-gray-500" />
                                <span className="font-bengali font-medium">
                                  {item.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* Enhanced Orders section */}
                        <div className="relative py-2 border-t border-amber-100">
                          {[
                            {
                              href: "/orders",
                              icon: ShoppingBag,
                              label: "অর্ডার",
                            },
                            {
                              href: "/orders/tracking",
                              icon: MapPin,
                              label: "অর্ডার ট্র্যাকিং",
                            },
                          ].map((item, index) => (
                            <motion.div key={index} whileHover={{ x: 5 }}>
                              <Link
                                href={item.href}
                                className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300"
                              >
                                <item.icon className="w-4 h-4 mr-4 text-gray-500" />
                                <span className="font-bengali font-medium">
                                  {item.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* Enhanced Settings and Support */}
                        <div className="relative py-2 border-t border-amber-100">
                          {[
                            {
                              href: "/settings",
                              icon: Settings,
                              label: "সেটিংস",
                            },
                            { href: "/help", icon: Phone, label: "সাহায্য" },
                          ].map((item, index) => (
                            <motion.div key={index} whileHover={{ x: 5 }}>
                              <Link
                                href={item.href}
                                className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300"
                              >
                                <item.icon className="w-4 h-4 mr-4 text-gray-500" />
                                <span className="font-bengali font-medium">
                                  {item.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* Enhanced Logout section */}
                        <div className="relative py-2 border-t border-amber-100">
                          <motion.button
                            whileHover={{ x: 5 }}
                            onClick={handleLogout}
                            className="flex w-full items-center px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-300"
                          >
                            <LogOut className="w-4 h-4 mr-4 text-gray-500" />
                            <span className="font-bengali font-medium">
                              লগআউট
                            </span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/login"
                      className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center text-sm font-medium bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full border border-amber-200 hover:border-amber-300"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      <span className="font-bengali font-medium">লগইন</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/register"
                      className="text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center text-sm font-medium px-4 py-2 rounded-full shadow-lg"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      <span className="font-bengali font-medium">
                        রেজিস্টার
                      </span>
                    </Link>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/wishlist"
                  className="text-gray-700 relative p-2 rounded-full hover:bg-amber-50 transition-all duration-300"
                  aria-label="Wishlist"
                >
                  <Heart className="w-5 h-5" />
                  <motion.span
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    2
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/cart"
                  className="text-gray-700 relative p-2 rounded-full hover:bg-amber-50 transition-all duration-300"
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <motion.span
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    3
                  </motion.span>
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 p-2 rounded-full hover:bg-amber-50 transition-all duration-300"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-amber-100 z-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/30"></div>
              <div className="relative container mx-auto p-6">
                <div className="flex items-center bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
                  <input
                    type="text"
                    placeholder="শাড়ি খুঁজুন... (যেমন: জামদানি, রেশমি, প্রিমিয়াম)"
                    className="w-full p-4 font-bengali text-lg focus:outline-none bg-transparent"
                    autoFocus
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSearchOpen(false)}
                    className="mr-4 text-gray-500 hover:text-amber-600 p-2 rounded-full hover:bg-amber-50 transition-all duration-300"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Quick search suggestions */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-600 font-bengali">
                    জনপ্রিয় খোঁজ:
                  </span>
                  {[
                    "প্রিমিয়াম জামদানি",
                    "রেশমি শাড়ি",
                    "বিবাহের শাড়ি",
                    "ঈদ কালেকশন",
                  ].map((term, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bengali hover:bg-amber-200 transition-all duration-300"
                    >
                      {term}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl absolute top-full left-0 w-full overflow-hidden z-50 border-t border-amber-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-orange-50/20"></div>
              <div className="relative container mx-auto px-4 py-6">
                {/* Enhanced search box in mobile menu */}
                <motion.div
                  className="mb-6"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="flex items-center bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
                    <Search className="w-5 h-5 text-amber-500 ml-4" />
                    <input
                      type="text"
                      placeholder="শাড়ি খুঁজুন..."
                      className="w-full p-3 font-bengali focus:outline-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3 hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                      aria-label="Search"
                    >
                      <Search className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>

                <nav className="flex flex-col space-y-2">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <Link
                      href="/"
                      className="font-bengali text-lg font-semibold text-gray-800 hover:text-amber-600 py-3 border-b border-amber-100 flex items-center transition-all duration-300"
                    >
                      <Crown className="w-5 h-5 mr-3 text-amber-500" />
                      হোম
                    </Link>
                  </motion.div>

                  {/* Enhanced Accordion for categories in mobile */}
                  <motion.div
                    className="border-b border-amber-100"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <button
                      onClick={() =>
                        setActiveMegaMenu(
                          activeMegaMenu === "mobile-categories"
                            ? null
                            : "mobile-categories"
                        )
                      }
                      className="font-bengali text-lg font-semibold text-gray-800 hover:text-amber-600 py-3 w-full flex justify-between items-center transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <Sparkles className="w-5 h-5 mr-3 text-amber-500" />
                        শাড়ি কালেকশন
                      </div>
                      <motion.div
                        animate={{
                          rotate:
                            activeMegaMenu === "mobile-categories" ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeMegaMenu === "mobile-categories" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-8 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg mx-2 mb-2"
                        >
                          {[
                            {
                              href: "/products?category=premium",
                              label: "প্রিমিয়াম জামদানি",
                            },
                            {
                              href: "/products?category=classic",
                              label: "ক্লাসিক জামদানি",
                            },
                            {
                              href: "/products?material=রেশম",
                              label: "রেশমি জামদানি",
                            },
                            {
                              href: "/products?material=সুতি",
                              label: "সুতি জামদানি",
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <Link
                                href={item.href}
                                className="font-bengali text-gray-700 hover:text-amber-600 hover:bg-amber-50 py-2 px-3 rounded-lg transition-all duration-300 flex items-center"
                              >
                                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                {item.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link
                      href="/new-arrivals"
                      className="font-bengali text-lg font-semibold text-gray-800 hover:text-amber-600 py-3 border-b border-amber-100 flex items-center transition-all duration-300"
                    >
                      <Star className="w-5 h-5 mr-3 text-amber-500" />
                      নতুন আগমন
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link
                      href="/offers"
                      className="font-bengali text-lg font-semibold text-gray-800 hover:text-amber-600 py-3 border-b border-amber-100 flex items-center transition-all duration-300"
                    >
                      <Gift className="w-5 h-5 mr-3 text-amber-500" />
                      ছাড়ের অফার
                    </Link>
                  </motion.div>

                  {/* Enhanced Auth buttons for mobile */}
                  <motion.div
                    className="border-t border-amber-200 mt-4 pt-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href="/auth/login"
                          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl py-3 px-4 font-bengali text-center flex items-center justify-center shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                        >
                          <LogIn className="w-4 h-4 mr-2" />
                          লগইন
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href="/auth/register"
                          className="border-2 border-amber-500 text-amber-600 rounded-xl py-3 px-4 font-bengali text-center flex items-center justify-center hover:bg-amber-50 transition-all duration-300"
                        >
                          <UserPlus className="w-4 h-4 mr-2" />
                          রেজিস্টার
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Enhanced Quick links */}
                  <motion.div
                    className="border-t border-amber-200 mt-4 pt-4 space-y-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    {[
                      {
                        href: "/track-order",
                        label: "অর্ডার ট্র্যাকিং",
                        icon: MapPin,
                      },
                      { href: "/faq", label: "সাধারণ প্রশ্ন", icon: Star },
                      { href: "/contact", label: "যোগাযোগ", icon: Phone },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className="font-bengali text-gray-700 hover:text-amber-600 hover:bg-amber-50 flex items-center py-2 px-3 rounded-lg transition-all duration-300"
                        >
                          <item.icon className="w-4 h-4 mr-3 text-amber-500" />
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
