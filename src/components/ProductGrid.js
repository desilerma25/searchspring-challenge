import { React, useEffect } from "react";
import ProductCard from "./ProductCard";
import PaginationBtns from "./PaginationBtns";
import { fetchProductData } from "../services/productService";
import { useSearchContext } from "../contexts/SearchContext";

function ProductGrid() {
  const { products, setPaginationInfo, setProducts } = useSearchContext();

  useEffect(() => {
    (async () => {
      try {
        const searchedProducts = await fetchProductData("fall", 1);
        setProducts(searchedProducts.results);
        setPaginationInfo(searchedProducts.pagination);
      } catch (error) {
        console.error("Error displaying fall items:", error);
      }
    })();
  }, []);

  return (
    <div className="mx-12">
      <PaginationBtns />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <PaginationBtns />
    </div>
  );
}

export default ProductGrid;
