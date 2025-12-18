"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import TopBar from "./Navbar/TopBar";
import Logo from "./Navbar/Logo";
import NavLinksDesktop from "./Navbar/NavLinksDesktop";
import NavIcons from "./Navbar/NavIcons";
import SearchOverlay from "./Navbar/SearchOverlay";
import MobileMenu from "./Navbar/MobileMenu";
import navigationData from "./Navbar/navigationData";
import useNavbar from "./hooks/useNavbar";


export default function Navbar() {
  const { isScrolled, searchOpen, setSearchOpen, isMobileMenuOpen, setIsMobileMenuOpen, activeMegaMenu, handleCategoryMouseEnter, handleCategoryMouseLeave, handleMegaMenuMouseEnter, handleMegaMenuMouseLeave } = useNavbar();
  const { data: session } = useSession();
  const pathname = usePathname();


  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname, setIsMobileMenuOpen, setSearchOpen]);


  return (
    <>
      <TopBar />

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
                <circle cx="100" cy="20" r="1.2" fill="rgba(217, 119, 6, 0.06)" />
                <circle cx="40" cy="80" r="0.8" fill="rgba(217, 119, 6, 0.05)" />
                <circle cx="80" cy="100" r="1.1" fill="rgba(217, 119, 6, 0.07)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#jamdani-pattern-nav)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            <Logo />

            <NavLinksDesktop
              navigationData={navigationData}
              activeMegaMenu={activeMegaMenu}
              handleCategoryMouseEnter={handleCategoryMouseEnter}
              handleCategoryMouseLeave={handleCategoryMouseLeave}
              handleMegaMenuMouseEnter={handleMegaMenuMouseEnter}
              handleMegaMenuMouseLeave={handleMegaMenuMouseLeave}
              pathname={pathname}
            />

            <NavIcons
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              session={session}
            />

            <div className="md:hidden flex items-center space-x-4">
              <NavIcons
                isMobile={true}
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
                session={session}
              />
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

        <SearchOverlay searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </motion.header>
    </>
  );
}