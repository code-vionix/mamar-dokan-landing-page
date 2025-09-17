import React from "react";

const SpecificationsTab = ({ product }) => {
  return (
    <div className="font-bengali">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-amber-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800 mb-4">
            প্রোডাক্ট স্পেসিফিকেশন
          </h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">প্রোডাক্ট টাইপ</td>
                <td className="py-2 font-medium text-gray-800">
                  জামদানি শাড়ি
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">উপাদান</td>
                <td className="py-2 font-medium text-gray-800">
                  {product.material}
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">কালার</td>
                <td className="py-2 font-medium text-gray-800">
                  {product.color}
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">প্যাটার্ন</td>
                <td className="py-2 font-medium text-gray-800">
                  {product.pattern}
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">অঞ্চল</td>
                <td className="py-2 font-medium text-gray-800">
                  {product.region}
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">শাড়ির দৈর্ঘ্য</td>
                <td className="py-2 font-medium text-gray-800">
                  ৫.৫ মিটার (১৮ ফুট)
                </td>
              </tr>
              <tr>
                <td className="py-2 text-gray-600">শাড়ির প্রস্থ</td>
                <td className="py-2 font-medium text-gray-800">
                  ১.২ মিটার (৪৮ ইঞ্চি)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800 mb-4">
            প্যাকেজিং এবং ডেলিভারি
          </h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">প্যাকেজিং</td>
                <td className="py-2 font-medium text-gray-800">
                  প্রিমিয়াম গিফট বক্স
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="py-2 text-gray-600">শিপিং সময়</td>
                <td className="py-2 font-medium text-gray-800">
                  ঢাকায় ২-৩ দিন, ঢাকার বাইরে ৪-৭ দিন
                </td>
              </tr>
              <tr>
                <td className="py-2 text-gray-600">প্রসেসিং সময়</td>
                <td className="py-2 font-medium text-gray-800">২৪ ঘণ্টা</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-lg font-semibold text-amber-800 mt-6 mb-4">
            রিটার্ন পলিসি
          </h3>
          <ul className="list-disc pl-4 text-sm space-y-1 text-gray-700">
            <li>ডেলিভারির ৭ দিনের মধ্যে রিটার্ন করা যাবে</li>
            <li>প্রোডাক্টে কোয়ালিটি ইস্যু থাকতে হবে</li>
            <li>প্রোডাক্ট অক্ষত অবস্থায় থাকতে হবে</li>
            <li>অরিজিনাল প্যাকেজিংসহ রিটার্ন করতে হবে</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecificationsTab;
