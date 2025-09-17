"use client";

import {
  User,
  Heart,
  ShoppingBag,
  MapPin,
  Settings,
  Phone,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default function ProfileMenu({
  isProfileMenuOpen,
  setIsProfileMenuOpen,
}) {
  const profileMenuRef = useRef(null);
  const { data: session } = useSession();

  useOutsideClick(profileMenuRef, () => {
    setIsProfileMenuOpen(false);
  });

  const handleLogout = () => {
    signOut();
    setIsProfileMenuOpen(false);
  };

  const menuItems = [
    {
      heading: "আমার অ্যাকাউন্ট",
      links: [
        { href: "/profile", icon: User, label: "প্রোফাইল" },
        { href: "/wishlist", icon: Heart, label: "পছন্দের তালিকা" },
      ],
    },
    {
      heading: "অর্ডার",
      links: [
        { href: "/orders", icon: ShoppingBag, label: "অর্ডার" },
        { href: "/orders/tracking", icon: MapPin, label: "অর্ডার ট্র্যাকিং" },
      ],
    },
    {
      heading: "সাহায্য ও সেটিংস",
      links: [
        { href: "/settings", icon: Settings, label: "সেটিংস" },
        { href: "/help", icon: Phone, label: "সাহায্য" },
      ],
    },
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center text-sm font-medium bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full border border-amber-200 hover:border-amber-300"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="font-bengali font-medium">{session?.user?.name || "ব্যবহারকারী"}</span>
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

            <div className="relative px-6 py-4 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 font-bengali">
                    {session?.user?.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {session?.user?.email}
                  </p>
                </div>
              </div>
            </div>

            {menuItems.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`relative py-2 ${sectionIndex > 0 ? "border-t border-amber-100" : ""}`}
              >
                {section.links.map((item, itemIndex) => (
                  <motion.div key={itemIndex} whileHover={{ x: 5 }}>
                    <Link
                      href={item.href}
                      className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 mr-4 text-gray-500" />
                      <span className="font-bengali font-medium">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ))}

            <div className="relative py-2 border-t border-amber-100">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={handleLogout}
                className="flex w-full items-center px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-4 text-gray-500" />
                <span className="font-bengali font-medium">লগআউট</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}