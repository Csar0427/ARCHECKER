import React from "react";
import { icons } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import { useContext } from "react";

const Basket = () => {
  const { basketItems } = useContext(BasketContext);
  const itemsCount = basketItems.length;

  return (
    <Link
      to="/basket"
      className="sticky place-self-end bottom-3 right-3 p-3 bg-[#ff8418] rounded-full border-2 border-white shadow-lg"
    >
      {itemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 text-center text-xs font-semibold text-[#ff8418] flex items-center justify-center border-2 border-[#ff8418] animate-pulse">
          {itemsCount}
        </span>
      )}
      <div className="text-white">{icons.basket}</div>
    </Link>
  );
};

export default Basket;
