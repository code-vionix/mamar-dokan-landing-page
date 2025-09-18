"use client"

import React from "react"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"

const SocialLogin = () => (
  <div className="mt-6 grid grid-cols-2 gap-3">
    {/* Google Login */}
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 
                 border border-gray-300 rounded-lg shadow-sm bg-white 
                 text-sm font-medium text-gray-700 transition-all duration-200 
                 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5"
    >
      <FcGoogle className="w-5 h-5" />
      <span className="font-bengali">গুগল</span>
    </button>

    {/* Facebook Login */}
    <button
      type="button"
      onClick={() => signIn("facebook", { callbackUrl: "/" })}
      className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 
                 border border-gray-300 rounded-lg shadow-sm bg-white 
                 text-sm font-medium text-gray-700 transition-all duration-200 
                 hover:bg-blue-50 hover:shadow-md hover:-translate-y-0.5"
    >
      <FaFacebook className="w-5 h-5 text-[#1877F2]" />
      <span className="font-bengali">ফেসবুক</span>
    </button>
  </div>
)

export default SocialLogin
