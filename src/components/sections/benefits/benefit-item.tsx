"use client";

import { useEffect, useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import type { BenefitKey, Dictionary } from "@/i18n/types";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { GlowPanel } from "@/components/ui/glow-panel";
import { BENEFIT_ILLUSTRATIONS } from "./benefit-visuals";

const CENTER_BAND = "-45% 0px -45% 0px";
const STRIKE_DURATION = 0.7;

interface BenefitItemProps {
  item: Dictionary["benefits"]["items"][number];
  active: boolean;
  resolved: boolean;
  onActivate: (key: BenefitKey) => void;
}

export function BenefitItem({ item, active, resolved, onActivate }: BenefitItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reducedMotion = useReducedMotion();
  const centered = useInView(ref, { margin: CENTER_BAND });
  const Illustration = BENEFIT_ILLUSTRATIONS[item.key];

  useEffect(() => {
    if (centered) onActivate(item.key);
  }, [centered, item.key, onActivate]);

  return (
    <li ref={ref} className="border-t border-line last:border-b">
      <button type="button" aria-pressed={active} onClick={() => onActivate(item.key)} className="w-full py-8 text-left md:py-10">
        <GlowPanel className="mb-7 aspect-[2/1] overflow-hidden rounded-2xl border border-line p-4 lg:hidden">
          <Illustration />
        </GlowPanel>

        <s className="relative inline-block font-display text-2xl font-semibold tracking-tight text-muted no-underline md:text-4xl">
          {item.problem}
          <m.span
            aria-hidden="true"
            className="absolute inset-x-[-0.08em] top-[54%] h-[3px] origin-left rounded-full bg-signal shadow-[0_0_14px_var(--color-primary)] md:h-[0.08em]"
            initial={false}
            animate={{ scaleX: resolved ? 1 : 0 }}
            transition={{ duration: reducedMotion ? 0 : STRIKE_DURATION, ease: EASE }}
          />
        </s>

        <span className={cn("mt-5 flex gap-3 transition-opacity duration-500", active ? "opacity-100" : "opacity-55")}>
          <CornerDownRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-signal md:h-6 md:w-6" />
          <span>
            <span className="block font-display text-xl font-semibold tracking-tight md:text-2xl">{item.title}</span>
            <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted md:text-base">{item.text}</span>
          </span>
        </span>
      </button>
    </li>
  );
}
