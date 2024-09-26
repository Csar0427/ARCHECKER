import React from "react";
import Navbar from "../../components/Navbar";
import FoodCard from "../../components/FoodCard";
import Basket from "../../components/BasketButton";

const Burgers = () => {
  const category = "burgers";
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="text-center uppercase font-extrabold font-header text-2xl my-5 text-[#ff8418]">
        Burgers
      </h1>
      <FoodCard category={category} />
      <Basket />
    </div>
  );
};

export default Burgers;
