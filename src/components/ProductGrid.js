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
        const searchedProducts = await fetchProductData("summer", 1);
        setProducts(searchedProducts.results);
        setPaginationInfo(searchedProducts.pagination);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="mx-24">
      <PaginationBtns />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <PaginationBtns />
    </div>
  );
}

export default ProductGrid;
