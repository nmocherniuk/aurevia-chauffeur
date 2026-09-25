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
  "/suppression-donnees-personnelles",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return locales.flatMap((locale) =>
    publicPaths.map((path) => {
      const isHome = path === "/";
      const isService = path === "/driver" || path === "/security";
      const languages = Object.fromEntries(
        locales.map((altLocale) => [
          altLocale,
          new URL(localizePath(path, altLocale), siteUrl).toString(),
        ]),
      );

      return {
        url: new URL(localizePath(path, locale), siteUrl).toString(),
        lastModified: new Date(),
        changeFrequency: isHome || isService ? ("weekly" as const) : ("monthly" as const),
        priority: isHome ? 1 : isService ? 0.9 : 0.4,
        alternates: {
          languages: {
            ...languages,
            "x-default": new URL(localizePath(path, "fr"), siteUrl).toString(),
          },
        },
      };
    }),
  );
}
