import {

  ChevronRight

} from "lucide-react"

const StepOne = ({ step, onSubmit, formData, handleChange }) => {
  return step === 1 && (
    <form onSubmit={onSubmit}>
      <h2 className="text-xl font-bold mb-6 pb-4 border-b font-bengali">
        ডেলিভারি ঠিকানা
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
          >
            নাম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
          >
            উপাধি
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
          >
            ইমেইল <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
          >
            ফোন নম্বর <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
        >
          ঠিকানা <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
          >
            শহর/জেলা <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-gray-700 mb-1 font-bengali"
          >
            পোস্টাল কোড
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center"
        >
          <span className="font-bengali">পরবর্তী ধাপে যান</span>
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default StepOne;
