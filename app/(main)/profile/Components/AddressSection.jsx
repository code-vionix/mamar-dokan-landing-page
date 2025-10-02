"use client";

import { motion } from "framer-motion";
import { Plus, Save, Settings, Trash2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AddressSection({ userId, onSetShowSuccess }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [deletingAddressId, setDeletingAddressId] = useState(null);

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "1000",
      country: "BD",
      isDefault: false,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  /* =======================
     API FUNCTIONS
  ======================== */
  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/user/${userId}/address`);
      const data = await res.json();
      setAddresses(data?.data || []);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const createAddress = async (data) => {
    const payload = {
      type: "BILLING",
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2 || "",
      city: data.city,
      postalCode: data.postalCode || "1000",
      country: data.country || "BD",
      isDefault: data.isDefault,
    };

    try {
      const res = await fetch(`${API_URL}/user/${userId}/address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      return await res.json();
    } catch (err) {
      console.error("Create Error:", err);
    } finally {
      onSetShowSuccess(true);
    }
  };

  const updateAddress = async (id, data) => {
    const payload = {
      ...data,
      addressLine2: data.addressLine2 || "",
    };
    try {
      const res = await fetch(`${API_URL}/user/address/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return await res.json();
    } catch (err) {
      console.error("Update Error:", err);
    } finally {
      onSetShowSuccess(true);
    }
  };

  const deleteAddress = async (id) => {
    try {
      const res = await fetch(`${API_URL}/user/address/${id}`, {
        method: "DELETE",
      });
      return await res.json();
    } catch (err) {
      console.error("Delete Error:", err);
    } finally {
      onSetShowSuccess(true);
    }
  };

  /* =======================
     FORM HANDLERS
  ======================== */
  const handleAddressSubmit = useCallback(
    async (data) => {
      if (editingAddressId) {
        await updateAddress(editingAddressId, data);
      } else {
        await createAddress(data);
      }
      await fetchAddresses();
      setShowAddressForm(false);
      setEditingAddressId(null);
      reset();
    },
    [editingAddressId, reset]
  );

  const handleEditAddress = (address) => {
    setEditingAddressId(address.id);
    reset({
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      addressLine1: address.addressLine1,
      addressLine2: address.addressLine2 || "",
      city: address.city,
      postalCode: address.postalCode || "1000",
      country: address.country || "BD",
      isDefault: address.isDefault,
    });
    setShowAddressForm(true);
  };

  const handleDeleteAddress = useCallback(async (id) => {
    setDeletingAddressId(id);
    await deleteAddress(id);
    await fetchAddresses();
    setDeletingAddressId(null);
  }, []);

  useEffect(() => {
    fetchAddresses();
  }, []);

  /* =======================
     UI
  ======================== */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        ঠিকানা সমূহ
      </h2>

      {!showAddressForm && (
        <button
          onClick={() => {
            setShowAddressForm(true);
            setEditingAddressId(null);
            reset();
          }}
          className="mb-6 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" /> নতুন ঠিকানা যোগ করুন
        </button>
      )}

      {showAddressForm && (
        <div className="bg-amber-50/50 rounded-lg p-6 mb-6 border border-amber-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bengali text-lg font-medium text-amber-800">
              {editingAddressId
                ? "ঠিকানা পরিবর্তন করুন"
                : "নতুন ঠিকানা যোগ করুন"}
            </h3>
            <button
              onClick={() => {
                setShowAddressForm(false);
                setEditingAddressId(null);
              }}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleAddressSubmit)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                    নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "নাম অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                    শেষ নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "শেষ নাম অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                    ফোন <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("phone", {
                      required: "ফোন নম্বর অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                    শহর/জেলা <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("city", {
                      required: "শহর/জেলা অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.city && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                    পোস্টাল কোড <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("postalCode", {
                      required: "পোস্টাল কোড অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.postalCode && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.postalCode.message}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                    দেশ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("country", {
                      required: "দেশ অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.country && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Address Line */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                  ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("addressLine1", {
                    required: "ঠিকানা অবশ্যই দিতে হবে",
                  })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                />
                {errors.addressLine1 && (
                  <p className="text-sm text-red-500 mt-1 font-bengali">
                    {errors.addressLine1.message}
                  </p>
                )}
              </div>

              {/* Address Line 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-bengali">
                  ঠিকানা ২
                </label>
                <input
                  type="text"
                  {...register("addressLine2")}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Default Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  {...register("isDefault")}
                  className="rounded text-amber-600 h-4 w-4"
                />
                <span className="font-bengali text-sm">
                  এটিকে ডিফল্ট ঠিকানা হিসেবে সেট করুন
                </span>
              </div>

              {/* Buttons */}
              <div className="flex space-x-2 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-amber-600 text-white px-6 py-2 rounded-md flex items-center hover:bg-amber-700"
                >
                  {isSubmitting ? (
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  সংরক্ষণ করুন
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddressForm(false);
                    setEditingAddressId(null);
                    reset();
                  }}
                  className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 font-bengali"
                >
                  বাতিল করুন
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      )}

      {loading ? (
        <p className="text-gray-500">লোড হচ্ছে...</p>
      ) : (
        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="border rounded-lg p-4 hover:border-amber-200 transition-colors"
            >
              <div className="flex justify-between">
                <h3 className="font-bengali font-medium">
                  {address.firstName} {address.lastName}{" "}
                  {address.isDefault && (
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full ml-2">
                      ডিফল্ট
                    </span>
                  )}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditAddress(address)}
                    className="text-gray-500 hover:text-amber-600"
                  >
                    <Settings size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    disabled={deletingAddressId === address.id}
                    className="text-gray-500 hover:text-red-600"
                  >
                    {deletingAddressId === address.id ? (
                      <span className="inline-block h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <Trash2 size={16} />
                    )}
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1 font-bengali">
                {address.addressLine1}
              </p>
              {address.addressLine2 && (
                <p className="text-sm text-gray-600 font-bengali">
                  {address.addressLine2}
                </p>
              )}
              <p className="text-sm text-gray-600 font-bengali">
                {address.city}
              </p>
              <p className="text-sm text-gray-600 font-bengali">
                পোস্টাল কোড: {address.postalCode}
              </p>
              <p className="text-sm text-gray-600 font-bengali">
                দেশ: {address.country}
              </p>
              <p className="text-sm text-gray-600 mt-2 font-bengali">
                ফোন: {address.phone}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
