import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ARModal = ({ model, onClose }) => {
  const arContainerRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null); // To store the camera stream

  useEffect(() => {
    const startCamera = async () => {
      try {
        streamRef.current = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        videoRef.current.srcObject = streamRef.current;

        // Play the video when metadata is loaded
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play().catch((error) => {
            console.error("Error playing video: ", error);
          });
        };
      } catch (error) {
        console.error("Error accessing camera: ", error);
      }
    };

    const loadARModel = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      arContainerRef.current.appendChild(renderer.domElement);

      const loader = new GLTFLoader();
      loader.load(model, (gltf) => {
        const object = gltf.scene;
        object.position.set(0, 0, -5); // Adjust position relative to camera
        scene.add(object);
      });

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    };

    startCamera();
    loadARModel();

    // Cleanup function to stop the camera
    return () => {
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [model]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <video ref={videoRef} className="absolute w-full h-full object-cover" autoPlay playsInline />
        <div ref={arContainerRef} className="absolute w-full h-full" />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ARModal;
