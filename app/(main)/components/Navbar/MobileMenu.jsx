import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, LogIn, UserPlus, ChevronDown, Star, MapPin, Phone } from "lucide-react";
import navigationData from "./navigationData";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function MobileMenu({ isMobileMenuOpen }) {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const { data: session } = useSession();

  return (
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
              {navigationData.map((item, index) => {
                if (item.type === "link") {
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="font-bengali text-lg font-semibold text-gray-800 hover:text-amber-600 py-3 border-b border-amber-100 flex items-center transition-all duration-300"
                      >
                        {item.icon && (
                          <item.icon className="w-5 h-5 mr-3 text-amber-500" />
                        )}
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                } else if (item.type === "mega-menu") {
                  return (
                    <motion.div
                      key={index}
                      className="border-b border-amber-100"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <button
                        onClick={() =>
                          setActiveMegaMenu(
                            activeMegaMenu === item.key ? null : item.key
                          )
                        }
                        className="font-bengali text-lg font-semibold text-gray-800 hover:text-amber-600 py-3 w-full flex justify-between items-center transition-all duration-300"
                      >
                        <div className="flex items-center">
                          {item.headingIcon && (
                            <item.headingIcon className="w-5 h-5 mr-3 text-amber-500" />
                          )}
                          {item.label}
                        </div>
                        <motion.div
                          animate={{ rotate: activeMegaMenu === item.key ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeMegaMenu === item.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-8 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg mx-2 mb-2"
                          >
                            {item.sections.flatMap(section => section.links).map((link, linkIndex) => (
                              <motion.div
                                key={linkIndex}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: linkIndex * 0.1, duration: 0.3 }}
                              >
                                <Link
                                  href={link.href}
                                  className="font-bengali text-gray-700 hover:text-amber-600 hover:bg-amber-50 py-2 px-3 rounded-lg transition-all duration-300 flex items-center"
                                >
                                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                  {link.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                return null;
              })}

              <motion.div
                className="border-t border-amber-200 mt-4 pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                {session ? (
                  <button
                    onClick={() => signOut()}
                    className="flex w-full items-center px-6 py-3 text-sm font-bengali font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-300 rounded-xl"
                  >
                    <LogOut className="w-4 h-4 mr-4 text-gray-500" />
                    লগআউট
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/auth/login"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl py-3 px-4 font-bengali text-center flex items-center justify-center shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        লগইন
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/auth/register"
                        className="border-2 border-amber-500 text-amber-600 rounded-xl py-3 px-4 font-bengali text-center flex items-center justify-center hover:bg-amber-50 transition-all duration-300"
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        রেজিস্টার
                      </Link>
                    </motion.div>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="border-t border-amber-200 mt-4 pt-4 space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                {[
                  { href: "/track-order", label: "অর্ডার ট্র্যাকিং", icon: MapPin },
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
  );
}