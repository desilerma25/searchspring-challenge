import { React } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@nextui-org/react";
import { fetchProductData } from "../services/productService";
import { useSearchContext } from "../contexts/SearchContext";

function ProductGrid() {
  const { setProducts, products, setPaginationInfo, paginationInfo, searchValue } = useSearchContext();

const { nextPage, previousPage, currentPage, totalPages, begin } =
paginationInfo;

  const handleNextPagination = async () => {
    try {
      const nextSearchProducts = await fetchProductData(
        searchValue,
        nextPage
      );
      setProducts(nextSearchProducts.results);
      setPaginationInfo(nextSearchProducts.pagination);
    } catch (error) {
      console.error("Error in handleNextPagination:", error);
    }
  };

  const handlePrevPagination = async () => {
    try {
      const prevSearchProducts = await fetchProductData(
        searchValue,
        previousPage
      );
      setProducts(prevSearchProducts.results);
      setPaginationInfo(prevSearchProducts.pagination);
    } catch (error) {
      console.error("Error in handleNextPagination:", error);
    }
  };

  const disableNextButton = () => {
    return currentPage === totalPages;
  };

  const disablePrevButton = () => {
    return currentPage === begin;
  };

  const productGridStyle = () => {
    if (products.length === 0 ) {
        return 'hidden'
    }
  }

  return (
    <div className={productGridStyle()}>
      <Button
        onClick={handlePrevPagination}
        isDisabled={disablePrevButton()}
        color="primary"
      >
        Previous
      </Button>
      <Button
        onClick={handleNextPagination}
        isDisabled={disableNextButton()}
        color="primary"
      >
        Next
      </Button>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button
        onClick={handlePrevPagination}
        isDisabled={disablePrevButton()}
        color="primary"
      >
        Previous
      </Button>
      <Button
        onClick={handleNextPagination}
        isDisabled={disableNextButton()}
        color="primary"
      >
        Next
      </Button>
    </div>
  );
}

export default ProductGrid;
