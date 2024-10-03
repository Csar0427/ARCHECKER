import React from "react";
import ARView from "./ARView";

const TestARView = () => {
  const modelUrl = "/model/cake.glb"; // Change this to a valid model path

  return (
    <div>
      <ARView modelUrl={modelUrl} onClose={() => {}} />
    </div>
  );
};

export default TestARView;

