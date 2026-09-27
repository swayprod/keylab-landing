"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SECTION_IDS, titleId } from "@/lib/constants";

const DRIFT = ["-16vw", "0vw"];
const DRIFT_REVERSE = ["16vw", "0vw"];

export function CasesTitle({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.25"] });
  const leadX = useTransform(scrollYProgress, [0, 1], reducedMotion ? ["0vw", "0vw"] : DRIFT);
  const restX = useTransform(scrollYProgress, [0, 1], reducedMotion ? ["0vw", "0vw"] : DRIFT_REVERSE);
  const opacity = useTransform(scrollYProgress, [0, 0.6], reducedMotion ? [1, 1] : [0.15, 1]);
  const [lead, rest] = title.split(/,\s*/);

  return (
    <h2
      ref={ref}
      id={titleId(SECTION_IDS.cases)}
      className="font-display text-[clamp(2.75rem,10.5vw,10rem)] leading-[0.86] font-semibold tracking-[-0.04em] uppercase"
    >
      <m.span className="block will-change-transform" style={{ x: leadX, opacity }}>
        {lead},
      </m.span>
      <m.span className="block text-signal will-change-transform md:pl-[12vw]" style={{ x: restX, opacity }}>
        {rest}
      </m.span>
    </h2>
  );
}
