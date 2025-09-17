import { Clock, ShieldCheck, Sparkles } from "lucide-react";

const TrustIndicators = () => {
  return (
    <>
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-3">
              {/* <TruckFast size={24} className="text-amber-600" /> */}
              <div>
                <p className="font-semibold font-bengali">বিনামূল্যে শিপিং</p>
                <p className="text-xs text-gray-500 font-bengali">
                  ২,০০০ টাকার বেশি অর্ডারে
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock size={24} className="text-amber-600" />
              <div>
                <p className="font-semibold font-bengali">দ্রুত ডেলিভারি</p>
                <p className="text-xs text-gray-500 font-bengali">
                  ২-৩ দিনের মধ্যে
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck size={24} className="text-amber-600" />
              <div>
                <p className="font-semibold font-bengali">নিশ্চিত মানসম্মত</p>
                <p className="text-xs text-gray-500 font-bengali">
                  ১০০% আসল জামদানি
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Sparkles size={24} className="text-amber-600" />
              <div>
                <p className="font-semibold font-bengali">৭ দিনের রিটার্ন</p>
                <p className="text-xs text-gray-500 font-bengali">
                  সহজ রিটার্ন পলিসি
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustIndicators;
