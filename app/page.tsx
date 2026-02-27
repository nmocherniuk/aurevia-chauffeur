import MainContainer from "@/src/components/MainContainer";
import MainSection from "@/src/features/MainSection";
import { Fragment } from "react/jsx-runtime";
import WhyChooseUsSection from "@/src/features/WhyChooseUsSection";
import ServicesSection from "@/src/features/ServicesSection";
import FleetSection from "@/src/features/FleetSection";
import PopularRoutesSection from "@/src/features/PopularRoutesSection";
import FAQSection from "@/src/features/FAQSection";

export default function Home() {
  return (
    <Fragment>
      <MainSection />
      <MainContainer>
        <WhyChooseUsSection />
        <ServicesSection />
        <FleetSection />
        <PopularRoutesSection />
        <FAQSection />
      </MainContainer>
    </Fragment>
  );
}
