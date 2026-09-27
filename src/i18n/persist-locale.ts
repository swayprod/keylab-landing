import { LOCALE_COOKIE, type Locale } from "./config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}
