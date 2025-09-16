import { CheckCircle, Truck, RefreshCcw, Award, Star } from "lucide-react";
import WhislistButton from "./WhislistButton";
import calculatedDiscount from "@/lib/calculatedDiscount";
import UserActionSection from "./UserActionSection";
const ProductsContent = ({ product }) => {
  return (
    <div className="lg:w-2/5 px-4 mt-6 lg:mt-0">
      {/* Basic Info */}
      <div>
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold text-amber-900 font-bengali mb-2">
            {product.name}
          </h1>
          <WhislistButton />
        </div>

        {/* rating */}
        <div className="flex items-center mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          <span className="text-sm text-gray-600 ml-2 font-bengali">
            (৪৫ রিভিউ)
          </span>
        </div>

        <div className="flex items-end mb-4">
          {product.salePrice ? (
            <>
              <span className="text-3xl font-bold text-red-600 font-bengali">
                ৳{product.salePrice.toLocaleString()}
              </span>
              <span className="ml-3 text-lg text-gray-500 line-through font-bengali">
                ৳{product.price.toLocaleString()}
              </span>
              <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-1 rounded font-bengali">
                {calculatedDiscount(product.price, product.salePrice)}% ছাড়
              </span>
            </>
          ) : (
            <span className="text-3xl font-bold text-gray-900 font-bengali">
              ৳{product.price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center text-sm mb-4">
          {product.inStock ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span className="font-bengali">স্টকে আছে</span>
            </div>
          ) : (
            <div className="text-red-500 font-bengali">স্টকে নেই</div>
          )}

          <div className="h-4 w-px bg-gray-300 mx-3"></div>

          <div className="text-gray-600 font-bengali">কোড: {product.id}</div>
        </div>
      </div>

      {/* Short description */}
      <p className="text-gray-700 font-bengali mb-6 border-b border-gray-200 pb-6">
        {product.description}
      </p>

      {/* user action */}
      <UserActionSection product={product} />

      {/* Shipping & Returns */}
      <div className="space-y-4 border-t border-gray-200 pt-6">
        <div className="flex">
          <div className="mr-4 text-amber-700">
            <Truck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 font-bengali text-sm">
              বিনামূল্যে শিপিং
            </h4>
            <p className="text-sm text-gray-600 font-bengali">
              ২,০০০ টাকা বা তার বেশি অর্ডারে
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 text-amber-700">
            <RefreshCcw className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 font-bengali text-sm">
              ৭ দিনের রিটার্ন পলিসি
            </h4>
            <p className="text-sm text-gray-600 font-bengali">
              কোয়ালিটি ইস্যু থাকলে রিটার্ন করা যাবে
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 text-amber-700">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 font-bengali text-sm">
              ১০০% আসল জামদানি
            </h4>
            <p className="text-sm text-gray-600 font-bengali">
              সার্টিফাইড অথেনটিক হ্যান্ডলুম
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContent;
