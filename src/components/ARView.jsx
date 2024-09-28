import React, { useEffect } from "react";

const ARView = ({ modelUrl, onClose }) => {
  useEffect(() => {
    // Request back camera access
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } }, // Use the back camera
        });
        console.log("Back camera access granted");
      } catch (err) {
        console.error("Error accessing back camera:", err);
      }
    };

    requestCameraPermission();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999, // Ensure the AR scene is on top of everything else
        backgroundColor: "black", // Optional: add a background to prevent overlap issues
      }}
    >
      {/* A-Frame AR scene */}
      <a-scene
        embedded
        arjs="sourceType: webcam; trackingMethod: best;" // AR.js settings for back camera
        style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 9999 }}
      >
        <a-entity
          gltf-model={modelUrl} // 3D food model URL
          scale="0.5 0.5 0.5"
          position="0 0 -2"
        ></a-entity>
        <a-entity camera></a-entity>
      </a-scene>

      {/* Close AR button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 10000, // Make sure the button is on top of the AR view
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
