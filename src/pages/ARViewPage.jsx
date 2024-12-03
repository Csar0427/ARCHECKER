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
        const videoTrack = stream.getVideoTracks()[0];
        console.log("Using camera:", videoTrack.label);

        videoElement.current.srcObject = stream;

        const videoTexture = new THREE.VideoTexture(videoElement.current);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;

        scene.background = videoTexture;
      })
      .catch((err) => {
        if (err.name === "OverconstrainedError") {
          console.warn(
            "Rear camera not available, falling back to front camera."
          );
          return navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "user",
            },
          });
        } else {
          console.error("Error accessing camera:", err);
          throw err;
        }
      })
      .then((stream) => {
        if (!stream) return;

        const videoTrack = stream.getVideoTracks()[0];
        console.log("Using fallback camera:", videoTrack.label);

        videoElement.current.srcObject = stream;

        const videoTexture = new THREE.VideoTexture(videoElement.current);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;

        scene.background = videoTexture;
      })
      .catch((err) => {
        console.error("Error accessing fallback camera:", err);
      });

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
    directionalLight.position.set(5, 15, 10).normalize();
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff0000, 2, 200);
    pointLight.position.set(10, 20, 10);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0x00ff00, 1);
    spotLight.position.set(0, 5, 0);
    spotLight.target.position.set(0, 0, 0);
    spotLight.angle = Math.PI / 8;
    scene.add(spotLight);
    scene.add(spotLight.target);

    camera.position.z = 5;

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        if (loadedModel.current) {
          scene.remove(loadedModel.current);
        }
        loadedModel.current = gltf.scene;

        loadedModel.current.traverse((child) => {
          if (child.isMesh) {
            child.material.side = THREE.DoubleSide;
          }
        });

        loadedModel.current.scale.set(3, 3, 3);
        loadedModel.current.position.set(0, 0, 0);
        loadedModel.current.rotation.x = Math.PI / 5;
        scene.add(loadedModel.current);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };

    const handleMouseDown = (event) => {
      isDragging = true;
      previousPosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event) => {
      if (!isDragging || !loadedModel.current) return;

      const deltaX = event.clientX - previousPosition.x;
      const deltaY = event.clientY - previousPosition.y;

      loadedModel.current.rotation.y += deltaX * 0.01;
      loadedModel.current.rotation.x += deltaY * 0.01;

      loadedModel.current.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, loadedModel.current.rotation.x)
      );

      previousPosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleWheel = (event) => {
      camera.position.z += event.deltaY * 0.01;
      camera.position.z = Math.max(1, Math.min(10, camera.position.z));
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };

    const handleTouchStart = (event) => {
      isDragging = true;
      previousPosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    };

    const handleTouchMove = (event) => {
      if (!isDragging || !loadedModel.current) return;

      const deltaX = event.touches[0].clientX - previousPosition.x;
      const deltaY = event.touches[0].clientY - previousPosition.y;

      loadedModel.current.rotation.y += deltaX * 0.01;
      loadedModel.current.rotation.x += deltaY * 0.01;

      loadedModel.current.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, loadedModel.current.rotation.x)
      );

      previousPosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const animate = () => {
      renderer.current.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const canvasElement = renderer.current.domElement;
    canvasElement.addEventListener("mousedown", handleMouseDown);
    canvasElement.addEventListener("mousemove", handleMouseMove);
    canvasElement.addEventListener("mouseup", handleMouseUp);
    canvasElement.addEventListener("wheel", handleWheel);
    window.addEventListener("resize", handleResize);

    canvasElement.addEventListener("touchstart", handleTouchStart);
    canvasElement.addEventListener("touchmove", handleTouchMove);
    canvasElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      canvasElement.removeEventListener("mousedown", handleMouseDown);
      canvasElement.removeEventListener("mousemove", handleMouseMove);
      canvasElement.removeEventListener("mouseup", handleMouseUp);
      canvasElement.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);

      canvasElement.removeEventListener("touchstart", handleTouchStart);
      canvasElement.removeEventListener("touchmove", handleTouchMove);
      canvasElement.removeEventListener("touchend", handleTouchEnd);

      if (videoElement.current.srcObject) {
        videoElement.current.srcObject.getTracks().forEach((track) => {
          track.stop();
        });
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
