import React from "react";
import { Input } from "@nextui-org/react";
import { useSearchContext } from "../contexts/SearchContext";
import { fetchProductData } from "../services/productService";
import { SearchIcon } from "../assets/SearchIcon";

function Search() {
  const { setSearchValue, searchValue, setProducts, setPaginationInfo } =
    useSearchContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchValue) {

      try {
        const searchedProducts = await fetchProductData(searchValue, 1);
        setProducts(searchedProducts.results);
        setPaginationInfo(searchedProducts.pagination);
      } catch (error) {}
    }
  };

  return (
    <form
    id="search-bar-container"
    className="relative"
    onSubmit={handleSubmit}
  >
      <Input
        classNames={{
          base: "h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Let's go shopping!"
        size="sm"
        endContent={
          <div onClick={(e) => handleSubmit(e)} className="cursor-pointer">
            <SearchIcon size={18} />
          </div>
        }
        type="search"
        aria-label="search bar"
        id="search-bar"
        value={searchValue}
      />
      </form>
  );
}

export default Search;
