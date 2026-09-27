"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { SECTION_IDS } from "@/lib/constants";
import { leadHref } from "@/lib/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqItem } from "./faq-item";

interface FaqProps {
  locale: Locale;
  t: Dictionary["faq"];
  ctaLabel: string;
}

export function Faq({ locale, t, ctaLabel }: FaqProps) {
  const [openId, setOpenId] = useState<string | null>(t.items[0]?.id ?? null);

  return (
    <Section id={SECTION_IDS.faq} tone="light" sheet>
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeader section={SECTION_IDS.faq} title={t.title} />
        <FadeIn className="max-w-sm md:text-right">
          <p className="font-display text-lg font-semibold tracking-tight">{t.asideTitle}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t.asideText}</p>
          <Link href={leadHref(locale)} className="group mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-signal">
            {ctaLabel}
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </FadeIn>
      </div>

      <ul className="mt-14 md:mt-20">
        {t.items.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            open={openId === item.id}
            onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
          />
        ))}
      </ul>
    </Section>
  );
}
