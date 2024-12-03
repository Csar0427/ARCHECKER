import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { icons } from "../assets/icons/icons";

const ArViewPage = () => {
  const refContainer = useRef(null);
  const loadedModel = useRef(null);
  const renderer = useRef(null);
  const videoElement = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { modelPath, name, description } = location.state || {};

  useEffect(() => {
    if (location.pathname === "/arView") {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.body.style.height = "100%";
    }

    return () => {
      if (location.pathname === "/arView") {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.documentElement.style.height = "";
        document.body.style.height = "";
      }
    };
  }, [location]);

  useEffect(() => {
    if (!modelPath) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    if (!renderer.current) {
      renderer.current = new THREE.WebGLRenderer({ antialias: true });
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      refContainer.current.appendChild(renderer.current.domElement);
    }

    videoElement.current = document.createElement("video");
    videoElement.current.setAttribute("autoplay", true);
    videoElement.current.setAttribute("playsinline", true);

    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: { exact: "environment" },
        },
      })
      .then((stream) => {
        const videoTexture = new THREE.VideoTexture(videoElement.current);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;

        scene.background = videoTexture;
        videoElement.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing camera:", err));

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    camera.position.z = 5;

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        if (loadedModel.current) {
          scene.remove(loadedModel.current);
        }
        loadedModel.current = gltf.scene;

        loadedModel.current.scale.set(3, 3, 3);
        scene.add(loadedModel.current);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const animate = () => {
      renderer.current.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (videoElement.current.srcObject) {
        videoElement.current.srcObject.getTracks().forEach((track) => track.stop());
      }
      scene.clear();
      if (renderer.current) renderer.current.dispose();
    };
  }, [modelPath]);

  return (
    <div className="relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 bg-[#ff8418] text-white p-3 rounded-xl"
      >
        {icons.back}
      </button>
      <div ref={refContainer} className="h-screen" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ArViewPage;
