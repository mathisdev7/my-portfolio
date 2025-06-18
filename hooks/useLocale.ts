"use client";

import { setLocaleCookie } from "@/lib/locale";
import { useLocale as useNextIntlLocale } from "next-intl";
import { useTransition } from "react";

export const locales = ["en", "fr", "de", "it", "es"] as const;
export type Locale = (typeof locales)[number];

export function useLocale() {
  const currentLocale = useNextIntlLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const setLocale = (newLocale: Locale) => {
    startTransition(() => {
      setLocaleCookie(newLocale);
    });
  };

  return { locale: currentLocale, setLocale, isPending };
}
