import React, { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import * as THREE from "three";

const ARModal = ({ model, onClose }) => {
  const modalRef = useRef();
  const videoRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null); 
  const cameraRef = useRef(null); 
  const isCameraInitialized = useRef(false); 

  useEffect(() => {
    // Create scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    camera.position.z = 5; // Move the camera further back
    cameraRef.current = camera;
    sceneRef.current = scene;

    const loader = new GLTFLoader();

    // Create video element
    videoRef.current = document.createElement("video");
    videoRef.current.autoplay = true;
    videoRef.current.loop = true;
    videoRef.current.muted = true;

    const initCameraStream = async () => {
      if (isCameraInitialized.current) return; // Prevent re-initializing
      isCameraInitialized.current = true;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        videoRef.current.srcObject = stream;

        videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current.play(); // Start playing the video once metadata is loaded
        });
      } catch (error) {
        console.error("Error accessing the camera: ", error);
        onClose(); // Close modal if camera access fails
      }
    };

    initCameraStream(); 

    // Create renderer
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight); // Adjust renderer size
    modalRef.current.appendChild(rendererRef.current.domElement);

    // Load the 3D model
    loader.load(model, (gltf) => {
      scene.add(gltf.scene);
      gltf.scene.position.set(0, 0, -1);
    }, undefined, (error) => {
      console.error("Model loading error: ", error);
    });

    // Handle video texture
    let texture;
    videoRef.current.addEventListener('loadeddata', () => {
      texture = new THREE.VideoTexture(videoRef.current);
      scene.background = texture;
    });

    // Render loop
    const render = () => {
      requestAnimationFrame(render);
      rendererRef.current.render(scene, cameraRef.current);
    };

    render(); 

    return () => {
      // Cleanup on unmount
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
      onClose();
    };
  }, [model, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-lg">
        <button onClick={onClose} className="text-red-500 font-bold mb-2">Close</button>
        <div ref={modalRef} className="border rounded-lg overflow-hidden" />
      </div>
    </div>
  );
};

export default ARModal;