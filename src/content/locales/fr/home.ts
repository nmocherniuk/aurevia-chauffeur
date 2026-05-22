import { getRoutes } from "@/src/config/routes";
import { commonContent } from "./common";

export function createHomeContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Aurevia\nTransport et protection privée",
      subtitle:
        "Des services haut de gamme pour vos trajets, événements et besoins de sécurité.",
      buttonText: commonContent.buttons.services,
      buttonLink: routes.home.services,
    },

    whoWeAreTitle: "Aurevia — L'exigence dans chaque détail",

    whoWeAreItems: [
      "Aurevia est une plateforme premium de coordination qui met en relation ses clients avec des professionnels indépendants de confiance dans les services de chauffeur privé et de sécurité exécutive. Nous privilégions la discrétion, la fiabilité et une gestion fluide du service, depuis la première demande jusqu'à la confirmation finale.",
      "Notre réseau repose sur des professionnels expérimentés, sélectionnés pour leur qualité de service, leur réactivité et leur capacité à intervenir dans des environnements exigeants avec un haut niveau de professionnalisme. Chaque demande est traitée avec précision afin d'assurer une coordination claire, confidentielle et adaptée à vos besoins.",
    ] as const,

    servicesSectionTitle: "Choisissez votre expérience",

    servicesSection: [
      {
        title: "Chauffeur privé",
        description:
          "Un service de transport haut de gamme pour vos transferts, déplacements professionnels, événements et trajets sur mesure.",
        href: routes.chauffeur.index,
        image: "/images/hyundai-motor-group.png",
        buttonText: commonContent.buttons.discover,
      },
      {
        title: "Sécurité privée",
        description:
          "Des solutions de protection, d'accompagnement et de sécurité coordonnées selon vos besoins, vos lieux et vos contraintes.",
        href: routes.security.index,
        image: "/images/luxury-private-bodyguards.png",
        buttonText: commonContent.buttons.discover,
      },
    ] as const,

    faqItems: [
      {
        id: "home-faq-1",
        question: "Quels services propose Aurevia ?",
        answer:
          "Aurevia propose des services premium de chauffeur privé et de sécurité privée, adaptés aux déplacements, événements, besoins professionnels et demandes sur mesure.",
      },
      {
        id: "home-faq-2",
        question: "Comment fonctionne une demande de réservation ?",
        answer:
          "Vous envoyez votre demande avec les informations nécessaires. Notre équipe vérifie ensuite la disponibilité, la faisabilité et les partenaires adaptés avant de vous confirmer la prestation.",
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
