import React, { useEffect } from 'react';

const ARView = ({ modelUrl }) => {
  useEffect(() => {
    console.log('AR Model Loaded:', modelUrl); // Debugging to ensure the AR model loads
  }, [modelUrl]);

  return (
    <a-scene embedded arjs>
      {/* Display the AR marker and model */}
      <a-marker preset="hiro">
        <a-entity
          gltf-model={modelUrl} // Use gltf-model for both .gltf and .glb files
          scale="1 1 1" // Adjust scale as needed
          position="0 0.5 0" // Adjust position
          rotation="0 0 0" // Adjust rotation
        ></a-entity>
      </a-marker>
      {/* Camera entity to view the AR */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARView;
