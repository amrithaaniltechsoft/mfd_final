"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export default function ThreeDiceCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});
  const rotationOffsetRef = useRef({ x: 0, y: 0 });

  // 1. Multi-section Zig-Zag Rolling Trajectory Math
  useEffect(() => {
    let animationId: number;

    let currentX = 0;
    let currentY = 0;
    let currentScale = 1;

    let targetX = 0;
    let targetY = 0;
    let targetScale = 1;

    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const waypointIds = [
      "hero-dice-slot",
      "dice-target-slot",
      "capabilities-dice-slot",
      "trust-dice-slot",
      "facility-dice-slot",
      "advantages-dice-slot",
      "cta-dice-slot",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Add dynamic rolling rotational speed based on scroll velocity
      rotationOffsetRef.current.x += scrollDelta * 0.008;
      rotationOffsetRef.current.y += scrollDelta * 0.008;

      const heroSlot = document.getElementById("hero-dice-slot");
      if (!heroSlot) return;

      const heroRect = heroSlot.getBoundingClientRect();
      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + heroRect.height / 2;

      // Calculate absolute document positions for all active waypoints
      const points: { x: number; y: number; scale: number; scrollPos: number }[] = [];

      waypointIds.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const absoluteTop = scrollY + rect.top;

          // Relative translation offset to heroSlot center
          const centerX = rect.left + rect.width / 2 - heroCenterX;
          const centerY = rect.top + rect.height / 2 - heroCenterY;

          let scale = 1;
          if (index === 1) scale = 0.42; // AboutSection Card 5
          if (index === 2) scale = 0.85; // CapabilitiesGrid (Left)
          if (index === 3) scale = 0.85; // TrustBar (Right)
          if (index === 4) scale = 0.85; // FacilitySection (Left)
          if (index === 5) scale = 0.85; // AdvantagesGrid (Right)
          if (index === 6) scale = 1.15; // CtaForm (Left Column - Bigger Dice)




          points.push({
            x: centerX,
            y: centerY,
            scale,
            scrollPos: absoluteTop,
          });
        }
      });

      if (points.length < 2) return;

      // Find active waypoint segment based on current scroll position
      const viewportTrigger = scrollY + window.innerHeight * 0.45;

      let segmentIndex = 0;
      for (let i = 0; i < points.length - 1; i++) {
        if (viewportTrigger >= points[i].scrollPos) {
          segmentIndex = i;
        }
      }

      if (segmentIndex >= points.length - 1) {
        segmentIndex = points.length - 2;
      }

      const p1 = points[segmentIndex];
      const p2 = points[segmentIndex + 1];

      const range = p2.scrollPos - p1.scrollPos;
      let t = range > 0 ? (viewportTrigger - p1.scrollPos) / range : 0;
      t = Math.min(1, Math.max(0, t));

      // Organic smooth easing for fluid curved zig-zag motion
      const easeT = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      targetX = p1.x + (p2.x - p1.x) * easeT;
      targetY = p1.y + (p2.y - p1.y) * easeT;
      targetScale = p1.scale + (p2.scale - p1.scale) * easeT;
    };

    const updateLoop = () => {
      animationId = requestAnimationFrame(updateLoop);

      // Fast, responsive 0.18 lerp for smooth fluid motion
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      currentScale += (targetScale - currentScale) * 0.18;

      setTransformStyle({
        transform: `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`,
        transformOrigin: "center center",
        willChange: "transform",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    updateLoop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // 2. Three.js Real-time 3D Scene Initialization
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const createDiceFaceTexture = (pipPositions: [number, number][], isGreenPip = false) => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.CanvasTexture(canvas);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 512, 512);

      ctx.strokeStyle = "#e4e4e7";
      ctx.lineWidth = 14;
      ctx.strokeRect(12, 12, 488, 488);

      pipPositions.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 38, 0, Math.PI * 2);
        ctx.fillStyle = isGreenPip ? "#526E07" : "#09090b";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 38, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,0,0,0.3)";
        ctx.lineWidth = 5;
        ctx.stroke();
      });

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 16;
      return texture;
    };

    const face1 = createDiceFaceTexture([[256, 256]], true);
    const face2 = createDiceFaceTexture([[140, 140], [372, 372]]);
    const face3 = createDiceFaceTexture([[140, 140], [256, 256], [372, 372]]);
    const face4 = createDiceFaceTexture([[140, 140], [372, 140], [140, 372], [372, 372]]);
    const face5 = createDiceFaceTexture([[140, 140], [372, 140], [256, 256], [140, 372], [372, 372]]);
    const face6 = createDiceFaceTexture([[140, 130], [372, 130], [140, 256], [372, 256], [140, 382], [372, 382]]);

    const materials1 = [
      new THREE.MeshStandardMaterial({ map: face1, roughness: 0.16, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ map: face6, roughness: 0.16, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ map: face2, roughness: 0.16, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ map: face5, roughness: 0.16, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ map: face3, roughness: 0.16, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ map: face4, roughness: 0.16, metalness: 0.2 }),
    ];

    const materials2 = [
      new THREE.MeshStandardMaterial({ map: face6, roughness: 0.22, metalness: 0.15 }),
      new THREE.MeshStandardMaterial({ map: face1, roughness: 0.22, metalness: 0.15 }),
      new THREE.MeshStandardMaterial({ map: face3, roughness: 0.22, metalness: 0.15 }),
      new THREE.MeshStandardMaterial({ map: face4, roughness: 0.22, metalness: 0.15 }),
      new THREE.MeshStandardMaterial({ map: face5, roughness: 0.22, metalness: 0.15 }),
      new THREE.MeshStandardMaterial({ map: face2, roughness: 0.22, metalness: 0.15 }),
    ];

    // Die 1 Mesh (Foreground - Front Right)
    const geometry1 = new RoundedBoxGeometry(3.1, 3.1, 3.1, 7, 0.38);
    const dice1 = new THREE.Mesh(geometry1, materials1);
    dice1.position.set(0.75, -0.1, 0.8);
    dice1.rotation.x = Math.PI / 6;
    dice1.rotation.y = Math.PI / 4;
    dice1.castShadow = true;
    dice1.receiveShadow = true;
    scene.add(dice1);

    // Die 2 Mesh (Background - Top Left Behind Die 1)
    const geometry2 = new RoundedBoxGeometry(2.8, 2.8, 2.8, 7, 0.35);
    const dice2 = new THREE.Mesh(geometry2, materials2);
    dice2.position.set(-1.15, 1.25, -0.2);
    dice2.rotation.x = Math.PI / 4.5;
    dice2.rotation.y = -Math.PI / 5;
    dice2.castShadow = true;
    dice2.receiveShadow = true;
    scene.add(dice2);

    // Direct Lighting & Shadows
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.8);
    dirLight1.position.set(7, 10, 9);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa3e635, 1.4);
    dirLight2.position.set(-8, -5, -4);
    scene.add(dirLight2);

    // Ground Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(12, 12);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.4 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.3;
    shadowMesh.receiveShadow = true;
    scene.add(shadowMesh);

    // Interactive Mouse Movement & 3D Animation Loop with Scroll Rolling Physics
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous Idle Rotation + Dynamic Scroll Rolling Offset
      const rotOffset = rotationOffsetRef.current;

      dice1.rotation.y = elapsedTime * 0.5 + rotOffset.y;
      dice1.rotation.x = elapsedTime * 0.3 + rotOffset.x;

      dice2.rotation.y = -elapsedTime * 0.4 - rotOffset.y;
      dice2.rotation.z = elapsedTime * 0.2 + rotOffset.x;

      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;

      dice1.rotation.z = targetX * 0.35;
      dice2.rotation.x = targetY * 0.35;

      dice1.position.y = -0.1 + Math.sin(elapsedTime * 1.8) * 0.14;
      dice2.position.y = 1.25 + Math.cos(elapsedTime * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={transformStyle}
      className="w-full max-w-[700px] h-[440px] sm:h-[520px] lg:h-[580px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    />
  );
}
