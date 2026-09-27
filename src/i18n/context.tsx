"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Locale } from "./config";
import type { CommonDictionary } from "./types";

interface I18nValue {
  locale: Locale;
  t: CommonDictionary;
}

const I18nContext = createContext<I18nValue | null>(null);

interface I18nProviderProps extends I18nValue {
  children: ReactNode;
}

export function I18nProvider({ locale, t, children }: I18nProviderProps) {
  const value = useMemo(() => ({ locale, t }), [locale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
