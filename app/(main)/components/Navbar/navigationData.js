import { Crown, Star, Gift, Sparkles } from "lucide-react";

const navigationData = [
  {
    label: "হোম",
    href: "/",
    type: "link",
    icon: Crown,
  },
  {
    label: "শাড়ি কালেকশন",
    href: "/products",
    type: "mega-menu",
    key: "categories",
    headingIcon: Sparkles,
    sections: [
      {
        heading: "শাড়ির ধরন",
        links: [
          { href: "/products?category=premium", label: "প্রিমিয়াম জামদানি" },
          { href: "/products?category=classic", label: "ক্লাসিক জামদানি" },
          { href: "/products?material=রেশম", label: "রেশমি জামদানি" },
          { href: "/products?material=সুতি", label: "সুতি জামদানি" },
        ],
      },
      {
        heading: "সুযোগ অনুযায়ী",
        links: [
          { href: "/products?occasion=wedding", label: "বিবাহ উপলক্ষে" },
          { href: "/products?occasion=festive", label: "উৎসব উপলক্ষে" },
          { href: "/products?occasion=daily", label: "দৈনন্দিন ব্যবহারের" },
        ],
      },
      {
        featured: {
          image: "/assets/product-1.jpg",
          alt: "Featured Product",
          title: "বিশেষ অফার",
          description: "দারুচিনি রেশমি জামদানি শাড়ি",
          href: "/products/1",
          cta: "দেখুন",
        },
      },
    ],
  },
  {
    label: "নতুন আগমন",
    href: "/new-arrivals",
    type: "link",
    icon: Star,
  },
  {
    label: "ছাড়ের অফার",
    href: "/offers",
    type: "link",
    icon: Gift,
  },
];

export default navigationData;