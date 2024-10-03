import React from "react";
import { Link } from "react-router-dom";
import { menu } from "../data/menuData"; // Correct import from menuData.js
import { icons } from "../assets/icons/icons"; // Import your icons
import ARView from "./ARView"; // Import the AR view

const FoodCard = (props) => {
  const [arModel, setArModel] = React.useState(null); // State to store AR model URL

  const handleARClick = (modelUrl) => {
    setArModel(modelUrl); // Set the selected model URL for AR
  };

  const closeARView = () => {
    setArModel(null); // Close AR view
  };

  return (
    <div className="px-2">
      {menu[props.category].map((item, index) => (
        <div
          className="bg-white rounded-xl shadow-lg shadow-black/30 mb-6"
          key={index}
        >
          <div className="relative">
            <img className="w-full" src={item.image} alt="menu-image" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
            <h3 className="absolute bottom-0 left-0 p-2">
              <span className="text-[#ff8418] font-bold text-xl mr-2.5">
                {item.sizes ? (
                  <>
                    &#8369;{item.price.slice}
                    {item.price.small}
                  </>
                ) : (
                  <>&#8369;{item.price}</>
                )}
              </span>
              <span className="text-xl font-bold font-header text-white">
                {item.name}
              </span>
            </h3>
          </div>

          <div className="px-2 py-3">
            <p className="text-sm text-pretty">{item.description}</p>
            <div className="flex justify-between mt-3">
              <button
                className="bg-[#ff8418] font-bold text-xl rounded-full px-1.5"
                onClick={() => handleARClick("/models/coffee.glb")} // Set the model URL
              >
                {icons.ar}
              </button>

              <button className="bg-[#ff8418] font-bold text-xl rounded-full px-1.5">
                <Link
                  to={{
                    pathname: "/item-detail",
                  }}
                  state={{
                    image: item.image,
                    price: item.price,
                    name: item.name,
                    sizes: item.sizes,
                    category: props.category,
                  }}
                >
                  {icons.plus}
                </Link>
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
