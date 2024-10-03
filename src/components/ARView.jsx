import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ARView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const modelUrl = searchParams.get("modelUrl");

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
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
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        style={{ width: "100%", height: "100%" }}
      >
        <a-entity
          gltf-model={modelUrl}
          scale="0.5 0.5 0.5"
          position="0 0 -2"
        ></a-entity>
        <a-entity camera></a-entity>
      </a-scene>

      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
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
