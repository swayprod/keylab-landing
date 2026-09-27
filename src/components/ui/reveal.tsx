"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/cn";

const MASK_DURATION = 0.8;
const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MaskReveal({ children, className, delay = 0 }: MaskRevealProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <m.div className={cn("overflow-hidden pb-[0.08em]", className)} initial="hidden" whileInView="shown" viewport={VIEWPORT}>
      <m.div
        variants={{ hidden: { y: "105%" }, shown: { y: "0%" } }}
        transition={{ duration: MASK_DURATION, ease: EASE, delay }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
