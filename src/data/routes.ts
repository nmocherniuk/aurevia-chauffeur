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

export const ROUTES: Route[] = [
  { id: "route-1-home", name: "Accueil", href: "/" },
  {
    id: "route-2-privacy",
    name: "Confidentialité",
    href: "/politique-de-confidentialite",
  },
  { id: "route-3-terms", name: "Conditions", href: "/conditions-generales" },
  { id: "route-4-legal", name: "Mentions légales", href: "/mentions-legales" },
  { id: "route-5-cookies", name: "Cookies", href: "/politique-de-cookies" },
];

export const FOOTER_ROUTE_IDS: RouteId[] = [
  "route-2-privacy",
  "route-3-terms",
  "route-4-legal",
  "route-5-cookies",
];

export interface NavLink {
  name: string;
  href: string;
}

/** Hub homepage (`/`): enter Chauffeur or Security funnels */
export const NAV_LINKS_GATEWAY: NavLink[] = [
  { name: "Chauffeur", href: "/driver" },
  { name: "Security", href: "/security" },
];

export const NAV_LINKS_DRIVER: NavLink[] = [
  { name: "Début", href: "/driver#accueil" },
  { name: "Pourquoi Nous", href: "/driver#pourquoi-nous" },
  { name: "Prestations", href: "/driver#prestations" },
  { name: "Flotte", href: "/driver#flotte" },
  { name: "Réserver", href: "/driver#reserver" },
  { name: "FAQ", href: "/driver#faq" },
];

export const NAV_LINKS_SECURITY_PAGE: NavLink[] = [
  { name: "Début", href: "/security#accueil" },
  { name: "Pourquoi Nous", href: "/security#pourquoi-nous" },
  { name: "Prestations", href: "/security#prestations" },
  { name: "Processus", href: "/security#itineraires-populaires" },
  { name: "Demande", href: "/security#reserver" },
  { name: "FAQ", href: "/security#faq" },
];

export function getNavLinksForPath(pathname: string): NavLink[] {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === "/") return NAV_LINKS_GATEWAY;
  if (path.startsWith("/driver")) return NAV_LINKS_DRIVER;
  if (path.startsWith("/security")) return NAV_LINKS_SECURITY_PAGE;
  return NAV_LINKS_GATEWAY;
}
