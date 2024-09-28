import React, { useEffect } from 'react';

const ARView = ({ modelUrl }) => {
  useEffect(() => {
    console.log('AR Model Loaded:', modelUrl); // Debugging purpose
  }, [modelUrl]);

  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity
          gltf-model={modelUrl}
          scale="1 1 1" // Adjust scale
          position="0 0.5 0" // Adjust position
          rotation="0 0 0"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARView;