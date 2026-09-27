import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { ru } from "./dictionaries/ru";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
