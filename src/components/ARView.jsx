import React, { useEffect } from "react";

const ARView = ({ modelUrl, onClose }) => {
  // Request camera permission and use the back camera
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } }, // Use back camera
        });
        console.log("Back camera access granted");
      } catch (err) {
        console.error("Error accessing back camera:", err);
      }
    };

    requestCameraPermission();
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1000 }}>
      {/* A-Frame AR scene with back camera feed */}
      <a-scene
        embedded
        arjs="sourceType: webcam; trackingMethod: best;" // AR.js using the webcam (back camera)
        style={{ width: "100%", height: "100%" }}
      >
        {/* 3D food model that will appear in AR */}
        <a-entity
          gltf-model={modelUrl} // 3D model URL (GLTF format)
          scale="0.5 0.5 0.5" // Adjust scale for the model
          position="0 0 -2" // Position it in front of the camera
        ></a-entity>

        {/* AR.js camera */}
        <a-entity camera></a-entity>
      </a-scene>

      {/* Close AR button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1001,
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px",
        }}
      >
        Close AR
      </button>
    </div>
  );
};

export default ARView;
