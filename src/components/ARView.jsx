import React, { useEffect, useRef } from 'react';
import 'aframe'; // Import A-Frame or the AR library you're using

const ARView = ({ modelUrl }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Initialize AR logic or update the scene with the new model
    if (sceneRef.current) {
      const modelEl = sceneRef.current.querySelector('[gltf-model]');
      if (modelEl) {
        modelEl.setAttribute('gltf-model', modelUrl);
      }
    }
  }, [modelUrl]);

  return (
    <div>
      <a-scene embedded>
        <a-entity gltf-model={modelUrl}></a-entity>
      </a-scene>
    </div>
  );
};

export default ARView;
