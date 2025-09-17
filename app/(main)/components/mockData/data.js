// Mock data (would come from your database in a real app)
const categories = [
  { id: "1", name: "শাহী জামদানি", image: "/assets/category-1.jpg" },
  { id: "2", name: "ফুলদানি জামদানি", image: "/assets/category-2.jpg" },
  { id: "3", name: "পাড়ের জামদানি", image: "/assets/category-3.jpg" },
];





// Mock data (would come from your database in a real app)

const featuredProducts = [
  {
    id: "1",
    name: "ডোরা জামদানি শাড়ি",
    description: "নীল পাড়ের সাথে সাদা শাড়ি",
    price: "15,500",
    image: "/assets/product-1.jpg",
  },
  {
    id: "2",
    name: "ফুলবুটি জামদানি",
    description: "লাল পাড়ের সাথে গোলাপি শাড়ি",
    price: "12,800",
    salePrice: "10,900",
    image: "/assets/product-2.jpg",
  },
  {
    id: "3",
    name: "কাটারি জামদানি শাড়ি",
    description: "কালো পাড়ের সাথে সবুজ শাড়ি",
    price: "18,200",
    image: "/assets/product-3.jpg",
  },
  {
    id: "4",
    name: "তারা জামদানি শাড়ি",
    description: "সোনালি পাড়ের সাথে লাল শাড়ি",
    price: "22,500",
    image: "/assets/product-4.jpg",
  },
];


const instagramFeed = [
  "/assets/product-1.jpg",
  "/assets/product-2.jpg",
  "/assets/product-3.jpg",
  "/assets/product-4.jpg",
  "/assets/category-1.jpg",
  "/assets/category-2.jpg",
];

// New mock data for additional sections
const newArrivals = [
  {
    id: "5",
    name: "নীল টেরাকোটা জামদানি",
    description: "নীল ও টেরাকোটা সংমিশ্রণে",
    price: "14,200",
    image: "/assets/product-1.jpg",
  },
  {
    id: "6",
    name: "হলুদ কাতান জামদানি",
    description: "হলুদ পাড়ে সাদা শাড়ি",
    price: "16,800",
    image: "/assets/product-2.jpg",
  },
  {
    id: "7",
    name: "সবুজ মখমল জামদানি",
    description: "গাঢ় সবুজ রঙের টুইল",
    price: "13,500",
    image: "/assets/product-3.jpg",
  },
  {
    id: "8",
    name: "বেগুনি রয়েল জামদানি",
    description: "রাজকীয় বেগুনি রঙের",
    price: "19,500",
    image: "/assets/product-4.jpg",
  },
];


const testimonials = [
  {
    name: "রুমানা আক্তার",
    location: "ঢাকা",
    avatar: "/assets/avatar-1.jpg",
    text: "শাড়িগুলো অসাধারণ! এই ওয়েবসাইট থেকে আমি ৩টি জামদানি শাড়ি কিনেছি, সবগুলোই খুব সুন্দর এবং মানসম্মত।",
  },
  {
    name: "তানিয়া রহমান",
    location: "চট্টগ্রাম",
    avatar: "/assets/avatar-2.jpg",
    text: "আমার বিয়েতে পরার জন্য এখান থেকে একটি লাল জামদানি শাড়ি কিনেছিলাম। সেবা এবং পণ্য দুটোই অতুলনীয়।",
  },
  {
    name: "সাবরিনা হোসেন",
    location: "সিলেট",
    avatar: "/assets/avatar-3.jpg",
    text: "দেশের বাইরে থাকি, কিন্তু ডেলিভারি সার্ভিস খুব তাড়াতাড়ি। শাড়ির মান নিয়েও কোন সমস্যা হয়নি।",
  },
];


export { testimonials, newArrivals, instagramFeed, featuredProducts, categories };