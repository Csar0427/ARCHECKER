import React, { useEffect } from 'react';

const ARFullscreenView = ({ modelUrl, onClose }) => {
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        console.log('Camera access granted');
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    requestCameraPermission();
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }}>
      <a-scene 
        embedded 
        arjs="sourceType: webcam; trackingMethod: best;" 
        style={{ width: '100%', height: '100%' }}
      >
        <a-marker preset="hiro">
          <a-entity 
            gltf-model={modelUrl} 
            scale="0.5 0.5 0.5" // Adjust the scale to make it smaller
            position="0 0 0" // Position it at the origin
            rotation="0 0 0" 
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
      <button 
        onClick={onClose} 
        style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1001, backgroundColor: 'red', color: 'white', border: 'none', padding: '10px' }}
      >
        Close
      </button>
    </div>
  );
};

export default ARFullscreenView;
