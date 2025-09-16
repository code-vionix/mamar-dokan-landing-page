import Breadcrumb from "@/components/Breadcrumb";
import ProductDetails from "./component/ProductDetails";

const producductsDetailspage = async ({ params }) => {
  const { productId } = await params;
  // State

  //
  //   const [activeTab, setActiveTab] = useState("description");

  //

  //   if (!product)
  //     return (
  //       <div className="container mx-auto px-6 py-24 text-center">
  //         <div className="animate-pulse">
  //           <div className="h-8 bg-amber-200 rounded w-1/3 mx-auto mb-4"></div>
  //           <div className="h-64 bg-amber-100 rounded mb-4"></div>
  //           <div className="h-4 bg-amber-100 rounded w-1/2 mx-auto mb-2"></div>
  //           <div className="h-4 bg-amber-100 rounded w-1/3 mx-auto"></div>
  //         </div>
  //       </div>
  //     );

  return (
    <div className="bg-amber-50/30 min-h-screen pb-16 mt-12">
      <Breadcrumb productId={productId} />
      {/* Product Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <ProductDetails productId={productId} />
        {/* Tabs Section */}
        {/* <div className="mt-16">
          <div className="border-b border-amber-200">
            <div className="flex overflow-x-auto scrollbar-hide -mb-px">
              {["description", "specifications", "reviews", "shipping"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-bengali font-medium text-sm whitespace-nowrap ${
                      activeTab === tab
                        ? "border-b-2 border-amber-500 text-amber-700"
                        : "text-gray-600 hover:text-amber-600"
                    }`}
                  >
                    {getTabName(tab)}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none pamber-amber font-bengali">
                <h3>জামদানি শাড়ির ঐতিহ্য</h3>
                <p>
                  বাংলাদেশের জামদানি শাড়ি এক অনন্য ঐতিহ্য, যা শতাব্দীর পর
                  শতাব্দী ধরে সূক্ষ্ম হাতের কাজের জন্য বিখ্যাত। এই{" "}
                  {product.name} শাড়িটি পুরোপুরি হাতে বোনা এবং ঐতিহ্যবাহী
                  পদ্ধতিতে তৈরি করা হয়েছে।
                </p>

                <p>এই শাড়ির বিশেষ বৈশিষ্ট্য:</p>
                <ul>
                  <li>১০০% খাঁটি সুতি দিয়ে বোনা</li>
                  <li>ঐতিহ্যবাহী {product.pattern} প্যাটার্ন</li>
                  <li>বিশেষ {product.color} রং সমন্বয়</li>
                  <li>অত্যন্ত সূক্ষ্ম হাতের কাজ</li>
                  <li>{product.region} অঞ্চলের দক্ষ তাঁতি দ্বারা নির্মিত</li>
                </ul>

                <p>
                  জামদানির সূক্ষ্ম বুনন কৌশল ২০১৩ সালে ইউনেস্কো দ্বারা অমূর্ত
                  সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত হয়েছে। এই শাড়িটি বাংলাদেশের
                  জাতীয় শিল্পকলার একটি অনন্য নিদর্শন, যা পরিধান করে আপনি
                  বাংলাদেশের ঐতিহ্য এবং সংস্কৃতির অংশ হতে পারবেন।
                </p>

                <h3>ব্যবহার এবং যত্ন</h3>
                <p>
                  জামদানি শাড়ি যত্ন সহকারে হাত দিয়ে ধুয়ে নিতে হবে। শাড়িটি
                  ছায়ায় শুকাতে দিন এবং কখনই সরাসরি সূর্যালোকে রাখবেন না।
                  ইস্ত্রি করার সময় হালকা গরম ইস্ত্রি ব্যবহার করুন।
                </p>
              </div>
            )}

            {activeTab === "specifications" && (
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
                          <td className="py-2 font-medium text-gray-800">
                            ২৪ ঘণ্টা
                          </td>
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
            )}

            {activeTab === "reviews" && (
              <div className="font-bengali">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900">
                      গ্রাহক রিভিউ
                    </h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < 4
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        ৪.০ আউট অফ ৫ (৪৫ রিভিউ)
                      </p>
                    </div>
                  </div>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    <span>রিভিউ লিখুন</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="border-b border-gray-200 pb-6 last:border-b-0"
                    >
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                        </div>
                        <span className="font-medium">{review.name}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <h4 className="font-semibold mb-2">{review.title}</h4>
                      <p className="text-gray-600">{review.comment}</p>

                      {review.images && (
                        <div className="flex space-x-2 mt-3">
                          {review.images.map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="relative h-16 w-16 border rounded overflow-hidden"
                            >
                              <Image
                                src={img}
                                alt={`Review image ${imgIdx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 rounded-md py-2 px-4 flex items-center">
                    আরও রিভিউ দেখুন
                  </button>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="prose max-w-none pamber-amber font-bengali">
                <h3>শিপিং এবং ডেলিভারি</h3>
                <p>
                  আমরা বাংলাদেশের সব জেলায় শিপিং সুবিধা প্রদান করি। শিপিংয়ের
                  সময় নির্ভর করে আপনার অবস্থানের উপর:
                </p>

                <ul>
                  <li>
                    <strong>ঢাকা সিটি:</strong> ২৪-৪৮ ঘণ্টা
                  </li>
                  <li>
                    <strong>ঢাকার আশেপাশে:</strong> ২-৩ দিন
                  </li>
                  <li>
                    <strong>অন্যান্য জেলা:</strong> ৪-৭ দিন
                  </li>
                </ul>

                <h3>শিপিং চার্জ</h3>
                <ul>
                  <li>
                    <strong>ঢাকা সিটি:</strong> ৬০ টাকা
                  </li>
                  <li>
                    <strong>ঢাকার বাইরে:</strong> ১০০-১৫০ টাকা (লোকেশন অনুযায়ী)
                  </li>
                  <li>
                    <strong>২,০০০ টাকা বা তার বেশি অর্ডারে:</strong> বিনামূল্যে
                    শিপিং
                  </li>
                </ul>

                <h3>পেমেন্ট পদ্ধতি</h3>
                <p>আমরা নিম্নলিখিত পেমেন্ট পদ্ধতিগুলি গ্রহণ করি:</p>
                <ul>
                  <li>ক্যাশ অন ডেলিভারি (COD)</li>
                  <li>বিকাশ</li>
                  <li>নগদ</li>
                  <li>ক্রেডিট/ডেবিট কার্ড</li>
                </ul>
              </div>
            )}
          </div>
        </div> */}

        {/* Related Products */}
        {/* <div className="mt-16">
          <h2 className="text-2xl font-bold text-amber-900 font-bengali mb-6">
            আপনার পছন্দের জন্য আরও শাড়ি
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <Link
                href={`/products/${item.id}`}
                key={item.id}
                className="group"
              >
                <div className="relative rounded-lg overflow-hidden bg-white shadow-sm">
                  <div className="aspect-w-3 aspect-h-4 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.salePrice && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                        ছাড়
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-amber-900 font-bengali truncate">
                      {item.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      {item.salePrice ? (
                        <>
                          <span className="text-red-600 font-semibold">
                            ৳{item.salePrice}
                          </span>
                          <span className="text-gray-400 line-through text-sm ml-2">
                            ৳{item.price}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold">৳{item.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

// Helper function to get tab name in Bangla
function getTabName(tab) {
  const tabNames = {
    description: "বিবরণ",
    specifications: "স্পেসিফিকেশন",
    reviews: "রিভিউ",
    shipping: "শিপিং এবং রিটার্ন",
  };

  return tabNames[tab] || tab;
}

export default producductsDetailspage;

// Mock data
const mockProducts = [
  {
    id: "1",
    name: "শাহী জামদানি শাড়ি",
    description:
      "নীল পাড়ের সাথে সাদা শাড়ি। বিশেষ কারুকার্য সহ, হাতে বুনা জামদানি শাড়ি যা ঐতিহ্যবাহী বাংলাদেশী শিল্পের একটি উৎকৃষ্ট নিদর্শন।",
    price: 15500,
    images: [
      "/assets/product-1.jpg",
      "/assets/product-1.jpg",
      "/assets/product-1.jpg",
    ],
    material: "সুতি",
    color: "সাদা এবং নীল",
    pattern: "জামদানি বুটি",
    region: "ঢাকা",
    inStock: true,
    quantity: 5,
  },
  {
    id: "2",
    name: "ফুলবুটি জামদানি",
    description:
      "লাল পাড়ের সাথে গোলাপি শাড়ি। অত্যন্ত সূক্ষ্ম হাতের কাজের জামদানি শাড়ি, যেখানে ছোট ফুলের নকশা বুনা হয়েছে।",
    price: 12800,
    salePrice: 10900,
    images: [
      "/assets/product-2.jpg",
      "/assets/product-2.jpg",
      "/assets/product-2.jpg",
    ],
    material: "সুতি",
    color: "গোলাপি এবং লাল",
    pattern: "ফুলবুটি",
    region: "নরসিংদী",
    inStock: true,
    quantity: 8,
  },
  {
    id: "3",
    name: "কাটারি জামদানি শাড়ি",
    description:
      "কালো পাড়ের সাথে সবুজ শাড়ি। বিশেষ কাটারি নকশা বুনানো হয়েছে এই অনন্য শাড়িতে, যা বাংলার ঐতিহ্যকে তুলে ধরে।",
    price: 18200,
    images: [
      "/assets/product-3.jpg",
      "/assets/product-3.jpg",
      "/assets/product-3.jpg",
    ],
    material: "সুতি",
    color: "সবুজ এবং কালো",
    pattern: "কাটারি বুটি",
    region: "ঢাকা",
    inStock: true,
    quantity: 3,
  },
];

const reviews = [
  {
    name: "রুমানা আক্তার",
    rating: 5,
    date: "৫ মার্চ, ২০২৩",
    title: "অসাধারণ কোয়ালিটি!",
    comment:
      "শাড়িটি অসাধারণ! কোয়ালিটি এবং ডিজাইন দুটোই চমৎকার। আমার বিয়ের অনুষ্ঠানে পরেছিলাম এবং সবাই শাড়ির প্রশংসা করেছিল।",
    images: ["/assets/review-1.jpg", "/assets/review-2.jpg"],
  },
  {
    name: "তানিয়া রহমান",
    rating: 4,
    date: "১২ ফেব্রুয়ারি, ২০২৩",
    title: "সুন্দর ডিজাইন",
    comment:
      "খুব সুন্দর জামদানি শাড়ি, তবে রঙটি ছবির চেয়ে একটু ভিন্ন। তবে মানের দিক দিয়ে খুবই ভালো।",
  },
  {
    name: "আসিফ আহমেদ",
    rating: 5,
    date: "২২ জানুয়ারি, ২০২৩",
    title: "আমার স্ত্রীর জন্য একটি দুর্দান্ত উপহার",
    comment:
      "আমি আমার স্ত্রীর জন্মদিনে এই শাড়ি উপহার দিয়েছিলাম। তিনি এটি পেয়ে খুব খুশি হয়েছেন। প্যাকেজিং এবং ডেলিভারি সার্ভিস খুব ভালো ছিল।",
  },
];

const relatedProducts = [
  {
    id: "2",
    name: "ফুলবুটি জামদানি",
    price: "12,800",
    salePrice: "10,900",
    image: "/assets/product-2.jpg",
  },
  {
    id: "3",
    name: "কাটারি জামদানি শাড়ি",
    price: "18,200",
    image: "/assets/product-3.jpg",
  },
  {
    id: "4",
    name: "তারা জামদানি শাড়ি",
    price: "22,500",
    image: "/assets/product-4.jpg",
  },
  {
    id: "1",
    name: "নীল জামদানি",
    price: "15,500",
    image: "/assets/product-1.jpg",
  },
];
