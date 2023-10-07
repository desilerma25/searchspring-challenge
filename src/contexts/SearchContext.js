import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, products, setProducts, paginationInfo, setPaginationInfo }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};


