import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import BasketButton from "../../components/BasketButton";
import FoodCard from "../../components/FoodCard";
import { toast, Toaster } from "sonner";

const MainCourse = () => {
  const category = "cakes & desserts";

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
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-center uppercase font-extrabold font-header text-2xl my-5 text-[#ff8418]">
        Cakes & Desserts
      </h1>
      <FoodCard category={category} />
      <BasketButton />
      <Toaster richColors position="bottom-center" />
    </div>
  );
};

export default MainCourse;
