import { getRoutes } from "@/src/config/routes";
import { List } from "@/src/components/SVGManager/List";
import { ShieldCheck } from "@/src/components/SVGManager/ShieldCheck";
import { Clock } from "@/src/components/SVGManager/Clock";
import { Diamond } from "@/src/components/SVGManager/Diamond";
import { commonContent } from "./common";

export function createChauffeurContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Riviera Prime Chauffeur\nPrivate Executive Transportation",
      subtitle:
        "Premium chauffeur services designed for comfort, discretion, and precision.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: List,
        title: "Tarification claire et fixe",
        description:
          "Le prix de votre transfert est confirmé à l'avance. Aucun frais caché, aucune surprise — une transparence à chaque étape.",
      },
      {
        id: "why-choose-us-2",
        icon: ShieldCheck,
        title: "Un service digne de confiance",
        description:
          "Des chauffeurs expérimentés, des véhicules impeccables et une discrétion absolue garantissent une expérience sûre et raffinée.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Une précision sans compromis",
        description:
          "Chaque détail de votre trajet est soigneusement coordonné afin d'assurer une ponctualité parfaite et un service irréprochable.",
      },
      {
        id: "why-choose-us-4",
        icon: Diamond,
        title: "Voyagez dans des conditions d'exception",
        description:
          "Intérieurs spacieux, présentation soignée et prestations haut de gamme pour sublimer chacun de vos déplacements.",
      },
    ],

    services: {
      title: commonContent.servicesSectionTitle,
      items: [
        {
          id: "service-1",
          image: "/services-image/transfert-aeroport-chauffeur-prive-vtc.png",
          title: "Transferts Aéroport",
          description:
            "Transferts privés vers tous les aéroports avec ponctualité garantie.",
          alt: "Chauffeur privé VTC pour transfert aéroport avec service premium",
        },
        {
          id: "service-2",
          image: "/services-image/transfert-hotel-residence-privee-chauffeur.png",
          title: "Hotels et Private Residences",
          description:
            "Transferts discrets vers hôtels de prestige et résidences privées.",
          alt: "Chauffeur privé pour transfert vers hôtel de luxe et résidence privée",
        },
        {
          id: "service-3",
          image: "/services-image/chauffeur-prive-luxe-interieur-mercedes.jpg",
          title: "Business et Corporate Travel",
          description:
            "Solutions premium pour vos déplacements professionnels et réunions.",
          alt: "Chauffeur privé business pour déplacements professionnels et corporate travel",
        },
        {
          id: "service-4",
          image: "/services-image/business-corporate-travel-chauffeur-prive.png",
          title: "Private Chauffeur",
          description:
            "Chauffeur privé à l'heure ou à la journée pour vos déplacements.",
          alt: "Service de chauffeur privé à l'heure ou à la journée avec véhicule de luxe",
        },
        {
          id: "service-5",
          image: "/services-image/chauffeur-mariage-evenement-prive-luxe.png",
          title: "Événements et Mariages",
          description:
            "Transport raffiné et élégant pour mariages et événements privés.",
          alt: "Chauffeur privé pour mariage et événement privé avec service de luxe",
        },
      ],
    },

    fleet: {
      title: "Un transport confortable, des chauffeurs professionnels",
      empty: {
        title: "Aucun véhicule disponible pour le moment",
        description:
          "Flotte en cours de mise à jour. Contactez-nous ou utilisez le formulaire de réservation.",
      },
    },

    vehicleCta: {
      title: "Réservez Votre Chauffeur en Toute Simplicité",
      description:
        "Organisez votre transfert en quelques clics et profitez d'un voyage élégant, ponctuel et discret.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    transferTabs: [
      { id: "cityToCity" as const, label: "Transferts de ville à ville" },
      { id: "travelTransfers" as const, label: "Transferts de voyage" },
      { id: "winterTrips" as const, label: "Voyages d'hiver" },
    ],

    popularRoutes: {
      title: "Les itinéraires les plus populaires",
      navAriaLabel: "Catégories d'itinéraires",
      cityToCity: [
        {
          id: 1,
          from: "Monaco",
          to: "Cannes",
          duration: "55 min",
          distance: 55,
        },
        {
          id: 2,
          from: "Monaco",
          to: "Antibes / Cap d'Antibes",
          duration: "45 min",
          distance: 48,
        },
        {
          id: 3,
          from: "Monaco",
          to: "Saint-Tropez",
          duration: "2 h 10 min",
          distance: 135,
        },
        {
          id: 4,
          from: "Cannes",
          to: "Saint-Tropez",
          duration: "1 h 30 min",
          distance: 85,
        },
        {
          id: 5,
          from: "Cannes",
          to: "Antibes",
          duration: "25 min",
          distance: 18,
        },
        {
          id: 6,
          from: "Nice",
          to: "Saint-Tropez",
          duration: "2 h",
          distance: 110,
        },
      ],

      travelTransfers: [
        {
          id: 1,
          from: "Aéroport de Nice",
          to: "Monaco",
          duration: "35 min",
          distance: 30,
        },
        {
          id: 2,
          from: "Aéroport de Nice",
          to: "Cannes",
          duration: "35 min",
          distance: 32,
        },
        {
          id: 3,
          from: "Aéroport de Nice",
          to: "Saint-Tropez",
          duration: "2 h",
          distance: 110,
        },
        {
          id: 4,
          from: "Aéroport de Nice",
          to: "Antibes / Cap d'Antibes",
          duration: "25 min",
          distance: 20,
        },
        {
          id: 5,
          from: "Monaco",
          to: "Milan / Portofino",
          duration: "4 h 30 min",
          distance: 320,
        },
        {
          id: 6,
          from: "Cannes",
          to: "Aéroport de Marseille",
          duration: "2 h 15 min",
          distance: 175,
        },
      ],

      winterTrips: [
        {
          id: 1,
          from: "Monaco",
          to: "Courchevel",
          duration: "5 h 30 min",
          distance: 480,
        },
        {
          id: 2,
          from: "Monaco",
          to: "Val d'Isère",
          duration: "6 h",
          distance: 520,
        },
        {
          id: 3,
          from: "Nice",
          to: "Courchevel",
          duration: "5 h",
          distance: 450,
        },
        {
          id: 4,
          from: "Nice",
          to: "Val d'Isère",
          duration: "5 h 45 min",
          distance: 500,
        },
      ],
    },

    faqItems: [
      {
        id: "faq-1",
        question: "Comment réserver un véhicule ?",
        answer:
          "Sélectionnez le véhicule souhaité, renseignez les informations de votre trajet, puis envoyez votre demande. Notre équipe vérifie la disponibilité du véhicule et du chauffeur avant de confirmer la réservation.",
      },
      {
        id: "faq-2",
        question: "La réservation est-elle immédiate ?",
        answer:
          "La demande n'est pas automatiquement confirmée. Elle est d'abord vérifiée selon la disponibilité du véhicule, du chauffeur et les contraintes liées au trajet. Vous recevez ensuite une confirmation.",
      },
      {
        id: "faq-3",
        question: "Quand dois-je effectuer le paiement ?",
        answer:
          "Le paiement est demandé après validation de votre demande. Une fois le véhicule et le chauffeur confirmés, vous recevez les instructions de paiement sécurisé.",
      },
      {
        id: "faq-4",
        question: "Puis-je choisir un véhicule précis ?",
        answer:
          "Oui, vous pouvez choisir un véhicule spécifique parmi ceux proposés. Sa disponibilité est toutefois confirmée après vérification par notre équipe.",
      },
    ],

    faqContact: {
      title: "Besoin d'une précision avant votre demande ?",
      description:
        "Vous pouvez nous écrire directement ou indiquer vos besoins spécifiques dans le formulaire de réservation.",
    },
  };
}

export const chauffeurContent = createChauffeurContent("fr");
