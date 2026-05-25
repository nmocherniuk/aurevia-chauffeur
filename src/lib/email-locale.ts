import type { Locale } from "@/src/i18n/config";

/** Locales supported by backend transactional emails. */
export type EmailLocale = "en" | "fr";

/** Maps site locale to email locale (unknown → English). */
export function toEmailLocale(locale: Locale | string): EmailLocale {
  return locale === "fr" ? "fr" : "en";
}
