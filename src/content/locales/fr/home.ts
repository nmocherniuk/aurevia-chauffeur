import { getRoutes } from "@/src/config/routes";
import { commonContent } from "./common";

export function createHomeContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Riviera Prime\nChauffeur privé & sécurité privée",
      subtitle:
        "Coordination premium pour vos transferts, événements et besoins de sécurité privée sur la Côte d'Azur.",
      buttonText: commonContent.buttons.services,
      buttonLink: routes.home.services,
    },

    whoWeAreTitle: "Riviera Prime — L'exigence dans chaque détail",

    whoWeAreItems: [
      "Riviera Prime est une plateforme de coordination qui met ses clients en relation avec des professionnels indépendants sélectionnés selon leurs besoins, dans le chauffeur privé et la sécurité privée. La plateforme privilégie la discrétion, la fiabilité et une gestion fluide du service, depuis la première demande jusqu'à la confirmation finale.",
      "Le réseau s'appuie sur des professionnels indépendants expérimentés, sélectionnés pour leur qualité de service, leur réactivité et leur capacité à intervenir dans des environnements exigeants. Chaque demande est traitée avec précision afin d'assurer une coordination claire, confidentielle et adaptée à vos besoins sur la Côte d'Azur et au-delà.",
    ] as const,

    servicesSectionTitle: "Chauffeur privé et sécurité privée",

    servicesSection: [
      {
        title: "Chauffeur privé sur la Côte d'Azur",
        description:
          "Mise en relation pour vos transferts, déplacements professionnels, événements et trajets sur mesure avec des chauffeurs privés indépendants.",
        href: routes.chauffeur.index,
        image: "/images/hyundai-motor-group.png",
        imageAlt:
          "Chauffeur privé sur la Côte d'Azur — véhicule premium pour transferts et déplacements",
        buttonText: commonContent.buttons.discover,
      },
      {
        title: "Solutions de sécurité privée",
        description:
          "Accès coordonné à des professionnels indépendants de la sécurité pour protection, accompagnement et sécurisation selon vos contraintes.",
        href: routes.security.index,
        image: "/images/luxury-private-bodyguards.png",
        imageAlt:
          "Sécurité privée — professionnels indépendants pour protection et accompagnement",
        buttonText: commonContent.buttons.discover,
      },
    ] as const,

    partnerCta: {
      title: "Vous souhaitez devenir partenaire ?",
      description:
        "Chauffeurs, agents de sécurité ou prestataires premium : prenez contact pour présenter votre activité et rejoindre le réseau Riviera Prime.",
    },

    faqItems: [
      {
        id: "home-faq-1",
        question: "Quels services propose Riviera Prime ?",
        answer:
          "Riviera Prime coordonne la mise en relation avec des chauffeurs privés indépendants et des professionnels indépendants de la sécurité privée, pour les déplacements, événements, besoins professionnels et demandes sur mesure.",
      },
      {
        id: "home-faq-2",
        question: "Comment fonctionne une demande de réservation ?",
        answer:
          "Vous envoyez votre demande avec les informations nécessaires. La disponibilité, la faisabilité de la demande et l’identification des partenaires adaptés sont ensuite vérifiées avant toute confirmation.",
      },
      {
        id: "home-faq-3",
        question: "La réservation est-elle confirmée immédiatement ?",
        answer:
          "Non, une demande n'est pas automatiquement confirmée. La réservation devient définitive uniquement après validation de la disponibilité et confirmation écrite.",
      },
      {
        id: "home-faq-4",
        question: "Quand le paiement est-il demandé ?",
        answer:
          "Le paiement est demandé selon la nature de la prestation : à la réservation, sous forme d'acompte ou après confirmation. Les paiements sont sécurisés via une solution de paiement fiable.",
      },
    ],
  };
}

export const homeContent = createHomeContent("fr");
