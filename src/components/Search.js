import { React, useState } from "react";
import { Input, Button, pagination } from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import ProductGrid from "./ProductGrid";
import { fetchProductData } from "../services/productService";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchedProducts = await fetchProductData(searchValue, 1);
      setProducts(searchedProducts.results);
      setPaginationInfo(searchedProducts.pagination)
      console.log("in handlesubmit - products", searchedProducts.results);
      console.log("in handlesubmit - pag", searchedProducts.pagination);
    } catch (error) {}
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
      <ProductGrid
        products={products}
        setProducts={setProducts}
        searchValue={searchValue}
        paginationInfo={paginationInfo}
        setPaginationInfo={setPaginationInfo}
      />
    </div>
  );
}

export default Search;
