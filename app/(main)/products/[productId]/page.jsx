import Breadcrumb from "@/components/Breadcrumb";
import DetailsTab from "./component/DetailsTab";
import ProductDetails from "./component/ProductDetails";
import RelatedProducts from "./component/RelatedProducts";

const producductsDetailspage = async ({ params, searchParams }) => {
  const { productId } = await params;
  const { tab } = await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${productId}`
  );
  const data = await response.json();
  const product = data.data;

  //   if (!product)
  //     return (
  //       <div className="container mx-auto px-6 py-24 text-center">
  //         <div className="animate-pulse">
  //           <div className="h-8 bg-amber-200 rounded w-1/3 mx-auto mb-4"></div>
  //           <div className="h-64 bg-amber-100 rounded mb-4"></div>
  //           <div className="h-4 bg-amber-100 rounded w-1/2 mx-auto mb-2"></div>
  //           <div className="h-4 bg-amber-100 rounded w-1/3 mx-auto"></div>
  //         </div>
  //       </div>
  //     );

  return (
    <div className="bg-amber-50/30 min-h-screen pb-16 mt-12">
      <Breadcrumb product={product} />
      {/* Product Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <ProductDetails product={product} />
        <DetailsTab product={product} Tab={tab} />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default producductsDetailspage;
