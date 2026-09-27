export type NavKey = "benefits" | "process" | "cases" | "faq";
export type BenefitKey = "site" | "visual" | "traffic" | "leads" | "launch";
export type StepKey = "audit" | "strategy" | "build" | "growth";
export type CaseKey = "clinic" | "retail" | "service" | "cafe";
export type StatKey = "projects" | "growth" | "years" | "launch";
export type ProblemKey = "site" | "visual" | "traffic" | "all";

export interface Dictionary {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly skip: string;
    readonly menuOpen: string;
    readonly menuClose: string;
    readonly language: string;
    readonly navLabel: string;
    readonly footerNavLabel: string;
  };
  readonly nav: Readonly<Record<NavKey, string>> & { readonly cta: string; readonly ctaLong: string };
  readonly hero: {
    readonly titleStart: string;
    readonly titleAccent: string;
    readonly subtitle: string;
    readonly cta: string;
    readonly secondary: string;
    readonly note: string;
    readonly chips: readonly string[];
    readonly marquee: readonly string[];
  };
  readonly benefits: {
    readonly title: string;
    readonly subtitle: string;
    readonly items: readonly { readonly key: BenefitKey; readonly problem: string; readonly title: string; readonly text: string }[];
  };
  readonly steps: {
    readonly title: string;
    readonly subtitle: string;
    readonly items: readonly { readonly key: StepKey; readonly title: string; readonly text: string; readonly duration: string }[];
  };
  readonly cases: {
    readonly title: string;
    readonly subtitle: string;
    readonly cta: string;
    readonly items: readonly {
      readonly key: CaseKey;
      readonly client: string;
      readonly domain: string;
      readonly services: string;
      readonly niche: string;
      readonly title: string;
      readonly result: string;
      readonly resultLabel: string;
    }[];
  };
  readonly stats: {
    readonly title: string;
    readonly ctaText: string;
    readonly cta: string;
    readonly items: readonly {
      readonly key: StatKey;
      readonly value: number;
      readonly decimals: number;
      readonly prefix: string;
      readonly suffix: string;
      readonly label: string;
    }[];
  };
  readonly faq: {
    readonly title: string;
    readonly asideTitle: string;
    readonly asideText: string;
    readonly items: readonly { readonly id: string; readonly question: string; readonly answer: string }[];
  };
  readonly lead: {
    readonly title: string;
    readonly subtitle: string;
    readonly perks: readonly string[];
    readonly form: {
      readonly name: string;
      readonly namePlaceholder: string;
      readonly contact: string;
      readonly contactPlaceholder: string;
      readonly problems: string;
      readonly problemOptions: Readonly<Record<ProblemKey, string>>;
      readonly submit: string;
      readonly sending: string;
      readonly consent: string;
      readonly consentLink: string;
      readonly errors: { readonly name: string; readonly contact: string; readonly submit: string };
      readonly successTitle: string;
      readonly successText: string;
      readonly again: string;
    };
  };
  readonly footer: {
    readonly tagline: string;
    readonly privacy: string;
    readonly top: string;
    readonly concept: string;
    readonly credit: string;
  };
  readonly privacy: { readonly title: string; readonly updated: string; readonly back: string; readonly paragraphs: readonly string[] };
  readonly error: { readonly title: string; readonly text: string; readonly retry: string };
}

export type CommonDictionary = Pick<Dictionary, "meta" | "nav" | "error">;
