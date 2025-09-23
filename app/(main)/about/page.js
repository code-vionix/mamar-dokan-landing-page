
import Hero from "./components/Hero";
import BreadCrumb from "./components/BreadCrumb";
import TabContent from "./components/TabContent";
import VisitUsSection from "./components/VisitUsSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Hero Section */}
      <Hero />
      {/* Breadcrumb */}
      <BreadCrumb />
      {/* Main Content with Tabs */}
      <TabContent />
      {/* Visit Us Section */}
      <VisitUsSection />
    </div>
  );
}
