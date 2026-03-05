import MainContainer from "@/src/components/MainContainer";
import MainSection from "@/src/features/MainSection";
import { Fragment } from "react/jsx-runtime";
import WhyChooseUsSection from "@/src/features/WhyChooseUsSection";
import ServicesSection from "@/src/features/ServicesSection";
import FleetSection from "@/src/features/FleetSection";
import PopularRoutesSection from "@/src/features/PopularRoutesSection";
import FAQSection from "@/src/features/FAQSection";
import CTABlock from "@/src/components/CTABlock";
import Header from "@/src/components/Header";
import FormSection from "@/src/features/FormSection";

export default function Home() {
  return (
    <Fragment>
      <MainSection />
      <MainContainer className="flex flex-col gap-27">
        <WhyChooseUsSection />
        <div className="flex flex-col gap-12">
          <ServicesSection />
          <CTABlock
            id="reserver"
            title="Réservez Votre Chauffeur en Toute Simplicité"
            description="Organisez votre transfert en quelques clics et profitez d’un voyage élégant, ponctuel et discret."
            buttonText="Book Now"
            buttonLink="/book"
          />
        </div>
        <FleetSection />
        <PopularRoutesSection />
        <FormSection />
        <div className="flex flex-col gap-12">
          <FAQSection />
          <CTABlock
            title="Réservez Votre Chauffeur en Toute Simplicité"
            description="Organisez votre transfert en quelques clics et profitez d’un voyage élégant, ponctuel et discret."
            buttonText="Book Now"
            buttonLink="/book"
          />
        </div>
      </MainContainer>
    </Fragment>
  );
}
