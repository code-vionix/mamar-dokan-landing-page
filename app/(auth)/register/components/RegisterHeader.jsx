import Link from "next/link"
import Image from "next/image"

export default function RegisterHeader() {
  return (
    <div className="mb-8 text-center">
      <Link href="/">
        <Image
          src="/assets/category-2.jpg"
          alt="Logo"
          width={150}
          height={40}
          className="h-12 w-auto mx-auto"
        />
      </Link>
      <h2 className="mt-6 text-3xl font-bengali font-bold text-gray-900">
        নতুন একাউন্ট তৈরি করুন
      </h2>
      <p className="mt-2 text-sm text-gray-600 font-bengali">
        অথবা{" "}
        <Link
          href="/login"
          className="font-medium text-amber-600 hover:text-amber-500"
        >
          আপনার একাউন্টে লগইন করুন
        </Link>
      </p>
    </div>
  )
}
