"use client";

import { useCallback, useState } from "react";

// Import the modular client components
import { motion } from "framer-motion";
import AddressSection from "./AddressSection";
import NotificationSection from "./NotificationSection";
import PasswordSection from "./PasswordSection";
import PaymentSection from "./PaymentSection";
import PrivacySection from "./PrivacySection";
import ProfileSection from "./ProfileSection";
import Sidebar from "./Sidebar";
import SuccessMessage from "./SuccessMessage";

export default function ProfileContent({ initialData }) {
  // Initialize state with a fallback empty object to prevent errors
  const [userData, setUserData] = useState(initialData || {});
  const [activeTab, setActiveTab] = useState("profile");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDataUpdate = useCallback((newData) => {
    // In a real application, you would re-fetch data from the server or
    // update the state in a more sophisticated way.
    setUserData(newData);
    setShowSuccess(true);
    console.log("Data updated. You should re-fetch or update state here.");
  }, []);

  const handleDismissSuccess = useCallback(() => {
    setShowSuccess(false);
  }, []);

  return (
    <>
      <SuccessMessage
        message="সফলভাবে আপডেট করা হয়েছে!"
        isVisible={showSuccess}
        onDismiss={handleDismissSuccess}
      />
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar
            profileData={userData.user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "profile" && (
                  <ProfileSection
                    initialData={userData.user || {}}
                    onSave={handleDataUpdate}
                  />
                )}
                {activeTab === "password" && (
                  <PasswordSection onSetShowSuccess={setShowSuccess} />
                )}
                {activeTab === "notifications" && (
                  <NotificationSection
                    initialData={userData.notifications || {}}
                    onSave={handleDataUpdate}
                  />
                )}
                {activeTab === "addresses" && (
                  <AddressSection
                    initialData={userData.addresses || []}
                    onSave={handleDataUpdate}
                  />
                )}
                {activeTab === "payment" && (
                  <PaymentSection
                    initialData={userData.paymentMethods || []}
                    onSave={handleDataUpdate}
                  />
                )}
                {activeTab === "privacy" && (
                  <PrivacySection
                    initialData={userData.privacy || {}}
                    onSave={handleDataUpdate}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
