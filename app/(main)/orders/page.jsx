import Breadcrumb from "../components/common/Breadcrumb";
import Hero from "../components/common/Hero";
import OrdersClient from "./Components/OrdersClient";
import { orderData } from "./data/mockOrders"; // Adjust path as necessary

// Simulate async data fetching (Server-side)
async function getOrders() {
  // await new Promise(resolve => setTimeout(resolve, 50));
  return orderData;
}

export default async function OrdersPage() {
  // 1. Data Fetching (Server-side)
  const orders = await getOrders();

  return (
    <div className="min-h-screen bg-amber-50/30">
      <Hero
        title="আমার অর্ডার সমূহ"
        description="আপনার সকল অর্ডার এবং তাদের বর্তমান অবস্থা দেখুন"
      />
      <Breadcrumb pageName={"অর্ডার"} />
      <OrdersClient initialOrders={orders} />
    </div>
  );
}
