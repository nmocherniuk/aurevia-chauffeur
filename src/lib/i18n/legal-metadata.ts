import type { Metadata } from "next";
import { buildPageMetadata } from "@/src/lib/i18n/metadata";
import { isLocale, type Locale } from "@/src/i18n/config";

type LegalMetadataInput = {
  locale: Locale;
  path: string;
  fr: { title: string; description: string };
  en: { title: string; description: string };
};

export function buildLegalPageMetadata({
  locale,
  path,
  fr,
  en,
}: LegalMetadataInput): Metadata {
  const copy = locale === "en" ? en : fr;

  return buildPageMetadata({
    locale,
    path,
    title: copy.title,
    description: copy.description,
    openGraphTitle: `${copy.title} | Aurevia`,
    openGraphDescription: copy.description,
  });
}

export async function getPageLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : "fr";
}
