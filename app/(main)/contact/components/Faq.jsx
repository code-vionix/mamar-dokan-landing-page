import React from "react";
import Link from "next/link";

// FAQ Data
const faqs = [
  {
    question: "আপনারা কি আন্তর্জাতিক শিপিং করেন?",
    answer:
      "হ্যাঁ, আমরা বিশ্বব্যাপী শিপিং পরিষেবা প্রদান করি। আন্তর্জাতিক অর্ডারের ক্ষেত্রে শিপিং সময় ও খরচ দেশভেদে পরিবর্তিত হতে পারে।",
  },
  {
    question: "আমি কিভাবে আমার অর্ডার ট্র্যাক করতে পারি?",
    answer:
      "আপনার অর্ডার কনফার্ম হওয়ার পর, আপনি একটি কনফার্মেশন ইমেইল পাবেন যাতে ট্র্যাকিং লিঙ্ক থাকবে। আপনি লগ ইন করে আপনার অ্যাকাউন্ট থেকেও অর্ডার ট্র্যাক করতে পারেন।",
  },
  {
    question: "আপনাদের রিফান্ড পলিসি কী?",
    answer:
      "আমরা ডেলিভারি হওয়ার ৭ দিনের মধ্যে অব্যবহৃত এবং আনড্যামেজড পণ্য ফেরত নিয়ে থাকি। রিফান্ড প্রক্রিয়া সম্পূর্ণ হতে ৭-১৪ দিন সময় লাগতে পারে, নির্ভর করে আপনার পেমেন্ট পদ্ধতির উপর।",
  },
];

const Faq = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-bengali text-amber-800">
          সাধারণ জিজ্ঞাসা
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-6 border-b border-amber-100 pb-6 last:border-0"
            >
              <h3 className="text-xl font-semibold mb-2 font-bengali">
                {faq.question}
              </h3>
              <p className="text-gray-600 font-bengali">{faq.answer}</p>
            </div>
          ))}

          <div className="text-center mt-10">
            <Link href="/faq">
              <button className="px-6 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 rounded-md font-medium transition-all font-bengali">
                সকল প্রশ্নোত্তর দেখুন
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
