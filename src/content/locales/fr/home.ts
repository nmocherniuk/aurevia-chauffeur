import { getRoutes } from "@/src/config/routes";
import { commonContent } from "./common";

export function createHomeContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Chauffeur privé & sécurité privée\nsur la Côte d'Azur",
      subtitle:
        "Transferts privés, déplacements professionnels et solutions de sécurité sur mesure à Nice, Cannes, Monaco, Antibes et Saint-Tropez.",
      buttonText: "Découvrir les services",
      buttonLink: routes.home.services,
    },

    whoWeAreTitle: "Riviera Prime — L'exigence dans chaque détail",

    whoWeAreItems: [
      "Riviera Prime propose des services de transport privé avec chauffeur sur la Côte d'Azur : transferts aéroport, déplacements professionnels, événements et trajets sur mesure. Les prestations de transport sont assurées directement par notre service VTC ou réalisées par des chauffeurs VTC partenaires indépendants, selon les disponibilités et les conditions de réservation convenues.",
      "Pour vos besoins de sécurité privée, Riviera Prime facilite la prise de contact avec des entreprises spécialisées disposant des autorisations réglementaires requises. Notre priorité : un accompagnement personnalisé, fondé sur la discrétion, le professionnalisme, la transparence et l'attention portée à chaque détail.",
    ] as const,

    servicesSectionTitle: "Chauffeur privé et sécurité privée",

    servicesSection: [
      {
        title: "Chauffeur privé sur la Côte d'Azur",
        description:
          "Transferts aéroport, déplacements professionnels, événements et trajets sur mesure avec chauffeur VTC.",
        href: routes.chauffeur.index,
        image: "/images/chauffeur-prive-vtc-nice-promenade-des-anglais.webp",
        imageAlt:
          "Chauffeurs privés VTC et véhicules premium sur la Promenade des Anglais à Nice",
        buttonText: commonContent.buttons.discover,
      },
      {
        title: "Solutions de sécurité privée",
        description:
          "Protection rapprochée, sécurité de villas, d'événements et d'entreprises avec des prestataires spécialisés.",
        href: routes.security.index,
        image: "/images/protection-rapprochee-securite-privee-cote-azur.webp",
        imageAlt:
          "Agents de protection rapprochée devant des véhicules noirs à un aéroport",
        buttonText: commonContent.buttons.discover,
      },
    ] as const,

    partnerCta: {
      title: "Vous souhaitez devenir partenaire ?",
      description:
        "Chauffeur VTC indépendant, exploitant de transport ou entreprise de sécurité privée : Riviera Prime développe son réseau de partenaires sur la Côte d'Azur. Contactez-nous pour présenter votre activité. Toute collaboration est soumise à la vérification des qualifications, autorisations et assurances professionnelles applicables.",
    },

    faqItems: [
      {
        id: "home-faq-1",
        question: "Quels services propose Riviera Prime ?",
        answer:
          "Riviera Prime propose des services de chauffeur privé VTC sur la Côte d'Azur : transferts aéroport, déplacements professionnels, mise à disposition et événements. Pour la sécurité privée, Riviera Prime facilite la prise de contact avec des entreprises spécialisées disposant des autorisations nécessaires.",
      },
      {
        id: "home-faq-2",
        question: "Comment fonctionne une demande de réservation ?",
        answer:
          "Vous envoyez votre demande avec les informations nécessaires. Pour un transport, Riviera Prime vérifie les disponibilités et vous adresse une confirmation. Pour une demande de sécurité privée, elle est transmise à une entreprise spécialisée susceptible d'y répondre.",
      },
      {
        id: "home-faq-3",
        question: "La réservation est-elle confirmée immédiatement ?",
        answer:
          "Non. Une réservation de transport devient définitive après vérification des disponibilités et confirmation écrite. Une prestation de sécurité privée est confirmée directement par l'entreprise prestataire, selon ses propres conditions.",
      },
      {
        id: "home-faq-4",
        question: "Quand le paiement est-il demandé ?",
        answer:
          "Pour un transport, le prix et les modalités de paiement vous sont communiqués avant confirmation. Pour une prestation de sécurité privée, la tarification et les conditions de paiement sont définies avec l'entreprise prestataire.",
      },
    ],
  };
}

export const homeContent = createHomeContent("fr");
