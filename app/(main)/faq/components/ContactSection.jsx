import React from "react";
import Link from "next/link";


const ContactSection = () => {
  return (
    <div className="bg-amber-100 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-bengali text-amber-800">
            আপনার প্রশ্নের উত্তর পাননি?
          </h2>
          <p className="text-gray-700 mb-6 font-bengali">
            আমাদের গ্রাহক সেবা টীম সবসময় আপনাকে সাহায্য করতে প্রস্তুত। যেকোনো
            প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-all font-bengali">
              যোগাযোগ করুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
