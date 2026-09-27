"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/constants";

const COUNT_DURATION = 1.6;

export function useCountUp(target: number, start: boolean) {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || reducedMotion) return;
    const controls = animate(0, target, { duration: COUNT_DURATION, ease: EASE, onUpdate: setValue });
    return () => controls.stop();
  }, [target, start, reducedMotion]);

  return start && reducedMotion ? target : value;
}
