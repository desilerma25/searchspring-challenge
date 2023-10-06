import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Search from "./Search";
import { useSearchContext } from "../contexts/SearchContext";

function NavBar() {
  const { handleSearch } = useSearchContext();

  return (
    <div>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <p className="hidden sm:block font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Search handleSearch={handleSearch} />
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default NavBar;
