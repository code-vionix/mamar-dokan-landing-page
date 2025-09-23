

const ProductsSkeleton = () => {
  return (
    <>
      <div className="bg-amber-50/30 min-h-screen pb-12">
        <div className="pt-24 pb-6 bg-amber-800 text-white">
          <div className="container mx-auto px-6">
            <div className="h-10 w-3/4 bg-amber-700/50 animate-pulse rounded"></div>
            <div className="h-6 w-1/2 mt-4 bg-amber-700/50 animate-pulse rounded"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between mb-8">
            <div className="h-10 w-48 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-10 w-40 bg-gray-200 animate-pulse rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array(8)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-80 bg-gray-200 animate-pulse"></div>
                  <div className="p-4">
                    <div className="h-6 w-3/4 bg-gray-200 animate-pulse mb-3 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 animate-pulse mb-2 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 animate-pulse mb-4 rounded"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
                      <div className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSkeleton;