import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";




const VisitUsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center font-bengali text-amber-800">
          আমাদের সাথে যোগাযোগ করুন
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-8 rounded-xl shadow-sm text-center">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-bengali">
              আমাদের ঠিকানা
            </h3>
            <p className="text-gray-600 font-bengali">
              ১২৩/এ, তাঁত শিল্প রোড, মিরপুর-১০
              <br />
              ঢাকা-১২১৬, বাংলাদেশ
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <button className="text-amber-700 hover:text-amber-900 font-bengali inline-flex items-center">
                  মাপচিত্র দেখুন
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl shadow-sm text-center">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-bengali">ইমেইল</h3>
            <p className="text-gray-600">
              info@jamdanisaree.com
              <br />
              support@jamdanisaree.com
            </p>
            <div className="mt-6">
              <Link href="mailto:info@jamdanisaree.com">
                <button className="text-amber-700 hover:text-amber-900 font-bengali inline-flex items-center">
                  ইমেইল পাঠান
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl shadow-sm text-center">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-bengali">ফোন</h3>
            <p className="text-gray-600">
              +৮৮০ ১৭১২-৩৪৫৬৭৮
              <br />
              +৮৮০ ১৯৫৪-৭৮৯০১২
            </p>
            <div className="mt-6">
              <Link href="tel:+8801712345678">
                <button className="text-amber-700 hover:text-amber-900 font-bengali inline-flex items-center">
                  ফোন করুন
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUsSection;
