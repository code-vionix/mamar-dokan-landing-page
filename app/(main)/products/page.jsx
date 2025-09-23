import Products from "./components/Products";


const ProductPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
  );
  const data = await response.json();
  const products = data.data;
  
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default ProductPage;