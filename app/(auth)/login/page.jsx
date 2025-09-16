"use client"

import React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import InputField from "./components/InputField"
import SubmitButton from "./components/SubmitButton"
import Divider from "./components/Divider"
import SocialLogin from "./components/SocialLogin"

const LoginPage = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    localStorage.setItem("userToken", "demo-token")
    localStorage.setItem("userEmail", data.email)
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side */}
      <div className="md:w-1/2 bg-amber-800 hidden md:flex items-center justify-center p-10">
        <div className="max-w-md">
          <Image
            src="/assets/category-1.jpg"
            alt="Jamdani Saree"
            width={600}
            height={800}
            className="rounded-lg shadow-lg"
          />
          <div className="mt-6 text-white">
            <h2 className="text-3xl font-bengali font-bold mb-4">বাংলাদেশের ঐতিহ্যবাহী জামদানি শাড়ি</h2>
            <p className="font-bengali">অতুলনীয় কারুকার্য এবং ঐতিহ্যের সাথে আমাদের জামদানি শাড়ির অনন্য কালেকশন দেখুন।</p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <Link href="/">
              <Image src="/assets/category-2.jpg" alt="Jamdani Saree" width={150} height={40} className="h-12 w-auto mx-auto" />
            </Link>
            <h2 className="mt-6 text-3xl font-bengali font-bold text-gray-900">একাউন্টে লগইন করুন</h2>
            <p className="mt-2 text-sm text-gray-600 font-bengali">
              অথবা <Link href="/register" className="font-medium text-amber-600 hover:text-amber-500">নতুন একাউন্ট তৈরি করুন</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField label="ইমেইল" id="email" type="email" register={register("email", { required: "ইমেইল দিতে হবে" })} errors={errors} />
            <InputField label="পাসওয়ার্ড" id="password" type="password" register={register("password", { required: "পাসওয়ার্ড দিতে হবে", minLength: { value: 6, message: "কমপক্ষে ৬ অক্ষরের হতে হবে" } })} errors={errors} />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-bengali">মনে রাখুন</label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-amber-600 hover:text-amber-500 font-bengali">পাসওয়ার্ড ভুলে গেছেন?</Link>
              </div>
            </div>

            <SubmitButton isSubmitting={isSubmitting}>লগইন করুন</SubmitButton>
          </form>

          <Divider text="অথবা এর সাথে চালিয়ে যান" />
          <SocialLogin />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
