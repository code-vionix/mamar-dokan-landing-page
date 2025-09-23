"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Award, ChevronRight, Sparkles, Star, Heart } from "lucide-react";

// Company Milestones
const milestones = [
  {
    year: "২০০৫",
    achievement: "জামদানি শাড়ি হাউসের যাত্রা শুরু মাত্র ৩ জন কারিগর নিয়ে।",
  },
  {
    year: "২০১০",
    achievement:
      "প্রথম আন্তর্জাতিক ট্রেড শো-তে অংশগ্রহণ এবং বিদেশে রপ্তানি শুরু।",
  },
  {
    year: "২০১৫",
    achievement: "অনলাইন বিক্রয় প্ল্যাটফর্ম চালু এবং ১০০+ কারিগরের টীম গঠন।",
  },
  {
    year: "২০২০",
    achievement: "দক্ষিণ এশিয়ার সেরা হ্যান্ডলুম ব্র্যান্ড অ্যাওয়ার্ড অর্জন।",
  },
];

// Team Members
const team = [
  {
    name: "আনিস রহমান",
    position: "প্রতিষ্ঠাতা এবং সিইও",
    bio: "১৫+ বছরের তাঁত শিল্প অভিজ্ঞতা সহ জামদানি শাড়ি হাউসের প্রতিষ্ঠাতা। ঐতিহ্য সংরক্ষণে উদ্যোগী এবং বাংলাদেশের কারুশিল্প বিকাশে নিবেদিত।",
    photo: "/assets/avatar-1.jpg",
  },
  {
    name: "নূসরাত জাহান",
    position: "ক্রিয়েটিভ ডিরেক্টর",
    bio: "আন্তর্জাতিক খ্যাতিসম্পন্ন ফ্যাশন ডিজাইনার। ১০+ বছর ধরে জামদানি শাড়ির নতুন নতুন ডিজাইন উদ্ভাবনে ও ঐতিহ্যবাহী নকশা সংরক্ষণে কাজ করছেন।",
    photo: "/assets/avatar-2.jpg",
  },
  {
    name: "কামরুল হাসান",
    position: "প্রধান কারিগর",
    bio: "২০+ বছর ধরে জামদানি বয়নে নিয়োজিত বিশেষজ্ঞ মাস্টার উইভার। বংশপরম্পরায় প্রাপ্ত দক্ষতা ও অভিজ্ঞতার অধিকারী।",
    photo: "/assets/avatar-3.jpg",
  },
];

// Company Values
const values = [
  {
    title: "ঐতিহ্য",
    description: "আমরা বাংলাদেশের সমৃদ্ধ বস্ত্র ঐতিহ্যকে সংরক্ষণ ও প্রচার করি।",
    icon: <Sparkles className="text-amber-600 w-6 h-6" />,
  },
  {
    title: "উৎকর্ষতা",
    description: "আমরা সর্বোচ্চ মানের পণ্য ও সেবা প্রদানে প্রতিশ্রুতিবদ্ধ।",
    icon: <Star className="text-amber-600 w-6 h-6" />,
  },
  {
    title: "টেকসই উন্নয়ন",
    description: "আমরা পরিবেশ-বান্ধব এবং নৈতিক উৎপাদন পদ্ধতি অনুসরণ করি।",
    icon: <Award className="text-amber-600 w-6 h-6" />,
  },
  {
    title: "সম্প্রদায়",
    description: "আমরা আমাদের কারিগর ও গ্রাহকদের একটি পরিবার মনে করি।",
    icon: <Heart className="text-amber-600 w-6 h-6" />,
  },
];

// Weaving Process
const weavingProcess = [
  {
    title: "সূতা তৈরি ও রংকরণ",
    description:
      "বিশেষ ধরনের সূক্ষ্ম সূতা নির্বাচন করে প্রাকৃতিক উপাদান দিয়ে রং করা হয়।",
  },
  {
    title: "তাঁত প্রস্তুতকরণ",
    description:
      "হাতে চালিত তাঁতে সূতা সাজানো এবং বুনন শুরুর জন্য প্রস্তুত করা হয়।",
  },
  {
    title: "নকশা অঙ্কন",
    description:
      "প্রথমে কাগজে নকশা অঙ্কন করে পরে সূতার উপর সেই নকশা অনুযায়ী কাজ করা হয়।",
  },
  {
    title: "বুনন প্রক্রিয়া",
    description:
      "অত্যন্ত ধৈর্য ও দক্ষতার সাথে সূতায় সূতায় বুনন কাজ চলতে থাকে।",
  },
  {
    title: "ভেজানো ও শুকানো",
    description: "বুনন সম্পন্ন হলে বিশেষ পদ্ধতিতে শাড়ি ভেজানো ও শুকানো হয়।",
  },
  {
    title: "পরীক্ষা ও মোড়ানো",
    description:
      "শেষ পর্যায়ে মানের পরীক্ষা করে সুন্দরভাবে মোড়ানো ও প্যাকেজিং করা হয়।",
  },
];

