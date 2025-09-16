import Image from "next/image"

export default function RegisterLeft() {
  return (
    <div className="md:w-1/2 bg-amber-800 hidden md:flex items-center justify-center p-10">
      <div className="max-w-md">
        <Image
          src="/assets/category-1.jpg"
          alt="Jamdani Saree"
          width={600}
          height={800}
          className="rounded-lg shadow-lg"
        />
        <div className="mt-6 text-white">
          <h2 className="text-3xl font-bengali font-bold mb-4">
            আপনার পছন্দের জামদানি শাড়ি
          </h2>
          <p className="font-bengali">
            আমাদের সাথে একাউন্ট খুলে আপনার পছন্দের শাড়ি রেট করুন, কালেকশন সেভ
            করুন এবং আরও অনেক সুবিধা পান।
          </p>
        </div>
      </div>
    </div>
  )
}
