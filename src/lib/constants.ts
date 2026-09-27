export const BRAND_NAME = "KEYLAB";

export const AUTHOR = {
  handle: "@wonkymp3",
  url: "https://t.me/wonkymp3",
} as const;

export const MAKER = {
  name: "swayprod.",
  url: "https://swayprod.surge.sh",
} as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.35,
  slow: 0.6,
} as const;

export const REVEAL_OFFSET = 18;

export const SECTION_IDS = {
  main: "main",
  top: "top",
  benefits: "benefits",
  process: "process",
  cases: "cases",
  stats: "stats",
  faq: "faq",
  lead: "lead",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export function titleId(section: SectionId) {
  return `${section}-title`;
}
