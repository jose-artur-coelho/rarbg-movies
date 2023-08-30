"use client";
import { createContext, useState } from "react";
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addMovie = (movie) => {
    setCart((prevState) => [...prevState, movie]);
  };
  const removeMovie = (title) => {
    setCart((prevState) => prevState.filter((t) => t.title !== title));
  };

  return (
    <CartContext.Provider value={{ cart, addMovie, removeMovie }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
}
