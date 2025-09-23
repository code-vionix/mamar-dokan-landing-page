

const ProductsError = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="bg-red-50 text-red-800 p-6 rounded-lg max-w-lg mx-auto">
          <h2 className="text-xl font-bengali mb-2">এরর!</h2>
          <p className="text-red-700 font-bengali">
            পণ্য লোড করতে সমস্যা হচ্ছে। অনুগ্রহ করে আবার চেষ্টা করুন।
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsError;