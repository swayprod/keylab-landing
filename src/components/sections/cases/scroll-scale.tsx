"use client";

import { useRef, type ReactNode } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ScrollScale({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1, 1] : [0.9, 1]);

  return (
    <m.div ref={ref} style={{ scale }} className={className}>
      {children}
    </m.div>
  );
}
