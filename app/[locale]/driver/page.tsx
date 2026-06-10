import type { Metadata } from "next";
import MainContainer from "@/src/components/MainContainer";
import MainDriverSection from "@/src/features/MainSection/MainDriverSection";
import { Fragment } from "react/jsx-runtime";
import WhyChooseUsSection from "@/src/features/WhyChooseUsSection";
import ServicesSection from "@/src/features/ServicesSection";
import FleetSection from "@/src/features/FleetSection";
import PopularRoutesSection from "@/src/features/PopularRoutesSection";
import FAQSection from "@/src/features/FAQSection";
import CTABlock from "@/src/components/CTABlock";
import FormSection from "@/src/features/FormSection";
import { getContent } from "@/src/content";
import { buildPageMetadata } from "@/src/lib/i18n/metadata";
import { isLocale, type Locale } from "@/src/i18n/config";
import { JsonLd } from "@/src/components/JsonLd";
import {
  getFaqPageSchema,
  getServiceSchema,
} from "@/src/lib/seo/structuredData";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "fr";

  const copy: Record<Locale, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
    fr: {
      title: "Chauffeur privé premium",
      description:
        "Réservez un chauffeur privé Riviera Prime pour vos trajets en France: confort haut de gamme, ponctualité et service sur mesure.",
      ogTitle: "Riviera Prime Chauffeur - Transport privé premium",
      ogDesc:
        "Service de chauffeur privé premium pour déplacements professionnels, personnels et événements.",
    },
    en: {
      title: "Premium private chauffeur",
      description:
        "Book an Riviera Prime private chauffeur in France: premium comfort, punctuality, and bespoke service.",
      ogTitle: "Riviera Prime Chauffeur - Premium private transport",
      ogDesc:
        "Premium private chauffeur service for business, personal travel, and events.",
    },
  };

  const t = copy[locale];

  return buildPageMetadata({
    locale,
    path: "/driver",
    title: t.title,
    description: t.description,
    openGraphTitle: t.ogTitle,
    openGraphDescription: t.ogDesc,
  });
}

export default async function DriverPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "fr";
  const { chauffeur: chauffeurContent, common: commonContent } =
    getContent(locale);

  const serviceSchema = getServiceSchema({
    locale,
    path: "/driver",
    name:
      locale === "fr" ? "Chauffeur privé premium" : "Premium private chauffeur",
    description:
      locale === "fr"
        ? "Service de chauffeur privé premium en France : transferts, déplacements professionnels, événements et trajets sur mesure."
        : "Premium private chauffeur service in France: transfers, business travel, events, and bespoke journeys.",
    serviceType: locale === "fr" ? "Chauffeur privé" : "Private chauffeur",
  });

  return (
    <Fragment>
      <JsonLd
        data={[serviceSchema, getFaqPageSchema(chauffeurContent.faqItems)]}
      />
      <MainDriverSection
        title={chauffeurContent.heroSection.title}
        subtitle={chauffeurContent.heroSection.subtitle}
        buttonText={chauffeurContent.heroSection.buttonText}
        buttonLink={chauffeurContent.heroSection.buttonLink}
      />
      <MainContainer className="flex flex-col gap-27">
        <WhyChooseUsSection
          title={commonContent.sectionTitles.whyChooseUs}
          items={chauffeurContent.whyChooseUsItems}
        />
        <div className="flex flex-col gap-12">
          <ServicesSection type="chauffeur" />
          <CTABlock
            title={chauffeurContent.vehicleCta.title}
            description={chauffeurContent.vehicleCta.description}
            buttonText={chauffeurContent.vehicleCta.buttonText}
            buttonLink={chauffeurContent.vehicleCta.buttonLink}
          />
        </div>
        <FleetSection />
        <PopularRoutesSection />
        <FormSection />
        <div className="flex flex-col gap-12">
          <FAQSection
            title={commonContent.sectionTitles.faq}
            items={chauffeurContent.faqItems}
          />
          <CTABlock
            title={chauffeurContent.faqContact.title}
            description={chauffeurContent.faqContact.description}
            socialMediaLink={true}
          />
        </div>
      </MainContainer>
    </Fragment>
  );
}
