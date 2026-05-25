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
    path: "/conditions-generales",
    fr: getContent("fr").legal.terms.meta,
    en: getContent("en").legal.terms.meta,
  });
}

export default async function ConditionsGenerales({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const { terms } = getContent(locale).legal;

  return <LegalPageContent page={terms} />;
}
