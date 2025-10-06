// OrderDetailsPanel.jsx
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  FileText,
  TruckIcon,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  getTrackingIcon,
  getTrackingIconBg,
  getTrackingStatusText,
} from "../utils/orderHelpers.js";

function OrderItemsList({ items }) {
  return (
    <div className="p-4">
      <h4 className="font-bengali font-medium text-gray-700 mb-3">
        অর্ডারের আইটেম
      </h4>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center py-3 border-b border-gray-100 last:border-0"
          >
            <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
              {item?.product?.images?.[0] && (
                <Image
                  src={item?.product?.images?.[0]}
                  alt={item?.product?.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="ml-4 flex-grow">
              <h4 className="font-bengali font-medium">
                {item?.product?.name}
              </h4>
              <p className="text-sm text-gray-600 font-bengali">
                পরিমাণ: {item.quantity}
              </p>
            </div>
            <div className="font-medium font-bengali text-right">
              ৳ {item.price.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderSummaryAndShipping({ order }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Order Summary */}
      <div>
        <h4 className="font-bengali font-medium text-gray-700 mb-3">
          অর্ডার সারসংক্ষেপ
        </h4>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="space-y-2 divide-y divide-gray-200">
            {/* Subtotal Calculation */}
            <div className="flex justify-between py-1">
              <span className="text-gray-600 font-bengali">সাবটোটাল:</span>
              <span className="font-bengali">
                ৳ {(order.totalAmount - 100).toLocaleString()}
              </span>
            </div>
            {/* Shipping Charge */}
            <div className="flex justify-between py-1">
              <span className="text-gray-600 font-bengali">শিপিং চার্জ:</span>
              <span className="font-bengali">৳ ১০০</span>
            </div>
            {/* Total */}
            <div className="flex justify-between py-2 font-medium  mt-2 pt-2">
              <span className="font-bengali text-lg">মোট:</span>
              <span className="font-bengali text-lg text-amber-600">
                ৳ {order.totalAmount?.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-3 bg-amber-50 p-3 rounded-md flex items-start">
            <div className="mt-0.5">
              <Clock className="w-4 h-4 text-amber-700" />
            </div>
            <div className="ml-3">
              <h5 className="font-bengali font-medium text-sm text-amber-800">
                পেমেন্ট মেথড
              </h5>
              <p className="text-sm text-gray-700 font-bengali">
                {order.paymentMethod}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Address & Status Details */}
      <div>
        <h4 className="font-bengali font-medium text-gray-700 mb-3">
          শিপিং ঠিকানা
        </h4>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="space-y-2">
            <p className="font-bengali font-medium">
              {order.shippingAddress.firstName} {order.shippingAddress.lastName}
            </p>
            <p className="text-gray-700 font-bengali">
              {order.shippingAddress.addressLine1}
            </p>
            <p className="text-gray-700 font-bengali">
              {order.shippingAddress.city}
            </p>
            <p className="text-gray-700 font-bengali">
              ফোন: {order.shippingAddress?.phone}
            </p>
          </div>
        </div>

        {/* Shipping Information (Conditional) */}
        {order.status === "shipped" && order.shippingInfo && (
          <div className="mt-3 bg-blue-50 p-3 rounded-md flex items-start">
            <div className="mt-0.5">
              <TruckIcon className="w-4 h-4 text-blue-700" />
            </div>
            <div className="ml-3">
              <h5 className="font-bengali font-medium text-sm text-blue-800">
                শিপিং ইনফরমেশন
              </h5>
              <p className="text-sm text-gray-700 font-bengali">
                কুরিয়ার: {order.shippingInfo.courier}
              </p>
              <p className="text-sm text-gray-700 font-bengali">
                ট্র্যাকিং নম্বর: {order.shippingInfo.trackingNumber}
              </p>
              <p className="text-sm text-gray-700 font-bengali">
                সম্ভাব্য ডেলিভারি: {order.shippingInfo.estimatedDelivery}
              </p>
            </div>
          </div>
        )}

        {/* Cancellation Reason (Conditional) */}
        {order.status === "cancelled" && order.cancellationReason && (
          <div className="mt-3 bg-red-50 p-3 rounded-md flex items-start">
            <div className="mt-0.5">
              <XCircle className="w-4 h-4 text-red-600" />
            </div>
            <div className="ml-3">
              <h5 className="font-bengali font-medium text-sm text-red-800">
                বাতিলের কারণ
              </h5>
              <p className="text-sm text-gray-700 font-bengali">
                {order.cancellationReason}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OrderTracking({ trackingInfo }) {
  if (!trackingInfo || trackingInfo.length === 0) return null;

  return (
    <div className="p-4 border-t border-gray-100">
      <h4 className="font-bengali font-medium text-gray-700 mb-4">
        অর্ডার ট্র্যাকিং
      </h4>

      <div className="relative">
        {trackingInfo.map((tracking, index) => (
          <div key={tracking.status} className="flex mb-6 last:mb-0">
            {/* Status Icon & Connector */}
            <div className="relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${getTrackingIconBg(
                  tracking.status
                )}`}
              >
                {getTrackingIcon(tracking.status)}
              </div>
              {/* Connecting line */}
              {index < trackingInfo.length - 1 && (
                <div className="absolute top-8 left-4 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
              )}
            </div>

            {/* Status Details */}
            <div className="ml-4 pt-1">
              <h5 className="font-bengali font-medium">
                {getTrackingStatusText(tracking.status)}
              </h5>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span>{tracking.date}</span>
                <span className="mx-2">•</span>
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                <span>{tracking.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionButtons({ order }) {
  return (
    <div className="p-4 border-t border-gray-100 flex flex-wrap gap-3">
      <Link
        href={`/orders/${order.id}`}
        className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center"
      >
        <FileText className="w-4 h-4 mr-2" />
        বিস্তারিত দেখুন
      </Link>

      <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-bengali flex items-center">
        <Download className="w-4 h-4 mr-2" />
        ইনভয়েস ডাউনলোড
      </button>

      {order.status === "delivered" && (
        <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-bengali flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          আবার অর্ডার করুন
        </button>
      )}

      {(order.status === "processing" || order.status === "ordered") && (
        <button className="bg-red-50 border border-red-300 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors font-bengali flex items-center">
          <XCircle className="w-4 h-4 mr-2" />
          অর্ডার বাতিল করুন
        </button>
      )}
    </div>
  );
}

export default function OrderDetailsPanel({ order }) {
  return (
    <>
      {/* Information Tabs Placeholder */}
      {/* <div className="p-4 bg-amber-50/60">
        <div className="flex flex-nowrap overflow-x-auto space-x-2 pb-2 -mx-1 px-1">
          <div className="bg-white px-4 py-2 rounded-md shadow-sm flex items-center space-x-1 border border-amber-300">
            <FileText className="w-4 h-4 text-amber-700" />
            <span className="whitespace-nowrap font-bengali text-sm font-medium text-amber-700">
              অর্ডার ডিটেইলস
            </span>
          </div>
          {order.status !== "cancelled" && (
            <div className="bg-white px-4 py-2 rounded-md shadow-sm flex items-center space-x-1">
              <TruckIcon className="w-4 h-4 text-gray-600" />
              <span className="whitespace-nowrap font-bengali text-sm font-medium text-gray-600">
                ট্র্যাকিং
              </span>
            </div>
          )}
          <div className="bg-white px-4 py-2 rounded-md shadow-sm flex items-center space-x-1">
            <Download className="w-4 h-4 text-gray-600" />
            <span className="whitespace-nowrap font-bengali text-sm font-medium text-gray-600">
              ইনভয়েস
            </span>
          </div>
        </div>
      </div> */}

      <OrderItemsList items={order.items} />
      <OrderSummaryAndShipping order={order} />
      <OrderTracking trackingInfo={order.trackingInfo} />
      {/* <ActionButtons order={order} /> */}
    </>
  );
}
