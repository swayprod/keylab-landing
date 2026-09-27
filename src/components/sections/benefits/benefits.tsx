"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import type { BenefitKey, Dictionary } from "@/i18n/types";
import { DURATION, EASE, SECTION_IDS } from "@/lib/constants";
import { GlowPanel } from "@/components/ui/glow-panel";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { BenefitItem } from "./benefit-item";
import { BENEFIT_ILLUSTRATIONS } from "./benefit-visuals";

export function Benefits({ t }: { t: Dictionary["benefits"] }) {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState<BenefitKey>(t.items[0].key);
  const [resolved, setResolved] = useState<ReadonlySet<BenefitKey>>(() => new Set());
  const Illustration = BENEFIT_ILLUSTRATIONS[active];

  const activate = useCallback((key: BenefitKey) => {
    setActive(key);
    setResolved((current) => (current.has(key) ? current : new Set(current).add(key)));
  }, []);

  return (
    <Section id={SECTION_IDS.benefits}>
      <SectionHeader section={SECTION_IDS.benefits} title={t.title} subtitle={t.subtitle} />

      <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="sticky top-32 hidden self-start lg:block">
          <GlowPanel className="aspect-[400/260] overflow-hidden rounded-3xl border border-line bg-surface">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={active}
                className="absolute inset-0 p-8"
                initial={reducedMotion ? false : { opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 1.02, filter: "blur(6px)" }}
                transition={{ duration: DURATION.base, ease: EASE }}
              >
                <Illustration />
              </m.div>
            </AnimatePresence>
          </GlowPanel>
        </div>

        <ol>
          {t.items.map((item) => (
            <BenefitItem key={item.key} item={item} active={item.key === active} resolved={resolved.has(item.key)} onActivate={activate} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
