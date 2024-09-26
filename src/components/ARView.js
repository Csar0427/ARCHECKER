import React, { useEffect } from 'react';
import 'aframe';

const ARView = ({ modelUrl }) => {
  useEffect(() => {
    const modelEl = document.querySelector('#ar-model');
    if (modelEl) {
      modelEl.setAttribute('gltf-model', modelUrl);
    }
  }, [modelUrl]);

  return (
    <a-scene embedded>
      <a-entity id="ar-model" scale="0.5 0.5 0.5" position="0 0 0"></a-entity>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARView;
