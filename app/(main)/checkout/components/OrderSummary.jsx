import Image from "next/image";

import { Clock, ShieldCheck, Truck } from "lucide-react";

const OrderSummary = ({ cartItems, subtotal, total, shipping }) => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6">
        <h2 className="text-lg font-bold mb-4 pb-4 border-b font-bengali">
          অর্ডার সারাংশ
        </h2>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.images?.[0] || "/placeholder.png"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-sm mb-1 font-bengali">
                  {item.name}
                </h3>
                {/* <p className="text-xs text-gray-500 mb-1 font-bengali">
                  {item.color}, {item.size}
                </p> */}
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500 font-bengali">
                    সংখ্যা: {item.quantity}
                  </p>
                  <p className="text-sm font-semibold font-bengali">
                    ৳ {item.discountPrice?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="border-t border-b py-4 space-y-3 text-sm mb-6">
          <div className="flex justify-between font-bengali">
            <span>সাবটোটাল</span>
            <span>৳ {subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between font-bengali">
            <span>শিপিং</span>
            <span>৳ {shipping}</span>
          </div>
        </div>

        <div className="flex justify-between font-bold mb-6 font-bengali">
          <span>মোট</span>
          <span>৳ {total.toLocaleString()}</span>
        </div>

        {/* Reassurance Messages */}
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center font-bengali">
            <Truck className="w-4 h-4 mr-2 text-amber-600" />
            <span>দেশব্যাপী শিপিং</span>
          </div>

          <div className="flex items-center font-bengali">
            <ShieldCheck className="w-4 h-4 mr-2 text-amber-600" />
            <span>১০০% নিরাপদ পেমেন্ট</span>
          </div>

          <div className="flex items-center font-bengali">
            <Clock className="w-4 h-4 mr-2 text-amber-600" />
            <span>৭ দিনের রিটার্ন পলিসি</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
