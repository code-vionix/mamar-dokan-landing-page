import mockProducts from "@/data/mockProducts";
import ProductsGallery from "./ProductsGallery";
import ProductsContent from "./ProductsContent";

const ProductDetails = ({ productId }) => {
  const product = mockProducts.find((p) => p.id === productId);

  return (
    <div className="flex flex-col lg:flex-row -mx-4">
      {/* Left Column - Gallery */}
      <ProductsGallery product={product} />

      {/* Right Column - Info */}
      <ProductsContent product={product} />
    </div>
  );
};

export default ProductDetails;
