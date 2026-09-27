import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { AUTHOR, BRAND_NAME, SECTION_IDS } from "@/lib/constants";
import { NAV_KEYS, navHref, sectionHref } from "@/lib/navigation";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const LINK_CLASS = "inline-flex min-h-11 items-center text-sm text-muted transition-colors duration-300 hover:text-fg";

interface FooterProps {
  locale: Locale;
  t: Pick<Dictionary, "footer" | "nav" | "meta">;
}

export function Footer({ locale, t }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer data-tone="dark" className="overflow-hidden border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_auto] md:py-20">
        <div>
          <Link href={localePath(locale)} className="inline-block rounded-lg">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.meta.footerNavLabel}>
          <ul className="grid grid-cols-2 gap-x-6">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <Link href={navHref(locale, key)} className={LINK_CLASS}>
                  {t.nav[key]}
                </Link>
              </li>
            ))}
            <li className="col-span-2">
              <Link href={localePath(locale, "/privacy")} className={LINK_CLASS}>
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </nav>

        <Link href={sectionHref(locale, SECTION_IDS.top)} className={`${LINK_CLASS} label gap-2 self-start`}>
          {t.footer.top}
          <ArrowUp aria-hidden="true" className="h-4 w-4" />
        </Link>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-line py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {BRAND_NAME}. {t.footer.concept}
        </p>
        <p>
          {t.footer.credit}{" "}
          <a
            href={AUTHOR.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-semibold text-fg underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-signal hover:decoration-[var(--tone-accent)]"
          >
            {AUTHOR.handle}
          </a>
        </p>
      </Container>

      <p
        aria-hidden="true"
        className="-mb-[0.18em] overflow-hidden text-center font-display text-[clamp(4.5rem,24vw,24rem)] leading-[0.8] font-semibold tracking-[-0.04em] text-fg select-none [mask-image:linear-gradient(to_bottom,black_20%,transparent_95%)]"
      >
        {BRAND_NAME}
      </p>
    </footer>
  );
}
