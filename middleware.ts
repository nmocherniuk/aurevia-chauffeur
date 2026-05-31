import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/src/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

function shouldSkipLocaleRedirect(pathname: string): boolean {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldSkipLocaleRedirect(pathname)) {
    const response = NextResponse.next();
    response.headers.set("x-locale", defaultLocale);
    return response;
  }

  const segment = pathname.split("/")[1];
  const hasLocalePrefix = segment && isLocale(segment);

  if (hasLocalePrefix) {
    const response = NextResponse.next();
    response.headers.set("x-locale", segment);
    return response;
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname =
    pathname === "/"
      ? `/${defaultLocale}`
      : `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
