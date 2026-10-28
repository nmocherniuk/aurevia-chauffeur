import type { Metadata } from "next";
import MainContainer from "@/src/components/MainContainer";
import { Fragment } from "react/jsx-runtime";
import WhyChooseUsSection from "@/src/features/WhyChooseUsSection";
import ServicesSection from "@/src/features/ServicesSection";
import FAQSection from "@/src/features/FAQSection";
import CTABlock from "@/src/components/CTABlock";
import SecurityFormSection from "@/src/features/SecurityFormSection";
import MainSecuritySection from "@/src/features/MainSection/MainSecuritySection";
import BookingProcessSection from "@/src/features/BookingProcessSection";
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
      title: "Sécurité privée & protection rapprochée Côte d'Azur",
      description:
        "Protection rapprochée, sécurité de villas et sécurité événementielle à Nice, Cannes, Monaco et Saint-Tropez : Riviera Prime facilite l'accès à des entreprises de sécurité privée.",
      ogTitle:
        "Sécurité privée & protection rapprochée Côte d'Azur | Riviera Prime",
      ogDesc:
        "Mise en relation avec des entreprises de sécurité privée pour vos déplacements, villas, événements et besoins de protection sur la Côte d'Azur.",
    },
    en: {
      title: "Private security & close protection, French Riviera",
      description:
        "Close protection, villa security and event security in Nice, Cannes, Monaco and Saint-Tropez: Riviera Prime facilitates access to private security companies.",
      ogTitle:
        "Private security & close protection, French Riviera | Riviera Prime",
      ogDesc:
        "Introductions to private security companies for your travel, villas, events and protection needs on the French Riviera.",
    },
  };

  const t = copy[locale];

  return buildPageMetadata({
    locale,
    path: "/security",
    title: t.title,
    description: t.description,
    openGraphTitle: t.ogTitle,
    openGraphDescription: t.ogDesc,
  });
}

export default async function SecurityPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "fr";
  const { security: securityContent, common: commonContent } =
    getContent(locale);

  const serviceSchema = getServiceSchema({
    locale,
    path: "/security",
    name:
      locale === "fr"
        ? "Mise en relation avec des entreprises de sécurité privée sur la Côte d'Azur"
        : "Introductions to private security companies on the French Riviera",
    description:
      locale === "fr"
        ? "Riviera Prime facilite la mise en relation avec des entreprises de sécurité privée pour la protection rapprochée, la sécurité des villas, des entreprises et des événements. Les prestations sont contractualisées et réalisées par les entreprises prestataires."
        : "Riviera Prime puts clients in touch with private security companies for close protection and villa, business and event security. Services are contracted and carried out by the provider companies.",
    serviceType:
      locale === "fr"
        ? "Mise en relation sécurité privée"
        : "Private security introductions",
  });

  const breadcrumbSchema = getBreadcrumbSchema(locale, [
    {
      name: locale === "fr" ? "Accueil" : "Home",
      path: "/",
    },
    {
      name: locale === "fr" ? "Sécurité privée" : "Private security",
      path: "/security",
    },
  ]);

  return (
    <Fragment>
      <JsonLd
        data={[
          serviceSchema,
          breadcrumbSchema,
          getFaqPageSchema(securityContent.faqItems),
        ]}
      />
      <MainSecuritySection
        title={securityContent.heroSection.title}
        subtitle={securityContent.heroSection.subtitle}
        buttonText={securityContent.heroSection.buttonText}
        buttonLink={securityContent.heroSection.buttonLink}
      />
      <MainContainer className="flex flex-col gap-27">
        <section className="w-full" aria-labelledby="security-seo-intro">
          <h2
            id="security-seo-intro"
            className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11"
          >
            {securityContent.seoIntro.title}
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
            {securityContent.seoIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="min-w-0 text-base font-light leading-relaxed text-text-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        <WhyChooseUsSection
          title={commonContent.sectionTitles.whyChooseUs}
          items={securityContent.whyChooseUsItems}
        />
        <div className="flex flex-col gap-12">
          <ServicesSection type="security" />
          <CTABlock
            title={securityContent.securityCta.title}
            description={securityContent.securityCta.description}
            buttonText={securityContent.securityCta.buttonText}
            buttonLink={securityContent.securityCta.buttonLink}
          />
        </div>
        <BookingProcessSection
          title={securityContent.processSection.title}
          items={securityContent.securityProcessStepsItems}
        />
        <SecurityFormSection />
        <div className="flex flex-col gap-12">
          <FAQSection
            title={securityContent.faqTitle}
            items={securityContent.faqItems}
          />
          <CTABlock
            title={securityContent.faqContact.title}
            description={securityContent.faqContact.description}
            socialMediaLink={true}
          />
        </div>
      </MainContainer>
    </Fragment>
  );
}
