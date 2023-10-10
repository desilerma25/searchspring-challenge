import React from "react";
import "./App.css";
import { SearchProvider } from "./contexts/SearchContext";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <div className="bg-image min-h-screen font-SuperDream">
      <SearchProvider>
        <NavBar />
        <ProductGrid />
      </SearchProvider>
    </div>
  );
}

export default App;
