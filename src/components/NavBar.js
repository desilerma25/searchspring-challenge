import React from "react";
import Search from "./Search";
import { useSearchContext } from "../contexts/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { handleSearch } = useSearchContext();

  return (
    <div className="flex justify-between bg-gray-300 p-9 bg-opacity-50 shadow-lg">
      <div className="">
        <p className="hidden sm:block font-bold text-inherit text-5xl">
          <FontAwesomeIcon icon={faStore} className="px-2" />
          RetailTherapy
        </p>
      </div>
      <div className="">
        <Search handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default NavBar;
