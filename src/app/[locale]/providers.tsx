"use client";

import type { ReactNode } from "react";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import type { Locale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/context";
import type { CommonDictionary } from "@/i18n/types";

interface ProvidersProps {
  locale: Locale;
  t: CommonDictionary;
  children: ReactNode;
}

export function Providers({ locale, t, children }: ProvidersProps) {
  return (
    <I18nProvider locale={locale} t={t}>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </I18nProvider>
  );
}
