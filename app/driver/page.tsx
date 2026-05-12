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
import { commonContent } from "@/src/content/common";
import { routes } from "@/src/config/routes";
import { chauffeurContent } from "@/src/content/chauffeur";

export const metadata: Metadata = {
  title: "Chauffeur privé premium",
  description:
    "Réservez un chauffeur privé Aurevia pour vos trajets en France: confort haut de gamme, ponctualité et service sur mesure.",
  alternates: {
    canonical: "/driver",
  },
  openGraph: {
    title: "Aurevia Chauffeur - Transport privé premium",
    description:
      "Service de chauffeur privé premium pour déplacements professionnels, personnels et événements.",
    url: "/driver",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    title: "Aurevia Chauffeur - Transport privé premium",
    description:
      "Service de chauffeur privé premium pour déplacements professionnels, personnels et événements.",
    images: ["/images/og-image.jpg"],
  },
};

export default function DriverPage() {
  return (
    <Fragment>
      <MainDriverSection
        title={chauffeurContent.heroSection.title}
        subtitle={chauffeurContent.heroSection.subtitle}
        buttonText={chauffeurContent.heroSection.buttonText}
        buttonLink={chauffeurContent.heroSection.buttonLink}
      />
      <MainContainer className="flex flex-col gap-27">
        <WhyChooseUsSection items={chauffeurContent.whyChooseUsItems} />
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
          <FAQSection items={chauffeurContent.faqItems} />
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
