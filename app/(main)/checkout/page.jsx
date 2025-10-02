"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useCart } from "@/lib/cart";
import { useSession } from "next-auth/react";
import Header from "./components/Header";
import OrderSummary from "./components/OrderSummary";
import CheckoutForm from "./components/form/CheckoutForm";

// Mock data for demonstration

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const session = useSession();
  const user = session?.data?.user;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cash",
    image: null,
    shippingMethod: "standard",
    notes: "",
  });

  // Calculate order summary
  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountPrice * item.quantity,
    0
  );
  const shipping = formData.shippingMethod === "express" ? 150 : 80;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      window.scrollTo(0, 0);
    } else if (step === 2) {
      const order = {
        ...formData,
        userId: user?.id,
        items: cartItems,
        subtotal,
        total,
        shipping,
      };
      console.log(order);
      setStep(3);
      window.scrollTo(0, 0);
    }
    // Final step would submit the order
  };

  useEffect(() => {
    if (user) {
      const { firstName, lastName } = splitName(user?.name);

      setFormData((prev) => ({
        ...prev,
        firstName: prev.firstName || firstName,
        lastName: prev.lastName || lastName,
        email: prev.email || user.email,
      }));
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4 text-sm">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-amber-600 inline-flex items-center"
              >
                হোম
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-amber-600"
                >
                  শপিং কার্ট
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-amber-700">চেকআউট</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <Header step={step} />

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <CheckoutForm
              step={step}
              setStep={setStep}
              onSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />

            {/* Order Summary */}
            <OrderSummary
              cartItems={cartItems}
              subtotal={subtotal}
              total={total}
              shipping={shipping}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function splitName(fullName = "") {
  const parts = fullName.trim().split(" ").filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  const lastName = parts.pop();
  const firstName = parts.join(" ");

  return { firstName, lastName };
}
