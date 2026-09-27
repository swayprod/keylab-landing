import { notFound } from "next/navigation";
import { Benefits } from "@/components/sections/benefits/benefits";
import { Cases } from "@/components/sections/cases/cases";
import { Faq } from "@/components/sections/faq/faq";
import { Hero } from "@/components/sections/hero/hero";
import { HowItWorks } from "@/components/sections/how-it-works/how-it-works";
import { FinalCta } from "@/components/sections/lead/final-cta";
import { Stats } from "@/components/sections/stats/stats";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SECTION_IDS } from "@/lib/constants";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <main id={SECTION_IDS.main} tabIndex={-1} className="focus:outline-none">
      <Hero locale={locale} t={t.hero} />
      <Benefits t={t.benefits} />
      <HowItWorks t={t.steps} />
      <Cases locale={locale} t={t.cases} />
      <Stats locale={locale} t={t.stats} />
      <Faq locale={locale} t={t.faq} ctaLabel={t.nav.cta} />
      <FinalCta locale={locale} t={t.lead} />
    </main>
  );
}
