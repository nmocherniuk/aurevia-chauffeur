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

export default function Home() {
  return (
    <Fragment>
      <Header />
      <MainSection />
      <MainContainer>
        <WhyChooseUsSection />
        <ServicesSection />
        <CTABlock id="reserver" title="Réservez Votre Chauffeur en Toute Simplicité" description="Organisez votre transfert en quelques clics et profitez d’un voyage élégant, ponctuel et discret." buttonText="Book Now" buttonLink="/book" />
        <FleetSection />
        <PopularRoutesSection />
        <FAQSection />
        <CTABlock title="Réservez Votre Chauffeur en Toute Simplicité" description="Organisez votre transfert en quelques clics et profitez d’un voyage élégant, ponctuel et discret." buttonText="Book Now" buttonLink="/book" />
      </MainContainer>
    </Fragment>
  );
}
