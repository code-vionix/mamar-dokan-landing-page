import FeaturedCategories from "./components/FeaturedCategories";
import FeaturedProducts from "./components/FeaturedProducts";
import HeritageSection from "./components/HeritageSection";
import HeroSection from "./components/HeroSection";
import InstagramFeed from "./components/InstagramFeed";
import NewArrivals from "./components/NewArrivals";
import Newsletter from "./components/Newsletter";
import PromotionalBanner from "./components/PromotionalBanner";
import Testimonials from "./components/Testimonials";
import TrustIndicators from "./components/TrustIndicators";

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
