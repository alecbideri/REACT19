import React from "react";

const ProductInfo = () => {
  const name = "laptop";
  const price = "$1200";
  const availability = "In stock";
  return (
    <div>
      {name}
      {price}
      {availability}
    </div>
  );
};
export default ProductInfo;
