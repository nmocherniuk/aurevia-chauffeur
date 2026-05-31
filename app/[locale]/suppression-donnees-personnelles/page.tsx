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
    path: "/suppression-donnees-personnelles",
    fr: getContent("fr").legal.dataDeletion.meta,
    en: getContent("en").legal.dataDeletion.meta,
  });
}

export default async function SuppressionDonneesPersonnelles({
  params,
}: PageProps) {
  const locale = await getPageLocale(params);
  const { dataDeletion } = getContent(locale).legal;

  return <LegalPageContent page={dataDeletion} />;
}
