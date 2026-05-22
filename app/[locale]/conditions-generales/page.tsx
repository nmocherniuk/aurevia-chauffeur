import type { Metadata } from "next";
import MainContainer from "@/src/components/MainContainer";
import React from "react";
import {
  buildLegalPageMetadata,
  getPageLocale,
} from "@/src/lib/i18n/legal-metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);

  return buildLegalPageMetadata({
    locale,
    path: "/conditions-generales",
    fr: {
      title: "Conditions générales",
      description:
        "Consultez les conditions générales d'utilisation, de réservation, de paiement et d'annulation des services Aurevia.",
    },
    en: {
      title: "Terms and conditions",
      description:
        "Read Aurevia terms of use, booking, payment, and cancellation policies.",
    },
  });
}

export default function ConditionsGenerales() {
  return (
    <MainContainer className="pt-30">
      <article className="text-sm md:text-base text-text-primary leading-relaxed space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-13">
          Conditions générales
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
          Conditions générales d’utilisation
        </h2>
        <section className="space-y-2" aria-labelledby="objet-du-site">
          <h3
            id="objet-du-site"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            1. Objet du site
          </h3>
          <p>
            Riviera Prime propose un service premium d’organisation, de
            réservation et de coordination permettant l’accès à un réseau de
            professionnels indépendants intervenant notamment dans :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>le transport privé de personnes avec chauffeur ;</li>
            <li>la sécurité privée ;</li>
            <li>des prestations haut de gamme associées.</li>
          </ul>
        </section>

        <section className="space-y-2" aria-labelledby="role-de-la-societe">
          <h3
            id="role-de-la-societe"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            2. Rôle de la société
          </h3>
          <p>RIVIERA STRATEGIE intervient principalement en qualité :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>de société d’organisation ;</li>
            <li>de coordinateur de réservations ;</li>
            <li>de facilitateur commercial ;</li>
            <li>d’opérateur de services numériques.</li>
          </ul>
          <p>
            La société reçoit les demandes des clients, organise leur traitement
            et coordonne, selon les besoins exprimés, l’intervention de
            partenaires professionnels indépendants sélectionnés.
          </p>
          <p>
            La société n’assure pas directement l’exécution matérielle des
            prestations opérationnelles confiées aux partenaires.
          </p>
        </section>

        <section className="space-y-2" aria-labelledby="partenaires-executants">
          <h3
            id="partenaires-executants"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            3. Partenaires exécutants
          </h3>
          <p>
            Les prestations opérationnelles sont réalisées par des
            professionnels juridiquement indépendants.
          </p>
          <p>Chaque partenaire demeure seul responsable :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>de ses autorisations administratives ;</li>
            <li>de ses assurances ;</li>
            <li>de son personnel ;</li>
            <li>du respect des règles professionnelles ;</li>
            <li>de la conformité réglementaire de son activité ;</li>
            <li>de la bonne exécution de la mission confiée.</li>
          </ul>
        </section>

        <section className="space-y-2" aria-labelledby="responsabilite">
          <h3
            id="responsabilite"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            4. Responsabilité
          </h3>
          <p>La société ne saurait être tenue responsable :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>des retards imputables au partenaire exécutant ;</li>
            <li>d’un incident survenu durant la prestation ;</li>
            <li>d’un manquement du prestataire ;</li>
            <li>d’un cas de force majeure ;</li>
            <li>d’une indisponibilité temporaire du site.</li>
          </ul>
          <p>
            En tout état de cause, la responsabilité éventuelle de la société
            est limitée aux sommes effectivement perçues au titre de la
            réservation concernée, sauf disposition légale impérative contraire.
          </p>
        </section>

        <section className="space-y-2" aria-labelledby="liens-externes">
          <h3
            id="liens-externes"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            5. Liens externes
          </h3>
          <p>
            Le site peut contenir des liens vers des sites tiers. La société
            n’exerce aucun contrôle sur leur contenu ni sur leur fonctionnement.
          </p>
        </section>

        <section className="space-y-2" aria-labelledby="mediation-consommation">
          <h3
            id="mediation-consommation"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            6. MÉDIATION DE LA CONSOMMATION
          </h3>
          <p>
            En cas de litige non résolu après réclamation préalable, le client
            consommateur peut saisir gratuitement :
          </p>
          <p>ANM Conso</p>
          <p>2 rue de Colmar, 94300 Vincennes.</p>
        </section>

        <section
          className="space-y-2 mt-13"
          aria-labelledby="reservation-paiement-annulation"
        >
          <h3
            id="reservation-paiement-annulation"
            className="text-2xl md:text-3xl font-semibold text-white mb-8 font-benzin"
          >
            Conditions de réservation, paiement et annulation
          </h3>
        </section>

        <section className="space-y-2" aria-labelledby="demande-reservation">
          <h3
            id="demande-reservation"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            1. Demande de réservation
          </h3>
          <p>Toute demande transmise par l’utilisateur demeure soumise :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>à la disponibilité des partenaires ;</li>
            <li>à la validation opérationnelle ;</li>
            <li>à la faisabilité logistique ;</li>
            <li>à la confirmation finale.</li>
          </ul>
          <p>La réservation n’est définitive qu’après confirmation écrite.</p>
        </section>

        <section className="space-y-2" aria-labelledby="tarification">
          <h3
            id="tarification"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            2. Tarification
          </h3>
          <p>Les conditions tarifaires peuvent être :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>fixes ;</li>
            <li>établies sur devis ;</li>
            <li>
              variables selon le lieu, l’horaire, la durée, l’urgence, le niveau
              de service ou toute contrainte particulière.
            </li>
          </ul>
        </section>

        <section className="space-y-2" aria-labelledby="paiement">
          <h3
            id="paiement"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            3. Paiement
          </h3>
          <p>
            Les paiements sont sécurisés par Stripe ou toute solution
            équivalente.
          </p>
          <p>Selon les situations, le paiement peut prendre la forme :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>d’un règlement intégral à la réservation ;</li>
            <li>d’un acompte ;</li>
            <li>d’un règlement différé ;</li>
            <li>d’un paiement après confirmation.</li>
          </ul>
          <p>
            Toute contestation abusive, opposition injustifiée ou utilisation
            frauduleuse pourra entraîner suspension du dossier et toute action
            utile.
          </p>
        </section>

        <section className="space-y-2" aria-labelledby="remuneration-societe">
          <h3
            id="remuneration-societe"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            4. Rémunération de la société
          </h3>
          <p>
            RIVIERA STRATEGIE perçoit principalement une rémunération
            correspondant, selon les cas :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>à des frais de réservation ;</li>
            <li>à des frais de coordination ;</li>
            <li>à des frais d’organisation ;</li>
            <li>à une rémunération contractuellement prévue ;</li>
            <li>à une commission convenue selon la nature de l’opération.</li>
          </ul>
          <p>
            Le prix principal de la prestation peut, selon la nature du service
            concerné, être facturé directement par le partenaire professionnel
            exécutant.
          </p>
          <p>
            Les prestations principales sont réalisées par des partenaires
            professionnels juridiquement indépendants, chacun demeurant seul
            responsable de ses obligations légales, administratives, sociales,
            fiscales et opérationnelles.
          </p>
          <p>
            Toute rémunération revenant à RIVIERA STRATEGIE est portée à la
            connaissance du client avant validation définitive de la
            réservation.
          </p>
        </section>

        <section
          className="space-y-2"
          aria-labelledby="politique-annulation-standard"
        >
          <h3
            id="politique-annulation-standard"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            5. Politique d’annulation standard
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              plus de 72 heures avant la prestation : remboursement possible
              hors frais engagés ;
            </li>
            <li>
              entre 72 heures et 24 heures avant : retenue pouvant atteindre 50
              % ;
            </li>
            <li>moins de 24 heures avant : retenue pouvant atteindre 100 %.</li>
          </ul>
        </section>

        <section
          className="space-y-2"
          aria-labelledby="forte-demande-evenements-majeurs"
        >
          <h3
            id="forte-demande-evenements-majeurs"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            6. Périodes de forte demande et événements majeurs
          </h3>
          <p>
            Pour certaines périodes particulières (Festival de Cannes, Grand
            Prix de Monaco, congrès, événements haut de gamme ou forte demande)
            :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>plus de 7 jours avant : remboursement partiel possible ;</li>
            <li>
              entre 7 jours et 72 heures : retenue pouvant atteindre 70 % ;
            </li>
            <li>moins de 72 heures avant : retenue pouvant atteindre 100 %.</li>
          </ul>
        </section>

        <section className="space-y-2" aria-labelledby="absence-client">
          <h3
            id="absence-client"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            7. Absence du client
          </h3>
          <p>
            En cas de retard supérieur à 15 minutes sans information préalable :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>attente facturable ;</li>
            <li>mission susceptible d’être annulée ;</li>
            <li>prestation pouvant être due intégralement.</li>
          </ul>
        </section>

        <section className="space-y-2" aria-labelledby="force-majeure">
          <h3
            id="force-majeure"
            className="font-onest text-xl text-text-secondary font-medium"
            style={{ fontFamily: "var(--font-onest), sans-serif" }}
          >
            8. Force majeure
          </h3>
          <p>
            En cas de circonstances exceptionnelles indépendantes de la volonté
            des parties, un report ou un avoir commercial pourra être proposé
            selon les disponibilités et contraintes applicables.
          </p>
        </section>
      </article>
    </MainContainer>
  );
}
