import React, { useEffect } from 'react';
import 'aframe';

const ARView = ({ modelUrl }) => {
  useEffect(() => {
    // Additional setup or effects if needed
  }, [modelUrl]);

  return (
    <a-scene embedded>
      <a-marker preset="hiro">
        <a-entity
          gltf-model={modelUrl}
          scale="0.5 0.5 0.5"
          position="0 0 0"
          rotation="0 0 0"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARView;
