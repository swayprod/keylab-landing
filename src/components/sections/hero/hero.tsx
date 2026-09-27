"use client";

import { useRef, type CSSProperties } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { SECTION_IDS, titleId } from "@/lib/constants";
import { leadHref, sectionHref } from "@/lib/navigation";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { NeonObject } from "@/components/ui/neon-object";
import { HeroChips } from "./hero-chips";

const PARALLAX_DISTANCE = 140;
const RISE_STEP_MS = 90;
const RISE_CLASS = "motion-safe:animate-rise";

const riseDelay = (step: number): CSSProperties => ({ animationDelay: `${step * RISE_STEP_MS}ms` });

interface HeroProps {
  locale: Locale;
  t: Dictionary["hero"];
}

export function Hero({ locale, t }: HeroProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const objectY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : PARALLAX_DISTANCE]);

  return (
    <section
      ref={ref}
      id={SECTION_IDS.top}
      data-tone="dark"
      aria-labelledby={titleId(SECTION_IDS.top)}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28 lg:pt-36"
    >
      <MeshGradient className="-z-20" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-bg" />

      <m.div
        style={{ y: objectY }}
        className="absolute -top-10 -right-[30vw] -z-10 h-[115vw] max-h-[520px] w-[115vw] max-w-[520px] opacity-80 sm:-right-16 sm:opacity-60 md:top-16 md:max-h-none md:max-w-none md:-right-28 md:h-[480px] md:w-[480px] md:opacity-40 lg:top-1/2 lg:right-[2%] lg:h-[680px] lg:w-[680px] lg:-translate-y-1/2 lg:opacity-100"
      >
        <NeonObject />
        <HeroChips chips={t.chips} />
      </m.div>

      <Container className="flex flex-1 flex-col justify-center pb-16">
        <h1
          id={titleId(SECTION_IDS.top)}
          style={riseDelay(0)}
          className={`${RISE_CLASS} max-w-4xl font-display text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.03em] text-balance uppercase sm:text-6xl md:text-7xl lg:text-8xl`}
        >
          {t.titleStart} <span className="accent-sharp neon-glow inline-block pr-[0.06em] text-signal motion-safe:animate-sharpen">{t.titleAccent}</span>
        </h1>

        <p style={riseDelay(1)} className={`${RISE_CLASS} mt-6 max-w-xl text-base leading-relaxed text-muted md:mt-8 md:text-xl`}>
          {t.subtitle}
        </p>

        <div style={riseDelay(2)} className={`${RISE_CLASS} mt-9 flex flex-col gap-3 sm:flex-row sm:items-center`}>
          <ButtonLink href={leadHref(locale)} size="lg" withArrow className="w-full sm:w-auto">
            {t.cta}
          </ButtonLink>
          <ButtonLink href={sectionHref(locale, SECTION_IDS.process)} variant="ghost" size="lg" className="w-full sm:w-auto">
            {t.secondary}
          </ButtonLink>
        </div>

        <p style={riseDelay(3)} className={`${RISE_CLASS} mt-5 text-sm text-muted`}>
          {t.note}
        </p>
      </Container>

      <Marquee items={t.marquee} className="border-t border-line py-5" />
    </section>
  );
}
