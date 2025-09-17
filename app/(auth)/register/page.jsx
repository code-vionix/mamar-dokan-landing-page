"use client"

import RegisterForm from "./components/RegisterForm"
import RegisterHeader from "./components/RegisterHeader"
import RegisterLeft from "./components/RegisterLeft"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <RegisterLeft />

      {/* Right Side */}
      <div className="md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <RegisterHeader />
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
