"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { createFullscreenProgram, readBrandColors } from "@/lib/webgl";

interface ShaderCanvasOptions {
  dprScale?: number;
  trackPointer?: boolean;
}

const POINTER_SMOOTHING = 0.06;
const IDLE_TIMEOUT_MS = 1200;

export function useShaderCanvas(fragmentSource: string, { dprScale = 0.5, trackPointer = false }: ShaderCanvasOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: IDLE_TIMEOUT_MS });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), IDLE_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true });
    if (!canvas || !gl) return;

    const setup = createFullscreenProgram(gl, fragmentSource);
    if (!setup) return;
    const { program, buffer } = setup;
    gl.useProgram(program);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const uResolution = uniform("u_resolution");
    const uTime = uniform("u_time");
    const uPointer = uniform("u_pointer");
    const colors = readBrandColors();
    gl.uniform3fv(uniform("u_primary"), colors.primary);
    gl.uniform3fv(uniform("u_accent"), colors.accent);
    gl.uniform3fv(uniform("u_background"), colors.background);

    const pointerTarget = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0 };
    let frame = 0;
    let visible = true;
    const start = performance.now();

    const draw = (time: number) => {
      pointer.x += (pointerTarget.x - pointer.x) * POINTER_SMOOTHING;
      pointer.y += (pointerTarget.y - pointer.y) * POINTER_SMOOTHING;
      gl.uniform1f(uTime, time);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2) * dprScale;
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      if (reducedMotion) draw(0);
    };

    const loop = () => {
      draw((performance.now() - start) / 1000);
      frame = requestAnimationFrame(loop);
    };

    const play = () => {
      cancelAnimationFrame(frame);
      if (!reducedMotion && visible && !document.hidden) frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerTarget.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerTarget.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      play();
    });
    intersectionObserver.observe(canvas);
    document.addEventListener("visibilitychange", play);
    if (trackPointer && !reducedMotion) window.addEventListener("pointermove", onPointerMove, { passive: true });

    resize();
    play();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", play);
      window.removeEventListener("pointermove", onPointerMove);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [ready, fragmentSource, dprScale, trackPointer, reducedMotion]);

  return canvasRef;
}
