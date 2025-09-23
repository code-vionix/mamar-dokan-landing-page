import React from 'react'

const Header = ({step}) => {
  return (
    <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold font-bengali text-amber-800 text-center mb-2">
              চেকআউট
            </h1>
            <p className="text-center text-gray-600 font-bengali mb-8">
              আপনার অর্ডার সম্পন্ন করুন
            </p>
    
            {/* Checkout Progress */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>
    
                <div
                  className={`flex flex-col items-center ${
                    step >= 1 ? "text-amber-600" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2
                    ${
                      step >= 1
                        ? "border-amber-600 bg-amber-600 text-white"
                        : "border-gray-300 bg-white"
                    }
                  `}
                  >
                    <span>1</span>
                  </div>
                  <span className="text-sm mt-1 font-bengali">ঠিকানা</span>
                </div>
    
                <div
                  className={`flex flex-col items-center ${
                    step >= 2 ? "text-amber-600" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2
                    ${
                      step >= 2
                        ? "border-amber-600 bg-amber-600 text-white"
                        : "border-gray-300 bg-white"
                    }
                  `}
                  >
                    <span>2</span>
                  </div>
                  <span className="text-sm mt-1 font-bengali">শিপিং ও পেমেন্ট</span>
                </div>
    
                <div
                  className={`flex flex-col items-center ${
                    step >= 3 ? "text-amber-600" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2
                    ${
                      step >= 3
                        ? "border-amber-600 bg-amber-600 text-white"
                        : "border-gray-300 bg-white"
                    }
                  `}
                  >
                    <span>3</span>
                  </div>
                  <span className="text-sm mt-1 font-bengali">নিশ্চিতকরণ</span>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Header