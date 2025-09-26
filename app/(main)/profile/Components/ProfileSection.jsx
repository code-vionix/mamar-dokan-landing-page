"use client";

import { motion } from "framer-motion";
import { Camera, Mail, Phone, Save } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfileSection({ initialData, onSave }) {
  const [profile, setProfile] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(initialData);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      console.log("Saving profile data:", profile);
      onSave((prevData) => ({
        ...prevData,
        user: profile,
      }));
      setIsLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        প্রোফাইল সেটিংস
      </h2>

      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          <Image
            src={userData.profileImage || "/placeholder.png"}
            alt={userData.name || "Profile Image"}
            width={100}
            height={100}
            className="rounded-full border-2 border-amber-200"
          />
          <button className="absolute bottom-0 right-0 bg-amber-100 rounded-full p-2 border border-amber-300 hover:bg-amber-200 transition-colors">
            <Camera className="h-4 w-4 text-amber-800" />
          </button>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bengali font-medium text-lg">
            প্রোফাইল ছবি পরিবর্তন করুন
          </h3>
          <p className="text-sm text-gray-500 mb-2 font-bengali">
            প্রস্তাবিত ইমেজ সাইজ: 300x300 পিক্সেল, সর্বোচ্চ 2MB
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-amber-600 text-white px-4 py-2 text-sm rounded-md hover:bg-amber-700 transition-colors font-bengali">
              ছবি আপলোড করুন
            </button>
            <button className="border border-gray-300 text-gray-600 px-4 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors font-bengali">
              ছবি মুছুন
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handleProfileSubmit}>
        <div className="space-y-4">
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
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

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
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

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
                value={profile.phone}
                onChange={handleProfileChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

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
