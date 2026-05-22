import type { Metadata } from "next";
import { type Locale, ogLocales } from "@/src/i18n/config";
import { buildLanguageAlternates, localizePath } from "@/src/i18n/paths";

type PageMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  robots?: Metadata["robots"];
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  openGraphTitle,
  openGraphDescription,
  robots,
}: PageMetadataInput): Metadata {
  const canonical = localizePath(path, locale);
  const languages = buildLanguageAlternates(path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      url: canonical,
      locale: ogLocales[locale],
      alternateLocale: Object.entries(ogLocales)
        .filter(([key]) => key !== locale)
        .map(([, value]) => value),
      images: ["/images/og-image.jpg"],
    },
    twitter: {
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      images: ["/images/og-image.jpg"],
    },
    ...(robots ? { robots } : {}),
  };
}
