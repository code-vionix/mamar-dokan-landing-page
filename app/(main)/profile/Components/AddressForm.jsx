"use client";

import { Save, X } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

export default function AddressForm({
  editingAddress,
  onSubmit,
  onCancel,
  isSubmitting,
}) {
  const methods = useForm({
    defaultValues: {
      firstName: editingAddress?.firstName || "",
      lastName: editingAddress?.lastName || "",
      phone: editingAddress?.phone || "",
      addressLine1: editingAddress?.addressLine1 || "",
      addressLine2: editingAddress?.addressLine2 || "",
      city: editingAddress?.city || "",
      postalCode: editingAddress?.postalCode || "1000",
      country: editingAddress?.country || "BD",
      isDefault: editingAddress?.isDefault || false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <div className="bg-amber-50/50 rounded-lg p-6 mb-6 border border-amber-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bengali text-lg font-medium text-amber-800">
          {editingAddress ? "ঠিকানা পরিবর্তন করুন" : "নতুন ঠিকানা যোগ করুন"}
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              onClick={onCancel}
              className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 font-bengali"
            >
              বাতিল করুন
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
