import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AugRealModal = ({ modelPath, isOpen, onClose }) => {
  const modalRef = useRef();
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const sceneRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const [cameraStream, setCameraStream] = useState(null);

  const initScene = () => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 3);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    modalRef.current.appendChild(renderer.domElement);

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.01, 0.01, 0.01);
        model.position.set(0, -0.25, 0);
        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // Lighting setup
    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Background video texture
    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    const initCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
        setCameraStream(stream);
        video.addEventListener("loadeddata", () => {
          const texture = new THREE.VideoTexture(video);
          scene.background = texture;
        });
      } catch (error) {
        console.error("Error accessing the camera:", error);
        alert("Camera access is required for AR mode.");
        onClose();
      }
    };

    initCameraStream();

    // Animation loop
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (modelRef.current) {
      const deltaX = e.touches[0].clientX - startX.current;
      const deltaY = e.touches[0].clientY - startY.current;
      modelRef.current.rotation.y += deltaX * 0.01;
      modelRef.current.rotation.x += deltaY * 0.01;
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (!rendererRef.current) {
        initScene();
      }
      modalRef.current.addEventListener("touchstart", handleTouchStart);
      modalRef.current.addEventListener("touchmove", handleTouchMove);
    } else {
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
        setCameraStream(null);
      }
      modalRef.current.removeEventListener("touchstart", handleTouchStart);
      modalRef.current.removeEventListener("touchmove", handleTouchMove);
    }
  }, [isOpen]);

  return (
    <div className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50`}>
      <div ref={modalRef} className="w-full h-full"></div>
      <button
        onClick={onClose}
        className="absolute top-2.5 right-2.5 px-4 py-3 rounded-md bg-[#161616] text-white border-none cursor-pointer"
      >
        Close
      </button>
    </div>
  );
};

export default AugRealModal;
