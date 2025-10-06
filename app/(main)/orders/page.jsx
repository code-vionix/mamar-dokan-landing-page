import { auth } from "@/auth";
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
  const {user} = await auth()
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/user/${user.id}`
  );
  const data = await response.json();
  const orders = data.data;
console.log(orders)
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
