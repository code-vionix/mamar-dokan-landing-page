"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
const Newsletter = () => {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      // Here you would typically send this to your API
      console.log("Subscribing email:", emailInput);
      setSubscribed(true);
      setEmailInput("");

      // Reset notification after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block relative mb-6">
              <Mail size={32} className="text-amber-600" />
              <span className="absolute top-0 right-0 h-3 w-3 bg-amber-600 rounded-full"></span>
            </div>
            <h2 className="text-3xl font-bengali font-bold mb-4">
              নিউজলেটার সাবস্ক্রাইব করুন
            </h2>
            <p className="text-gray-700 mb-6 font-bengali">
              নতুন প্রোডাক্ট, বিশেষ অফার এবং ডিসকাউন্ট সম্পর্কে জানতে আমাদের
              নিউজলেটারে সাবস্ক্রাইব করুন
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="flex-1 px-4 py-3 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-all font-bengali"
                type="submit"
              >
                সাবস্ক্রাইব করুন
              </motion.button>
            </form>

            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-600 font-bengali"
              >
                ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
