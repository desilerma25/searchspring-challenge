import { React, useState } from "react";
import ProductCard from "./ProductCard";
import { Button, Pagination } from "@nextui-org/react";

function ProductGrid({ products,setProducts,searchValue}) {
    const baseURL = "http://api.searchspring.net/api/search/search.json";
    const [pagination, setPagination] = useState({});
    const [page, setPage] = useState(2);

    async function fetchData(searchQuery, pageNum) {
      try {
        const response = await fetch(
          baseURL +
            "?" +
            new URLSearchParams({
              page: pageNum,
              q: searchQuery,
              resultsFormat: "native",
              siteId: "scmq7n",
            })
        );
        const productResult = await response.json();
        console.log("Success", productResult.pagination);
        setPagination(productResult.pagination);
        setPage(productResult.pagination.nextPage)
        setProducts(productResult.results);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
      }
    }

    const handleNextPagination = () => {
        console.log("NEXT")
        fetchData(searchValue, page)
        console.log('pag', page)
    }
    const handlePrevPagination = () => {
        console.log("PREV")
        fetchData(searchValue, page)
    }
    
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
