"use client";

import { motion } from "framer-motion";
import { Plus, Save, Settings, ShieldCheck, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function PaymentSection({ initialData, onSave }) {
  const [userData, setUserData] = useState({
    paymentMethods: initialData || [],
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [editingPaymentId, setEditingPaymentId] = useState(null);
  const [deletingPaymentId, setDeletingPaymentId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      type: "bkash",
      number: "",
      expiry: "",
      cvv: "",
      isDefault: false,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = methods;

  const paymentType = watch("type");

  const handlePaymentSubmit = useCallback(
    (data) => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const updatedMethods = [...userData.paymentMethods];
        const newMethod = { ...data, id: Date.now() };

        if (newMethod.isDefault) {
          updatedMethods.forEach((method) => (method.isDefault = false));
        }

        if (editingPaymentId !== null) {
          const index = updatedMethods.findIndex(
            (method) => method.id === editingPaymentId
          );
          if (index !== -1) {
            updatedMethods[index] = { ...newMethod, id: editingPaymentId };
          }
        } else {
          updatedMethods.push(newMethod);
        }

        setUserData({ paymentMethods: updatedMethods });
        onSave((prevData) => ({
          ...prevData,
          paymentMethods: updatedMethods,
        }));
        setShowPaymentForm(false);
        setIsLoading(false);
      }, 1500);
    },
    [userData.paymentMethods, editingPaymentId, onSave]
  );

  const handleEditPayment = (method) => {
    setEditingPaymentId(method.id);
    reset(method);
    setShowPaymentForm(true);
  };

  const handleDeletePayment = useCallback(
    (id) => {
      setDeletingPaymentId(id);
      setTimeout(() => {
        const updatedMethods = userData.paymentMethods.filter(
          (method) => method.id !== id
        );
        setUserData({ paymentMethods: updatedMethods });
        onSave((prevData) => ({
          ...prevData,
          paymentMethods: updatedMethods,
        }));
        setDeletingPaymentId(null);
      }, 1500);
    },
    [userData.paymentMethods, onSave]
  );

  const getPaymentMethodIcon = (type) => {
    switch (type) {
      case "bkash":
        return "/assets/payment-bkash.png";
      case "nagad":
        return "/assets/payment-nagad.png";
      case "rocket":
        return "/assets/payment-rocket.png";
      case "card":
        return "/assets/payment-card.png";
      default:
        return "/assets/payment-default.png";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        পেমেন্ট মেথড
      </h2>

      {!showPaymentForm && (
        <button
          onClick={() => {
            setShowPaymentForm(true);
            setEditingPaymentId(null);
            reset({
              type: "bkash",
              number: "",
              expiry: "",
              cvv: "",
              isDefault: false,
            });
          }}
          className="mb-6 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center cursor-pointer"
        >
          <Plus className="h-4 w-4 mr-2" />
          নতুন পেমেন্ট মেথড যোগ করুন
        </button>
      )}

      {/* Payment Method Form */}
      {showPaymentForm && (
        <div className="bg-amber-50/50 rounded-lg p-6 mb-6 border border-amber-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bengali text-lg font-medium text-amber-800">
              {editingPaymentId !== null
                ? "পেমেন্ট মেথড পরিবর্তন করুন"
                : "নতুন পেমেন্ট মেথড যোগ করুন"}
            </h3>
            <button
              onClick={() => {
                setShowPaymentForm(false);
                setEditingPaymentId(null);
              }}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handlePaymentSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="payment-type"
                  className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                >
                  পেমেন্ট মেথড <span className="text-red-500">*</span>
                </label>
                <select
                  id="payment-type"
                  {...register("type", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-bengali"
                >
                  <option value="bkash">বিকাশ</option>
                  <option value="nagad">নগদ</option>
                  <option value="rocket">রকেট</option>
                  <option value="card">ক্রেডিট/ডেবিট কার্ড</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="payment-number"
                  className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                >
                  {paymentType === "card" ? "কার্ড নম্বর" : "মোবাইল নম্বর"}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="payment-number"
                  {...register("number", {
                    required: `${
                      paymentType === "card" ? "কার্ড নম্বর" : "মোবাইল নম্বর"
                    } অবশ্যই দিতে হবে`,
                    pattern: {
                      value:
                        paymentType === "card"
                          ? /^[0-9]{16}$/
                          : /^(01)[0-9]{9}$/,
                      message:
                        paymentType === "card"
                          ? "ভুল কার্ড নম্বর"
                          : "ভুল মোবাইল নম্বর",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.number && (
                  <p className="text-sm text-red-500 mt-1 font-bengali">
                    {errors.number.message}
                  </p>
                )}
              </div>

              {paymentType === "card" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="payment-expiry"
                      className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                    >
                      মেয়াদ শেষের তারিখ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="payment-expiry"
                      placeholder="MM/YY"
                      {...register("expiry", {
                        required: "মেয়াদ শেষের তারিখ অবশ্যই দিতে হবে",
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    {errors.expiry && (
                      <p className="text-sm text-red-500 mt-1 font-bengali">
                        {errors.expiry.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="payment-cvv"
                      className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                    >
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="payment-cvv"
                      {...register("cvv", {
                        required: "CVV অবশ্যই দিতে হবে",
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    {errors.cvv && (
                      <p className="text-sm text-red-500 mt-1 font-bengali">
                        {errors.cvv.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("isDefault")}
                    className="rounded text-amber-600 focus:ring-amber-500 h-4 w-4 mr-2"
                  />
                  <span className="font-bengali text-sm">
                    এটিকে ডিফল্ট পেমেন্ট মেথড হিসেবে সেট করুন
                  </span>
                </label>
              </div>

              <div className="flex space-x-2">
                <button
                  type="submit"
                  className={`bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center
                    ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  সংরক্ষণ করুন
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPaymentForm(false);
                    setEditingPaymentId(null);
                  }}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors font-bengali cursor-pointer"
                >
                  বাতিল করুন
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      )}

      {/* Payment Methods List */}
      <div className="space-y-4">
        {userData.paymentMethods.map((method) => (
          <div
            key={method.id}
            className="border border-gray-100 rounded-lg p-4 hover:border-amber-200 transition-colors"
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                  <Image
                    src={getPaymentMethodIcon(method.type)}
                    alt={method.type}
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h3 className="font-bengali font-medium">
                    {method.type === "bkash"
                      ? "বিকাশ"
                      : method.type === "nagad"
                      ? "নগদ"
                      : method.type === "rocket"
                      ? "রকেট"
                      : "ক্রেডিট/ডেবিট কার্ড"}
                    {method.isDefault && (
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full ml-2 font-bengali">
                        ডিফল্ট
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 font-bengali">
                    {method.number}
                    {method.expiry && ` • ${method.expiry}`}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditPayment(method)}
                  className="text-gray-500 hover:text-amber-600 cursor-pointer"
                  aria-label="Edit payment method"
                >
                  <Settings size={16} />
                </button>
                <button
                  onClick={() => handleDeletePayment(method.id)}
                  className="text-gray-500 hover:text-red-600"
                  aria-label="Delete payment method"
                  disabled={deletingPaymentId === method.id}
                >
                  {deletingPaymentId === method.id ? (
                    <span className="inline-block h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <Trash2 size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex">
          <ShieldCheck className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-bengali font-medium text-blue-800">
              সিকিউর পেমেন্ট
            </h4>
            <p className="text-sm text-gray-600 font-bengali">
              আমাদের সকল পেমেন্ট সিস্টেম সম্পূর্ণ নিরাপদ এবং এনক্রিপ্টেড। আপনার
              সকল আর্থিক তথ্য সুরক্ষিত থাকবে।
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
