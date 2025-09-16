"use client"
import { useState } from "react"
import RegisterInput from "./RegisterInput"
import RegisterButton from "./RegisterButton"
import RegisterDivider from "./RegisterDivider"
import SocialLogin from "./SocialLogin"

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Demo: formData console এ দেখাই
    console.log("Form Data:", formData)

    // Fake delay
    setTimeout(() => {
      setIsLoading(false)
      alert("রেজিস্ট্রেশন সম্পন্ন হয়েছে ✅")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RegisterInput
        id="name"
        label="পূর্ণ নাম"
        value={formData.name}
        onChange={handleChange}
      />
      <RegisterInput
        id="email"
        label="ইমেইল ঠিকানা"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <RegisterInput
        id="password"
        label="পাসওয়ার্ড"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <RegisterInput
        id="confirmPassword"
        label="পাসওয়ার্ড নিশ্চিত করুন"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <RegisterButton isLoading={isLoading} />
      <RegisterDivider />
      <SocialLogin />
    </form>
  )
}
