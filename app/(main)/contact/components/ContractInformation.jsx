
import React from "react";
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";   

const ContractInformation = () => {
  return (
    <div>
            <h2 className="text-3xl font-bold mb-6 font-bengali text-amber-800">
              যোগাযোগের তথ্য
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-md mr-4">
                  <MapPin className="text-amber-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-bengali">ঠিকানা</h3>
                  <p className="text-gray-600 font-bengali">
                    ১২৩/এ, তাঁত শিল্প রোড, মিরপুর-১০
                    <br />
                    ঢাকা-১২১৬, বাংলাদেশ
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-md mr-4">
                  <Mail className="text-amber-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-bengali">ইমেইল</h3>
                  <p className="text-gray-600">info@jamdanisaree.com</p>
                  <p className="text-gray-600">support@jamdanisaree.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-md mr-4">
                  <Phone className="text-amber-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-bengali">ফোন</h3>
                  <p className="text-gray-600">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                  <p className="text-gray-600">+৮৮০ ১৯৫৪-৭৮৯০১২</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-md mr-4">
                  <Clock className="text-amber-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-bengali">
                    খোলার সময়
                  </h3>
                  <p className="text-gray-600 font-bengali">
                    শনিবার - বৃহস্পতিবার: সকাল ১০:০০ - রাত ৮:০০
                  </p>
                  <p className="text-gray-600 font-bengali">
                    শুক্রবার: দুপুর ২:০০ - রাত ৮:০০
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-bengali">
                সোশ্যাল মিডিয়াতে আমরা
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="text-amber-700 w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="text-amber-700 w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="text-amber-700 w-5 h-5" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="text-amber-700 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 font-bengali">
                আমাদের অবস্থান
              </h3>
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-md border border-amber-100">
                {/* Replace with actual Google Maps embed */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  {/* This is a placeholder for the Google Maps iframe */}
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                    <p className="font-bengali text-gray-600">
                      এখানে Google মাপচিত্রের এম্বেড কোড যোগ করুন
                    </p>
                    <p className="text-sm text-gray-500 font-bengali mt-2">
                      (উৎপাদন সংস্করণে Google Maps API কী ব্যবহার করুন)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ContractInformation