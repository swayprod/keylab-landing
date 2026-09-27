import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { SECTION_IDS } from "@/lib/constants";
import { leadHref } from "@/lib/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { CaseCard } from "./case-card";
import { CasesTitle } from "./cases-title";

const COLUMN_DELAY = 0.08;

export function Cases({ locale, t }: { locale: Locale; t: Dictionary["cases"] }) {
  const [featured, ...rest] = t.items;

  return (
    <Section id={SECTION_IDS.cases} tone="light" className="pt-8 md:pt-12">
      <CasesTitle title={t.title} />
      <FadeIn>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:ml-auto md:text-lg">{t.subtitle}</p>
      </FadeIn>

      <div className="mt-16 md:mt-24">
        <CaseCard item={featured} featured />
      </div>

      <ul className="mt-16 grid gap-14 md:mt-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {rest.map((item, index) => (
          <li key={item.key}>
            <FadeIn delay={index * COLUMN_DELAY}>
              <CaseCard item={item} />
            </FadeIn>
          </li>
        ))}
      </ul>

      <Link
        href={leadHref(locale)}
        className="group mt-16 inline-flex min-h-11 items-center gap-3 font-display text-xl font-semibold tracking-tight md:mt-24 md:text-3xl"
      >
        <span className="underline decoration-line decoration-2 underline-offset-8 transition-colors duration-300 group-hover:decoration-[var(--tone-accent)]">
          {t.cta}
        </span>
        <ArrowUpRight aria-hidden="true" className="h-6 w-6 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </Section>
  );
}
