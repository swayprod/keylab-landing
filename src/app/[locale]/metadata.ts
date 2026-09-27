import type { Metadata } from "next";
import { LOCALES, localePath, OG_LOCALES, type Locale } from "@/i18n/config";
import { BRAND_NAME } from "@/lib/constants";

const OG_SIZE = { width: 1200, height: 630, type: "image/png" } as const;

interface PageMetadataOptions {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}

export function pageMetadata({ locale, title, description, path = "" }: PageMetadataOptions): Metadata {
  const ogImage = { url: `/og-${locale}.png`, ...OG_SIZE };
  const languages = Object.fromEntries(LOCALES.map((item) => [item, localePath(item, path)]));
  return {
    title,
    description,
    alternates: { canonical: localePath(locale, path), languages },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: BRAND_NAME,
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((item) => item !== locale).map((item) => OG_LOCALES[item]),
      url: localePath(locale, path),
      images: [{ ...ogImage, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
