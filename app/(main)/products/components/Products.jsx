"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { Stick } from "next/font/google";
import StickyFilterBar from "./StickyFilterBar";
import FilterSidebar from "./FilterSidebar";
import HeroSection from "./HeroSection";
import QuickViewModal from "./QuickViewModal";
import ProductsSkeleton from "./ProductsSkeleton";
import ProductsError from "./ProductsError";
import ProductGrid from "./ProductGrid";
import { useRouter, useSearchParams } from "next/navigation"; 
// import { useCart } from "@/lib/cart"

// Mock products data
// const mockProducts = [
//   {
//     id: "1",
//     name: "দারুচিনি রেশমি জামদানি শাড়ি",
//     price: 8500,
//     salePrice: 7650,
//     image: "/assets/product-1.jpg",
//     images: ["/assets/product-1.jpg", "/assets/product-2.jpg"],
//     category: "premium",
//     occasion: "wedding",
//     material: "রেশম",
//     color: "দারুচিনি",
//     rating: 4.8,
//     reviewCount: 124,
//     stock: 8,
//     description:
//       "দারুচিনি রঙের এই প্রিমিয়াম রেশমি জামদানি শাড়িটি বিশেষ অনুষ্ঠানের জন্য উপযুক্ত। সূক্ষ্ম হাতের কাজ এবং উন্নত মানের রেশম দিয়ে তৈরি।",
//     createdAt: "2023-11-15T10:30:00Z",
//     isNew: true,
//     discount: 10,
//     featured: true,
//   },
//   {
//     id: "2",
//     name: "ফিরোজা জামদানি শাড়ি",
//     price: 7200,
//     salePrice: null,
//     image: "/assets/product-2.jpg",
//     images: ["/assets/product-2.jpg", "/assets/product-3.jpg"],
//     category: "classic",
//     occasion: "daily",
//     material: "সুতি",
//     color: "ফিরোজা",
//     rating: 4.5,
//     reviewCount: 86,
//     stock: 12,
//     description:
//       "ফিরোজা রঙের এই ক্লাসিক জামদানি শাড়িটি দৈনন্দিন পরিধানের জন্য আদর্শ। সুতি কাপড়ে সুন্দর নকশা এবং আরামদায়ক পরিধান।",
//     createdAt: "2023-10-20T14:25:00Z",
//     isNew: false,
//     discount: 0,
//     featured: false,
//   },
//   {
//     id: "3",
//     name: "বেগুনি রেশমি জামদানি শাড়ি",
//     price: 9500,
//     salePrice: 8075,
//     image: "/assets/product-3.jpg",
//     images: ["/assets/product-3.jpg", "assets/product-4.jpg"],
//     category: "premium",
//     occasion: "wedding",
//     material: "রেশম",
//     color: "বেগুনি",
//     rating: 4.9,
//     reviewCount: 152,
//     stock: 5,
//     description:
//       "বেগুনি রঙের এই প্রিমিয়াম রেশমি জামদানি শাড়িটিতে সোনালি সুতার কাজ রয়েছে। বিশেষ অনুষ্ঠান এবং বিয়ের জন্য একটি দুর্দান্ত পছন্দ।",
//     createdAt: "2023-12-05T09:45:00Z",
//     isNew: true,
//     discount: 15,
//     featured: true,
//   },
//   {
//     id: "4",
//     name: "সবুজ সুতি জামদানি শাড়ি",
//     price: 5800,
//     salePrice: 4930,
//     image: "/assets/product-4.jpg",
//     images: ["/public/assets/product-4.jpg", "/assets/product-1.jpg"],
//     category: "classic",
//     occasion: "festive",
//     material: "সুতি",
//     color: "সবুজ",
//     rating: 4.6,
//     reviewCount: 94,
//     stock: 15,
//     description:
//       "সবুজ রঙের এই সুতি জামদানি শাড়িটি উৎসব এবং বিশেষ অনুষ্ঠানের জন্য উপযুক্ত। হালকা এবং আরামদায়ক পরিধান।",
//     createdAt: "2023-11-02T11:15:00Z",
//     isNew: false,
//     discount: 15,
//     featured: false,
//   },
//   {
//     id: "5",
//     name: "কমলা জামদানি শাড়ি",
//     price: 6800,
//     salePrice: null,
//     image: "/assets/product-1.jpg",
//     images: ["/assets/product-1.jpg", "/assets/product-4.jpg"],
//     category: "classic",
//     occasion: "festive",
//     material: "সুতি",
//     color: "কমলা",
//     rating: 4.4,
//     reviewCount: 68,
//     stock: 10,
//     description:
//       "কমলা রঙের এই জামদানি শাড়িটি বসন্ত এবং গ্রীষ্মকালে পরার জন্য আদর্শ। হালকা এবং আরামদায়ক উপাদানে তৈরি।",
//     createdAt: "2023-09-15T13:20:00Z",
//     isNew: false,
//     discount: 0,
//     featured: false,
//   },
//   {
//     id: "6",
//     name: "গোলাপি রেশমি জামদানি শাড়ি",
//     price: 8900,
//     salePrice: 7565,
//     image: "/assets/product-2.jpg",
//     images: ["/public/assets/product-2.jpg", "/assets/product-3.jpg"],
//     category: "premium",
//     occasion: "wedding",
//     material: "রেশম",
//     color: "গোলাপী",
//     rating: 4.7,
//     reviewCount: 112,
//     stock: 7,
//     description:
//       "গোলাপি রঙের এই রেশমি জামদানি শাড়িটিতে সূক্ষ্ম নকশা কাজ রয়েছে। বিয়ে বা বিশেষ অনুষ্ঠানের জন্য নিখুঁত একটি পছন্দ।",
//     createdAt: "2023-12-18T16:30:00Z",
//     isNew: true,
//     discount: 15,
//     featured: true,
//   },
//   {
//     id: "7",
//     name: "নীল সুতি জামদানি শাড়ি",
//     price: 5500,
//     salePrice: null,
//     image: "/assets/product-3.jpg",
//     images: ["/public/assets/product-3.jpg", "/assets/product-4.jpg"],
//     category: "classic",
//     occasion: "daily",
//     material: "সুতি",
//     color: "নীল",
//     rating: 4.5,
//     reviewCount: 76,
//     stock: 14,
//     description:
//       "নীল রঙের এই সুতি জামদানি শাড়িটি দৈনন্দিন পরিধানের জন্য আদর্শ। আরামদায়ক এবং টেকসই উপাদানে তৈরি।",
//     createdAt: "2023-10-05T10:15:00Z",
//     isNew: false,
//     discount: 0,
//     featured: false,
//   },
//   {
//     id: "8",
//     name: "লাল রেশমি জামদানি শাড়ি",
//     price: 9200,
//     salePrice: 7820,
//     image: "/assets/product-4.jpg",
//     images: ["/assets/product-4.jpg", "/assets/product-1.jpg"],
//     category: "premium",
//     occasion: "wedding",
//     material: "রেশম",
//     color: "লাল",
//     rating: 4.8,
//     reviewCount: 135,
//     stock: 6,
//     description:
//       "লাল রঙের এই রেশমি জামদানি শাড়িটি বিয়ে এবং বিশেষ অনুষ্ঠানের জন্য নিখুঁত। সোনালি সুতায় সূক্ষ্ম কারুকাজে সজ্জিত।",
//     createdAt: "2023-11-28T09:30:00Z",
//     isNew: true,
//     discount: 15,
//     featured: true,
//   }
// ];

