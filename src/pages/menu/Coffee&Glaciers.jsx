import React from "react";
import Navbar from "../../components/Navbar";
import FoodCard from "../../components/FoodCard";
import BasketButton from "../../components/BasketButton";

const Desserts = () => {
  const category = "coffee & glaciers";
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="text-center uppercase font-extrabold font-header text-2xl my-5 text-[#ff8418]">
        Coffee & Glaciers
      </h1>
      <FoodCard category={category} />
      <BasketButton />
    </div>
  );
};

export default Desserts;
