"use client";

import { motion } from "framer-motion";
import { Camera, Mail, Phone, Save, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProfileSection({ onSetShowSuccess, userData, setUserData }) {
  const { status } = useSession();
  const fileInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // input handler
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        [name]: value,
      },
    }));
  };

  // profile update API
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch(`${API_URL}/user/${userData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          phone: userData.phone,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setApiError(result.message || "প্রোফাইল আপডেট ব্যর্থ হয়েছে।");
      }
    } catch (error) {
      console.error("API Error:", error);
      setApiError("সার্ভার এরর হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
      onSetShowSuccess(true);
    }
  };

  // profile image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsImageUploading(true);
    setApiError(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(`${API_URL}/user/${userData.id}/avatar`, {
        method: "PATCH",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Update parent state with new avatar
        setUserData((prev) => ({
          ...prev,
          user: {
            ...prev.user,
            avatar: result.data.avatarUrl,
          },
        }));
      } else {
        setApiError(result.message || "ইমেজ আপলোড ব্যর্থ হয়েছে।");
      }
    } catch (error) {
      console.error("Image Upload Error:", error);
      setApiError("ইমেজ আপলোডের সময় সমস্যা হয়েছে।");
    } finally {
      setIsImageUploading(false);
      onSetShowSuccess(true);
    }
  };

  // remove image
  const handleRemoveImage = () => {
    setUserData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        avatar: null,
      },
    }));
  };

  if (status === "loading") {
    return <p className="text-gray-500">লোড হচ্ছে...</p>;
  }

  if (!userData) {
    return <p className="text-gray-500">লগইন করার পর প্রোফাইল দেখা যাবে</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        প্রোফাইল সেটিংস
      </h2>

      {/* Profile Image */}
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          <Image
            src={userData?.avatar || "/placeholder.png"}
            alt={userData?.name || "Profile Image"}
            width={100}
            height={100}
            className="rounded-full border-2 border-amber-200 object-cover"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="absolute bottom-0 right-0 bg-amber-100 rounded-full p-2 border border-amber-300 hover:bg-amber-200 transition-colors"
          >
            {isImageUploading ? (
              <span className="inline-block h-4 w-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <Camera className="h-4 w-4 text-amber-800" />
            )}
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bengali font-medium text-lg">
            প্রোফাইল ছবি পরিবর্তন করুন
          </h3>
          <p className="text-sm text-gray-500 mb-2 font-bengali">
            প্রস্তাবিত ইমেজ সাইজ: 300x300 পিক্সেল, সর্বোচ্চ 2MB
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="bg-amber-600 text-white px-4 py-2 text-sm rounded-md hover:bg-amber-700 transition-colors font-bengali"
            >
              ছবি আপলোড করুন
            </button>
            <button
              type="button"
              onClick={handleRemoveImage}
              className="border border-gray-300 text-gray-600 px-4 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors font-bengali flex items-center gap-1"
            >
              <Trash2 className="h-4 w-4" />
              ছবি মুছুন
            </button>
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleProfileSubmit}>
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
            >
              নাম
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData?.name || ""}
              onChange={handleProfileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Email (disabled) */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
            >
              ইমেইল
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={userData?.email || ""}
                disabled
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
            >
              ফোন নম্বর
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={userData?.phone || ""}
                onChange={handleProfileChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {apiError && (
          <p className="text-red-600 text-sm font-bengali mt-2">{apiError}</p>
        )}

        <div className="mt-6">
          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            সংরক্ষণ করুন
          </button>
        </div>
      </form>
    </motion.div>
  );
}
