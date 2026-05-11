import type { Metadata } from "next";
import MainContainer from '@/src/components/MainContainer'
import React from 'react'

export const metadata: Metadata = {
    title: "Politique de cookies",
    description:
        "Politique de cookies Aurevia: types de cookies utilisés, consentement et gestion des préférences.",
    alternates: {
        canonical: "/politique-de-cookies",
    },
    openGraph: {
        title: "Politique de cookies | Aurevia",
        description:
            "Informations sur les cookies, la mesure d'audience et les préférences utilisateur sur Aurevia.",
        url: "/politique-de-cookies",
        images: ["/images/og-image.jpg"],
    },
    twitter: {
        title: "Politique de cookies | Aurevia",
        description:
            "Informations sur les cookies, la mesure d'audience et les préférences utilisateur sur Aurevia.",
        images: ["/images/og-image.jpg"],
    },
};

export default function PolitiqueDeConfidentialiteEtCookies() {
    return (
        <MainContainer className="pt-30">
            <article className="text-sm md:text-base text-gray-300 leading-relaxed space-y-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                    Politique de confidentialité et cookies
                </h1>

                <section className="space-y-2" aria-labelledby="responsable-traitement">
                    <h2 id="responsable-traitement" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        1. Responsable du traitement
                    </h2>
                    <p>Le responsable du traitement des données personnelles collectées sur le présent site est :</p>
                    <p>RIVIERA STRATEGIE</p>
                </section>

                <section className="space-y-2" aria-labelledby="donnees-collectees">
                    <h2 id="donnees-collectees" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        2. Données susceptibles d’être collectées
                    </h2>
                    <p>Selon la nature des demandes adressées, les données suivantes peuvent notamment être collectées :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>nom et prénom ;</li>
                        <li>numéro de téléphone ;</li>
                        <li>adresse électronique ;</li>
                        <li>informations relatives à la réservation ;</li>
                        <li>lieu de prise en charge ;</li>
                        <li>destination ;</li>
                        <li>date et horaire souhaités ;</li>
                        <li>informations utiles à l’organisation de la demande ;</li>
                        <li>données techniques de navigation.</li>
                    </ul>
                </section>

                <section className="space-y-2" aria-labelledby="finalites-traitement">
                    <h2 id="finalites-traitement" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        3. Finalités du traitement
                    </h2>
                    <p>Les données sont traitées afin de :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>répondre aux demandes reçues ;</li>
                        <li>organiser les réservations ;</li>
                        <li>coordonner les prestations sollicitées ;</li>
                        <li>transmettre les informations strictement nécessaires aux partenaires concernés ;</li>
                        <li>assurer le suivi commercial ;</li>
                        <li>gérer les paiements ;</li>
                        <li>prévenir les utilisations frauduleuses ;</li>
                        <li>satisfaire aux obligations légales et réglementaires.</li>
                    </ul>
                </section>

                <section className="space-y-2" aria-labelledby="bases-juridiques">
                    <h2 id="bases-juridiques" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        4. Bases juridiques
                    </h2>
                    <p>Les traitements reposent, selon les situations, sur :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>l’exécution d’un contrat ;</li>
                        <li>les mesures précontractuelles ;</li>
                        <li>le consentement ;</li>
                        <li>l’intérêt légitime ;</li>
                        <li>le respect d’une obligation légale.</li>
                    </ul>
                </section>

                <section className="space-y-2" aria-labelledby="destinataires-donnees">
                    <h2 id="destinataires-donnees" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        5. Destinataires des données
                    </h2>
                    <p>Les données peuvent être transmises uniquement :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>aux partenaires professionnels concernés par la demande ;</li>
                        <li>aux prestataires techniques ;</li>
                        <li>aux prestataires de paiement ;</li>
                        <li>aux autorités légalement compétentes lorsque la réglementation l’exige.</li>
                    </ul>
                </section>

                <section className="space-y-2" aria-labelledby="duree-conservation">
                    <h2 id="duree-conservation" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        6. Durée de conservation
                    </h2>
                    <p>Les données sont conservées pendant la durée nécessaire à leur finalité puis archivées selon les délais légaux applicables.</p>
                </section>

                <section className="space-y-2" aria-labelledby="droits-personnes">
                    <h2 id="droits-personnes" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        7. Droits des personnes
                    </h2>
                    <p>Toute personne dispose :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>d’un droit d’accès ;</li>
                        <li>d’un droit de rectification ;</li>
                        <li>d’un droit d’effacement ;</li>
                        <li>d’un droit d’opposition ;</li>
                        <li>d’un droit de limitation ;</li>
                        <li>d’un droit à la portabilité.</li>
                    </ul>
                    <p>Toute demande peut être adressée à : kosivtchoukyouriy@gmail.com</p>
                    <p>En cas de difficulté persistante, une réclamation peut être introduite auprès de la Commission Nationale de l’Informatique et des Libertés.</p>
                </section>

                <section className="space-y-2" aria-labelledby="cookies">
                    <h2 id="cookies" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        8. Cookies
                    </h2>
                    <p>Le site peut utiliser :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>des cookies strictement nécessaires à son fonctionnement ;</li>
                        <li>des cookies de mesure d’audience ;</li>
                        <li>des cookies publicitaires ;</li>
                        <li>des cookies de personnalisation.</li>
                    </ul>
                    <p>Les cookies non essentiels ne sont déposés qu’après consentement exprès de l’utilisateur.</p>
                    <p>Le consentement peut être retiré à tout moment.</p>
                    <p>Outils susceptibles d’être utilisés :</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Google Analytics</li>
                        <li>Google Ads</li>
                        <li>Meta Pixel</li>
                    </ul>
                </section>
            </article>
        </MainContainer>
    )
}
