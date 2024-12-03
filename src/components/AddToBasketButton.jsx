import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";

const AddToBasketButton = ({ selectedItem }) => {
  const navigate = useNavigate();
  const { addToBasket } = useContext(BasketContext);

  const handleAddToBasket = () => {
    const itemWithUniqueId = {
      ...selectedItem,
      id: Date.now() + Math.random().toString(36).substring(2, 15),
    };

    addToBasket(itemWithUniqueId);

    sessionStorage.setItem("toastMessage", "Item added to basket!");

    navigate(-1);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center py-3 px-5 border-t rounded-xl max-w-[630px] m-auto">
      <button
        className="bg-[#ff8428] w-full text-lg font-bold text-white px-6 py-2 rounded-xl"
        onClick={handleAddToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default AddToBasketButton;
