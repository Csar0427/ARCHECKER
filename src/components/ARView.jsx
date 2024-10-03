import React, { useEffect } from "react";

const ARView = ({ modelUrl, onClose }) => {
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        // Request access to the back camera
        await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } },
        });
        console.log("Camera access granted");
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    requestCameraPermission();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px", // Position the mini window slightly away from the edges
        right: "20px",
        width: "300px", // Set a fixed width for the mini window
        height: "400px", // Set a fixed height for the mini window
        zIndex: 9999,
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent background
        borderRadius: "10px",
        overflow: "hidden", // Hide overflow
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        style={{ width: "100%", height: "100%" }}
      >
        <a-entity
          gltf-model={modelUrl} // Use the modelUrl passed via props
          scale="0.5 0.5 0.5" // Adjust scale based on the model size
          position="0 0 -2" // Position in front of the camera
        ></a-entity>
        <a-entity camera></a-entity>
      </a-scene>

      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 10000,
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Close AR
      </button>
    </div>
  );
};

export default ARView;
