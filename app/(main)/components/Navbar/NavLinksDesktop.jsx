import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown, Sparkles, Crown } from "lucide-react";
import Image from "next/image";

export default function NavLinksDesktop({
  navigationData,
  activeMegaMenu,
  handleCategoryMouseEnter,
  handleCategoryMouseLeave,
  handleMegaMenuMouseEnter,
  handleMegaMenuMouseLeave,
  pathname,
}) {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigationData.map((item, index) => {
        if (item.type === "link") {
          return (
            <motion.div key={index} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className={`font-bengali text-lg font-semibold relative ${
                  pathname === item.href
                    ? "text-amber-600"
                    : "text-gray-800 hover:text-amber-600"
                } transition-all duration-300 group flex items-center`}
              >
                {item.icon && (
                  <item.icon className="w-4 h-4 mr-1" />
                )}
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform ${
                    pathname === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300 origin-left`}
                ></span>
              </Link>
            </motion.div>
          );
        } else if (item.type === "mega-menu") {
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleCategoryMouseEnter(item.key)}
              onMouseLeave={handleCategoryMouseLeave}
            >
              <motion.button
                whileHover={{ y: -2 }}
                className={`flex items-center font-bengali text-lg font-semibold relative ${
                  activeMegaMenu === item.key || pathname.includes(item.href)
                    ? "text-amber-600"
                    : "text-gray-800 hover:text-amber-600"
                } transition-all duration-300 group`}
              >
                <span>{item.label}</span>
                <motion.div
                  animate={{ rotate: activeMegaMenu === item.key ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="ml-2 w-4 h-4" />
                </motion.div>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform ${
                    activeMegaMenu === item.key || pathname.includes(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300 origin-left`}
                ></span>
              </motion.button>

              <AnimatePresence>
                {activeMegaMenu === item.key && (
                  <motion.div
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
                      {item.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className={`p-6 ${sectionIndex === 0 ? "bg-gradient-to-br from-amber-50 to-orange-50 border-r border-amber-100" : section.featured ? "bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center text-center" : "border-r border-amber-100"}`}
                        >
                          {section.heading && (
                            <h3 className="font-bengali font-bold text-xl mb-4 text-amber-800 flex items-center">
                              {section.headingIcon && (
                                <section.headingIcon className="w-5 h-5 mr-2" />
                              )}
                              {section.heading}
                            </h3>
                          )}
                          {section.links && (
                            <ul className="space-y-3">
                              {section.links.map((link, linkIndex) => (
                                <motion.li key={linkIndex} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                  <Link
                                    href={link.href}
                                    className="font-bengali text-gray-700 hover:text-amber-700 hover:bg-amber-50 py-2 px-3 rounded-lg transition-all duration-300 flex items-center group"
                                  >
                                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                                    {link.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          )}
                          {section.featured && (
                            <>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                              >
                                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur opacity-30"></div>
                                <div className="relative h-32 w-32 mb-4 rounded-xl overflow-hidden shadow-lg">
                                  <Image
                                    src={section.featured.image}
                                    alt={section.featured.alt}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </motion.div>
                              <h3 className="font-bengali font-bold text-lg mb-2 text-amber-800">
                                {section.featured.title}
                              </h3>
                              <p className="font-bengali text-sm text-gray-600 mb-4 leading-relaxed">
                                {section.featured.description}
                              </p>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Link
                                  href={section.featured.href}
                                  className="font-bengali bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg flex items-center"
                                >
                                  <Crown className="w-4 h-4 mr-2" />
                                  {section.featured.cta}
                                </Link>
                              </motion.div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        return null;
      })}
    </nav>
  );
}