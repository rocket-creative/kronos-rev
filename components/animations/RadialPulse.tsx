"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface RadialPulseProps {
  className?: string;
  ringCount?: number;
  color?: string;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReducedMotion;
}

export function RadialPulse({
  className = "",
  ringCount = 6,
  color = "0, 255, 255",
}: RadialPulseProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<{ value: number }>({ value: 0 });
  const ringsRef = useRef<
    Array<{
      radius: number;
      maxRadius: number;
      opacity: number;
      speed: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (prefersReducedMotion) {
      const drawStatic = () => {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        const centerX = rect.width * 0.3;
        const centerY = rect.height * 0.5;
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, 80,
        );
        gradient.addColorStop(0, `rgba(${color}, 0.2)`);
        gradient.addColorStop(0.5, `rgba(${color}, 0.1)`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        ctx.beginPath();
        ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      };
      const resizeCanvas = () => {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        drawStatic();
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      return () => window.removeEventListener("resize", resizeCanvas);
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initRings();
    };

    const initRings = () => {
      const rect = canvas.getBoundingClientRect();
      const maxRadius = Math.max(rect.width, rect.height) * 0.8;

      ringsRef.current = Array.from({ length: ringCount }, (_, i) => ({
        radius: (i / ringCount) * maxRadius,
        maxRadius,
        opacity: 1,
        speed: 0.3 + Math.random() * 0.2,
        delay: (i / ringCount) * 3,
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    gsap.to(timeRef.current, {
      value: 100,
      duration: 100,
      repeat: -1,
      ease: "none",
    });

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = timeRef.current.value;
      const centerX = rect.width * 0.3;
      const centerY = rect.height * 0.5;
      const maxRadius = Math.max(rect.width, rect.height) * 0.8;

      ringsRef.current.forEach((ring) => {
        ring.radius += ring.speed;

        if (ring.radius > ring.maxRadius) {
          ring.radius = 0;
        }

        const progress = ring.radius / ring.maxRadius;
        const opacity = Math.sin(progress * Math.PI) * 0.3;

        if (opacity > 0.01) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${color}, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          if (progress > 0.1 && progress < 0.9) {
            const dashCount = 12;
            for (let d = 0; d < dashCount; d++) {
              const angle = (d / dashCount) * Math.PI * 2 + time * 0.02;
              const dashLength = 10 + progress * 20;

              const x1 = centerX + Math.cos(angle) * ring.radius;
              const y1 = centerY + Math.sin(angle) * ring.radius;
              const x2 = centerX + Math.cos(angle) * (ring.radius + dashLength);
              const y2 = centerY + Math.sin(angle) * (ring.radius + dashLength);

              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.strokeStyle = `rgba(${color}, ${opacity * 0.5})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      });

      const coreGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 80,
      );
      coreGradient.addColorStop(0, `rgba(${color}, 0.3)`);
      coreGradient.addColorStop(0.5, `rgba(${color}, 0.1)`);
      coreGradient.addColorStop(1, `rgba(${color}, 0)`);

      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      const corePulse = Math.sin(time * 0.5) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8 * corePulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${corePulse})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
      ctx.fill();

      const dataPoints = [
        { angle: Math.PI * 0.25, distance: 150, label: "IDR" },
        { angle: Math.PI * 0.75, distance: 200, label: "NSA" },
        { angle: Math.PI * 1.25, distance: 180, label: "QPA" },
        { angle: Math.PI * 1.75, distance: 160, label: "RCM" },
      ];

      dataPoints.forEach((point, i) => {
        const wobble = Math.sin(time * 0.3 + i) * 10;
        const x = centerX + Math.cos(point.angle + time * 0.01) * (point.distance + wobble);
        const y = centerY + Math.sin(point.angle + time * 0.01) * (point.distance + wobble);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(${color}, 0.1)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        const pointPulse = Math.sin(time * 0.5 + i * 0.5) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(x, y, 6 + pointPulse * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.2 + pointPulse * 0.3})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.8)`;
        ctx.fill();

        ctx.font = "10px monospace";
        ctx.fillStyle = `rgba(${color}, 0.5)`;
        ctx.textAlign = "center";
        ctx.fillText(point.label, x, y - 15);
      });

      void maxRadius;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gsap.killTweensOf(timeRef.current);
    };
  }, [ringCount, color, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
