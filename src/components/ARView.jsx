import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Importing Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Importing GLTFLoader

const ARView = ({ modelUrl, onClose }) => {
  const sceneRef = useRef(null); // Reference for the Three.js scene

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create a basic scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Create a light
    const light = new THREE.AmbientLight(0xffffff); // Soft white light
    scene.add(light);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        scene.add(gltf.scene);
        renderer.render(scene, camera);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, [modelUrl]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
      ref={sceneRef} // Attach the ref here
    >
      {/* Close button to exit AR view */}
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
