import { Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { SECTION_IDS, titleId } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";
import { NeonObject } from "@/components/ui/neon-object";
import { Section } from "@/components/ui/section";
import { LeadForm } from "./lead-form";

const FORM_DELAY = 0.1;

export function FinalCta({ locale, t }: { locale: Locale; t: Dictionary["lead"] }) {
  return (
    <Section id={SECTION_IDS.lead} sheet containerClassName="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -bottom-24 h-[560px] w-[560px] opacity-40 md:h-[760px] md:w-[760px] lg:top-1/2 lg:-right-24 lg:bottom-auto lg:-translate-y-1/2 lg:opacity-80">
        <NeonObject />
      </div>

      <FadeIn className="relative">
        <h2
          id={titleId(SECTION_IDS.lead)}
          className="font-display text-4xl leading-[0.95] font-semibold tracking-[-0.035em] text-balance uppercase sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.title}
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">{t.subtitle}</p>
        <ul className="mt-10 space-y-4">
          {t.perks.map((perk) => (
            <li key={perk} className="flex items-center gap-4">
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-signal">
                <Check className="h-4 w-4" />
              </span>
              {perk}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={FORM_DELAY} className="relative">
        <LeadForm locale={locale} t={t.form} />
      </FadeIn>
    </Section>
  );
}
