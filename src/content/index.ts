import type { Locale } from "@/src/i18n/config";
import { frContent } from "./locales/fr";
import { enContent } from "./locales/en";

export type SiteContent = typeof frContent;

export function getContent(locale: Locale): SiteContent {
  return (locale === "en" ? enContent : frContent) as SiteContent;
}
