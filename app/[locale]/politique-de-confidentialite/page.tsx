import type { Metadata } from "next";
import React from "react";
import { getContent } from "@/src/content";
import { LegalPageContent } from "@/src/components/Legal/LegalPageContent";
import {
  buildLegalPageMetadata,
  getPageLocale,
} from "@/src/lib/i18n/legal-metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);

  return buildLegalPageMetadata({
    locale,
    path: "/politique-de-confidentialite",
    fr: getContent("fr").legal.privacyPolicy.meta,
    en: getContent("en").legal.privacyPolicy.meta,
  });
}

export default async function PolitiqueDeConfidentialite({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const { privacyPolicy } = getContent(locale).legal;

  return <LegalPageContent page={privacyPolicy} />;
}
