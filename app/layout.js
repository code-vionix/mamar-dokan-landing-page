import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bengali",
});



export const metadata = {
  title: "জামদানি শাড়ি - ঐতিহ্যবাহী বাংলাদেশী হস্তশিল্প",
  description: "অনন্য কারুশিল্প এবং সাংস্কৃতিক ঐতিহ্য সমৃদ্ধ ঐতিহ্যবাহী বাংলাদেশী জামদানি শাড়ি অন্বেষণ করুন। খাঁটি জামদানি শাড়ির প্রিমিয়াম সংগ্রহ।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn"
    className={`h-full ${hindSiliguri.variable} ${inter.variable}`}
    >
      <body
        className={`${inter.className} min-h-screen flex flex-col `}
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
