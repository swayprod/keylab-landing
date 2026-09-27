import type { Metadata } from "next";
import { Geologica, Manrope } from "next/font/google";
import { Logo } from "@/components/ui/logo";
import { DEFAULT_LOCALE, LOCALES, localePath } from "@/i18n/config";
import { BRAND_NAME } from "@/lib/constants";
import "./globals.css";

const display = Geologica({ variable: "--font-geologica", subsets: ["latin", "cyrillic"], axes: ["SHRP", "slnt"], display: "swap" });
const sans = Manrope({ variable: "--font-manrope", subsets: ["latin", "cyrillic"], weight: ["400", "600"], display: "swap" });

const COPY = {
  ru: { title: "Такой страницы нет", text: "Возможно, ссылка устарела. Начнём с главной.", back: "На главную" },
  en: { title: "This page doesn't exist", text: "The link may be outdated. Let's start from the home page.", back: "Home page" },
} as const;

export const metadata: Metadata = {
  title: `404 — ${BRAND_NAME}`,
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang={DEFAULT_LOCALE} className={`${display.variable} ${sans.variable}`}>
      <body data-tone="dark" className="flex min-h-svh flex-col">
        <header className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 md:px-6">
          <a href={localePath(DEFAULT_LOCALE)} className="rounded-lg">
            <Logo />
          </a>
        </header>
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-20 md:px-6">
          <p
            aria-hidden="true"
            className="accent-sharp neon-glow font-display text-[clamp(7rem,30vw,22rem)] leading-[0.8] tracking-[-0.04em] text-signal motion-safe:animate-sharpen"
          >
            404
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {LOCALES.map((locale) => (
              <section key={locale} lang={locale}>
                <h1 className="font-display text-3xl font-semibold tracking-tight uppercase md:text-4xl">{COPY[locale].title}</h1>
                <p className="mt-3 max-w-sm text-muted">{COPY[locale].text}</p>
                <a
                  href={localePath(locale)}
                  className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-6 font-semibold text-white transition-[filter] duration-300 hover:brightness-110"
                >
                  {COPY[locale].back}
                </a>
              </section>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
