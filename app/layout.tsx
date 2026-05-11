import type { Metadata } from "next";
import { Onest } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import StyledMantaineProvider from "@/src/providers/StyledMantaineProvider";
import { getSiteUrl } from "@/src/lib/site-url";

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
  // icons: {
  //   icon: [
  //     {
  //       url: "/favicons/favicon.svg",
  //       type: "image/svg+xml",
  //       rel: "icon",
  //     },
  //     {
  //       url: "/favicons/favicon-96x96.png",
  //       type: "image/png",
  //       sizes: "96x96",
  //       rel: "icon",
  //     },
  //     {
  //       url: "/favicons/favicon-32x32.png",
  //       type: "image/png",
  //       sizes: "32x32",
  //       rel: "icon",
  //     },
  //     {
  //       url: "/favicons/favicon-16x16.png",
  //       type: "image/png",
  //       sizes: "16x16",
  //       rel: "icon",
  //     },
  //   ],
  //   shortcut: [
  //     {
  //       url: "/favicons/favicon.ico",
  //       type: "image/x-icon",
  //       rel: "shortcut icon",
  //     },
  //   ],
  //   apple: [
  //     {
  //       url: "/favicons/apple-touch-icon.png",
  //       type: "image/png",
  //       sizes: "180x180",
  //       rel: "apple-touch-icon",
  //       fetchPriority: "high",
  //     },
  //   ],
  //   other: [
  //     {
  //       url: "/favicons/safari-pinned-tab.svg",
  //       type: "image/svg+xml",
  //       rel: "mask-icon",
  //       color: "#010F1B",
  //     },
  //     {
  //       url: "/favicons/site.webmanifest",
  //       type: "application/manifest+json",
  //       rel: "manifest",
  //     },
  //   ],
  // },
  applicationName: "Aurevia",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aurevia",
  },
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aurevia - Services premium de transport et sécurité privée",
    template: "%s | Aurevia",
  },
  description:
    "Aurevia propose des services premium de chauffeur privé et de sécurité privée en France pour les particuliers, les professionnels, les événements et les déplacements sur mesure.",
  keywords: [
    "Aurevia",
    "chauffeur privé",
    "service chauffeur privé",
    "VTC haut de gamme",
    "sécurité privée",
    "agent de sécurité",
    "protection rapprochée",
    "bodyguard",
    "transport privé",
    "chauffeur professionnel",
    "sécurité événementielle",
    "France",
    "Paris",
  ],
  authors: [{ name: "Aurevia" }],
  creator: "Aurevia",
  publisher: "Aurevia",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Aurevia",
    title: "Aurevia - Services premium de transport et sécurité privée",
    description:
      "Services premium de chauffeur privé et de sécurité privée en France. Transport haut de gamme, protection rapprochée, sécurité événementielle et accompagnement personnalisé.",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurevia - Chauffeur privé et sécurité privée",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurevia - Services premium de transport et sécurité privée",
    description:
      "Aurevia propose des services haut de gamme de chauffeur privé et de sécurité privée en France.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${onest.variable} ${benzin.variable} flex min-h-dvh flex-col antialiased`}
      >
        <StyledMantaineProvider>
          <Header />
          <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </StyledMantaineProvider>
      </body>
    </html>
  );
}
