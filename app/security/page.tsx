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

export const metadata: Metadata = {
    title: "Sécurité privée premium",
    description:
        "Aurevia propose des services de sécurité privée en France: protection rapprochée, sécurisation d'événements et accompagnement professionnel.",
    alternates: {
        canonical: "/security",
    },
    openGraph: {
        title: "Aurevia Security - Services de sécurité privée",
        description:
            "Protection rapprochée, sécurité événementielle et accompagnement premium partout en France.",
        url: "/security",
        images: ["/images/og-image.jpg"],
    },
    twitter: {
        title: "Aurevia Security - Services de sécurité privée",
        description:
            "Protection rapprochée, sécurité événementielle et accompagnement premium partout en France.",
        images: ["/images/og-image.jpg"],
    },
};

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
