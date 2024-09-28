import React, { useEffect } from "react";

const ARView = ({ modelUrl, onClose }) => {
  useEffect(() => {
    console.log("AR Model Loaded:", modelUrl); // Debugging to ensure the AR model loads
  }, [modelUrl]);

  const handleFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
  };

  // Call fullscreen on component mount
  useEffect(() => {
    handleFullscreen();
  }, []);

  return (
    <div>
      <a-scene embedded arjs="sourceType: webcam; marker: hiro; markerarea: false;">
        <a-marker preset="hiro">
          <a-entity
            gltf-model={modelUrl}
            scale="1 1 1"
            position="0 0 0"
            rotation="0 0 0"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
      <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
        Close AR
      </button>
    </div>
  );
};

export default ARView;
