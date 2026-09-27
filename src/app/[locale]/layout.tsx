import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geologica, JetBrains_Mono, Manrope, Oswald, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/layout/skip-link";
import { isLocale, LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { BRAND_COLORS } from "@/lib/brand";
import { BRAND_NAME, SITE_URL } from "@/lib/constants";
import { pageMetadata } from "./metadata";
import { Providers } from "./providers";
import "../globals.css";

const display = Geologica({ variable: "--font-geologica", subsets: ["latin", "cyrillic"], axes: ["SHRP", "slnt"], display: "swap" });
const sans = Manrope({ variable: "--font-manrope", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin", "cyrillic"], weight: ["400"], display: "swap" });
const mockSerif = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});
const mockCondensed = Oswald({ variable: "--font-oswald", subsets: ["latin", "cyrillic"], weight: ["700"], display: "swap", preload: false });

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  const title = `${BRAND_NAME} — ${t.meta.title}`;
  return {
    ...pageMetadata({ locale, title, description: t.meta.description }),
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s — ${BRAND_NAME}` },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: BRAND_COLORS.background,
  colorScheme: "dark",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable} ${mono.variable} ${mockSerif.variable} ${mockCondensed.variable} motion-safe:scroll-smooth`}>
      <body>
        <Providers locale={locale} t={{ meta: t.meta, nav: t.nav, error: t.error }}>
          <SkipLink label={t.meta.skip} />
          <Header />
          {children}
          <Footer locale={locale} t={t} />
        </Providers>
      </body>
    </html>
  );
}
