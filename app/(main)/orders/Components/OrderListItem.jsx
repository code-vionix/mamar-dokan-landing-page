"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown } from "lucide-react";
import {
  formattedDate,
  getStatusBgColor,
  getStatusColor,
  getStatusIcon,
} from "../utils/orderHelpers.js";
import OrderDetailsPanel from "./OrderDetailsPanel.jsx";

export default function OrderListItem({
  order,
  selectedOrder,
  toggleOrderDetails,
}) {
  const isSelected = selectedOrder === order.id;
console.log(order)
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Order Header (Summary) */}
      <div
        className={`p-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between cursor-pointer ${
          isSelected ? "border-b border-gray-200" : ""
        }`}
        onClick={() => toggleOrderDetails(order.id)}
      >
        <div className="flex items-center">
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 ${getStatusBgColor(
              order.status.toLowerCase()
            )}`}
          >
            {getStatusIcon(order.status)}
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="font-bengali font-semibold text-lg">
                অর্ডার #{order.id}
              </h3>
              <span
                className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  order.status.toLowerCase()
                )}`}
              >
                {order.status}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              <span>{formattedDate(order.createdAt)}</span>
              <span className="mx-2">•</span>
              <span className="font-bengali font-medium text-gray-700">
                ৳ {order.totalAmount?.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end">
          <span className="text-sm font-bengali text-gray-600 md:mr-4">
            {order.items.length} আইটেম
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transform transition-transform ${
              isSelected ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Order Details (Collapsible Section) */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <OrderDetailsPanel order={order} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
