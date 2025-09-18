import React from "react";

const ShippingTab = () => {
  return (
    <div className="prose max-w-none pamber-amber font-bengali">
      <h3>শিপিং এবং ডেলিভারি</h3>
      <p>
        আমরা বাংলাদেশের সব জেলায় শিপিং সুবিধা প্রদান করি। শিপিংয়ের সময় নির্ভর
        করে আপনার অবস্থানের উপর:
      </p>

      <ul>
        <li>
          <strong>ঢাকা সিটি:</strong> ২৪-৪৮ ঘণ্টা
        </li>
        <li>
          <strong>ঢাকার আশেপাশে:</strong> ২-৩ দিন
        </li>
        <li>
          <strong>অন্যান্য জেলা:</strong> ৪-৭ দিন
        </li>
      </ul>

      <h3>শিপিং চার্জ</h3>
      <ul>
        <li>
          <strong>ঢাকা সিটি:</strong> ৬০ টাকা
        </li>
        <li>
          <strong>ঢাকার বাইরে:</strong> ১০০-১৫০ টাকা (লোকেশন অনুযায়ী)
        </li>
        <li>
          <strong>২,০০০ টাকা বা তার বেশি অর্ডারে:</strong> বিনামূল্যে শিপিং
        </li>
      </ul>

      <h3>পেমেন্ট পদ্ধতি</h3>
      <p>আমরা নিম্নলিখিত পেমেন্ট পদ্ধতিগুলি গ্রহণ করি:</p>
      <ul>
        <li>ক্যাশ অন ডেলিভারি (COD)</li>
        <li>বিকাশ</li>
        <li>নগদ</li>
        <li>ক্রেডিট/ডেবিট কার্ড</li>
      </ul>
    </div>
  );
};

export default ShippingTab;
