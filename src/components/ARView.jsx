import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ARView = ({ modelUrl, onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, model;

    const init = async () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      camera.position.set(0, 1, 3);
      controls.enableDamping = true;

      // Set up the camera for AR
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      const videoTexture = new THREE.VideoTexture(stream);
      const planeGeometry = new THREE.PlaneGeometry(16, 9);
      const planeMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);

      // Load 3D model
      const loader = new GLTFLoader();
      loader.load(modelUrl, (gltf) => {
        model = gltf.scene;
        model.position.set(0, 0, -2); // Position in front of the camera
        model.scale.set(0.5, 0.5, 0.5); // Adjust scale based on the model size
        scene.add(model);
      });

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    };

    init();

    return () => {
      // Cleanup on component unmount
      if (renderer) {
        renderer.dispose();
      }
      if (model) {
        model.traverse((child) => {
          if (child.isMesh) child.geometry.dispose();
        });
      }
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
    >
      <canvas ref={canvasRef} />
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
