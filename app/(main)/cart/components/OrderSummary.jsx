import { motion } from "framer-motion";
const OrderSummary = ({ totalAmount, isCheckingOut, handleCheckout }) => {
  return (
    <>
      <div className="lg:w-1/3">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-4 mb-4 font-bengali">
            অর্ডার সামারি
          </h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span className="font-bengali">উপ-মোট</span> 
              <span>৳{totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span className="font-bengali">শিপিং ফি</span>
              <span>{totalAmount >= 2000 ? "বিনামূল্যে" : "৳60"}</span>
            </div>
            <div className="flex justify-between text-gray-600 font-bengali">
              <span>ডিসকাউন্ট</span>
              <span>৳0</span>
            </div>
            <div className="border-t pt-3 mt-3 flex justify-between font-semibold text-lg">
              <span className="font-bengali">সর্বমোট</span>
              <span className="text-amber-900">
                ৳
                {(
                  totalAmount + (totalAmount >= 2000 ? 0 : 60)
                ).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Promo code section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2 font-bengali">
              প্রোমো কোড
            </h3>
            <div className="flex">
              <input
                type="text"
                className="flex-1 border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="কোড লিখুন"
              />
              <button className="bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700 font-bengali">
                প্রয়োগ করুন
              </button>
            </div>
          </div>

          {/* Checkout button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-amber-600 text-white py-3 rounded-md font-bengali font-medium flex items-center justify-center hover:bg-amber-700 transition-colors"
            onClick={handleCheckout}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? (
              <>
                <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>অপেক্ষা করুন...</span>
              </>
            ) : (
              <>চেকআউট করুন</>
            )}
          </motion.button>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2 font-bengali">
              স্বীকৃত পেমেন্ট পদ্ধতি
            </h3>
            <div className="flex space-x-3">
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs">
                বিকাশ
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs">
                নগদ
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs">
                VISA
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs">
                COD
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
