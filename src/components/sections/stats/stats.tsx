import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { SECTION_IDS } from "@/lib/constants";
import { leadHref } from "@/lib/navigation";
import { ButtonLink } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatRow } from "./stat-row";

export function Stats({ locale, t }: { locale: Locale; t: Dictionary["stats"] }) {
  return (
    <Section id={SECTION_IDS.stats} sheet>
      <SectionHeader section={SECTION_IDS.stats} title={t.title} />

      <dl className="mt-14 border-b border-line md:mt-20">
        {t.items.map((stat, index) => (
          <StatRow key={stat.key} stat={stat} locale={locale} index={index} />
        ))}
      </dl>

      <FadeIn className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-center md:justify-between">
        <p className="max-w-lg font-display text-xl font-medium tracking-tight text-balance md:text-2xl">{t.ctaText}</p>
        <ButtonLink href={leadHref(locale)} size="lg" withArrow className="w-full shrink-0 sm:w-auto">
          {t.cta}
        </ButtonLink>
      </FadeIn>
    </Section>
  );
}
