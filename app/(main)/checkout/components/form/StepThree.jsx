import { Package, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StepThree = ({ step, formData }) => {
  return (
    step === 3 && (
      <div className="text-center py-8">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 font-bengali">
          আপনার অর্ডার সফলভাবে গৃহীত হয়েছে!
        </h2>

        <p className="text-gray-600 mb-6 font-bengali">
          অর্ডার নম্বর:{" "}
          <span className="font-medium">
            JMD{Math.floor(100000 + Math.random() * 900000)}
          </span>
        </p>

        <div className="bg-amber-50 p-6 rounded-lg mb-6 text-left">
          <h3 className="font-semibold mb-3 font-bengali">অর্ডার বিবরণ:</h3>
          <div className="space-y-2 text-sm">
            <p className="font-bengali">
              <span className="font-medium">নাম:</span> {formData.firstName}{" "}
              {formData.lastName}
            </p>
            <p className="font-bengali">
              <span className="font-medium">ইমেইল:</span> {formData.email}
            </p>
            <p className="font-bengali">
              <span className="font-medium">ফোন:</span> {formData.phone}
            </p>
            <p className="font-bengali">
              <span className="font-medium">ঠিকানা:</span> {formData.address},{" "}
              {formData.city}
              {formData.postalCode && `, ${formData.postalCode}`}
            </p>
            <p className="font-bengali">
              <span className="font-medium">পেমেন্ট পদ্ধতি:</span>{" "}
              {getPaymentMethodName(formData.paymentMethod)}
            </p>
            <p className="font-bengali">
              <span className="font-medium">ডেলিভারি পদ্ধতি:</span>{" "}
              {getShippingMethodName(formData.shippingMethod)}
            </p>
            {formData?.notes && (<p className="font-bengali">
              <span className="font-medium">অর্ডার নোট:</span>{" "}
              {formData?.notes}
            </p>)}

            {formData?.image && (
              <div>
                <p className="font-bengali">
                  <span className="font-medium">পেমেন্ট প্রুফ স্ক্রিনশট:</span>{" "}
                </p>
                <div className="relative w-fit">
                  <Image
                    src={URL.createObjectURL(formData?.image)}
                    alt="payment proof"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-8 font-bengali">
          আপনার অর্ডার নিশ্চিতকরণের বিস্তারিত ইমেইলে পাঠানো হয়েছে। আমরা যত
          দ্রুত সম্ভব আপনার অর্ডার প্রসেস করব।
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/track-order" className="flex-1 md:flex-initial">
            <button className="w-full md:w-auto px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors flex items-center justify-center font-bengali">
              <Package className="mr-2 h-5 w-5" />
              অর্ডার ট্র্যাক করুন
            </button>
          </Link>

          <Link href="/" className="flex-1 md:flex-initial">
            <button className="w-full md:w-auto px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium rounded-md transition-colors font-bengali">
              হোম পেইজে ফিরুন
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

// Helper Functions
function getPaymentMethodName(method) {
  switch (method) {
    case "cash":
      return "ক্যাশ অন ডেলিভারি";
    case "bkash":
      return "বিকাশ";
    case "nagad":
      return "নগদ";
    case "card":
      return "ক্রেডিট/ডেবিট কার্ড";
    default:
      return method;
  }
}

function getShippingMethodName(method) {
  switch (method) {
    case "standard":
      return "স্ট্যান্ডার্ড ডেলিভারি (৩-৫ দিন)";
    case "express":
      return "দ্রুত ডেলিভারি (১-২ দিন)";
    default:
      return method;
  }
}

export default StepThree;
