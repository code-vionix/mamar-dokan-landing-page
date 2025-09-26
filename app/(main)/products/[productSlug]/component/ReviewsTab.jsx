import { MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import reviews from "@/data/review";

const ReviewsTab = ({ productId }) => {
  return (
    <div className="font-bengali">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-900">গ্রাহক রিভিউ</h3>
          <div className="flex items-center">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
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
              <span className="text-sm text-gray-500">{review.date}</span>
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
  );
};

export default ReviewsTab;
