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
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        backgroundColor: "transparent",
      }}
    >
      <a-scene
        embedded
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        style={{ width: "100%", height: "100%" }}
      >
        <a-entity
          gltf-model={modelUrl} // Use the 3D model URL passed via props
          scale="0.5 0.5 0.5" // Adjust scale based on the model size
          position="0 0 -2" // Position in front of the camera
        ></a-entity>

        {/* AR.js camera entity */}
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
        }}
      >
        Close AR
      </button>
    </div>
  );
};

export default ARView;
