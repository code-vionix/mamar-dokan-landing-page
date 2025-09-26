"use client";

import { motion } from "framer-motion";
import { Save, ShieldCheck, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function PrivacySection({ initialData, onSave }) {
  const [privacy, setPrivacy] = useState(initialData || {});
  const [isLoading, setIsLoading] = useState(false);

  const privacySettings = [
    {
      key: "shareData",
      title: "ডাটা শেয়ারিং",
      description:
        "আমাদের বিশ্বস্ত পার্টনারদের সাথে আপনার তথ্য শেয়ার করার অনুমতি দিন",
    },
    {
      key: "saveSearchHistory",
      title: "সার্চ ইতিহাস সংরক্ষণ",
      description:
        "আপনার সার্চ ইতিহাস সংরক্ষণ করে ব্যক্তিগতকৃত সুপারিশ প্রদান করুন",
    },
    {
      key: "savePaymentInfo",
      title: "পেমেন্ট তথ্য সংরক্ষণ",
      description: "দ্রুত চেকআউটের জন্য আপনার পেমেন্ট তথ্য সংরক্ষণ করুন",
    },
  ];

  const handleToggleChange = useCallback((name, value) => {
    setPrivacy((prevPrivacy) => ({
      ...prevPrivacy,
      [name]: value,
    }));
  }, []);

  const handlePrivacySubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      console.log("privacy data", privacy);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Use a functional update to ensure the latest state is used
      onSave((prevData) => ({
        ...prevData,
        privacy,
      }));

      setIsLoading(false);
    },
    [privacy, onSave]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        প্রাইভেসি সেটিংস
      </h2>

      <form onSubmit={handlePrivacySubmit}>
        <div className="space-y-6">
          {privacySettings.map((setting) => (
            <ToggleSwitch
              key={setting.key}
              name={setting.key}
              initialChecked={privacy[setting.key]}
              label={setting.title}
              description={setting.description}
              onToggle={handleToggleChange}
            />
          ))}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className={`bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
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

      <div className="mt-10 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold font-bengali mb-4">
          ডাটা ম্যানেজমেন্ট
        </h3>
        <p className="text-gray-600 font-bengali mb-4">
          আপনার ডাটা ডাউনলোড করুন বা অ্যাকাউন্ট মুছে ফেলুন
        </p>
        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-bengali flex items-center">
            <ShieldCheck className="h-4 w-4 mr-2" />
            আমার ডাটা ডাউনলোড করুন
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-bengali flex items-center">
            <Trash2 className="h-4 w-4 mr-2" />
            অ্যাকাউন্ট মুছে ফেলুন
          </button>
        </div>
      </div>
    </motion.div>
  );
}
