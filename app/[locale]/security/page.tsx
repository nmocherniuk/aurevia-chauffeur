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
      title: "Sécurité privée et protection rapprochée",
      description:
        "Riviera Prime facilite l'accès à des professionnels indépendants de la sécurité privée : protection rapprochée, sécurité de biens, sécurité événementielle et missions spécialisées.",
      ogTitle: "Sécurité privée et protection rapprochée | Riviera Prime",
      ogDesc:
        "Coordination de mise en relation avec des professionnels indépendants de la sécurité privée selon vos besoins et contraintes.",
    },
    en: {
      title: "Private security and close protection",
      description:
        "Riviera Prime facilitates access to independent private security professionals: close protection, property security, event security, and specialised missions.",
      ogTitle: "Private security and close protection | Riviera Prime",
      ogDesc:
        "Coordinated introductions to independent private security professionals tailored to your needs and constraints.",
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
        ? "Coordination sécurité privée"
        : "Private security coordination",
    description:
      locale === "fr"
        ? "Riviera Prime facilite l'accès à des professionnels indépendants de la sécurité privée pour la protection rapprochée, la sécurité de biens, la sécurité événementielle et les missions spécialisées."
        : "Riviera Prime facilitates access to independent private security professionals for close protection, property security, event security, and specialised missions.",
    serviceType:
      locale === "fr"
        ? "Coordination de sécurité privée"
        : "Private security coordination",
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
            className="font-benzin text-white text-center text-2xl mb-6 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-8"
          >
            {securityContent.seoIntro.title}
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {securityContent.seoIntro.paragraphs.map((paragraph) => (
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
