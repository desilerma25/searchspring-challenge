import "./App.css";

import { NextUIProvider } from "@nextui-org/react";
import Search from "./components/Search";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <Search />
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
