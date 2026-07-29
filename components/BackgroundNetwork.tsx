"use client";

import { useEffect, useRef } from "react";

type IconKind = "pickaxe" | "gear" | "truck" | "rig" | "vein";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  icon: IconKind | null;
  rotation: number;
  rotationSpeed: number;
};

const ICON_KINDS: IconKind[] = ["pickaxe", "gear", "truck", "rig", "vein"];

/**
 * Reads --abms-accent (falls back to a warm rust tone) so the animation
 * always matches whatever accent color interactions.css is using.
 */
function readAccentRGB(): [number, number, number] {
  if (typeof window === "undefined") return [181, 101, 29];
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--bs-primary")
    .trim();
  const hexMatch = raw.match(/^#([0-9a-f]{6})$/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
    ];
  }
  const rgbMatch = raw.match(/(\d+)\D+(\d+)\D+(\d+)/);
  if (rgbMatch) {
    return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])];
  }
  return [181, 101, 29];
}

/* ---- line-art icon drawing, all in local -1..1 space, scaled by `s` ---- */
function drawIcon(
  ctx: CanvasRenderingContext2D,
  kind: IconKind,
  s: number,
  alpha: number
) {
  ctx.lineWidth = Math.max(1, s * 0.09);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalAlpha = alpha;

  switch (kind) {
    case "pickaxe": {
      ctx.beginPath();
      ctx.moveTo(-0.55 * s, 0.6 * s);
      ctx.lineTo(0.55 * s, -0.6 * s);
      ctx.moveTo(-0.75 * s, -0.35 * s);
      ctx.quadraticCurveTo(0, -0.95 * s, 0.75 * s, -0.35 * s);
      ctx.stroke();
      break;
    }
    case "gear": {
      const outer = 0.62 * s;
      const inner = 0.32 * s;
      const teeth = 8;
      ctx.beginPath();
      for (let i = 0; i < teeth; i++) {
        const a0 = (i / teeth) * Math.PI * 2;
        const a1 = a0 + Math.PI / teeth;
        const r0 = outer;
        const r1 = outer * 0.78;
        ctx.moveTo(Math.cos(a0) * r0, Math.sin(a0) * r0);
        ctx.lineTo(Math.cos(a0) * r1, Math.sin(a0) * r1);
        ctx.lineTo(Math.cos(a1) * r1, Math.sin(a1) * r1);
        ctx.lineTo(Math.cos(a1) * r0, Math.sin(a1) * r0);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, inner, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case "truck": {
      ctx.beginPath();
      ctx.moveTo(-0.85 * s, 0.2 * s);
      ctx.lineTo(-0.85 * s, -0.15 * s);
      ctx.lineTo(-0.15 * s, -0.15 * s);
      ctx.lineTo(0.15 * s, -0.5 * s);
      ctx.lineTo(0.85 * s, -0.5 * s);
      ctx.lineTo(0.85 * s, 0.2 * s);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(-0.45 * s, 0.32 * s, 0.16 * s, 0, Math.PI * 2);
      ctx.moveTo(0.85 * s, 0.32 * s);
      ctx.arc(0.5 * s, 0.32 * s, 0.16 * s, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case "rig": {
      ctx.beginPath();
      ctx.moveTo(0, -0.9 * s);
      ctx.lineTo(-0.3 * s, 0.75 * s);
      ctx.moveTo(0, -0.9 * s);
      ctx.lineTo(0.3 * s, 0.75 * s);
      ctx.moveTo(-0.18 * s, 0.2 * s);
      ctx.lineTo(0.18 * s, 0.2 * s);
      ctx.moveTo(-0.24 * s, 0.5 * s);
      ctx.lineTo(0.24 * s, 0.5 * s);
      ctx.moveTo(-0.5 * s, 0.75 * s);
      ctx.lineTo(0.5 * s, 0.75 * s);
      ctx.stroke();
      break;
    }
    case "vein": {
      ctx.beginPath();
      ctx.moveTo(-0.8 * s, 0.5 * s);
      ctx.lineTo(-0.35 * s, -0.1 * s);
      ctx.lineTo(0, 0.35 * s);
      ctx.lineTo(0.4 * s, -0.55 * s);
      ctx.lineTo(0.8 * s, -0.1 * s);
      ctx.stroke();
      break;
    }
  }
  ctx.globalAlpha = 1;
}

export default function BackgroundNetwork({
  className = "",
  density = 1,
}: {
  className?: string;
  density?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const [ar, ag, ab] = readAccentRGB();

    const buildNodes = () => {
      const area = width * height;
      const count = Math.max(
        18,
        Math.min(60, Math.round((area / 16000) * density))
      );
      const iconCount = Math.min(5, Math.max(3, Math.round(count / 9)));
      const arr: Node[] = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        arr.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: Math.random() * 1.6 + 1,
          icon: i < iconCount ? ICON_KINDS[i % ICON_KINDS.length] : null,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.0025,
        });
      }
      nodes = arr;
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        mouse.x = x;
        mouse.y = y;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    const LINK_DIST = 130;
    const MOUSE_DIST = 160;

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // drift + gentle spring back to a wandering base point + mouse repulsion
      for (const n of nodes) {
        if (!reduceMotion) {
          n.baseX += n.vx;
          n.baseY += n.vy;
          if (n.baseX < 0 || n.baseX > width) n.vx *= -1;
          if (n.baseY < 0 || n.baseY > height) n.vy *= -1;
          n.baseX = Math.max(0, Math.min(width, n.baseX));
          n.baseY = Math.max(0, Math.min(height, n.baseY));
          n.rotation += n.rotationSpeed;
        }

        let targetX = n.baseX;
        let targetY = n.baseY;

        if (mouse.active) {
          const dx = n.baseX - mouse.x;
          const dy = n.baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            const force = (1 - dist / MOUSE_DIST) * 28;
            const nx = dist === 0 ? 0 : dx / dist;
            const ny = dist === 0 ? 0 : dy / dist;
            targetX += nx * force;
            targetY += ny * force;
          }
        }

        n.x += (targetX - n.x) * 0.12;
        n.y += (targetY - n.y) * 0.12;
      }

      // connecting lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // link to cursor for a live "cluster" highlight
        if (mouse.active) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            const alpha = (1 - dist / MOUSE_DIST) * 0.55;
            ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // nodes: plain dots or abstract equipment glyphs
      for (const n of nodes) {
        if (n.icon) {
          ctx.save();
          ctx.translate(n.x, n.y);
          ctx.rotate(reduceMotion ? 0 : n.rotation * 0.15);
          ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, 0.9)`;
          drawIcon(ctx, n.icon, 16, 0.55);
          ctx.restore();
        } else {
          ctx.fillStyle = `rgba(${ar}, ${ag}, ${ab}, 0.75)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      drawFrame();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduceMotion) {
      drawFrame();
    } else {
      loop();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`abms-network-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
