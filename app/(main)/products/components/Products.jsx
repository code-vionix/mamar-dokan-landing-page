"use client";

import { Star, StarHalf } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useOptimistic, useState } from "react";
import FilterSidebar from "./FilterSidebar";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import ProductsError from "./ProductsError";
import ProductsSkeleton from "./ProductsSkeleton";
import QuickViewModal from "./QuickViewModal";
import StickyFilterBar from "./StickyFilterBar";

const defaultCategory = { id: "all", name: "সমস্ত শাড়ি", slug: "all" };

export default function Products({ products }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // read category from URL (default to "all")
  const categoryParam = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [categories, setCategories] = useState([]);
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
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/category`
        );
        const data = await response.json();
        setCategories([defaultCategory, ...data.data]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setLoading(false);
      }
    };

    fetchCategories();
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

  // useEffect(() => {
  //   const savedFavorites = localStorage.getItem("jamdani-favorites");
  //   if (savedFavorites) {
  //     setFavorites(JSON.parse(savedFavorites));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("jamdani-favorites", JSON.stringify(favorites));
  // }, [favorites]);

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

  const filteredProducts = (products || []).filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category.slug === selectedCategory;
    const priceToCheck = product.salePrice || product.price;
    const priceMatch =
      priceToCheck >= priceRange[0] && priceToCheck <= priceRange[1];
    const searchMatch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const favoriteMatch = !showFavorites || favorites.includes(product.id);
    return categoryMatch && priceMatch && searchMatch && favoriteMatch;
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
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            handleCategoryChange={handleCategoryChange}
          />

          {/* Product grid */}
          <ProductGrid
            sortedProducts={sortedProducts}
            viewMode={viewMode}
            setHoveredProduct={setHoveredProduct}
            favorites={favorites}
            renderRatingStars={renderRatingStars}
            setQuickViewProduct={setQuickViewProduct}
            setFavorites={setFavorites}
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
