"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "../data/navItemData";

export default function Sidebar({ profileData, activeTab, setActiveTab }) {
  return (
    <div className="w-full lg:w-1/4">
      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex items-center p-2">
          <div className="relative mr-4">
            <Image
              src={profileData?.profileImage || "/placeholder.png"}
              alt={profileData?.name || "Profile Image"}
              width={100}
              height={100}
              className="rounded-full border-2 border-amber-200"
            />
            <button className="absolute -bottom-1 -right-1 bg-amber-100 rounded-full p-1 border border-amber-300">
              <Camera className="h-3 w-3 text-amber-800" />
            </button>
          </div>
          <div>
            <h3 className="font-bengali font-medium text-lg">
              {profileData.name}
            </h3>
            <p className="text-sm text-gray-500">{profileData.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white rounded-xl shadow-sm sticky top-6">
        <ul className="divide-y divide-gray-100">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.link ? (
                // Use a Link component for external navigation
                <Link
                  href={item.link}
                  className="w-full flex items-center px-4 py-3 hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <item.icon className="h-5 w-5 mr-3 text-gray-500" />
                  <span className="font-bengali">{item.label}</span>
                </Link>
              ) : (
                // Use a button for tab switching
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 hover:bg-amber-50 transition-colors ${
                    activeTab === item.id
                      ? "bg-amber-50 text-amber-800"
                      : "text-gray-700"
                  } cursor-pointer`}
                >
                  <item.icon
                    className={`h-5 w-5 mr-3 ${
                      activeTab === item.id ? "text-amber-600" : "text-gray-500"
                    }`}
                  />
                  <span className="font-bengali">{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
