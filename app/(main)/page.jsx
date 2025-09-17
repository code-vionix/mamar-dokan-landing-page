import PromotionalBanner from "./components/PromotionalBanner";
import HeroSection from "./components/HeroSection";
import TrustIndicators from "./components/TrustIndicators";
import FeaturedCategories from "./components/FeaturedCategories";
import NewArrivals from "./components/NewArrivals";
import FeaturedProducts from "./components/FeaturedProducts";
import HeritageSection from "./components/HeritageSection";
import InstagramFeed from "./components/InstagramFeed";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* === Promotional Banner === */}
      <PromotionalBanner />

      {/* === Hero Section */}
      <HeroSection />

      {/* === Trust Indicators Section === */}
      <TrustIndicators />

      {/* === Featured Categories === */}
      <FeaturedCategories />

      {/* === New Arrivals Section === */}
      <NewArrivals />

      {/* === Featured Products === */}
      <FeaturedProducts />

      {/* === Heritage Section === */}
      <HeritageSection />

      {/* === Instagram Feed Section === */}
      <InstagramFeed />

      {/* Newsletter Section */}
      <Newsletter />

      {/* === Testimonials === */}
      <Testimonials />
    </main>
  );
}
