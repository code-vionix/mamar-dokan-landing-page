import Link from "next/link";
import mockProducts from "@/data/mockProducts";

const Breadcrumb = async ({ productId }) => {
  const product = mockProducts.find((p) => p.id === productId);
  return (
    <div className="bg-amber-100 py-4">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="text-sm font-bengali">
          <ol className="list-none p-0 inline-flex items-center">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-amber-800 hover:text-amber-600 transition-colors"
              >
                হোম
              </Link>
              <svg
                className="h-3 w-3 mx-2 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                href="/products"
                className="text-amber-800 hover:text-amber-600 transition-colors"
              >
                শাড়ি কালেকশন
              </Link>
              <svg
                className="h-3 w-3 mx-2 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-amber-900 font-medium truncate max-w-[200px]">
              {product?.name}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
