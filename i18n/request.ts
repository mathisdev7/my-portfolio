import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["en", "fr", "de", "it", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value as Locale) || defaultLocale;

  return {
    locale,
    messages: (await import(`../locales/${locale}/common.json`)).default,
  };
});
