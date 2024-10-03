import React, { useState } from "react";
import { menu } from "../data/menuData"; // Correct import from the updated menuData.js
import { icons } from "../assets/icons/icons"; // Assuming you have an icons file
import ARView from "./ARView"; // Import ARView component

const FoodCard = () => {
  const [arModel, setArModel] = useState(null); // State to store AR model URL

  const handleARClick = (modelUrl) => {
    setArModel(modelUrl); // Set the selected model URL for AR
  };

  const closeARView = () => {
    setArModel(null); // Close AR view
  };

  return (
    <div className="px-2">
      {menu.coffee.map((item, index) => (
        <div className="bg-white rounded-xl shadow-lg mb-6" key={index}>
          <div className="relative">
            <img className="w-full" src={item.image} alt={item.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
            <h3 className="absolute bottom-0 left-0 p-2">
              <span className="text-[#ff8418] font-bold text-xl mr-2.5">
                &#8369;{item.price}
              </span>
              <span className="text-xl font-bold text-white">{item.name}</span>
            </h3>
          </div>
          <div className="px-2 py-3">
            <p className="text-sm text-pretty">{item.description}</p>
            <div className="flex justify-between mt-3">
              <button
                className="bg-[#ff8418] font-bold text-xl rounded-full px-1.5"
                onClick={() => handleARClick(item.arModel)} // Pass AR model URL
              >
                {icons.ar} View in AR
              </button>
              <button className="bg-[#ff8418] font-bold text-xl rounded-full px-1.5">
                {icons.plus} Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Conditionally render the AR view */}
      {arModel && <ARView modelUrl={arModel} onClose={closeARView} />}
    </div>
  );
};

export default FoodCard;
