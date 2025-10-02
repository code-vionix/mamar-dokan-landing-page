"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";

import { redirect } from "next/navigation";
import AddressSection from "./AddressSection";
import NotificationSection from "./NotificationSection";
import PasswordSection from "./PasswordSection";
import PaymentSection from "./PaymentSection";
import PrivacySection from "./PrivacySection";
import ProfileSection from "./ProfileSection";
import Sidebar from "./Sidebar";
import SuccessMessage from "./SuccessMessage";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProfileContent({ initialData }) {
  const { data: session, status } = useSession();
  // login user check

  if (status === "unauthenticated") {
    redirect("/login");
  }
  const [userData, setUserData] = useState(initialData || {});
  const [activeTab, setActiveTab] = useState("profile");
  const [showSuccess, setShowSuccess] = useState(false);

  // Child update handler
  const handleDataUpdate = useCallback((newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    setShowSuccess(true);
    console.log("Data updated. Ideally re-fetch from server.");
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
                  <ProfileSection onSetShowSuccess={setShowSuccess} />
                )}
                {activeTab === "password" && (
                  <PasswordSection
                    userId={session?.user?.id}
                    onSetShowSuccess={setShowSuccess}
                  />
                )}
                {activeTab === "notifications" && (
                  <NotificationSection
                    initialData={userData.notifications || {}}
                    onSave={handleDataUpdate}
                  />
                )}
                {activeTab === "addresses" && (
                  <AddressSection
                    userId={session?.user?.id}
                    onSetShowSuccess={setShowSuccess}
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