// Category options
const categories = [
  { id: "all", name: "সমস্ত শাড়ি" },
  { id: "premium", name: "প্রিমিয়াম" },
  { id: "classic", name: "ক্লাসিক" },
];

// Occasion options
const occasions = [
  { id: "all", name: "সমস্ত অনুষ্ঠান" },
  { id: "wedding", name: "বিয়ে" },
  { id: "festive", name: "উৎসব" },
  { id: "daily", name: "দৈনন্দিন" },
];

// Material options
const materials = [
  { id: "all", name: "সমস্ত উপাদান" },
  { id: "রেশম", name: "রেশম" },
  { id: "সুতি", name: "সুতি" },
];

export default function Products({products} ) {

    const router = useRouter();
  const searchParams = useSearchParams();

  // read category from URL (default to "all")
  const categoryParam = searchParams.get("category") || "all";


 
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedOccasion, setSelectedOccasion] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  // const { addToCart } = useCart()
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const error = null;
  // const products = mockProducts;


  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("jamdani-favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jamdani-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      quantity: 1,
      image: product.image,
    });

    // Show toast notification instead of alert
    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-5 right-5 bg-green-100 border-l-4 border-green-600 text-green-800 p-4 shadow-lg rounded-md flex items-center z-50";
    toast.innerHTML = `
      <CheckCircle size={24} class="mr-2 text-green-600" />
      <div>
        <p class="font-medium font-bengali">${product.name}</p>
        <p class="text-sm font-bengali">আপনার কার্টে যোগ করা হয়েছে</p>
      </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("opacity-0", "transition-opacity", "duration-500");
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  };


  

  const filteredProducts = products.filter((product) => {
   

    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const occasionMatch =
      selectedOccasion === "all" || product.occasion === selectedOccasion;
    const materialMatch =
      selectedMaterial === "all" || product.material === selectedMaterial;
    const priceToCheck = product.salePrice || product.price;
    const priceMatch =
      priceToCheck >= priceRange[0] && priceToCheck <= priceRange[1];
    const searchMatch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const favoriteMatch = !showFavorites || favorites.includes(product.id);
    return (
      categoryMatch &&
      priceMatch &&
      searchMatch &&
      favoriteMatch &&
      occasionMatch &&
      materialMatch 
      
    );
  });

const handleCategoryChange = (id) => {
  setSelectedCategory(id);

  const params = new URLSearchParams(window.location.search);
  params.set("category", id);
  router.push(`/products?${params.toString()}`);
};

  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case "price-high":
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "discount":
        const discountA = a.salePrice ? (a.price - a.salePrice) / a.price : 0;
        const discountB = b.salePrice ? (b.price - b.salePrice) / b.price : 0;
        return discountB - discountA;
      case "popular":
      default:
        return b.rating - a.rating;
    }
  });

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="text-amber-500 fill-amber-500"
          size={16}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="text-amber-500 fill-amber-500"
          size={16}
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="text-gray-300" size={16} />
      );
    }

    return stars;
  };

  if (loading) {
    return <ProductsSkeleton />;
  }

  if (error) {
    return <ProductsError />;
  }

  return (
    <div className="bg-amber-50/30 min-h-screen pb-12">
      {/* Hero section with search */}

      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main content with filters */}
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Sticky filter bar */}
        <StickyFilterBar
          isScrolled={isScrolled}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          viewMode={viewMode}
          setViewMode={setViewMode}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
          sortedProducts={sortedProducts}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* Filter and products grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar */}
          <FilterSidebar
            filterOpen={filterOpen}
            categories={categories}
            occasions={occasions}
            materials={materials}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedOccasion={selectedOccasion}
            handleCategoryChange={handleCategoryChange}
          />

          {/* Product grid */}
          <ProductGrid
            sortedProducts={sortedProducts} 
            viewMode={viewMode}
            setHoveredProduct={setHoveredProduct}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            renderRatingStars={renderRatingStars}
            setQuickViewProduct={setQuickViewProduct}
          />
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        quickViewProduct={quickViewProduct}
        setQuickViewProduct={setQuickViewProduct}
        renderRatingStars={renderRatingStars}
      />

      {/* Add custom styles for range slider */}
      <style jsx global>{`
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #b45309;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 2;
          position: relative;
        }

        .range-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #b45309;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 2;
          position: relative;
        }
      `}</style>
    </div>
  );
}
