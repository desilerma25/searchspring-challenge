import { React, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import ProductGrid from "./ProductGrid";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);

  const baseURL = "http://api.searchspring.net/api/search/search.json";

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
      console.log("Success", productResult.results);
      setProducts(productResult.results);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchValue, 1);
  };

  return (
    <div className="flex items-center justify-center">
      <form
        id="search-bar-container"
        className="relative"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Let's go shopping!"
          aria-label="search bar"
          id="search-bar"
          value={searchValue}
          className="input"
        />
        <Button
          type="submit"
          id="search-btn"
          className="btn-icon absolute right-0 top-0 h-full"
          startContent={
            <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        ></Button>
      </form>
      <ProductGrid products={products} />
    </div>
  );
}

export default Search;
