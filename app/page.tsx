import MainContainer from "@/src/components/MainContainer";
import MainSection from "@/src/features/MainSection";
import { Fragment } from "react/jsx-runtime";
import WhyChooseUsSection from "@/src/features/WhyChooseUsSection";
import ServicesSection from "@/src/features/ServicesSection";

export default function Home() {
  return (
    <Fragment>
      <MainSection />
      <MainContainer>
        <WhyChooseUsSection />
        <ServicesSection />
      </MainContainer>
    </Fragment>
  );
}
