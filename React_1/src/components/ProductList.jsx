import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "phone",
      price: "$1200",
    },

    {
      id: 2,
      name: "laptop",
      price: "$900",
    },

    {
      id: 3,
      name: "tablet",
      price: "$800",
    },
  ];

  return (
    <div>
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{name}</li>
          <li>{price}</li>
        </ul>
      ))}
    </div>
  );
};
export default ProductList;
