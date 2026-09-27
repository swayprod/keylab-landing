import type { Dictionary } from "@/i18n/types";
import { SECTION_IDS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const STAGGER = 0.06;

export function HowItWorks({ t }: { t: Dictionary["steps"] }) {
  return (
    <Section id={SECTION_IDS.process} tone="light" sheet containerClassName="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <SectionHeader
        section={SECTION_IDS.process}
        title={t.title}
        subtitle={t.subtitle}
        className="lg:sticky lg:top-32 lg:self-start"
      />

      <div className="relative">
        <span aria-hidden="true" className="absolute top-7 bottom-7 left-7 w-px bg-line" />
        <ol>
          {t.items.map((step, index) => (
            <li key={step.key} className="pb-12 last:pb-0 md:pb-16">
              <FadeIn delay={index * STAGGER} className="relative flex gap-6 md:gap-8">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-[var(--tone-bg)] font-display text-lg font-semibold text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pt-2.5">
                  <p className="label">{step.duration}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">{step.text}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
