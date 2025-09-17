<<<<<<< HEAD
import Footer from "@/components/Footer";
import { auth } from "@/auth";

export default async function HomePage(){
    const session = await auth();

    return (
        <main>
            <nav>Header Navbar</nav>
            <Footer />
        </main>
    );
}
=======
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
>>>>>>> d629957c9e76c53ff431c6e99d4e4a113b85e68d
