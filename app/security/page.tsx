import MainContainer from "@/src/components/MainContainer";
import { Fragment } from "react/jsx-runtime";
import WhyChooseUsSection from "@/src/features/WhyChooseUsSection";
import ServicesSection from "@/src/features/ServicesSection";
import FAQSection from "@/src/features/FAQSection";
import CTABlock from "@/src/components/CTABlock";
import SecurityFormSection from "@/src/features/SecurityFormSection";
import MainSecuritySection from "@/src/features/MainSection/MainSecuritySection";
import BookingProcessSection from "@/src/features/BookingProcessSection";

export default function SecurityPage() {
    return (
        <Fragment>
            <MainSecuritySection />
            <MainContainer className="flex flex-col gap-27">
                <WhyChooseUsSection />
                <div className="flex flex-col gap-12">
                    <ServicesSection type="security" />
                    <CTABlock
                        title="Réservez Votre Chauffeur en Toute Simplicité"
                        description="Organisez votre transfert en quelques clics et profitez d’un voyage élégant, ponctuel et discret."
                        buttonText="Book Now"
                        buttonLink="/book"
                    />
                </div>
                <BookingProcessSection />

                <SecurityFormSection />
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
