"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

const WhislistButton = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  //  Handle wishlist toggle
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  return (
    <button
      onClick={toggleWishlist}
      className={`p-2 rounded-full ${
        isWishlisted ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"
      } hover:bg-red-100 transition-colors`}
      aria-label="Add to wishlist"
    >
      <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
    </button>
  );
};

export default WhislistButton;
