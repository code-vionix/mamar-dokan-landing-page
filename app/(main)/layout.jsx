import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Nav-bar";

export const metadata = {
  title: "জামদানি শাড়ি - ঐতিহ্যবাহী বাংলাদেশী হস্তশিল্প",
  description:
    "অনন্য কারুশিল্প এবং সাংস্কৃতিক ঐতিহ্য সমৃদ্ধ ঐতিহ্যবাহী বাংলাদেশী জামদানি শাড়ি অন্বেষণ করুন। খাঁটি জামদানি শাড়ির প্রিমিয়াম সংগ্রহ।",
};

export default function MainLayout({ children }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </CartProvider>
    </>
  );
}
