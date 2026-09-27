"use client";

import { useMemo } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useShaderCanvas } from "@/hooks/use-shader-canvas";
import { cn } from "@/lib/cn";

const LOW_POWER_QUERY = "(max-width: 1023px), (pointer: coarse)";

const QUALITY = {
  high: { steps: 80, dprScale: 0.75 },
  low: { steps: 40, dprScale: 0.5 },
} as const;

const fragment = (steps: number) => `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_pointer;
uniform vec3 u_primary;
uniform vec3 u_accent;

mat2 rotate(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float torus(vec3 p, vec2 size) {
  return length(vec2(length(p.xz) - size.x, p.y)) - size.y;
}

float scene(vec3 p) {
  p.yz *= rotate(0.9 + u_time * 0.18 + u_pointer.y * 0.5);
  p.xz *= rotate(u_time * 0.26 + u_pointer.x * 0.7);
  float body = torus(p, vec2(1.0, 0.36));
  body += 0.045 * sin(4.0 * p.x + u_time) * sin(4.0 * p.y + u_time * 0.6) * sin(4.0 * p.z);
  vec3 q = p;
  q.xy *= rotate(1.2);
  float ring = torus(q, vec2(1.62, 0.012));
  return min(body, ring);
}

vec3 normalAt(vec3 p) {
  vec2 e = vec2(0.0015, 0.0);
  return normalize(vec3(
    scene(p + e.xyy) - scene(p - e.xyy),
    scene(p + e.yxy) - scene(p - e.yxy),
    scene(p + e.yyx) - scene(p - e.yyx)));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
  vec3 origin = vec3(0.0, 0.0, 5.6);
  vec3 dir = normalize(vec3(uv, -1.55));
  float dist = 0.0;
  float glow = 0.0;
  bool hit = false;
  for (int i = 0; i < ${steps}; i++) {
    float d = scene(origin + dir * dist);
    glow += 0.009 / (0.02 + d * d);
    if (d < 0.001) { hit = true; break; }
    dist += d * 0.85;
    if (dist > 10.0) break;
  }
  vec3 color = vec3(0.0);
  float alpha = 0.0;
  if (hit) {
    vec3 p = origin + dir * dist;
    vec3 n = normalAt(p);
    vec3 light = normalize(vec3(0.5, 0.8, 0.6));
    float fresnel = pow(1.0 - max(dot(n, -dir), 0.0), 2.6);
    float diffuse = max(dot(n, light), 0.0);
    float specular = pow(max(dot(reflect(-light, n), -dir), 0.0), 40.0);
    color = vec3(0.012, 0.016, 0.035) + u_primary * diffuse * 0.22;
    color += mix(u_primary, u_accent, fresnel) * fresnel * 1.7 + specular * 0.9;
    alpha = 1.0;
  }
  vec3 halo = mix(u_primary, u_accent, 0.25) * glow * 0.028;
  color += halo;
  alpha = clamp(max(alpha, max(halo.r, max(halo.g, halo.b))), 0.0, 1.0);
  gl_FragColor = vec4(min(color, vec3(alpha)), alpha);
}
`;

export function NeonObject({ className }: { className?: string }) {
  const lowPower = useMediaQuery(LOW_POWER_QUERY);
  const quality = lowPower ? QUALITY.low : QUALITY.high;
  const source = useMemo(() => fragment(quality.steps), [quality.steps]);
  const canvasRef = useShaderCanvas(source, { dprScale: quality.dprScale, trackPointer: !lowPower });
  return <canvas ref={canvasRef} aria-hidden="true" className={cn("pointer-events-none h-full w-full", className)} />;
}
