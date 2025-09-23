import { CreditCard, Wallet, Banknote } from "lucide-react";
import UploadImage from "./UploadImage";

const paymentMethod = [
  {
    name: "cash",
    icon: <Banknote className="w-5 h-5 mr-2 text-gray-600" />,
    title: "ক্যাশ অন ডেলিভারি",
  },
  {
    name: "bkash",
    icon: <Wallet className="w-5 h-5 mr-2 text-gray-600" />,
    title: "বিকাশ পেমেন্ট",
  },
  {
    name: "nagad",
    icon: <Wallet className="w-5 h-5 mr-2 text-gray-600" />,
    title: "নগদ পেমেন্ট",
  },
  {
    name: "card",
    icon: <CreditCard className="w-5 h-5 mr-2 text-gray-600" />,
    title: "ক্রেডিট/ডেবিট কার্ড",
  },
];

const StepTwo = ({
  step,
  onSubmit,
  formData,
  setFormData,
  handleChange,
  handleRadioChange,
  handleBack,
}) => {
  return (
    step === 2 && (
      <form onSubmit={onSubmit}>
        <h2 className="text-xl font-bold mb-6 pb-4 border-b font-bengali">
          শিপিং এবং পেমেন্ট
        </h2>

        {/* Payment Method */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-bengali">
            পেমেন্ট পদ্ধতি
          </h3>

          <div className="space-y-4">
            {paymentMethod.map((item, i) => (
              <div
                key={i}
                className={`
                            border rounded-lg p-4 cursor-pointer transition-all
                            ${
                              formData.paymentMethod === item.name
                                ? "border-amber-500 bg-amber-50"
                                : "border-gray-200 hover:border-amber-200"
                            }
                          `}
                onClick={() => handleRadioChange("paymentMethod", item.name)}
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <div
                      className={`
                                w-5 h-5 rounded-full border flex items-center justify-center
                                ${
                                  formData.paymentMethod === item.name
                                    ? "border-amber-500"
                                    : "border-gray-400"
                                }
                              `}
                    >
                      {formData.paymentMethod === item.name && (
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <p className="font-medium flex items-center font-bengali">
                      {item.icon}
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload ScreenShot */}
        {formData.paymentMethod !== "cash" && (
          <UploadImage setFormData={setFormData} />
        )}

        {/* Order Notes */}
        <div className="mb-8">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
          >
            অর্ডার নোট (ঐচ্ছিক)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="আপনার অতিরিক্ত নির্দেশনা লিখুন..."
          />
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition-colors font-bengali"
          >
            পূর্ববর্তী
          </button>

          <button
            type="submit"
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors flex items-center justify-center font-bengali"
          >
            অর্ডার নিশ্চিত করুন
          </button>
        </div>
      </form>
    )
  );
};

export default StepTwo;
