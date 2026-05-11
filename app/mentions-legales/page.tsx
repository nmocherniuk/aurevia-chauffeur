import type { Metadata } from "next";
import MainContainer from '@/src/components/MainContainer'
import React from 'react'

export const metadata: Metadata = {
    title: "Mentions légales",
    description:
        "Mentions légales du site Aurevia: éditeur, hébergeur, propriété intellectuelle et informations légales.",
    alternates: {
        canonical: "/mentions-legales",
    },
    openGraph: {
        title: "Mentions légales | Aurevia",
        description:
            "Informations légales du site Aurevia: éditeur, hébergement et droits.",
        url: "/mentions-legales",
        images: ["/images/og-image.jpg"],
    },
    twitter: {
        title: "Mentions légales | Aurevia",
        description:
            "Informations légales du site Aurevia: éditeur, hébergement et droits.",
        images: ["/images/og-image.jpg"],
    },
};

export default function MentionsLegales() {
    return (
        <MainContainer className="pt-30">
            <article className="text-sm md:text-base text-gray-300 leading-relaxed space-y-6" >
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                    Mentions légales
                </h1>

                <p>
                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est porté à la connaissance des utilisateurs du présent site internet les informations suivantes :
                </p>

                <section className="space-y-2" aria-labelledby="editeur-du-site">
                    <h2 id="editeur-du-site" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        1. Éditeur du site
                    </h2>
                    <p>RIVIERA STRATEGIE</p>
                    <p>Société à responsabilité limitée au capital social de 5 000,00 euros.</p>
                    <div className="mt-6">
                        <h3 className="text-white font-medium text-lg">
                            Siège social
                        </h3>

                        <address className="not-italic text-gray-300 leading-relaxed">
                            867 Avenue de Provence, Résidence Les Fougasses Bâtiment 2,<br />
                            83600 Fréjus, France
                        </address>
                    </div>
                    <div className="mt-6">
                        <p>Immatriculée au Registre du Commerce et des Sociétés de Fréjus sous le numéro 944 948 074.</p>
                        <p>Numéro individuel d’identification à la taxe sur la valeur ajoutée : FR83944948074.</p>
                        <p>Nom commercial exploité : Riviera Prime.</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-white font-medium mt-4 text-lg">
                            Représentant légal
                        </h3>
                        <p>
                            Monsieur Kosivtchouk Youriy, agissant en qualité de Gérant.
                        </p>
                        <p>
                            Adresse électronique : kosivtchoukyouriy@gmail.com
                            <br />
                            Téléphone : 06 14 62 27 83
                        </p>
                    </div>
                </section>

                <section className="space-y-2" aria-labelledby="directeur-publication">
                    <h2 id="directeur-publication" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        2. Directeur de la publication
                    </h2>
                    <p>Monsieur Kosivtchouk Youriy.</p>
                </section>

                <section className="space-y-2" aria-labelledby="hebergement-site">
                    <h2 id="hebergement-site" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        3. Hébergement du site
                    </h2>
                    <address className="not-italic">
                        OVHcloud
                        <br />
                        2 rue Kellermann, 59100 Roubaix, France.
                    </address>
                </section>

                <section className="space-y-2" aria-labelledby="acces-site">
                    <h2 id="acces-site" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        4. Accès au site
                    </h2>
                    <p>
                        Le site est accessible en permanence, sous réserve d’interruptions temporaires liées à la maintenance, aux mises à jour techniques ou à tout cas de force majeure.
                    </p>
                </section>

                <section className="space-y-2" aria-labelledby="propriete-intellectuelle">
                    <h2 id="propriete-intellectuelle" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        5. Propriété intellectuelle
                    </h2>
                    <p>
                        L’ensemble des éléments présents sur le site, notamment textes, dénominations, logos, visuels, photographies, graphismes, structure, présentation et contenus, est protégé par les dispositions légales relatives à la propriété intellectuelle.
                    </p>
                    <p>
                        Toute reproduction, représentation, diffusion, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite.
                    </p>
                </section>
            </article >
        </MainContainer >
    )
}