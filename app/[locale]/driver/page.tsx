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
  getBreadcrumbSchema,
  getFaqPageSchema,
  getServiceSchema,
} from "@/src/lib/seo/structuredData";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "fr";

  const copy: Record<
    Locale,
    { title: string; description: string; ogTitle: string; ogDesc: string }
  > = {
    fr: {
      title: "Chauffeur privé sur la Côte d'Azur",
      description:
        "Riviera Prime met ses clients en relation avec des chauffeurs privés indépendants pour transferts aéroport, déplacements professionnels, mise à disposition et événements sur la Côte d'Azur.",
      ogTitle: "Chauffeur privé sur la Côte d'Azur | Riviera Prime",
      ogDesc:
        "Coordination de mise en relation avec des chauffeurs privés indépendants — Nice, Cannes, Monaco, Antibes, Saint-Tropez et transferts aéroport.",
    },
    en: {
      title: "Private chauffeur on the French Riviera",
      description:
        "Riviera Prime connects clients with independent private chauffeurs for airport transfers, business travel, chauffeur hire, and events on the French Riviera.",
      ogTitle: "Private chauffeur on the French Riviera | Riviera Prime",
      ogDesc:
        "Coordinated introductions to independent private chauffeurs — Nice, Cannes, Monaco, Antibes, Saint-Tropez, and airport transfers.",
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
      locale === "fr"
        ? "Coordination chauffeur privé sur la Côte d'Azur"
        : "Private chauffeur coordination on the French Riviera",
    description:
      locale === "fr"
        ? "Riviera Prime coordonne la mise en relation avec des chauffeurs privés indépendants pour transferts, déplacements professionnels, mise à disposition et événements sur la Côte d'Azur."
        : "Riviera Prime coordinates introductions to independent private chauffeurs for transfers, business travel, chauffeur hire, and events on the French Riviera.",
    serviceType:
      locale === "fr"
        ? "Coordination de chauffeur privé"
        : "Private chauffeur coordination",
  });

  const breadcrumbSchema = getBreadcrumbSchema(locale, [
    {
      name: locale === "fr" ? "Accueil" : "Home",
      path: "/",
    },
    {
      name:
        locale === "fr"
          ? "Chauffeur privé"
          : "Private chauffeur",
      path: "/driver",
    },
  ]);

  return (
    <Fragment>
      <JsonLd
        data={[
          serviceSchema,
          breadcrumbSchema,
          getFaqPageSchema(chauffeurContent.faqItems),
        ]}
      />
      <MainDriverSection
        title={chauffeurContent.heroSection.title}
        subtitle={chauffeurContent.heroSection.subtitle}
        buttonText={chauffeurContent.heroSection.buttonText}
        buttonLink={chauffeurContent.heroSection.buttonLink}
      />
      <MainContainer className="flex flex-col gap-27">
        <section className="w-full" aria-labelledby="driver-seo-intro">
          <h2
            id="driver-seo-intro"
            className="font-benzin text-white text-center text-2xl mb-6 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-8"
          >
            {chauffeurContent.seoIntro.title}
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {chauffeurContent.seoIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base font-light leading-relaxed text-text-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
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
