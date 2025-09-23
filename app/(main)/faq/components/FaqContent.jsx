"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqData } from "../data";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const FaqContent = ({ searchQuery }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get active category and search query from URL parameters
  const activeCategory = searchParams.get("category") || "all";
  const query = searchParams.get("query") || "";

  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleQuestion = (id) => {
    setExpandedQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  // Filtered FAQs based on category and search query
  const filteredFAQs = faqData.filter((faq) => {
    const matchCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchQuery =
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase());

    const searchMatchQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchQuery && searchMatchQuery;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-10">
            <HelpCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 font-bengali">
              কোন ফলাফল পাওয়া যায়নি
            </h2>
            <p className="text-gray-500 font-bengali">
              আপনার অনুসন্ধানের সাথে মিলে এমন কোন প্রশ্ন পাওয়া যায়নি। অনুগ্রহ
              করে আবার চেষ্টা করুন বা{" "}
              <Link href="/contact" className="text-amber-600 hover:underline">
                যোগাযোগ করুন
              </Link>{" "}
              সরাসরি সাহায্যের জন্য।
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="border border-amber-100 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset"
                  aria-expanded={expandedQuestions.includes(faq.id)}
                >
                  <h3 className="text-lg font-medium text-gray-800 font-bengali">
                    {faq.question}
                  </h3>
                  {expandedQuestions.includes(faq.id) ? (
                    <ChevronUp className="text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-amber-600 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedQuestions.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-amber-100">
                        <p className="text-gray-600 font-bengali whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqContent;
