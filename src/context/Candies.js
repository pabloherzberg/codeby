/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [selectedCandies, setSelectedCandies] = useState([]);
  const [candies, setCandies] = useState([]);
  return (
    <CartContext.Provider
      value={{ selectedCandies, setSelectedCandies, candies, setCandies }}
    >
      {children}
    </CartContext.Provider>
  );
}
