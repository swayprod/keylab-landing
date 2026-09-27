"use client";

import { useI18n } from "@/i18n/context";
import { SECTION_IDS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useI18n();

  return (
    <main id={SECTION_IDS.main} className="flex min-h-[80svh] items-center pt-20">
      <Container className="max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">{t.error.title}</h1>
        <p className="mt-4 text-muted">{t.error.text}</p>
        <Button onClick={reset} size="lg" className="mt-8">
          {t.error.retry}
        </Button>
      </Container>
    </main>
  );
}
