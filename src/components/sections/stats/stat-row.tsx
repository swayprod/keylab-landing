"use client";

import { m, useReducedMotion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { EASE } from "@/lib/constants";
import { MaskReveal } from "@/components/ui/reveal";
import { StatValue } from "./stat-value";

const LINE_DURATION = 1.1;
const VIEWPORT = { once: true, margin: "0px 0px -15% 0px" } as const;

interface StatRowProps {
  stat: Dictionary["stats"]["items"][number];
  locale: Locale;
  index: number;
}

export function StatRow({ stat, locale, index }: StatRowProps) {
  const reducedMotion = useReducedMotion();
  const delay = index * 0.06;

  return (
    <div className="relative grid grid-cols-1 items-end gap-2 py-6 sm:grid-cols-[1fr_minmax(0,18rem)] sm:gap-8 md:py-8">
      <m.span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left bg-line"
        initial={reducedMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: LINE_DURATION, ease: EASE, delay }}
      />
      <dd className="order-1">
        <MaskReveal delay={delay + 0.15}>
          <StatValue stat={stat} locale={locale} />
        </MaskReveal>
      </dd>
      <dt className="order-2 pb-2 text-base text-muted sm:text-right md:text-lg">{stat.label}</dt>
    </div>
  );
}
