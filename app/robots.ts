import type { MetadataRoute } from "next";
import { locales } from "@/src/i18n/config";
import { getSiteUrl } from "@/src/lib/site-url";

/** Paths that must not be crawled (aligned with sitemap public routes). */
function getDisallowPaths(): string[] {
  const localizedPayment = locales.map(
    (locale) => `/${locale}/security-payment/`,
  );

  return [
    "/api/",
    "/_next/",
    "/security-payment/",
    ...localizedPayment,
  ];
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl().replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: getDisallowPaths(),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
