"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import AddressSection from "./AddressSection";
// import NotificationSection from "./NotificationSection";
import PasswordSection from "./PasswordSection";
// import PaymentSection from "./PaymentSection";
// import PrivacySection from "./PrivacySection";
import ProfileSection from "./ProfileSection";
import Sidebar from "./Sidebar";
import SuccessMessage from "./SuccessMessage";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


import mapApiUserToUI from "../lib/mapApiUserToUI.js";

export default function ProfileContent() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(
          `${API_URL}/user/${session.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }
        );

        const json = await res.json();
        const mappedData = mapApiUserToUI(json.data);

        setUserData(mappedData);
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, [session]);

  const handleDataUpdate = useCallback((newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    setShowSuccess(true);
  }, []);

  if (!userData) {
    return <div className="p-6">Loading profile...</div>;
  }

  return (
    <>
      <SuccessMessage
        message="সফলভাবে আপডেট করা হয়েছে!"
        isVisible={showSuccess}
        onDismiss={() => setShowSuccess(false)}
      />

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            profileData={userData.user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

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
                    userData={userData.user}
                    onSetShowSuccess={setShowSuccess}
                    setUserData={setUserData}
                  />
                )}

                {activeTab === "password" && (
                  <PasswordSection
                    userId={session.user.id}
                    onSetShowSuccess={setShowSuccess}
                  />
                )}

                {/* {activeTab === "notifications" && (
                  <NotificationSection
                    initialData={userData.notifications}
                    onSave={handleDataUpdate}
                  />
                )} */}

                {activeTab === "addresses" && (
                  <AddressSection
                    propsAddresses={userData.addresses}
                    userId={session.user.id}
                    onSetShowSuccess={setShowSuccess}
                  />
                )}

                {/* {activeTab === "payment" && (
                  <PaymentSection
                    initialData={userData.paymentMethods}
                    onSave={handleDataUpdate}
                  />
                )} */}

                {/* {activeTab === "privacy" && (
                  <PrivacySection
                    initialData={userData.privacy}
                    onSave={handleDataUpdate}
                  />
                )} */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
