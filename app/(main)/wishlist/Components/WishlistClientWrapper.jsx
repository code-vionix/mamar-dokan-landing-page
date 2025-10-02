"use client";

import { AnimatePresence } from "framer-motion";
import { use, useEffect, useState } from "react";
import { FilterEmptyState, WishlistEmptyState } from "./WishlistEmptyState";
import WishlistFilterPanel from "./WishlistFilterPanel";
import WishlistHeader from "./WishlistHeader";
import WishlistItemCard from "./WishlistItemCard";
import { useSession } from "next-auth/react";

// Props will now receive initial data from the Server Component
export default  function WishlistClientWrapper() {
// export default  function WishlistClientWrapper({ initialItems }) {
  const { data: session, status } = useSession();
    const userId = session?.user?.id;
  

// const [wishlistItems, setWishlistItems] = useState(initialItems);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Still useful for initial client hydration
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    availability: "all",
    priceRange: "all",
    materials: [],
    occasions: [],
  });

useEffect(() => {
  if (!userId) return;

  async function fetchWishlist() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wishlist/${userId}`
      );
      const data = await response.json();
      setWishlistItems(data.data.map((pro)=>pro.product));
      
     
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  }

  fetchWishlist();
  
}, [userId]);


  useEffect(() => {
    // Simulate initial loading time after data is received
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); // Reduced delay since actual data fetch is assumed to be done by the server

    return () => clearTimeout(timer);
  }, []);

  // Handle adding to cart
  const handleAddToCart = (productId) => {
    setAddedToCart((prev) => [...prev, productId]);
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== productId));
    }, 2000);
  };

  // Handle removing from wishlist
  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      availability: "all",
      priceRange: "all",
      materials: [],
      occasions: [],
    });
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    if (filterType === "availability" || filterType === "priceRange") {
      setFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    } else if (filterType === "materials" || filterType === "occasions") {
      setFilters((prev) => {
        const currentFilters = prev[filterType];
        if (currentFilters.includes(value)) {
          return {
            ...prev,
            [filterType]: currentFilters.filter((item) => item !== value),
          };
        } else {
          return {
            ...prev,
            [filterType]: [...currentFilters, value],
          };
        }
      });
    }
  };

  // Apply filters logic
  const filteredItems = wishlistItems.filter((item) => {
    // Availability filter
    if (filters.availability === "available" && !item.isAvailable) return false;
    if (filters.availability === "unavailable" && item.isAvailable)
      return false;

    // Price range filter
    if (filters.priceRange === "under10k" && item.discountPrice >= 10000)
      return false;
    if (
      filters.priceRange === "10k-15k" &&
      (item.discountPrice < 10000 || item.discountPrice > 15000)
    )
      return false;
    if (
      filters.priceRange === "15k-20k" &&
      (item.discountPrice < 15000 || item.discountPrice > 20000)
    )
      return false;
    if (filters.priceRange === "above20k" && item.discountPrice <= 20000)
      return false;

    // Materials filter
    if (
      filters.materials.length > 0 &&
      !filters.materials.includes(item.material)
    )
      return false;

    // Occasions filter
    if (
      filters.occasions.length > 0 &&
      !filters.occasions.includes(item.occasion)
    )
      return false;

    return true;
  });

  const handleClearWishlist = () => {
    // Use window.confirm inside the client component
    if (
      window.confirm("আপনি কি নিশ্চিত যে আপনি আপনার উইশলিস্ট খালি করতে চান?")
    ) {
      setWishlistItems([]);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-amber-50/30 flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-amber-200 mb-4"></div>
          <div className="h-4 bg-amber-200 rounded w-48 mb-2"></div>
          <div className="h-3 bg-amber-100 rounded w-36"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50/30">
      <WishlistHeader
        totalItems={wishlistItems.length}
        onToggleFilter={() => setFilterOpen(!filterOpen)}
        onClearWishlist={handleClearWishlist}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {wishlistItems.length > 0 ? (
          <div>
            <WishlistFilterPanel
              filterOpen={filterOpen}
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={resetFilters}
            />

            {/* Product Cards */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredItems.map((item) => (
                    <WishlistItemCard
                      key={item.id}
                      item={item}
                      isAddedToCart={addedToCart.includes(item.id)}
                      onAddToCart={handleAddToCart}
                      onRemove={handleRemoveFromWishlist}
                    />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <FilterEmptyState onResetFilters={resetFilters} />
            )}
          </div>
        ) : (
          <WishlistEmptyState />
        )}
      </div>

      {/* Product Recommendations */}
      {wishlistItems.length > 0 && (
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
            আপনার পছন্দ হতে পারে
          </h2>
          {/* Recommendation placeholder uses Server-side static rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="h-52 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
                  <div className="h-6 bg-amber-100 rounded w-1/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
