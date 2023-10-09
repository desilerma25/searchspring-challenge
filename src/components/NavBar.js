import React from "react";
import Search from "./Search";
import { useSearchContext } from "../contexts/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { handleSearch } = useSearchContext();

  return (
    <div className="flex justify-between bg-gray-300 p-3 bg-opacity-50 shadow-lg">
      <div className="relative p-5">
        <p className="font-bold text-inherit text-5xl">
          <FontAwesomeIcon icon={faStore} className="px-2" />
          <div className="hidden sm:inline">
          RetailTherapy
            
          </div>
        </p>
      </div>
      <div className="">
        <Search handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default NavBar;
