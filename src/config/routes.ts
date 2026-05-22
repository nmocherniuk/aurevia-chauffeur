import type { Locale } from "@/src/i18n/config";
import { localizePath } from "@/src/i18n/paths";

const routePaths = {
  home: {
    index: "/",
    services: "/#services",
  },
  chauffeur: {
    index: "/driver",
    request: "/driver/request",
    book: "/driver#reserver",
  },
  security: {
    index: "/security",
    request: "/security/request",
    book: "/security#reserver",
  },
  legal: {
    privacyPolicy: "/politique-de-confidentialite",
    terms: "/conditions-generales",
    legalNotice: "/mentions-legales",
    cookies: "/politique-de-cookies",
  },
} as const;

export function getRoutes(locale: Locale) {
  return {
    home: {
      index: localizePath(routePaths.home.index, locale),
      services: localizePath(routePaths.home.services, locale),
    },
    chauffeur: {
      index: localizePath(routePaths.chauffeur.index, locale),
      request: localizePath(routePaths.chauffeur.request, locale),
      book: localizePath(routePaths.chauffeur.book, locale),
    },
    security: {
      index: localizePath(routePaths.security.index, locale),
      request: localizePath(routePaths.security.request, locale),
      book: localizePath(routePaths.security.book, locale),
    },
    legal: {
      privacyPolicy: localizePath(routePaths.legal.privacyPolicy, locale),
      terms: localizePath(routePaths.legal.terms, locale),
      legalNotice: localizePath(routePaths.legal.legalNotice, locale),
      cookies: localizePath(routePaths.legal.cookies, locale),
    },
  };
}

/** @deprecated Use getRoutes(locale) for locale-aware paths */
export const routes = getRoutes("fr");
