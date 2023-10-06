import { React, useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { fetchData } from "../services/productService";
import { SearchIcon } from "../assets/SearchIcon";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchValue, 1);
  };
  return (
    <div className="fixed inset-x-0 inset-y-0 flex items-center justify-center">
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
    </div>
  );
}

export default Search;
