import React, { useEffect } from "react";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ARView = ({ modelUrl, onClose }) => {
  useEffect(() => {
    let scene, camera, renderer, controller;

    const initAR = async () => {
      // Set up the scene
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      document.body.appendChild(renderer.domElement);

      // Add AR button to start AR session
      document.body.appendChild(ARButton.createButton(renderer));

      // Set up the controller
      controller = renderer.xr.getController(0);
      scene.add(controller);

      // Load the model
      const loader = new GLTFLoader();
      loader.load(modelUrl, (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5); // Adjust model scale if necessary
        scene.add(model);
      }, undefined, (error) => {
        console.error('An error happened while loading the model:', error);
      });

      // Start the rendering loop
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    };

    initAR();

    // Cleanup function
    return () => {
      if (renderer) {
        renderer.dispose();
        document.body.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl]);

  return (
    <>
      <button onClick={onClose} style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10000 }}>
        Close AR
      </button>
    </>
  );
};

export default ARView;
