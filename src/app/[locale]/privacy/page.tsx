import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SECTION_IDS } from "@/lib/constants";
import { pageMetadata } from "../metadata";

const PATH = "/privacy";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    ...pageMetadata({ locale, title: t.privacy.title, description: t.privacy.paragraphs[0], path: PATH }),
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale).privacy;

  return (
    <main id={SECTION_IDS.main} tabIndex={-1} className="pt-32 pb-24 focus:outline-none md:pt-44 md:pb-36">
      <Container className="max-w-3xl">
        <Link href={localePath(locale)} className="label inline-flex min-h-11 items-center gap-2 hover:text-fg">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          {t.back}
        </Link>
        <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">{t.title}</h1>
        <p className="label mt-4">{t.updated}</p>
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
