import React, { useState } from "react";
import FoodCard from "./components/FoodCard"; // Adjust path as necessary
import ARView from "./components/ARView"; // Adjust path as necessary
import { menu } from "./data/menuData"; // Ensure this path is correct

const App = () => {
  const [arModel, setArModel] = useState(null); // AR model URL state

  // Function to handle AR model selection
  const handleARModelSelect = (modelUrl) => {
    setArModel(modelUrl); // Set the selected AR model URL
  };

  // Close AR view
  const closeARView = () => {
    setArModel(null); // Clear AR model URL to close the view
  };

  return (
    <div>
      <h1>Food Menu</h1>
      <FoodCard 
        category="coffee" 
        onARModelSelect={handleARModelSelect} // Pass AR model handler
      />

      {/* Conditionally render AR view if a model is selected */}
      {arModel && <ARView modelUrl={arModel} onClose={closeARView} />}
    </div>
  );
};

export default App;
