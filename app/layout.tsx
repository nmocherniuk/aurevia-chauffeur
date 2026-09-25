import type { Metadata } from "next";
import { headers } from "next/headers";
import { Onest } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StyledMantaineProvider from "@/src/providers/StyledMantaineProvider";
import { getSiteUrl } from "@/src/lib/site-url";
import { defaultLocale, isLocale, ogLocales } from "@/src/i18n/config";
import { buildLanguageAlternates } from "@/src/i18n/paths";

const siteUrl = getSiteUrl();

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const benzin = localFont({
  src: "../public/fonts/Benzin-Semibold.woff2",
  variable: "--font-benzin",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/favicons/favicon.svg",
        type: "image/svg+xml",
        rel: "icon",
      },
      {
        url: "/favicons/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
        rel: "icon",
      },
      {
        url: "/favicons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
        rel: "icon",
      },
      {
        url: "/favicons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
        rel: "icon",
      },
    ],
    shortcut: [
      {
        url: "/favicons/favicon.ico",
        type: "image/x-icon",
        rel: "shortcut icon",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
        rel: "apple-touch-icon",
        fetchPriority: "high",
      },
    ],
    other: [
      {
        url: "/favicons/safari-pinned-tab.svg",
        type: "image/svg+xml",
        rel: "mask-icon",
        color: "#060505",
      },
      {
        url: "/favicons/site.webmanifest",
        type: "application/manifest+json",
        rel: "manifest",
      },
    ],
  },
  applicationName: "Riviera Prime",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Riviera Prime",
  },
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Chauffeur privé & sécurité privée sur la Côte d'Azur | Riviera Prime",
    template: "%s | Riviera Prime",
  },
  description:
    "Riviera Prime coordonne la mise en relation avec des chauffeurs privés et des professionnels indépendants de la sécurité privée sur la Côte d'Azur.",
  keywords: [
    "Riviera Prime",
    "chauffeur privé",
    "chauffeur privé Côte d'Azur",
    "transport avec chauffeur",
    "transfert aéroport",
    "sécurité privée",
    "protection rapprochée",
    "sécurité événementielle",
    "Côte d'Azur",
    "Nice",
    "Cannes",
    "Monaco",
  ],
  authors: [{ name: "Riviera Prime" }],
  creator: "Riviera Prime",
  publisher: "Riviera Prime",
  openGraph: {
    type: "website",
    locale: ogLocales.fr,
    alternateLocale: [ogLocales.en],
    siteName: "Riviera Prime",
    title:
      "Chauffeur privé & sécurité privée sur la Côte d'Azur | Riviera Prime",
    description:
      "Plateforme de coordination qui met ses clients en relation avec des chauffeurs privés et des professionnels indépendants de la sécurité sur la Côte d'Azur.",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Riviera Prime — chauffeur privé et sécurité privée sur la Côte d'Azur",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chauffeur privé & sécurité privée sur la Côte d'Azur | Riviera Prime",
    description:
      "Riviera Prime coordonne la mise en relation avec des chauffeurs privés et des professionnels indépendants de la sécurité sur la Côte d'Azur.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "services",
  alternates: {
    languages: buildLanguageAlternates("/"),
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html lang={locale} className="h-full">
      <body
        className={`${onest.variable} ${benzin.variable} flex min-h-dvh flex-col antialiased`}
      >
        <StyledMantaineProvider>{children}</StyledMantaineProvider>
      </body>
    </html>
  );
}
