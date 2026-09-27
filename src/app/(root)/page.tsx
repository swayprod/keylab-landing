import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, localePath } from "@/i18n/config";
import { BRAND_COLORS } from "@/lib/brand";

const LANGUAGE_NAMES: Record<(typeof LOCALES)[number], string> = { ru: "Русский", en: "English" };

const redirectScript = `
(function () {
  var locales = ${JSON.stringify(LOCALES)};
  var match = document.cookie.match(/(?:^|; )${LOCALE_COOKIE}=([^;]+)/);
  var preferred = match ? [match[1]] : (navigator.languages || [navigator.language]).map(function (l) { return l.slice(0, 2).toLowerCase(); });
  var locale = preferred.find(function (l) { return locales.indexOf(l) !== -1; }) || ${JSON.stringify(DEFAULT_LOCALE)};
  location.replace("/" + locale + location.hash);
})();
`;

export default function RootRedirect() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${localePath(DEFAULT_LOCALE)}`} />
      </noscript>
      <nav style={{ display: "flex", gap: 24 }}>
        {LOCALES.map((locale) => (
          <a key={locale} href={localePath(locale)} lang={locale} style={{ color: BRAND_COLORS.accent }}>
            {LANGUAGE_NAMES[locale]}
          </a>
        ))}
      </nav>
    </main>
  );
}
