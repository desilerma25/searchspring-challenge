import { React } from "react";
import ProductCard from "./ProductCard";
import PaginationBtns from "./PaginationBtns";

import { useSearchContext } from "../contexts/SearchContext";

function ProductGrid() {
  const { products } = useSearchContext();

  const productGridStyle = () => {
    if (products.length === 0) {
      return "hidden";
    }
  };

  return (
    <div className={productGridStyle()}>
      <div className="mx-24">
        <PaginationBtns />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationBtns />
      </div>
    </div>
  );
}

export default ProductGrid;
