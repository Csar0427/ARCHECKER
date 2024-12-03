import React, { useState } from "react";
import { icons } from "../assets/icons/icons";
import { useNavigate, useLocation } from "react-router-dom";
import AddToBasketButton from "../components/AddToBasketButton";
import { motion } from "framer-motion";

const ItemDetailPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [selectedSize, setSelectedSize] = useState("slice");
  const [selectedDrinkSize, setselectedDrinkSize] = useState("Regular");

  const { image, price, name, sizes, category } = location.state || {};
  let itemPrice = price;

  const basePrice =
    sizes && category === "milktea & fruittea"
      ? parseFloat(price[selectedDrinkSize])
      : sizes && category === "cakes"
      ? parseFloat(price[selectedSize])
      : parseFloat(price);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value.toLowerCase());
  };

  const handleSizeDrinkChange = (e) => {
    setselectedDrinkSize(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const totalPrice = (basePrice * quantity).toFixed(2);

  const selectedItem = {
    name,
    image,
    quantity,
    note: note,
    price: totalPrice,
    ...(category === "milktea & fruittea"
      ? { size: selectedDrinkSize }
      : category === "cakes"
      ? { size: selectedSize }
      : {}),
    category,
    sizes,
    itemPrice,
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center max-w-[850px] mx-auto p-6 space-y-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative w-full">
        <button
          className="absolute top-4 left-4 text-2xl text-gray-800 p-2 bg-white rounded-full shadow-md transform transition-all hover:scale-110"
          onClick={handleGoBack}
        >
          {icons.cross}
        </button>
        <img
          className="w-full h-80 object-cover rounded-lg shadow-xl"
          src={image}
          alt="food-image"
        />
      </div>

      <div className="w-full flex justify-between items-center text-xl font-semibold my-4 px-4">
        <h1 className="text-2xl text-gray-800">{name}</h1>
        <h1 className="text-[#ff8418] text-2xl font-bold">
          &#8369;{totalPrice}
        </h1>
      </div>

      {sizes && category === "milktea & fruittea" && (
        <div className="w-full flex flex-col gap-4 px-4">
          <h2 className="font-semibold text-base text-gray-800">
            Select Drink Size
            <span className="font-normal text-xs text-gray-500 ml-2">
              Pick 1
            </span>
          </h2>
          {sizes.map((size) => (
            <label
              key={size}
              className="flex items-center gap-2 py-2 border-b border-gray-300 cursor-pointer transform transition-all hover:scale-105"
            >
              <input
                type="radio"
                value={size}
                checked={selectedDrinkSize === size}
                onChange={handleSizeDrinkChange}
                className="text-[#ff8418] transform transition-all hover:scale-110"
              />
              <span className="text-base font-medium text-gray-800">
                {size}
              </span>
            </label>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 w-full px-4">
        <h2 className="font-semibold text-lg text-gray-800">
          Note to restaurant
          <span className="text-sm text-gray-500 ml-2">Optional</span>
        </h2>
        <textarea
          className="border-2 border-gray-300 p-4 text-sm text-gray-600 resize-none rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff8418] focus:border-transparent transition-all"
          value={note}
          onChange={handleNoteChange}
          placeholder="Add your note here..."
        ></textarea>
      </div>

      <div className="flex items-center justify-center gap-5 mt-6 mb-10 px-4 pb-28">
        <button
          className="border-2 border-gray-300 p-3 rounded-full shadow-md hover:bg-gray-100 transform transition-all hover:scale-105"
          onClick={handleMinusQuantity}
        >
          {icons.minusButton}
        </button>
        <h1 className="text-2xl font-semibold">{quantity}</h1>
        <button
          className="border-2 border-gray-300 p-3 rounded-full shadow-md hover:bg-gray-100 transform transition-all hover:scale-105"
          onClick={handleAddQuantity}
        >
          {icons.plusButton}
        </button>
      </div>

      <AddToBasketButton selectedItem={selectedItem} />
    </motion.div>
  );
};

export default ItemDetailPage;
