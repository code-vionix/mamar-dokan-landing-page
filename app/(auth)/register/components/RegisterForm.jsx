"use client"
import { useState } from "react"
import { useRouter } from "next/navigation" // Next.js 13 app directory
import RegisterInput from "./RegisterInput"
import RegisterButton from "./RegisterButton"
import RegisterDivider from "./RegisterDivider"
import SocialLogin from "./SocialLogin"

export default function RegisterForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলছে না")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setError(data?.message || "কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন")
        setIsLoading(false)
        return
      }

      // Success
      setIsLoading(false)
      setFormData({ name: "", email: "", password: "", confirmPassword: "" })

      // Redirect to login page
      router.push("/login") // তোমার login page এর path
    } catch (err) {
      console.error("Registration Error:", err)
      setError("কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন")
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
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
