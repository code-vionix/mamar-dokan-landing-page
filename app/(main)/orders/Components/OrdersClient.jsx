"use client";

import { useEffect, useState } from "react";
import FilterPanel from "./FilterPanel";
import OrderEmptyState from "./OrderEmptyState";
import OrderHeader from "./OrderHeader";
import OrderListItem from "./OrderListItem";

export default function OrdersClient({ initialOrders }) {
  /* state management start */
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState(initialOrders); // Initialize state with server data
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Simulate a brief client-side transition/loading (e.g., if rendering was complex)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); // Very short delay since the data is ready
    return () => clearTimeout(timer);
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter orders based on client-side state
  const filteredOrders = orders.filter((order) => {
    // Search filter
    if (
      searchTerm &&
      !order.id.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Status filter
    if (statusFilter !== "all" && order.status !== statusFilter) {
      return false;
    }

    // Date filter (Placeholder logic)
    return true;
  });

  // Toggle order details visibility
  const toggleOrderDetails = (orderId) => {
    setSelectedOrder((prevSelected) =>
      prevSelected === orderId ? null : orderId
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center items-center py-20">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-200 mb-4"></div>
            <div className="h-4 bg-amber-200 rounded w-48 mb-2"></div>
            <div className="h-3 bg-amber-100 rounded w-36"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* 1. Header Component */}
      <OrderHeader
        totalOrders={orders.length}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />

      {/* 2. Filter Panel Component */}
      <FilterPanel
        filterOpen={filterOpen}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />

      {/* 3. Orders List or Empty State */}
      {filteredOrders.length > 0 ? (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <OrderListItem
              key={order.id}
              order={order}
              selectedOrder={selectedOrder}
              toggleOrderDetails={toggleOrderDetails}
            />
          ))}
        </div>
      ) : (
        <OrderEmptyState
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          dateFilter={dateFilter}
          setSearchTerm={setSearchTerm}
          setStatusFilter={setStatusFilter}
          setDateFilter={setDateFilter}
        />
      )}
    </div>
  );
}
