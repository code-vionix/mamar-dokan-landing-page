import Breadcrumb from "../components/common/Breadcrumb";
import Hero from "../components/common/Hero";
import ProfileContent from "./Components/ProfileConten";

// A mock function to simulate fetching data from a database or API
async function getUserData() {
  const userData = {
    user: {
      name: "মোহাম্মদ আলি",
      email: "mohammad.ali@example.com",
      phone: "+8801700000001",
      joined: "নভেম্বর ১০, ২০২৩",
    },
    addresses: [
      {
        id: 1,
        name: "বাড়ি",
        recipient: "মোহাম্মদ আলি",
        address: "রোড নং ১৩, সেক্টর ৬, উত্তরা",
        city: "ঢাকা-১২৩০",
        phone: "+৮৮০১৭০০০০০০১",
        isDefault: true,
      },
      {
        id: 2,
        name: "অফিস",
        recipient: "মোহাম্মদ আলি",
        address: "৩৬ দিলকুশা বাণিজ্যিক এলাকা",
        city: "ঢাকা-১০০০",
        phone: "+৮৮০১৭০০০০০০২",
        isDefault: false,
      },
    ],
    paymentMethods: [
      {
        id: 1,
        type: "bkash",
        number: "১১৫৫ ৫০৫ ০১১",
        isDefault: true,
      },
      {
        id: 2,
        type: "card",
        number: "কার্ড **৯১৭৭",
        expiry: "১১/২৬",
        isDefault: false,
      },
    ],
    privacy: {
      shareData: true,
      saveSearchHistory: false,
      savePaymentInfo: true,
    },
    notifications: {
      orderUpdates: true,
      promotions: true,
      newArrivals: false,
      accountUpdates: true,
    },
  };
  return userData;
}

export default async function ProfilePage() {
  const userData = await getUserData();

  return (
    <div className="min-h-screen bg-amber-50/30">
      <Hero
        title="আপনার প্রোফাইল
"
        description="আপনার প্রোফাইল পরিচালনা করুন"
      />
      <Breadcrumb pageName="প্রোফাইল" />
      <ProfileContent initialData={userData} />
    </div>
  );
}
