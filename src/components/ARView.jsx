import React from 'react';

const ARView = ({ modelUrl }) => {
  return (
    <a-scene embedded arjs="sourceType: webcam; trackingMethod: best;">
      <a-entity 
        gltf-model={modelUrl} // Make sure this URL points to your .glb or .gltf file
        scale="1 1 1" // Adjust scale as necessary
        position="0 0 0" // Adjust position to your liking
        rotation="0 0 0" // Adjust rotation as needed
      ></a-entity>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARView;
