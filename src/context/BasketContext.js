import React, { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(() => {
    const savedItems = localStorage.getItem("basketItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const addToBasket = (item) => {
    setBasketItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  return (
    <BasketContext.Provider
      value={{ basketItems, addToBasket, setBasketItems }}
    >
      {children}
    </BasketContext.Provider>
  );
};
