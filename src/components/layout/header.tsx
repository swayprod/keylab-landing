"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { localePath } from "@/i18n/config";
import { useI18n } from "@/i18n/context";
import { useScrolled } from "@/hooks/use-scrolled";
import { useToneUnder } from "@/hooks/use-tone-under";
import { leadHref, NAV_KEYS, navHref } from "@/lib/navigation";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";

const MENU_ID = "mobile-menu";
const HEADER_PROBE_Y = 72;

export function Header() {
  const { locale, t } = useI18n();
  const scrolled = useScrolled();
  const tone = useToneUnder(HEADER_PROBE_Y, "header");
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    burgerRef.current?.focus();
  }, []);

  return (
    <header
      data-tone={tone}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color,backdrop-filter] duration-500",
        scrolled
          ? "border-line bg-[color-mix(in_srgb,var(--tone-bg)_78%,transparent)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href={localePath(locale)} className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label={t.meta.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <Link href={navHref(locale, key)} className="label inline-flex min-h-11 items-center rounded-full px-4 transition-colors duration-300 hover:text-fg">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ButtonLink href={leadHref(locale)} withArrow>
            {t.nav.cta}
          </ButtonLink>
        </div>

        <button
          ref={burgerRef}
          type="button"
          aria-label={t.meta.menuOpen}
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
      </Container>

      <MobileMenu id={MENU_ID} open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
