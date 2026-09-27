"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { DURATION, EASE, REVEAL_OFFSET } from "@/lib/constants";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: REVEAL_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: DURATION.slow, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}
