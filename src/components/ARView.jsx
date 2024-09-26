import React, { useEffect } from 'react';

const ARView = ({ modelUrl }) => {
  useEffect(() => {
    // Any setup needed can be done here
  }, [modelUrl]);

  return (
    <a-scene embedded arjs>
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
