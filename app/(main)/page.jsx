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

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/category`
  );
  const categoriesData = await response.json();
  const categories = categoriesData.data;

  return (
    <main className="min-h-screen">
      {/* === Promotional Banner === */}
      <PromotionalBanner />

      {/* === Hero Section */}
      <HeroSection />

      {/* === Trust Indicators Section === */}
      <TrustIndicators />

      {/* === Featured Categories === */}
      <FeaturedCategories categories={categories} />

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
