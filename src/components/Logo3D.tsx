"use client";

import { useEffect, useRef } from "react";
import { LogoMark } from "./LogoMark";

export function Logo3D({
  className = "relative mx-auto mt-6 h-[clamp(280px,48vw,500px)] w-full max-w-[1000px]",
}: {
  className?: string;
}) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;
    let renderer: import("three").WebGLRenderer | null = null;
    let frame = 0;
    let running = false;
    let visible = true;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;

    const tx = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const t0 = performance.now();

    const onPointer = (e: PointerEvent) => {
      tx.x = (e.clientX / window.innerWidth - 0.5) * 2;
      tx.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    (async () => {
      const THREE = await import("three");
      if (disposed || !stage) return;

      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
        scene.add(new THREE.AmbientLight(0xffffff, 0.75));

        const dir = new THREE.DirectionalLight(0xffffff, 0.9);
        dir.position.set(-3, 4, 6);
        scene.add(dir);

        const orangeLight = new THREE.PointLight(0xff5a34, 1.3, 20);
        orangeLight.position.set(5, -1, 4);
        scene.add(orangeLight);

        const lilacLight = new THREE.PointLight(0xb877f2, 1.3, 20);
        lilacLight.position.set(-5, 2, 4);
        scene.add(lilacLight);

        const group = new THREE.Group();
        scene.add(group);

        const diamond = () => {
          const s = new THREE.Shape();
          const h = 0.68;
          s.moveTo(0, h);
          s.lineTo(h, 0);
          s.lineTo(0, -h);
          s.lineTo(-h, 0);
          s.closePath();
          return s;
        };

        const triangle = () => {
          const s = new THREE.Shape();
          s.moveTo(0, 0);
          s.lineTo(0.68, -0.66);
          s.lineTo(-0.68, -0.66);
          s.closePath();
          return s;
        };

        const extrude = {
          depth: 0.28,
          bevelEnabled: true,
          bevelSize: 0.04,
          bevelThickness: 0.05,
          bevelSegments: 3,
        };

        const defs: [() => import("three").Shape, number, number, number][] = [
          [diamond, 0x300a28, -1.416, 0.33],
          [diamond, 0x8554c0, -0.708, -0.33],
          [diamond, 0xb877f2, 0, 0.33],
          [diamond, 0xd1442a, 0.708, -0.33],
          [diamond, 0xff5a34, 1.416, 0.33],
          [triangle, 0xae3622, 0, -0.33],
        ];

        const meshes = defs.map(([shapeFn, color, x, y], i) => {
          const geo = new THREE.ExtrudeGeometry(shapeFn(), extrude);
          geo.translate(0, 0, -0.14);
          const mesh = new THREE.Mesh(
            geo,
            new THREE.MeshStandardMaterial({
              color,
              roughness: 0.4,
              metalness: 0.15,
              emissive: color,
              emissiveIntensity: 0.14,
            }),
          );
          mesh.userData = { x, y, i };
          group.add(mesh);
          return mesh;
        });

        const fallback = stage.querySelector("[data-fallback]");
        stage.appendChild(renderer.domElement);
        if (fallback) fallback.remove();

        const size = () => {
          if (!renderer || !stage) return;
          const w = stage.clientWidth;
          const h = stage.clientHeight;
          if (!w || !h) return;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          const t = Math.tan((camera.fov * Math.PI) / 360);
          camera.position.z = Math.max(2.5 / (camera.aspect * t), 1.35 / t) + 0.5;
          camera.updateProjectionMatrix();
          if (reduced) draw(1);
        };

        const draw = (t: number) => {
          if (!renderer) return;
          const k = reduced ? 1 : Math.min(t / 1.4, 1);
          const e = 1 - Math.pow(1 - k, 3);
          const s = 1 - e;
          cur.x += (tx.x - cur.x) * 0.06;
          cur.y += (tx.y - cur.y) * 0.06;
          group.rotation.y = cur.x * 0.5 + (reduced ? 0 : Math.sin(t * 0.5) * 0.12);
          group.rotation.x = cur.y * 0.25;
          meshes.forEach((m) => {
            const u = m.userData as { x: number; y: number; i: number };
            const sg = u.i % 2 ? -1 : 1;
            m.position.set(
              u.x * (1 + s * 0.6),
              u.y + s * sg * 2 + (reduced ? 0 : Math.sin(t * 1.2 + u.i) * 0.05),
              Math.sin(u.i * 1.7) * 0.14 +
                (reduced ? 0 : Math.sin(t * 0.9 + u.i * 2) * 0.08),
            );
            m.rotation.z = s * sg * 0.8;
            m.rotation.y = s * sg * 0.6;
          });
          renderer.render(scene, camera);
        };

        const loop = (now: number) => {
          if (!visible || disposed) {
            running = false;
            return;
          }
          draw((now - t0) / 1000);
          frame = requestAnimationFrame(loop);
        };

        window.addEventListener("pointermove", onPointer);
        resizeObserver = new ResizeObserver(size);
        resizeObserver.observe(stage);
        size();

        if (reduced) {
          draw(1);
        } else {
          intersectionObserver = new IntersectionObserver((entries) => {
            visible = entries[0]?.isIntersecting ?? false;
            if (visible && !running) {
              running = true;
              frame = requestAnimationFrame(loop);
            }
          });
          intersectionObserver.observe(stage);
        }
      } catch {
        // Keep SVG fallback if WebGL fails
      }
    })();

    return () => {
      disposed = true;
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      renderer?.dispose();
      if (renderer?.domElement.parentElement === stage) {
        stage.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className={className}
      role="img"
      aria-label="3D interlocking diamonds in plum, violet, lilac, orange and rust"
    >
      <div data-fallback className="absolute inset-0 flex items-center justify-center p-6">
        <LogoMark className="h-auto w-full max-w-3xl animate-[rise_0.9s_cubic-bezier(0.2,0.8,0.2,1)_both]" />
      </div>
    </div>
  );
}
