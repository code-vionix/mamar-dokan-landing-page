import Breadcrumb from "@/components/Breadcrumb";
import ProductDetails from "./component/ProductDetails";
import RelatedProducts from "./component/RelatedProducts";
import DetailsTab from "./component/DetailsTab";

const producductsDetailspage = async ({ params, searchParams }) => {
  const { productId } = await params;
  const { tab } = await searchParams;
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
      <Breadcrumb productId={productId} />
      {/* Product Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <ProductDetails productId={productId} />
        <DetailsTab productId={productId} Tab={tab} />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default producductsDetailspage;
