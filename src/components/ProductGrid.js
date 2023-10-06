import { React } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
