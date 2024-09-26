import React from 'react';
import 'aframe';
import 'aframe-ar';

const ARView = ({ modelUrl }) => {
  return (
    <div>
      <a-scene embedded arjs>
        <a-marker preset="hiro">
          <a-entity gltf-model={modelUrl} scale="0.1 0.1 0.1"></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARView;
