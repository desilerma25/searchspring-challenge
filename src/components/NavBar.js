import React from "react";
import Search from "./Search";
import { useSearchContext } from "../contexts/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { handleSearch } = useSearchContext();

  return (
    <div className="flex justify-between bg-gray-300 p-3 bg-opacity-50 shadow-lg">
      <div className="relative pt-5">
        <p className="font-bold text-5xl lg:text-3xl xl:text-5xl">
          <FontAwesomeIcon icon={faStore} className="px-2" />
          <h1 className="hidden sm:inline">RetailTherapy</h1>
        </p>
      </div>
      <p className="italic text-center text-lg pt-7 hidden xl:text-large lg:text-medium lg:inline">
        Fall is officially here! Shop our fall favorites now!
      </p>
      <div>
        <Search handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default NavBar;
