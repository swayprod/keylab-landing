export const LOCALES = ["ru", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ru";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const OG_LOCALES: Record<Locale, string> = {
  ru: "ru_RU",
  en: "en_US",
};

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.some((locale) => locale === value);
}

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export function swapLocale(pathname: string, locale: Locale) {
  const [, , ...rest] = pathname.split("/");
  return ["", locale, ...rest].join("/");
}
