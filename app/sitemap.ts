import type { MetadataRoute } from "next";
import { locales } from "@/src/i18n/config";
import { localizePath } from "@/src/i18n/paths";
import { getSiteUrl } from "@/src/lib/site-url";

const publicPaths = [
  "/",
  "/driver",
  "/security",
  "/politique-de-confidentialite",
  "/conditions-generales",
  "/mentions-legales",
  "/politique-de-cookies",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return locales.flatMap((locale) =>
    publicPaths.map((path) => ({
      url: new URL(localizePath(path, locale), siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [
            altLocale,
            new URL(localizePath(path, altLocale), siteUrl).toString(),
          ]),
        ),
      },
    })),
  );
}
