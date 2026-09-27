"use client";

import { useRef } from "react";
import Link from "next/link";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { useModal } from "@/hooks/use-modal";
import { fadeUp } from "@/lib/motion";
import { leadHref, NAV_KEYS, navHref } from "@/lib/navigation";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { LanguageSwitcher } from "./language-switcher";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

const STAGGER = 0.05;

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const { locale, t } = useI18n();
  const reducedMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  useModal(dialogRef, open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          ref={dialogRef}
          id={id}
          data-tone="dark"
          role="dialog"
          aria-modal="true"
          aria-label={t.meta.navLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-bg/95 px-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label={t.meta.menuClose}
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label={t.meta.navLabel} className="mt-10 flex-1">
            <ul className="space-y-1">
              {NAV_KEYS.map((key, index) => (
                <m.li key={key} {...fadeUp(reducedMotion, STAGGER * index)}>
                  <Link href={navHref(locale, key)} onClick={onClose} className="block py-3 font-display text-4xl font-semibold tracking-tight">
                    {t.nav[key]}
                  </Link>
                </m.li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <LanguageSwitcher className="self-start" />
            <ButtonLink href={leadHref(locale)} size="lg" withArrow onClick={onClose} className="w-full">
              {t.nav.ctaLong}
            </ButtonLink>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
