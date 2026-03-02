export type RouteId =
    | "route-1-home"
    | "route-2-privacy"
    | "route-3-terms"
    | "route-4-legal"
    | "route-5-cookies"

export interface Route {
    id: RouteId
    name: string
    href: string
}

export const ROUTES: Route[] = [
    { id: "route-1-home", name: "Home", href: "/" },
    { id: "route-2-privacy", name: "Privacy Policy", href: "/privacy-policy" },
    { id: "route-3-terms", name: "Terms of Service", href: "/terms-of-service" },
    { id: "route-4-legal", name: "Mentions légales", href: "/mentions-legales" },
    { id: "route-5-cookies", name: "Cookie Policy", href: "/cookie-policy" },
]

export const FOOTER_ROUTE_IDS: RouteId[] = [
    "route-2-privacy",
    "route-3-terms",
    "route-4-legal",
    "route-5-cookies",
]

export interface NavLink {
    name: string
    href: string
}

export const NAV_LINKS_MAIN_PAGE: NavLink[] = [
    { name: "Accueil", href: "/#accueil" },
    { name: "Pourquoi Nous", href: "/#pourquoi-nous" },
    { name: "Prestations", href: "/#prestations" },
    { name: "Flotte", href: "/#flotte" },
    { name: "Réserver", href: "/#reserver" },
    { name: "FAQ", href: "/#faq" },
]