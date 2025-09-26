import ProductsContent from "./ProductsContent";
import ProductsGallery from "./ProductsGallery";

const ProductDetails = ({ product }) => {
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
