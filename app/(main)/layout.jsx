import { CartProvider } from "@/lib/cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function MainLayout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </CartProvider>
  );
}
