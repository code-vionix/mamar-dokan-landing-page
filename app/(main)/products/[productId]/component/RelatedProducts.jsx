import relatedProducts from "@/data/mockProducts";
import calculatedDiscount from "@/lib/calculatedDiscount";
import Image from "next/image";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-amber-900 font-bengali mb-6">
        আপনার পছন্দের জন্য আরও শাড়ি
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id} className="group">
            <div className="relative rounded-lg overflow-hidden bg-white shadow-sm">
              <div className="aspect-w-3 aspect-h-4 relative">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.salePrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                    {calculatedDiscount(item.price, item.salePrice)}% ছাড়
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-amber-900 font-bengali truncate">
                  {item.name}
                </h3>
                <div className="flex items-center mt-1">
                  {item.salePrice ? (
                    <>
                      <span className="text-red-600 font-semibold">
                        ৳{item.salePrice}
                      </span>
                      <span className="text-gray-400 line-through text-sm ml-2">
                        ৳{item.price}
                      </span>
                    </>
                  ) : (
                    <span className="font-semibold">৳{item.price}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
