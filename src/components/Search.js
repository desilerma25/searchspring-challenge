import React from "react";
import { Input } from "@nextui-org/react";
import { useSearchContext } from "../contexts/SearchContext";
import { fetchProductData } from "../services/productService";
import { SearchIcon } from "../assets/SearchIcon";

function Search() {
  const {
    setSearchValue,
    searchValue,
    setProducts,
    setPaginationInfo,
    setLoading,
  } = useSearchContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchValue) {
      try {
        setLoading(true);
        const searchedProducts = await fetchProductData(searchValue, 1);
        setLoading(false);
        setProducts(searchedProducts.results);
        setPaginationInfo(searchedProducts.pagination);
      } catch (error) {
        console.error("Error completing search:", error);
      }
    }
  };

  return (
    <form
      id="search-bar-container"
      className="relative p-5"
      onSubmit={handleSubmit}
    >
      <Input
        classNames={{
          base: "h-12",
          mainWrapper: "h-full",
          input: "text-large",
          inputWrapper: "h-full font-normal text-default-500",
        }}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Let's shop!"
        size="lg"
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
