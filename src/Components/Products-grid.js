import React from "react";
import "../Styles/product-grid.css";
import Product from "./Product";
import { products } from "../utils/card-data";

const ProductGrid = () => {
  return (
    <div className="grid">
      {products.map((data) => (
        <Product key={data.id} product={data} />
      ))}
    </div>
  );
};

export default ProductGrid;
