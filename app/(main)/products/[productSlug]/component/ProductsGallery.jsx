"use client";

import calculatedDiscount from "@/lib/calculatedDiscount";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const ProductsGallery = ({ product }) => {
  const imgRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  // Handle image zoom
  const handleMouseMove = (e) => {
    if (!imgRef.current) return;

    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };
  return (
    <div className="lg:w-3/5 px-4">
      {/* Main image with zoom */}
      <div
        ref={imgRef}
        className="relative h-[500px] mb-4  rounded-lg overflow-hidden shadow-md cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
      >
        <Image
          src={product.images?.[0] ?? "/assets/product-1.jpg"}
          alt={product.name}
          fill
          className="object-contain"
          priority
        />

        {showZoom && (
          <div
            className="absolute inset-0 bg-no-repeat pointer-events-none z-10"
            style={{
              backgroundImage: `url(${product.images[activeImage]})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundSize: "200%",
            }}
          />
        )}

        {product.salePrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-bold font-bengali">
            {calculatedDiscount(product.price, product.salePrice)}% ছাড়
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-4">
        {product.images.map((img, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer border-2 rounded-md overflow-hidden flex-shrink-0 ${
              activeImage === index
                ? "border-amber-500"
                : "border-transparent hover:border-amber-300"
            }`}
            onClick={() => setActiveImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-20 w-20">
              <Image
                src={product.images?.[0] ?? "/assets/product-1.jpg"}
                alt={`${product.name} ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional product images showcase */}
      <div className="mt-8">
        <h3 className="font-bengali text-lg font-semibold mb-4 text-gray-800">
          শাড়ি পরিধান স্টাইল
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-60 rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/assets/product-1.jpg"
              alt="Style Example 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-60 rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/assets/product-2.jpg"
              alt="Style Example 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;
