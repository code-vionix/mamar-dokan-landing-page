import Link from "next/link";
import DescriptionTab from "./DescriptionTab";
import ReviewsTab from "./ReviewsTab";
import ShippingTab from "./ShippingTab";
import SpecificationsTab from "./SpecificationsTab";

const DetailsTab = ({ product, Tab }) => {
  const activeTab = Tab || "description";

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

  return (
    <div className="mt-16">
      <div className="border-b border-amber-200">
        <div className="flex overflow-x-auto scrollbar-hide -mb-px">
          {["description", "specifications", "reviews", "shipping"].map(
            (tab) => (
              <Link
                key={tab}
                href={`?tab=${tab}`}
                scroll={false}
                className={`px-6 py-3 font-bengali font-medium text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-amber-500 text-amber-700"
                    : "text-gray-600 hover:text-amber-600"
                }`}
              >
                {getTabName(tab)}
              </Link>
            )
          )}
        </div>
      </div>

      <div className="py-6">
        {activeTab === "description" && <DescriptionTab product={product} />}
        {activeTab === "specifications" && (
          <SpecificationsTab product={product} />
        )}
        {activeTab === "reviews" && <ReviewsTab productId={product.id} />}
        {activeTab === "shipping" && <ShippingTab />}
      </div>
    </div>
  );
};

export default DetailsTab;