const TabContent = () => {
  const [activeTab, setActiveTab] = useState("story");
  const tabs = [
    { id: "story", name: "আমাদের গল্প" },
    { id: "mission", name: "মিশন ও ভিশন" },
    { id: "team", name: "আমাদের টীম" },
    { id: "heritage", name: "জামদানির ঐতিহ্য" },
  ];
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-amber-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-5 font-bengali text-lg transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-amber-600 text-amber-800 font-medium"
                  : "text-gray-600 hover:text-amber-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-4">
          {activeTab === "story" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-bengali text-amber-800">
                    আমাদের ইতিহাস
                  </h2>
                  <p className="text-gray-700 mb-4 font-bengali">
                    জামদানি শাড়ি হাউস ২০০৫ সালে প্রতিষ্ঠিত হয়েছিল, ঢাকার
                    টাঙ্গাইলের একটি পারিবারিক ব্যবসা হিসেবে, যার উদ্দেশ্য ছিল
                    জামদানি শাড়ির ঐতিহ্য সংরক্ষণ করা এবং এর অনন্য শিল্প
                    প্রদর্শন করা।
                  </p>
                  <p className="text-gray-700 mb-6 font-bengali">
                    আজ, আমরা বাংলাদেশের সবচেয়ে খ্যাতিমান জামদানি
                    প্রতিষ্ঠানগুলির মধ্যে একটি, যা ৫০+ জন দক্ষ কারিগরকে নিয়োজিত
                    করে এবং গ্রাহকদের কাছে সর্বোচ্চ মানের জামদানি পণ্য পৌঁছে
                    দেয়।
                  </p>
                  <div className="flex items-center bg-amber-100 p-4 rounded-lg">
                    <Clock className="text-amber-700 mr-3" />
                    <div>
                      <h3 className="font-semibold text-amber-800 font-bengali">
                        ১৭+ বছরের অভিজ্ঞতা
                      </h3>
                      <p className="text-sm text-amber-700 font-bengali">
                        উন্নতমানের জামদানি শাড়ি তৈরী ও বিক্রয়ে
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/assets/product-1.jpg"
                    alt="জামদানি শাড়ি হাউস"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-amber-200 h-full w-full -z-10 rounded-lg"></div>
                </div>
              </div>

              <div className="border-t border-amber-100 pt-12">
                <h2 className="text-3xl font-bold mb-8 font-bengali text-amber-800">
                  গ্রোথ স্টোরি
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-amber-100"
                    >
                      <h3 className="text-2xl font-bold text-amber-600 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-700 font-bengali">
                        {milestone.achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "mission" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div>
                  <h2 className="inline-block bg-amber-100 text-amber-800 px-4 py-1 text-sm rounded-md mb-4 font-bengali">
                    আমাদের মিশন
                  </h2>
                  <p className="text-3xl font-bold text-gray-800 mb-6 font-bengali">
                    বাংলাদেশের জামদানি শিল্পকে বিশ্বের দরবারে তুলে ধরা
                  </p>
                  <p className="text-gray-700 mb-6 font-bengali">
                    আমাদের মিশন হল জামদানি শাড়ির ঐতিহ্যবাহী শিল্পকে সংরক্ষণ করা
                    এবং আধুনিক ফ্যাশন জগতে এর প্রাসঙ্গিকতা বজায় রাখা। আমরা সকল
                    বয়সী নারীদের জন্য উচ্চমানের, টেকসই এবং অনন্য জামদানি শাড়ি
                    তৈরি করি, যা পরম্পরাকে আধুনিকতার সাথে মিলিত করে।
                  </p>
                  <p className="text-gray-700 mb-6 font-bengali">
                    আমরা আমাদের কারিগরদের জন্য ন্যায়সঙ্গত কর্মপরিবেশ নিশ্চিত
                    করি এবং তাদের জীবনযাত্রার মান উন্নত করার লক্ষ্যে কাজ করি। এর
                    পাশাপাশি, আমরা পরিবেশ-বান্ধব উৎপাদন প্রক্রিয়া ব্যবহার করি
                    এবং টেকসই ব্যবসায়িক অনুশীলন অনুসরণ করি।
                  </p>
                </div>
                <div>
                  <h2 className="inline-block bg-amber-100 text-amber-800 px-4 py-1 text-sm rounded-md mb-4 font-bengali">
                    আমাদের ভিশন
                  </h2>
                  <p className="text-3xl font-bold text-gray-800 mb-6 font-bengali">
                    বিশ্ববাজারে জামদানি শাড়ির শীর্ষ প্রতিনিধি
                  </p>
                  <p className="text-gray-700 mb-6 font-bengali">
                    আমাদের ভিশন হল বিশ্বব্যাপী জামদানি শাড়ির সেরা এবং সবচেয়ে
                    সম্মানিত প্রতিষ্ঠান হওয়া। আমরা চাই আন্তর্জাতিক বাজারে
                    বাংলাদেশের জামদানি'র উপস্থিতি বাড়াতে এবং এটিকে বিশ্বের
                    অন্যতম প্রধান লাক্সারি টেক্সটাইল হিসেবে প্রতিষ্ঠিত করতে।
                  </p>
                  <p className="text-gray-700 mb-6 font-bengali">
                    আমরা আধুনিক ডিজাইনের সাথে ঐতিহ্যবাহী কারুশিল্পের সংমিশ্রণ
                    ঘটিয়ে নতুন প্রজন্মকে জামদানির সৌন্দর্য সম্পর্কে অনুপ্রাণিত
                    করতে চাই। এছাড়াও আমাদের লক্ষ্য হল গ্রামীণ এলাকার তাঁতি ও
                    কারিগরদের জীবনযাত্রার মানোন্নয়ন করা।
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100">
                <h2 className="text-2xl font-bold mb-6 text-center font-bengali text-amber-800">
                  আমাদের মূল্যবোধ
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        {value.icon}
                      </div>
                      <h3 className="font-bold mb-2 font-bengali">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-bengali">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center font-bengali text-amber-800">
                আমাদের দক্ষ টীম পরিচিতি
              </h2>
              <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto font-bengali">
                আমাদের সফলতার পিছনে রয়েছে অত্যন্ত দক্ষ ও উৎসর্গীকৃত একটি টীম।
                প্রত্যেকেই তাদের নিজ নিজ ক্ষেত্রে বিশেষজ্ঞ এবং জামদানি শাড়ির
                প্রতি গভীর ভালোবাসা রাখেন।
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md"
                  >
                    <div className="h-64 relative overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 font-bengali">
                        {member.name}
                      </h3>
                      <p className="text-amber-600 mb-3 font-bengali">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 font-bengali">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4 font-bengali text-amber-800">
                  আমাদের দলে যোগ দিন
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-bengali">
                  আমরা সবসময় উদ্ভাবনী চিন্তা ও দক্ষতা সম্পন্ন লোকজনের সন্ধান
                  করি। আপনি যদি জামদানির প্রতি আগ্রহী হন এবং আমাদের মিশনে অবদান
                  রাখতে চান, তাহলে আমাদের সাথে যোগাযোগ করুন।
                </p>
                <Link href="/careers">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-md transition-colors font-bengali">
                    ক্যারিয়ার দেখুন
                  </button>
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === "heritage" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-bengali text-amber-800">
                    জামদানির ঐতিহাসিক গুরুত্ব
                  </h2>
                  <p className="text-gray-700 mb-4 font-bengali">
                    জামদানি বাংলার অতি প্রাচীন বস্ত্রশিল্প, যার ইতিহাস প্রায়
                    ৪০০ বছরের পুরনো। মুঘল আমলে এই শিল্প বিশেষ সমৃদ্ধি লাভ করেছিল
                    এবং 'ঢাকাই মসলিন' নামে বিশ্বব্যাপী খ্যাতি অর্জন করেছিল।
                  </p>
                  <p className="text-gray-700 mb-6 font-bengali">
                    জামদানি শাড়ির সূক্ষ্ম কারুকার্য এতটাই জটিল যে একটি
                    উচ্চমানের জামদানি শাড়ি তৈরি করতে ৬ মাস পর্যন্ত সময় লাগতে
                    পারে। ২০১৩ সালে ইউনেস্কো ঢাকার জামদানি শিল্পকে মানবজাতির
                    অমূর্ত সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃতি দিয়েছে।
                  </p>
                  <div className="flex items-center bg-amber-100 p-4 rounded-lg">
                    <Award className="text-amber-700 mr-3" />
                    <div>
                      <h3 className="font-semibold text-amber-800 font-bengali">
                        ইউনেস্কো স্বীকৃত
                      </h3>
                      <p className="text-sm text-amber-700 font-bengali">
                        মানবজাতির অমূর্ত সাংস্কৃতিক ঐতিহ্য
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/assets/product-2.jpg"
                    alt="জামদানি শাড়ির ঐতিহ্য"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-amber-200 h-full w-full -z-10 rounded-lg"></div>
                </div>
              </div>

              <div className="border-t border-amber-100 py-12">
                <h2 className="text-2xl font-bold mb-8 text-center font-bengali text-amber-800">
                  জামদানি বয়ন প্রক্রিয়া
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {weavingProcess.map((step, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-amber-100"
                    >
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mb-4">
                        {index + 1}
                      </div>
                      <h3 className="font-bold mb-2 font-bengali">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-bengali">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Link href="/craftsmanship">
                    <button className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-md transition-colors inline-flex items-center font-bengali">
                      আরও বিস্তারিত জানুন
                      <ChevronRight size={16} className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabContent;
