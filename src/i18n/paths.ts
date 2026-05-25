import { defaultLocale, isLocale, locales, type Locale } from "./config";

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return segment && isLocale(segment) ? segment : null;
}

export function stripLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname.replace(/\/$/, "") || "/";

  const withoutLocale = pathname.slice(`/${locale}`.length) || "/";
  return withoutLocale.replace(/\/$/, "") || "/";
}

/** Path without locale prefix or trailing slash (e.g. `/fr/driver` → `/driver`). */
export function normalizePathWithoutLocale(pathname: string): string {
  const stripped = stripLocaleFromPathname(pathname);
  const trimmed = stripped.replace(/\/$/, "");
  return trimmed === "" ? "/" : trimmed;
}

/** Locale-agnostic pathname from an href, ignoring any `#hash`. */
export function pathWithoutLocaleFromHref(href: string): string {
  const base = href.split("#")[0];
  const raw = base === "" ? "/" : base;
  return normalizePathWithoutLocale(raw);
}

/** True when `href` points to the same page as `pathname` (locale-agnostic, ignores `#hash`). */
export function isSamePagePath(pathname: string, href: string): boolean {
  return pathWithoutLocaleFromHref(href) === normalizePathWithoutLocale(pathname);
}

export function localizePath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const [pathname, hash = ""] = normalized.split("#");
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const localized =
    cleanPath === "/"
      ? `/${locale}`
      : `/${locale}${cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`}`;

  return hash ? `${localized}#${hash}` : localized;
}

export function buildLanguageAlternates(pathWithoutLocale: string) {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localizePath(pathWithoutLocale, locale)]),
  ) as Record<Locale, string>;

  return {
    ...languages,
    "x-default": localizePath(pathWithoutLocale, defaultLocale),
  };
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  return localizePath(pathWithoutLocale, targetLocale);
}
