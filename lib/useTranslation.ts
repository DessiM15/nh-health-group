"use client";

import { useLanguage } from "./LanguageContext";
import en from "./translations/en.json";
import es from "./translations/es.json";

const dictionaries = { en, es } as const;

export function useTranslation() {
  const { lang } = useLanguage();
  const dict = dictionaries[lang] as Record<string, unknown>;

  const t = (key: string): string => {
    const parts = key.split(".");
    let value: unknown = dict;
    for (const part of parts) {
      if (value && typeof value === "object") {
        value = (value as Record<string, unknown>)[part];
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };

  return { t, lang };
}
