import {
  Lock,
  LogOut,
  MapPin,
  User
} from "lucide-react";
export const navItems = [
  { id: "profile", label: "প্রোফাইল", icon: User },
  { id: "password", label: "পাসওয়ার্ড", icon: Lock },
  // { id: "notifications", label: "নোটিফিকেশন", icon: Bell },
  { id: "addresses", label: "ঠিকানা সমূহ", icon: MapPin },
  // { id: "payment", label: "পেমেন্ট মেথড", icon: CreditCard },
  // { id: "privacy", label: "প্রাইভেসি", icon: ShieldCheck },
  { id: "logout", label: "লগআউট", icon: LogOut, link: "/logout" },
];
