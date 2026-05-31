import type { Locale } from "@/src/i18n/config";

export function formatBookingDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  const localeTag = locale === "fr" ? "fr-FR" : "en-GB";
  return d.toLocaleDateString(localeTag, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
}

export function formatBookingTime(iso: string, locale: Locale): string {
  const d = new Date(iso);
  const localeTag = locale === "fr" ? "fr-FR" : "en-GB";
  return d.toLocaleTimeString(localeTag, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Paris",
  });
}

export function fillTemplate(
  template: string,
  values: Record<string, string | number>,
): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  );
}
