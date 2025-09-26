"use client";

import { motion } from "framer-motion";
import { Plus, Save, Settings, Trash2, X } from "lucide-react";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function AddressSection({ initialData, onSave }) {
  const [userData, setUserData] = useState({
    addresses: initialData || [],
  });
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [deletingAddressId, setDeletingAddressId] = useState(null);

  const methods = useForm({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      city: "",
      isDefault: false,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;
  /* handel function start  */
  const handleAddressSubmit = useCallback(
    (data) => {
      // Return a Promise to correctly handle the asynchronous operation
      return new Promise((resolve) => {
        // Simulate API call
        setTimeout(() => {
          const updatedAddresses = [...userData.addresses];
          const newAddress = { ...data, id: Date.now() };

          if (newAddress.isDefault) {
            updatedAddresses.forEach((addr) => (addr.isDefault = false));
          }

          if (editingAddressId !== null) {
            const index = updatedAddresses.findIndex(
              (addr) => addr.id === editingAddressId
            );
            if (index !== -1) {
              updatedAddresses[index] = { ...newAddress, id: editingAddressId };
            }
          } else {
            updatedAddresses.push(newAddress);
          }

          setUserData({ addresses: updatedAddresses });
          onSave((prevData) => ({
            ...prevData,
            addresses: updatedAddresses,
          }));
          setShowAddressForm(false);
          // Resolve the promise to signal completion to react-hook-form
          resolve();
        }, 1500);
      });
    },
    [userData.addresses, editingAddressId, onSave]
  );

  const handleEditAddress = (address) => {
    setEditingAddressId(address.id);
    reset(address);
    setShowAddressForm(true);
  };

  const handleDeleteAddress = useCallback(
    (id) => {
      setDeletingAddressId(id);
      setTimeout(() => {
        const updatedAddresses = userData.addresses.filter(
          (addr) => addr.id !== id
        );
        setUserData({ addresses: updatedAddresses });
        onSave((prevData) => ({
          ...prevData,
          addresses: updatedAddresses,
        }));
        setDeletingAddressId(null);
      }, 1500);
    },
    [userData.addresses, onSave]
  );
  /* handel function end  */
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
            reset({
              name: "",
              phone: "",
              address: "",
              city: "",
              isDefault: false,
            });
          }}
          className="mb-6 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center cursor-pointer"
        >
          <Plus className="h-4 w-4 mr-2" />
          নতুন ঠিকানা যোগ করুন
        </button>
      )}

      {showAddressForm && (
        <div className="bg-amber-50/50 rounded-lg p-6 mb-6 border border-amber-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bengali text-lg font-medium text-amber-800">
              {editingAddressId !== null
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
            <form onSubmit={handleSubmit(handleAddressSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                  >
                    নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "নাম অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                  >
                    ফোন <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    {...register("phone", {
                      required: "ফোন নম্বর অবশ্যই দিতে হবে",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1 font-bengali">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Address Field */}
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                >
                  ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("address", {
                    required: "ঠিকানা অবশ্যই দিতে হবে",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.address && (
                  <p className="text-sm text-red-500 mt-1 font-bengali">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* City Field */}
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
                >
                  শহর/জেলা <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city", {
                    required: "শহর/জেলা অবশ্যই দিতে হবে",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.city && (
                  <p className="text-sm text-red-500 mt-1 font-bengali">
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* Checkbox */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("isDefault")}
                    className="rounded text-amber-600 focus:ring-amber-500 h-4 w-4 mr-2"
                  />
                  <span className="font-bengali text-sm">
                    এটিকে ডিফল্ট ঠিকানা হিসেবে সেট করুন
                  </span>
                </label>
              </div>

              <div className="flex space-x-2">
                <button
                  type="submit"
                  className={`bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center
                    ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}
                  disabled={isSubmitting}
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

      <div className="space-y-4">
        {userData.addresses.map((address) => (
          <div
            key={address.id}
            className="border border-gray-100 rounded-lg p-4 hover:border-amber-200 transition-colors"
          >
            <div className="flex justify-between">
              <h3 className="font-bengali font-medium">
                {address.name}{" "}
                {address.isDefault && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full ml-2 font-bengali">
                    ডিফল্ট
                  </span>
                )}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditAddress(address)}
                  className="text-gray-500 hover:text-amber-600 cursor-pointer"
                  aria-label="Edit address"
                >
                  <Settings size={16} />
                </button>
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  className="text-gray-500 hover:text-red-600"
                  aria-label="Delete address"
                  disabled={deletingAddressId === address.id}
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
              {address.address}
            </p>
            <p className="text-sm text-gray-600 font-bengali">{address.city}</p>
            <p className="text-sm text-gray-600 mt-2 font-bengali">
              ফোন: {address.phone}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
