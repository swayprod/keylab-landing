"use client";

import { useShaderCanvas } from "@/hooks/use-shader-canvas";
import { SIMPLEX_NOISE } from "@/lib/webgl";
import { cn } from "@/lib/cn";

const FRAGMENT = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_primary;
uniform vec3 u_accent;
uniform vec3 u_background;
${SIMPLEX_NOISE}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 p = uv * vec2(u_resolution.x / u_resolution.y, 1.0);
  float t = u_time * 0.045;
  float base = snoise(vec3(p * 0.9, t));
  float detail = snoise(vec3(p * 1.8 + base * 0.6, t * 1.4 + 12.0));
  vec3 color = mix(u_background, u_primary * 0.75, smoothstep(-0.1, 0.95, base));
  color = mix(color, u_accent, smoothstep(0.45, 1.0, detail) * 0.35);
  float vignette = smoothstep(0.95, 0.2, length((uv - vec2(0.62, 0.5)) * vec2(1.1, 1.4)));
  gl_FragColor = vec4(mix(u_background, color, vignette), 1.0);
}
`;

export function MeshGradient({ className }: { className?: string }) {
  const canvasRef = useShaderCanvas(FRAGMENT);
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-55", className)}
    />
  );
}
