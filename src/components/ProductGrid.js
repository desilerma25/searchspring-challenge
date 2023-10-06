import { React, useState } from "react";
import ProductCard from "./ProductCard";
import { Button, Pagination } from "@nextui-org/react";
import { fetchProductData } from "../services/productService";

function ProductGrid({
  products,
  setProducts,
  searchValue,
  paginationInfo,
  setPaginationInfo,
}) {
  let nextPageNum = paginationInfo.nextPage;
  let prevPageNum = paginationInfo.previousPage;
  let currentPageNum = paginationInfo.currentPage;
  let totalResultPages = paginationInfo.totalPages;
  let beginningPage = paginationInfo.begin;

  const handleNextPagination = async () => {
    try {
      const nextSearchProducts = await fetchProductData(
        searchValue,
        nextPageNum
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
        prevPageNum
      );
      setProducts(prevSearchProducts.results);
      setPaginationInfo(prevSearchProducts.pagination);
    } catch (error) {
      console.error("Error in handleNextPagination:", error);
    }
  };

  const disableNextButton = () => {
    return currentPageNum === totalResultPages;
  };

  const disablePrevButton = () => {
    return currentPageNum === beginningPage;
  };

  return (
    <div>
      <Button
        onClick={handlePrevPagination}
        isDisabled={disablePrevButton()}
        color="primary"
      >
        Prev
      </Button>{" "}
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
        disabled={disablePrevButton()}
        isDisabled
        color="primary"
      >
        Prev
      </Button>{" "}
      <Button
        onClick={handleNextPagination}
        disabled={disableNextButton()}
        isDisabled
        color="primary"
      >
        Next
      </Button>
    </div>
  );
}

export default ProductGrid;
