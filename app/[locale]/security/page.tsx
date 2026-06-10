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
      title: "Sécurité privée premium",
      description:
        "Riviera Prime propose des services de sécurité privée en France: protection rapprochée, sécurisation d'événements et accompagnement professionnel.",
      ogTitle: "Riviera Prime Security - Services de sécurité privée",
      ogDesc:
        "Protection rapprochée, sécurité événementielle et accompagnement premium partout en France.",
    },
    en: {
      title: "Premium private security",
      description:
        "Riviera Prime offers private security services in France: close protection, event security, and professional escort.",
      ogTitle: "Riviera Prime Security - Private security services",
      ogDesc:
        "Close protection, event security, and premium escort services across France.",
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
      locale === "fr" ? "Sécurité privée premium" : "Premium private security",
    description:
      locale === "fr"
        ? "Services de sécurité privée en France : protection rapprochée, sécurisation d'événements et accompagnement professionnel."
        : "Private security services in France: close protection, event security, and professional escort.",
    serviceType: locale === "fr" ? "Sécurité privée" : "Private security",
  });

  return (
    <Fragment>
      <JsonLd
        data={[serviceSchema, getFaqPageSchema(securityContent.faqItems)]}
      />
      <MainSecuritySection
        title={securityContent.heroSection.title}
        subtitle={securityContent.heroSection.subtitle}
        buttonText={securityContent.heroSection.buttonText}
        buttonLink={securityContent.heroSection.buttonLink}
      />
      <MainContainer className="flex flex-col gap-27">
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
          items={securityContent.securityProcessStepsItems}
        />
        <SecurityFormSection />
        <div className="flex flex-col gap-12">
          <FAQSection
            title={commonContent.sectionTitles.faq}
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
