export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

export const dayjsLocales: Record<Locale, string> = {
  fr: "fr",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
