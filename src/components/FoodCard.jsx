import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData"; // Make sure this path is correct
import { icons } from "../assets/icons/icons"; // Ensure this path is correct
import ARView from "./ARView"; // Import the AR component

const FoodCard = () => {
  const [arModel, setArModel] = useState(null);

  // Handle AR model click to display AR View
  const handleARClick = (modelUrl) => {
    setArModel(modelUrl);
  };

  // Close AR view
  const closeARView = () => {
    setArModel(null);
  };

  return (
    <div className="px-2">
      {menuData.coffee.map((item, index) => (
        <div className="bg-white rounded-xl shadow-lg mb-6" key={index}>
          <div className="relative">
            <img className="w-full" src={item.image} alt="menu-item" />
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
              {/* AR Button */}
              <button
                className="bg-[#ff8418] font-bold text-xl rounded-full px-1.5"
                onClick={() => handleARClick(item.arModel)} // Pass AR model URL
              >
                {icons.ar}
              </button>
              <button className="bg-[#ff8418] font-bold text-xl rounded-full px-1.5">
                <Link to={{ pathname: "/item-detail", state: item }}>
                  {icons.plus}
                </Link>
              </button>
            </div>
            <div className="mt-2">
              <span className="font-bold">AR Model:</span>{" "}
              {item.arModel ? item.arModel.split("/").pop() : "N/A"}
            </div>
          </div>
        </div>
      ))}

      {/* Conditionally render the AR view */}
      {arModel && (
        <div>
          <ARView modelUrl={arModel} />
          <button onClick={closeARView} className="bg-red-500 text-white p-2 rounded">
            Close AR
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
