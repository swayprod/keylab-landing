import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, localePath } from "@/i18n/config";
import { BRAND_COLORS } from "@/lib/brand";
import { BRAND_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BRAND_NAME,
  robots: { index: false, follow: true },
  alternates: {
    canonical: localePath(DEFAULT_LOCALE),
    languages: { ...Object.fromEntries(LOCALES.map((locale) => [locale, localePath(locale)])), "x-default": localePath(DEFAULT_LOCALE) },
  },
};

export default function RootRedirectLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body style={{ margin: 0, background: BRAND_COLORS.background, color: BRAND_COLORS.foreground, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
