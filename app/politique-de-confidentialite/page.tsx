import MainContainer from '@/src/components/MainContainer'
import React from 'react'

export default function PolitiqueDeConfidentialite() {
    return (
        <MainContainer className="pt-30">
            <article className="text-sm md:text-base text-gray-300 leading-relaxed space-y-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                    Politique de confidentialité
                </h1>

                <p>
                    La présente politique de confidentialité a pour objet d’informer les utilisateurs des modalités selon lesquelles la plateforme collecte et traite leurs données à caractère personnel, conformément au Règlement (UE) 2016/679 (RGPD) et à la législation française applicable.
                </p>

                <p>
                    La plateforme agit en qualité d’intermédiaire de mise en relation entre des clients et des professionnels indépendants, notamment des chauffeurs privés et des agents de sécurité. Elle n’exécute pas directement les prestations opérationnelles confiées aux partenaires.
                </p>

                <section className="space-y-2" aria-labelledby="donnees-collectees">
                    <h2 id="donnees-collectees" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        1. Données collectées
                    </h2>
                    <p>
                        Dans le cadre de l’utilisation de la plateforme et de la gestion des demandes, les données suivantes peuvent être collectées :
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>nom et prénom ;</li>
                        <li>numéro de téléphone ;</li>
                        <li>adresse électronique ;</li>
                        <li>adresses de prise en charge et de destination ;</li>
                        <li>informations relatives à la réservation, telles que la date, l’horaire, la nature de la prestation et les contraintes particulières ;</li>
                        <li>contenu des échanges nécessaires au traitement de la demande et au suivi de la réservation.</li>
                    </ul>
                    <p>
                        Concernant le paiement, les transactions sont traitées via Stripe ou toute solution équivalente. Les données bancaires complètes ne sont pas stockées directement par la plateforme. Seules les informations strictement nécessaires au suivi administratif et comptable des opérations peuvent être conservées, telles que le statut du paiement, la référence de transaction, le montant et la date.
                    </p>
                </section>

                <section className="space-y-2" aria-labelledby="finalites-traitement">
                    <h2 id="finalites-traitement" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        2. Finalités du traitement
                    </h2>
                    <p>
                        Les données personnelles sont traitées pour les finalités suivantes :
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>réception et gestion des demandes de réservation ;</li>
                        <li>coordination des prestations avec les professionnels indépendants concernés ;</li>
                        <li>communication avec les clients avant, pendant et après la prestation ;</li>
                        <li>traitement et suivi des paiements ;</li>
                        <li>prévention des fraudes, abus et utilisations non autorisées ;</li>
                        <li>amélioration de la qualité de service ;</li>
                        <li>respect des obligations légales, fiscales, comptables et réglementaires applicables.</li>
                    </ul>
                </section>

                <section className="space-y-2" aria-labelledby="partage-donnees">
                    <h2 id="partage-donnees" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        3. Partage des données
                    </h2>
                    <p>
                        Les données peuvent être transmises, dans la stricte mesure nécessaire à l’exécution du service demandé :
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>aux professionnels partenaires chargés de la prestation, tels que des chauffeurs privés ou agents de sécurité ;</li>
                        <li>à Stripe ou à tout prestataire de paiement équivalent, pour le traitement sécurisé des paiements ;</li>
                        <li>à Meta (WhatsApp Cloud API), lorsque ce canal est utilisé pour les échanges opérationnels liés à l’organisation ou au suivi de la réservation ;</li>
                        <li>aux prestataires techniques intervenant dans l’hébergement, la maintenance ou le fonctionnement de la plateforme ;</li>
                        <li>aux autorités compétentes, lorsque la loi l’exige.</li>
                    </ul>
                </section>

                <section className="space-y-2" aria-labelledby="duree-conservation">
                    <h2 id="duree-conservation" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        4. Durée de conservation
                    </h2>
                    <p>
                        Les données personnelles sont conservées pendant une durée proportionnée aux finalités pour lesquelles elles ont été collectées.
                    </p>
                    <p>
                        Les informations nécessaires à la gestion des réservations sont conservées pendant la durée nécessaire au traitement de la demande et à l’exécution de la relation commerciale. Elles peuvent ensuite être archivées pendant la durée requise pour satisfaire aux obligations légales, comptables, fiscales ou probatoires applicables.
                    </p>
                    <p>
                        À l’issue des durées de conservation applicables, les données sont supprimées ou anonymisées, sauf obligation légale imposant une conservation plus longue.
                    </p>
                </section>

                <section className="space-y-2" aria-labelledby="securite">
                    <h2 id="securite" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        5. Sécurité
                    </h2>
                    <p>
                        La plateforme met en œuvre des mesures techniques et organisationnelles appropriées afin d’assurer la sécurité et la confidentialité des données personnelles, et de les protéger contre la destruction, la perte, l’altération, la divulgation non autorisée ou l’accès non autorisé.
                    </p>
                    <p>
                        Ces mesures sont adaptées à la nature des données traitées et au niveau de risque présenté par les traitements concernés.
                    </p>
                </section>

                <section className="space-y-2" aria-labelledby="droits-utilisateurs">
                    <h2 id="droits-utilisateurs" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        6. Droits des utilisateurs
                    </h2>
                    <p>
                        Conformément au RGPD, toute personne concernée dispose, dans les conditions prévues par la réglementation applicable, des droits suivants :
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>droit d’accès ;</li>
                        <li>droit de rectification ;</li>
                        <li>droit d’effacement ;</li>
                        <li>droit à la limitation du traitement ;</li>
                        <li>droit d’opposition pour motifs légitimes.</li>
                    </ul>
                    <p>
                        Lorsque le traitement est fondé sur le consentement, celui-ci peut être retiré à tout moment, sans remettre en cause la licéité des traitements effectués avant ce retrait.
                    </p>
                    <p>
                        Les utilisateurs peuvent exercer leurs droits en contactant la plateforme via le canal de contact dédié aux demandes relatives à la protection des données.
                    </p>
                    <p>
                        En cas de difficulté non résolue, l’utilisateur peut introduire une réclamation auprès de la CNIL.
                    </p>
                </section>

                <section className="space-y-2" aria-labelledby="cookies">
                    <h2 id="cookies" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        7. Cookies
                    </h2>
                    <p>
                        La plateforme peut utiliser des cookies et technologies similaires nécessaires à son fonctionnement, à la mesure d’audience et, le cas échéant, à l’amélioration de l’expérience utilisateur.
                    </p>
                    <p>
                        Les modalités détaillées relatives à l’utilisation des cookies et au recueil du consentement sont précisées dans la Politique de cookies.
                    </p>
                </section>

                <section className="space-y-2" aria-labelledby="positionnement-juridique">
                    <h2 id="positionnement-juridique" className="font-onest text-xl text-text-secondary font-medium" style={{ fontFamily: 'var(--font-onest), sans-serif' }}>
                        8. Positionnement juridique de la plateforme
                    </h2>
                    <p>
                        La plateforme intervient en qualité d’intermédiaire et d’opérateur de services numériques. Les professionnels réalisant les prestations sont juridiquement indépendants et demeurent seuls responsables de leurs obligations professionnelles, administratives, sociales, fiscales et réglementaires.
                    </p>
                    <p>
                        Dans ce cadre, certaines données personnelles peuvent être transmises à ces professionnels indépendants lorsque cela est nécessaire pour organiser, confirmer et exécuter la prestation demandée par le client.
                    </p>
                </section>
            </article>
        </MainContainer>
    )
}
