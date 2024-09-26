import React, { useEffect } from 'react';
import 'aframe'; // Import A-Frame

const ARView = ({ modelUrl }) => {
  useEffect(() => {
    // Any additional setup can go here
  }, [modelUrl]);

  return (
    <a-scene embedded>
      <a-assets>
        <a-asset-item id="model" src={modelUrl}></a-asset-item>
      </a-assets>
      <a-entity gltf-model="#model" scale="0.5 0.5 0.5" position="0 0 0"></a-entity>
      <a-camera></a-camera>
    </a-scene>
  );
};

export default ARView;
