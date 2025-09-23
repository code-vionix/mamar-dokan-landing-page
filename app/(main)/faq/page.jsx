import { Search } from "lucide-react";
import FaqHero from "./components/FaqHero";
import FaqBreadCrumb from "./components/FaqBreadCrumb";
import CategoriesNavigation from "./components/CategoriesNavigation";
import ContactSection from "./components/ContactSection";
import FaqContent from "./components/FaqContent";
import FAQLIST from "./components/FAQLIST";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Hero Section */}
      <FaqHero />
      {/* Breadcrumb */}
      <FaqBreadCrumb />
      {/* Search Section */}
      <FAQLIST />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

// FAQ Data
