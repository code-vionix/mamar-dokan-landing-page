const calculatedDiscount = (price, salePrice) => {
  if (!salePrice) return 0;
  const discount = Math.round(((price - salePrice) / price) * 100);
  return discount;
};

export default calculatedDiscount;
