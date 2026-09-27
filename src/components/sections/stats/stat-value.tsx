"use client";

import { useMemo, useRef } from "react";
import { useInView } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { useCountUp } from "@/hooks/use-count-up";

interface StatValueProps {
  stat: Dictionary["stats"]["items"][number];
  locale: Locale;
}

export function StatValue({ stat, locale }: StatValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const value = useCountUp(stat.value, inView);
  const formatter = useMemo(
    () => new Intl.NumberFormat(locale, { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals }),
    [locale, stat.decimals],
  );

  return (
    <span
      ref={ref}
      className="block font-display text-[clamp(4.5rem,15vw,13rem)] leading-[0.82] font-semibold tracking-[-0.04em]"
    >
      <span className="sr-only">{`${stat.prefix}${formatter.format(stat.value)}${stat.suffix}`}</span>
      <span aria-hidden="true">
        {stat.prefix && <span className="text-signal">{stat.prefix}</span>}
        {formatter.format(value)}
        {stat.suffix && <span className="text-signal">{stat.suffix}</span>}
      </span>
    </span>
  );
}
