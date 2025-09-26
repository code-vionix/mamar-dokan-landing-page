"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FormInput({
  label,
  name,
  type,
  register,
  error,
  ...rest
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isPassword = type === "password";

  const handleToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type={isPassword && passwordVisible ? "text" : type}
          {...register(name, rest.rules)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-amber-500"
          }`}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {passwordVisible ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 font-bengali">
          {error.message}
        </p>
      )}
    </div>
  );
}
