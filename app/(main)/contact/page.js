import ContractHero from "./components/ContractHero";
import ContractBreadCrumb from "./components/ContractBreadCrumb";
import ContractInformation from "./components/ContractInformation";
import ContracForm from "./components/ContracForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Hero Section */}
      <ContractHero />
      {/* Breadcrumb */}
      <ContractBreadCrumb />
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <ContractInformation />
          {/* Contact Form */}
          <ContracForm />
        </div>
      </div>

      {/* FAQ Section */}
    </div>
  );
}
