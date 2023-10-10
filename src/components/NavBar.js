import React from "react";
import Search from "./Search";
import { useSearchContext } from "../contexts/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { handleSearch } = useSearchContext();

  return (
    <div className="flex justify-between bg-gray-300 p-3 bg-opacity-40 shadow-lg">
      <div className="relative pt-5">
        <p
          className="font-bold text-5xl lg:text-3xl xl:text-5xl text-amber-300 text-shadow-black cursor-pointer"
          onClick={() => {
            document.location.reload();
          }}
        >
          <FontAwesomeIcon icon={faStore} className="px-2" />
          <h1 className="hidden sm:inline">RetailTherapy</h1>
        </p>
      </div>
      <p className="italic text-center text-lg pt-7 hidden xl:text-2xl lg:text-lg lg:inline text-orange-800 text-shadow-white">
        Fall is officially here! Shop our fall favorites now!
      </p>
      <div>
        <Search handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default NavBar;
