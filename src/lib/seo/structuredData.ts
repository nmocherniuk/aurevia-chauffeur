import type { Locale } from "@/src/i18n/config";
import { getSiteUrl } from "@/src/lib/site-url";
import { localizePath } from "@/src/i18n/paths";
import type { FaqItem } from "@/src/features/FAQSection";

/**
 * Central organisation facts (from mentions légales / brand).
 * Keep in sync with the legal content in `src/content/locales`.
 */
const ORGANIZATION = {
  legalName: "RIVIERA STRATEGIE",
  brandName: "Riviera Prime",
  email: "contact@riviera-prime.com",
  telephone: "+33614622783",
  vatId: "FR83944948074",
  address: {
    street: "867 Avenue de Provence, Résidence Les Fougasses Bâtiment 2",
    postalCode: "83600",
    locality: "Fréjus",
    region: "Provence-Alpes-Côte d'Azur",
    country: "FR",
  },
} as const;

const ORGANIZATION_DESCRIPTION: Record<Locale, string> = {
  fr: "Plateforme premium de coordination de services de chauffeur privé et de sécurité privée en France.",
  en: "Premium coordination platform for private chauffeur and private security services in France.",
};

function orgId(siteUrl: string): string {
  return `${siteUrl}/#organization`;
}

function websiteId(siteUrl: string): string {
  return `${siteUrl}/#website`;
}

function absolute(siteUrl: string, path: string): string {
  return new URL(path, siteUrl).toString();
}

/** Organisation (provider) node — used site-wide via @id reference. */
export function getOrganizationSchema(locale: Locale) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId(siteUrl),
    name: ORGANIZATION.brandName,
    legalName: ORGANIZATION.legalName,
    url: absolute(siteUrl, localizePath("/", locale)),
    logo: absolute(siteUrl, "/logo-with-text.svg"),
    image: absolute(siteUrl, "/images/og-image.jpg"),
    description: ORGANIZATION_DESCRIPTION[locale],
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    vatID: ORGANIZATION.vatId,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORGANIZATION.address.street,
      postalCode: ORGANIZATION.address.postalCode,
      addressLocality: ORGANIZATION.address.locality,
      addressRegion: ORGANIZATION.address.region,
      addressCountry: ORGANIZATION.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
      availableLanguage: ["fr", "en"],
    },
  };
}

/** WebSite node — enables sitelinks / search understanding. */
export function getWebSiteSchema(locale: Locale) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(siteUrl),
    url: absolute(siteUrl, localizePath("/", locale)),
    name: ORGANIZATION.brandName,
    inLanguage: locale,
    publisher: { "@id": orgId(siteUrl) },
  };
}

type ServiceSchemaInput = {
  locale: Locale;
  path: string;
  name: string;
  description: string;
  /** e.g. "Chauffeur service", "Security service". */
  serviceType: string;
};

/** Service node (chauffeur / security) linked to the organisation as provider. */
export function getServiceSchema({
  locale,
  path,
  name,
  description,
  serviceType,
}: ServiceSchemaInput) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absolute(siteUrl, localizePath(path, locale)),
    provider: { "@id": orgId(siteUrl) },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    availableLanguage: ["fr", "en"],
  };
}

/** FAQPage node from page FAQ items. */
export function getFaqPageSchema(items: ReadonlyArray<FaqItem>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
