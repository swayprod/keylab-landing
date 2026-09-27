"use client";

import type { KeyboardEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, swapLocale, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/context";
import { persistLocale } from "@/i18n/persist-locale";
import { cn } from "@/lib/cn";

const STEP_BY_KEY: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  const select = (next: Locale) => {
    if (next === locale) return;
    persistLocale(next);
    router.replace(`${swapLocale(pathname, next)}${window.location.hash}`, { scroll: false });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = STEP_BY_KEY[event.key];
    if (!step) return;
    event.preventDefault();
    const next = LOCALES[(LOCALES.indexOf(locale) + step + LOCALES.length) % LOCALES.length];
    event.currentTarget.querySelector<HTMLButtonElement>(`[data-locale="${next}"]`)?.focus();
    select(next);
  };

  return (
    <div
      role="radiogroup"
      aria-label={t.meta.language}
      onKeyDown={onKeyDown}
      className={cn("flex items-center rounded-full border border-line p-1 font-mono text-xs uppercase", className)}
    >
      {LOCALES.map((item) => {
        const selected = item === locale;
        return (
          <button
            key={item}
            type="button"
            role="radio"
            lang={item}
            data-locale={item}
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => select(item)}
            className={cn(
              "min-h-9 min-w-11 rounded-full px-3 transition-colors duration-300",
              selected ? "bg-fg text-[var(--tone-bg)]" : "text-muted hover:text-fg",
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
