import { getContent } from "@/src/content";
import { getRoutes } from "@/src/config/routes";
import type { Locale } from "@/src/i18n/config";
import { stripLocaleFromPathname } from "@/src/i18n/paths";

export type RouteId =
  | "route-1-home"
  | "route-2-privacy"
  | "route-3-terms"
  | "route-4-legal"
  | "route-5-cookies";

export interface Route {
  id: RouteId;
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  /** In-page section id (DOM `id`); scroll is handled in JS, not via URL hash. */
  sectionId?: string;
}

export function getFooterRoutes(locale: Locale): Route[] {
  const routes = getRoutes(locale);
  const { footer } = getContent(locale).common;

  return [
    {
      id: "route-2-privacy",
      name: footer.privacy,
      href: routes.legal.privacyPolicy,
    },
    { id: "route-3-terms", name: footer.terms, href: routes.legal.terms },
    {
      id: "route-4-legal",
      name: footer.legalNotice,
      href: routes.legal.legalNotice,
    },
    { id: "route-5-cookies", name: footer.cookies, href: routes.legal.cookies },
  ];
}

export const FOOTER_ROUTE_IDS: RouteId[] = [
  "route-2-privacy",
  "route-3-terms",
  "route-4-legal",
  "route-5-cookies",
];

export function getNavLinksForPath(pathname: string, locale: Locale): NavLink[] {
  const path = stripLocaleFromPathname(pathname);
  const routes = getRoutes(locale);
  const { navigation } = getContent(locale).common;

  if (path === "/") {
    return [
      { name: navigation.gateway.chauffeur, href: routes.chauffeur.index },
      { name: navigation.gateway.security, href: routes.security.index },
    ];
  }

  if (path.startsWith("/driver")) {
    return navigation.driver.map(({ name, hash }) => ({
      name,
      href: routes.chauffeur.index,
      sectionId: hash,
    }));
  }

  if (path.startsWith("/security")) {
    return navigation.securityPage.map(({ name, hash }) => ({
      name,
      href: routes.security.index,
      sectionId: hash,
    }));
  }

  return [
    { name: navigation.gateway.chauffeur, href: routes.chauffeur.index },
    { name: navigation.gateway.security, href: routes.security.index },
  ];
}

/** @deprecated Use getFooterRoutes(locale) */
export const ROUTES = getFooterRoutes("fr");

/** @deprecated Use getNavLinksForPath(pathname, locale) */
export const NAV_LINKS_GATEWAY = getNavLinksForPath("/", "fr");

/** @deprecated */
export const NAV_LINKS_DRIVER = getNavLinksForPath("/driver", "fr");

/** @deprecated */
export const NAV_LINKS_SECURITY_PAGE = getNavLinksForPath("/security", "fr");
