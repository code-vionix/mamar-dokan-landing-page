import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";

const ContracForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({ submitted: false, submitting: true, error: false });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setFormStatus({ submitted: true, submitting: false, error: false });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <div>
      <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100">
        <h2 className="text-2xl font-bold mb-6 font-bengali text-amber-800">
          আমাদের একটি মেসেজ পাঠান
        </h2>

        {formStatus.submitted ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
          >
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2 font-bengali">
              ধন্যবাদ!
            </h3>
            <p className="text-green-600 font-bengali">
              আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা যত দ্রুত সম্ভব আপনার সাথে
              যোগাযোগ করব।
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-bengali"
                >
                  নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-bengali"
                >
                  ইমেইল *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2 font-bengali"
                >
                  ফোন নম্বর
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 mb-2 font-bengali"
                >
                  বিষয় *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white"
                  required
                >
                  <option value="" disabled>
                    বিষয় নির্বাচন করুন
                  </option>
                  <option value="general">সাধারণ প্রশ্ন</option>
                  <option value="order">অর্ডার সম্পর্কিত</option>
                  <option value="shipping">শিপিং সম্পর্কিত</option>
                  <option value="return">রিটার্ন ও রিফান্ড</option>
                  <option value="wholesale">পাইকারি সম্পর্কিত</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-bengali"
              >
                মেসেজ *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={`px-6 py-3 ${
                  formStatus.submitting
                    ? "bg-amber-400"
                    : "bg-amber-600 hover:bg-amber-700"
                } text-white rounded-md font-medium transition-colors flex items-center justify-center ml-auto`}
              >
                {formStatus.submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    প্রেরণ করা হচ্ছে...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    মেসেজ পাঠান
                  </>
                )}
              </button>
            </div>

            {formStatus.error && (
              <div className="bg-red-50 border border-red-200 p-3 rounded-md text-red-600 text-sm font-bengali">
                দুঃখিত, মেসেজ পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContracForm;
