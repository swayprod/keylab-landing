import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "@/i18n/config";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LOCALES.map((locale) => [locale, `${SITE_URL}${localePath(locale)}`]));
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
