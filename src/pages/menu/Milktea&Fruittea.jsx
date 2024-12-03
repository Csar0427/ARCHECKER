import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import FoodCard from "../../components/FoodCard";
import Basket from "../../components/BasketButton";
import { toast, Toaster } from "sonner";

const Burgers = () => {
  const category = "milktea & fruittea";

  useEffect(() => {
    const toastMessage = sessionStorage.getItem("toastMessage");

    if (toastMessage) {
      toast.success(toastMessage, {
        duration: 2000,
      });

      sessionStorage.removeItem("toastMessage");
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mb-14">
      <Navbar />
      <h1 className="text-center uppercase font-extrabold font-header text-2xl my-5 text-[#ff8418]">
        Milktea & Fruit Tea
      </h1>
      <FoodCard category={category} />
      <Basket />
      <Toaster richColors position="bottom-center" />
    </div>
  );
};

export default Burgers;
