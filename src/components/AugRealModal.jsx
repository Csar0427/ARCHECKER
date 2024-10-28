import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AugRealModal = ({ modelPath, isOpen, onClose }) => {
  const modalRef = useRef();
  const [renderer, setRenderer] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const modelRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);

  const initScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const newRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    newRenderer.setSize(window.innerWidth, window.innerHeight);
    setRenderer(newRenderer);

    camera.position.set(0, 1, 3);
    camera.lookAt(0, 0, 0); 
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.05, 0.05, 0.05); // Increased scale for larger model
        model.position.set(0, -0.25, 0); 
        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        isOpen = false;
      }
    );

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    let video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    const initCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        video.srcObject = stream;
        setCameraStream(stream);

        video.addEventListener("loadedmetadata", () => {
          video.play();
        });

        video.addEventListener("loadeddata", () => {
          const texture = new THREE.VideoTexture(video);
          scene.background = texture;
        });
      } catch (error) {
        console.error("Error accessing the camera: ", error);
        alert("Camera access is required for AR mode.");
        onClose(); // Close modal if the camera fails
      }
    };

    initCameraStream();

    newRenderer.setAnimationLoop(() => {
      newRenderer.render(scene, camera);
    });

    modalRef.current.appendChild(newRenderer.domElement);
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
      if (!renderer) {
        initScene();
      }
      modalRef.current.addEventListener("touchstart", handleTouchStart);
      modalRef.current.addEventListener("touchmove", handleTouchMove);
    } else {
      if (renderer) {
        setTimeout(() => {
          renderer.dispose();
          setRenderer(null);
        }, 500); // Delay cleanup to ensure smooth closure
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
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50`}
    >
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
