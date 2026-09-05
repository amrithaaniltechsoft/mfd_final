"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export default function DieMoldAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  isHoveredRef.current = isHovered;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Clear existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // ================= LIGHTING =================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(-5, -5, -5);
    scene.add(rimLight);

    const bluePrintLight = new THREE.PointLight(0xffffff, 2, 10);
    bluePrintLight.position.set(0, 0, 4);
    scene.add(bluePrintLight);

    // ================= REAL 3D CHAMFERED DIE BLOCK GEOMETRY =================
    const diceGroup = new THREE.Group();
    scene.add(diceGroup);

    // Main Rounded Die Cube
    const cubeSize = 2.4;
    const roundedGeo = new RoundedBoxGeometry(cubeSize, cubeSize, cubeSize, 4, 0.25);

    // Dark Metallic Solid Body Material
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.15,
      metalness: 0.9,
    });

    const diceBody = new THREE.Mesh(roundedGeo, bodyMaterial);
    diceBody.castShadow = true;
    diceBody.receiveShadow = true;
    diceGroup.add(diceBody);

    // Pure White Outer Edges (Blueprint Wireframe Outline)
    const edgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(cubeSize * 1.002, cubeSize * 1.002, cubeSize * 1.002));
    const edgesMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2, transparent: true, opacity: 0.85 });
    const wireframeBox = new THREE.LineSegments(edgesGeo, edgesMat);
    diceGroup.add(wireframeBox);

    // ================= REAL FLUSH PIPS (EMBEDDED DICE CAVITY CIRCLES) =================
    const pipRadius = 0.18;
    const pipCircleGeo = new THREE.CircleGeometry(pipRadius, 32);
    const pipRingGeo = new THREE.RingGeometry(pipRadius * 0.9, pipRadius * 1.15, 32);

    const pipMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0xffffff,
      emissiveIntensity: 0.4,
      side: THREE.DoubleSide,
    });

    const pipBorderMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });

    const offset = cubeSize / 2 + 0.003;
    const spacing = 0.62;

    const addPip = (x: number, y: number, z: number, rx = 0, ry = 0) => {
      const group = new THREE.Group();
      group.position.set(x, y, z);
      group.rotation.set(rx, ry, 0);

      const circleMesh = new THREE.Mesh(pipCircleGeo, pipMat);
      const ringMesh = new THREE.Mesh(pipRingGeo, pipBorderMat);

      group.add(circleMesh);
      group.add(ringMesh);

      diceGroup.add(group);
    };

    // Face 1 (Front: z = +offset)
    addPip(0, 0, offset, 0, 0);

    // Face 6 (Back: z = -offset)
    addPip(-spacing, spacing, -offset, 0, Math.PI);
    addPip(-spacing, 0, -offset, 0, Math.PI);
    addPip(-spacing, -spacing, -offset, 0, Math.PI);
    addPip(spacing, spacing, -offset, 0, Math.PI);
    addPip(spacing, 0, -offset, 0, Math.PI);
    addPip(spacing, -spacing, -offset, 0, Math.PI);

    // Face 2 (Top: y = +offset)
    addPip(-spacing, offset, -spacing, -Math.PI / 2, 0);
    addPip(spacing, offset, spacing, -Math.PI / 2, 0);

    // Face 5 (Bottom: y = -offset)
    addPip(-spacing, -offset, -spacing, Math.PI / 2, 0);
    addPip(spacing, -offset, -spacing, Math.PI / 2, 0);
    addPip(0, -offset, 0, Math.PI / 2, 0);
    addPip(-spacing, -offset, spacing, Math.PI / 2, 0);
    addPip(spacing, -offset, spacing, Math.PI / 2, 0);

    // Face 3 (Right: x = +offset)
    addPip(offset, spacing, spacing, 0, Math.PI / 2);
    addPip(offset, 0, 0, 0, Math.PI / 2);
    addPip(offset, -spacing, -spacing, 0, Math.PI / 2);

    // Face 4 (Left: x = -offset)
    addPip(-offset, spacing, spacing, 0, -Math.PI / 2);
    addPip(-offset, spacing, -spacing, 0, -Math.PI / 2);
    addPip(-offset, -spacing, spacing, 0, -Math.PI / 2);
    addPip(-offset, -spacing, -spacing, 0, -Math.PI / 2);

    // ================= ANIMATION LOOP WITH HOVER DIRECTION REVERSAL =================
    let animationFrameId: number;
    let currentSpeed = 0.008;

    // Default tilt
    diceGroup.rotation.x = 0.45;
    diceGroup.rotation.z = 0.25;

    const animate = () => {
      // Smoothly transition rotation speed & direction based on hover
      const targetSpeed = isHoveredRef.current ? -0.015 : 0.008;
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;

      diceGroup.rotation.y += currentSpeed;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center p-2 select-none cursor-pointer group"
    >
      {/* Soft Ambient Radial White Glow */}
      <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Real 3D WebGL Canvas Container */}
      <div ref={containerRef} className="w-full h-full relative z-10" />
    </div>
  );
}
