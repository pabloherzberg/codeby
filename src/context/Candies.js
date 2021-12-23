/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [selectedCandies, setSelectedCandies] = useState([]);
  const [candies, setCandies] = useState([]);
  const [minCount, setMinCount] = useState(1);
  return (
    <CartContext.Provider
      value={{
        selectedCandies,
        setSelectedCandies,
        candies,
        setCandies,
        minCount,
        setMinCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
