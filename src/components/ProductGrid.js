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

  const handleNextPagination = async () => {
    try {
      const nextSearchProducts = await fetchProductData(
        searchValue,
        nextPageNum
      );
      setProducts(nextSearchProducts.results);
      setPaginationInfo(nextSearchProducts.pagination);
      console.log("search term", searchValue);
      console.log("pg num", nextSearchProducts.pagination.currentPage);
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
      console.log("search term", searchValue);
      console.log("pg num", prevSearchProducts.pagination.currentPage);
    } catch (error) {
      console.error("Error in handleNextPagination:", error);
    }
  };

  return (
    <div>
      <Button onClick={handlePrevPagination}>Prev</Button>{" "}
      <Button onClick={handleNextPagination}>Next</Button>
      {/* <Pagination total={10} initialPage={1} /> */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <Pagination total={10} initialPage={1} /> */}
      <Button onClick={handlePrevPagination}>Prev</Button>{" "}
      <Button onClick={handleNextPagination}>Next</Button>
    </div>
  );
}

export default ProductGrid;
