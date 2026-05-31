import type { Metadata } from "next";
import React from "react";
import MainContainer from "@/src/components/MainContainer";
import { SecurityPaymentView } from "@/src/features/SecurityPayment/SecurityPaymentView";
import { getContent } from "@/src/content";
import { buildPageMetadata } from "@/src/lib/i18n/metadata";
import { getPageLocale } from "@/src/lib/i18n/legal-metadata";

type PageProps = {
  params: Promise<{ locale: string; token: string }>;
  searchParams: Promise<{ redirect_status?: string }>;
};

const noIndexRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const { token } = await params;
  const { meta } = getContent(locale).securityPayment;

  return buildPageMetadata({
    locale,
    path: `/security-payment/${token}`,
    title: meta.title,
    description: meta.description,
    robots: noIndexRobots,
  });
}

export default async function SecurityPaymentPage({
  params,
  searchParams,
}: PageProps) {
  const { token } = await params;
  const sp = await searchParams;

  return (
    <MainContainer className="flex min-h-0 w-full flex-1 flex-col pt-32">
      <SecurityPaymentView
        token={token}
        redirectStatus={sp.redirect_status ?? null}
      />
    </MainContainer>
  );
}
