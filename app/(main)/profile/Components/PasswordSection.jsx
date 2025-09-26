"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export default function PasswordSection({ onSetShowSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    mode: "onTouched",
  });
  const [isLoading, setIsLoading] = useState(false);
  /* handel function start  */
  const onSubmit = (data) => {
    setIsLoading(true);

    // Simulate an API call
    console.log("Saving password data:", data);

    setTimeout(() => {
      // Clear fields and show success message
      reset();
      onSetShowSuccess(true);
      setIsLoading(false);
    }, 1500);
  };
  /* handel function end  */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        পাসওয়ার্ড পরিবর্তন
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormInput
            label="বর্তমান পাসওয়ার্ড"
            name="current"
            type="password"
            register={register}
            error={errors.current}
            required
            aria-invalid={errors.current ? "true" : "false"}
            rules={{ required: "বর্তমান পাসওয়ার্ড প্রয়োজন।" }}
          />
          <FormInput
            label="নতুন পাসওয়ার্ড"
            name="new"
            type="password"
            register={register}
            error={errors.new}
            required
            aria-invalid={errors.new ? "true" : "false"}
            rules={{
              required: "নতুন পাসওয়ার্ড প্রয়োজন।",
              validate: (value) =>
                value !== getValues("current") ||
                "নতুন পাসওয়ার্ড বর্তমান পাসওয়ার্ডের মতো হতে পারে না।",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:
                  "কমপক্ষে ৮ অক্ষরের, একটি বড় হাতের, একটি ছোট হাতের এবং একটি সংখ্যা থাকতে হবে।",
              },
            }}
          />
          <FormInput
            label="নতুন পাসওয়ার্ড নিশ্চিত করুন"
            name="confirm"
            type="password"
            register={register}
            error={errors.confirm}
            required
            aria-invalid={errors.confirm ? "true" : "false"}
            rules={{
              required: "পাসওয়ার্ড নিশ্চিত করুন।",
              validate: (value) =>
                value === getValues("new") ||
                "নতুন পাসওয়ার্ড এবং নিশ্চিত পাসওয়ার্ড মেলেনি।",
            }}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : (
              <Lock className="h-4 w-4 mr-2" />
            )}
            পাসওয়ার্ড আপডেট করুন
          </button>
        </div>
      </form>

      <div className="mt-10 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold font-bengali mb-4">
          টু-ফ্যাক্টর অথেনটিকেশন
        </h3>
        <p className="text-gray-600 font-bengali mb-4">
          আপনার অ্যাকাউন্টের সুরক্ষা বাড়াতে টু-ফ্যাক্টর অথেনটিকেশন সক্রিয়
          করুন।
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-bengali flex items-center">
          <Lock className="h-4 w-4 mr-2" />
          টু-ফ্যাক্টর অথেনটিকেশন সক্রিয় করুন
        </button>
      </div>
    </motion.div>
  );
}
