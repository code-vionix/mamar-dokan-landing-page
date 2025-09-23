import { Search } from "lucide-react";
import FaqHero from "./components/FaqHero";
import FaqBreadCrumb from "./components/FaqBreadCrumb";
import CategoriesNavigation from "./components/CategoriesNavigation";
import ContactSection from "./components/ContactSection";
import FaqContent from "./components/FaqContent";


export default function FAQPage() {
  // Filter FAQs based on search query and active category
  //   useEffect(() => {
  //     let result = [...faqData];

  //     if (searchQuery.trim()) {
  //       const lowerCaseQuery = searchQuery.toLowerCase();
  //       result = result.filter(
  //         (faq) =>
  //           faq.question.toLowerCase().includes(lowerCaseQuery) ||
  //           faq.answer.toLowerCase().includes(lowerCaseQuery)
  //       );
  //     }

  //     if (activeCategory !== "all") {
  //       result = result.filter((faq) => faq.category === activeCategory);
  //     }

  //     setFilteredFAQs(result);
  //   }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Hero Section */}
      <FaqHero />
      {/* Breadcrumb */}
      <FaqBreadCrumb />
      {/* Search Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="আপনার প্রশ্ন লিখুন..."
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-bengali"
              />
              <Search className="absolute left-4 top-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      {/* Categories Navigation */}
      <CategoriesNavigation />
      {/* FAQ Content */}
      <FaqContent />
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

// FAQ Data
