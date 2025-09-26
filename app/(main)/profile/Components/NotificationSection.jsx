"use client";

import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { useState } from "react";
import {
  emailOptions,
  notificationOptions,
} from "../data/notificationSectionData";
import EmailCheckbox from "./EmailCheckbox";
import ToggleSwitch from "./ToggleSwitch";

export default function NotificationSection({ initialData, onSave }) {
  /* default data start  */
  const defaultNotifications = {
    orderUpdates: false,
    promotions: false,
    newArrivals: false,
    accountUpdates: false,
    emailPromotion: false,
    emailNewsletter: false,
    emailSurvey: false,
  };
  /* default data end  */
  const [notifications, setNotifications] = useState({
    ...defaultNotifications,
    ...initialData,
  });
  const [isLoading, setIsLoading] = useState(false);
  /* handel function start  */
  const handleToggleChange = (name, checked) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleEmailChange = (name, checked) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleNotificationsSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Saving notification settings:", notifications);
      onSave((prevData) => ({
        ...prevData,
        notifications: notifications,
      }));
      setIsLoading(false);
    }, 1500);
  };
  /* handel function end  */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        নোটিফিকেশন সেটিংস
      </h2>
      <form onSubmit={handleNotificationsSubmit}>
        <div className="space-y-6">
          {notificationOptions.map((option) => (
            <ToggleSwitch
              key={option.name}
              label={option.label}
              description={option.description}
              name={option.name}
              initialChecked={notifications[option.name]}
              onToggle={handleToggleChange}
            />
          ))}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className={`bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center  ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 "></span>
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            সংরক্ষণ করুন
          </button>
        </div>
      </form>
      <div className="mt-10 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold font-bengali mb-4">
          ইমেইল পছন্দসমূহ
        </h3>
        <p className="text-gray-600 font-bengali mb-4">
          আপনি কোন ধরনের ইমেইল পেতে চান তা নির্বাচন করুন
        </p>
        <div className="space-y-2">
          {emailOptions.map((option) => (
            <EmailCheckbox
              key={option.name}
              label={option.label}
              name={option.name}
              initialChecked={notifications[option.name]}
              onChange={handleEmailChange}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
