import Link from "next/link";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import Image from "next/image";

const CartItems = ({
  cartItems,
  clearCart,
  handleQuantityChange,
  removeFromCart,
}) => {
  return (
    <>
      <div className="lg:w-2/3">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <div className="border-b pb-4 mb-4 flex justify-between">
            <h2 className="text-lg font-semibold text-gray-800 font-bengali">
              কার্ট আইটেম ({cartItems.length})
            </h2>
            <button
              onClick={clearCart}
              className="text-red-500 text-sm hover:text-red-700 flex items-center font-bengali"
            >
              <Trash2 size={16} className="mr-1" />
              কার্ট খালি করুন
            </button>
          </div>

          <ul className="divide-y divide-gray-200">
            {cartItems?.map((item, index) => (
              <li
                key={item?.id + index}
                className="py-6 flex flex-wrap md:flex-nowrap"
              >
                <div className="md:w-1/5 mb-4 md:mb-0">
                  <div className="relative h-24 w-20 md:h-32 md:w-28 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={item?.image || "/placeholder.png"}
                      alt={item?.name || "Product image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-3/5 md:px-4">
                  <h3 className="font-medium text-gray-800 font-bengali">
                    {item?.name}
                  </h3>
                  {item?.salePrice ? (
                    <div className="mt-1 flex items-center">
                      <span className="text-red-600 font-bold">
                        ৳{item?.salePrice?.toLocaleString()}
                      </span>
                      <span className="text-gray-500 text-sm line-through ml-2">
                        ৳{item?.price?.toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    <div className="mt-1 font-semibold">
                      ৳{item?.price?.toLocaleString()}
                    </div>
                  )}

                  <div className="flex items-center mt-3">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity, -1)
                        }
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        disabled={item?.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1 border-x border-gray-300">
                        {item?.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity, 1)
                        }
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/5 flex flex-col items-end justify-between mt-4 md:mt-0">
                  <div className="font-bold text-amber-900">
                    ৳
                    {(
                      (item?.salePrice || item?.price) * item?.quantity
                    ).toLocaleString()}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <Link
            href="/products"
            className="flex items-center text-amber-700 hover:underline font-bengali"
          >
            <ArrowRight size={16} className="mr-1 transform rotate-180" />
            শপিং চালিয়ে যান
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartItems;
