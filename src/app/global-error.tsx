"use client";

import { en } from "@/i18n/dictionaries/en";
import { ru } from "@/i18n/dictionaries/ru";
import { BRAND_COLORS } from "@/lib/brand";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: BRAND_COLORS.background,
          color: BRAND_COLORS.foreground,
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
        }}
      >
        <main>
          <h1>{ru.error.title}</h1>
          <p lang="en" style={{ color: BRAND_COLORS.muted }}>
            {en.error.title}
          </p>
          <button
            type="button"
            onClick={reset}
            style={{ marginTop: 24, padding: "14px 28px", border: 0, borderRadius: 999, background: BRAND_COLORS.primary, color: "#fff", font: "inherit", cursor: "pointer" }}
          >
            {ru.error.retry} / {en.error.retry}
          </button>
        </main>
      </body>
    </html>
  );
}
