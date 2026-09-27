import { localePath, type Locale } from "@/i18n/config";
import type { NavKey } from "@/i18n/types";
import { SECTION_IDS, type SectionId } from "./constants";

const NAV_SECTIONS: Record<NavKey, SectionId> = {
  benefits: SECTION_IDS.benefits,
  process: SECTION_IDS.process,
  cases: SECTION_IDS.cases,
  faq: SECTION_IDS.faq,
};

export const NAV_KEYS: readonly NavKey[] = ["benefits", "process", "cases", "faq"];

export function sectionHref(locale: Locale, section: SectionId) {
  return localePath(locale, `#${section}`);
}

export function navHref(locale: Locale, key: NavKey) {
  return sectionHref(locale, NAV_SECTIONS[key]);
}

export function leadHref(locale: Locale) {
  return sectionHref(locale, SECTION_IDS.lead);
}
