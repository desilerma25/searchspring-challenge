import React from "react";
import "./App.css";
import { SearchProvider } from "./contexts/SearchContext";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <NavBar />
        <ProductGrid />
      </div>
    </SearchProvider>
  );
}

export default App;
