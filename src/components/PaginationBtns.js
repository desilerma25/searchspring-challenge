import React from "react";
import { Button } from "@nextui-org/react";

import { fetchProductData } from "../services/productService";

import { useSearchContext } from "../contexts/SearchContext";

function PaginationBtns() {
  const { setProducts, setPaginationInfo, paginationInfo, searchValue } =
    useSearchContext();

  const { nextPage, previousPage, currentPage, totalPages, begin } =
    paginationInfo;

  const handleNextPagination = async () => {
    try {
      const nextSearchProducts = await fetchProductData(searchValue, nextPage);
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

  return (
    <div>
      <div className="flex justify-center gap-7 py-7">
        <Button
          onClick={handlePrevPagination}
          isDisabled={disablePrevButton()}
          className="bg-amber-300 shadow-lg text-xl text-amber-950"
          variant="solid"
          size="lg"
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPagination}
          className="bg-amber-300 shadow-lg text-xl text-amber-950"
          isDisabled={disableNextButton()}
          variant="solid"
          size="lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PaginationBtns;
