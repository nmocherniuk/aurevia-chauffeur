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
      title: "Chauffeur privé\nsur la Côte d'Azur",
      subtitle:
        "Riviera Prime assure vos transferts privés, déplacements professionnels et événements sur la Côte d'Azur, directement ou avec des chauffeurs VTC partenaires qualifiés.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    seoIntro: {
      title: "Transport avec chauffeur, adapté à vos besoins",
      paragraphs: [
        "Riviera Prime propose un service de chauffeur privé VTC pour vos transferts aéroport, déplacements professionnels, mises à disposition et événements sur la Côte d'Azur. Les prestations sont assurées directement par Riviera Prime ou par des chauffeurs VTC partenaires indépendants, selon les disponibilités.",
        "Nous intervenons notamment à Nice, Cannes, Monaco, Antibes et Saint-Tropez, ainsi que depuis et vers l'aéroport Nice Côte d'Azur.",
      ],
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: List,
        title: "Tarification claire et transparente",
        description:
          "Le prix de votre transfert vous est communiqué avant la confirmation de votre réservation.",
      },
      {
        id: "why-choose-us-2",
        icon: ShieldCheck,
        title: "Un service digne de confiance",
        description:
          "Des chauffeurs professionnels, des véhicules soigneusement entretenus et une discrétion absolue pour un trajet sûr et confortable.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Une organisation rigoureuse",
        description:
          "Chaque trajet est préparé avec soin pour respecter vos horaires et vos contraintes.",
      },
      {
        id: "why-choose-us-4",
        icon: Diamond,
        title: "Voyagez dans des conditions d'exception",
        description:
          "Berlines et vans premium, intérieurs spacieux et prestations haut de gamme pour chacun de vos déplacements.",
      },
    ],

    services: {
      title: "Prestations de chauffeur privé",
      items: [
        {
          id: "service-1",
          image: "/services-image/transfert-aeroport-nice-chauffeur-prive-vtc.webp",
          title: "Transferts aéroport",
          description:
            "Transferts privés depuis et vers l'aéroport de Nice et les autres aéroports desservis.",
          alt: "Chauffeur privé VTC accueillant un client à l'aéroport Nice Côte d'Azur",
        },
        {
          id: "service-2",
          image: "/services-image/transfert-villa-residence-privee-chauffeur.webp",
          title: "Hôtels et résidences privées",
          description:
            "Transferts discrets vers les hôtels de prestige et résidences privées.",
          alt: "Chauffeur chargeant les bagages d'une famille devant une villa avec vue mer",
        },
        {
          id: "service-3",
          image: "/services-image/deplacement-professionnel-chauffeur-prive.webp",
          title: "Déplacements professionnels",
          description:
            "Un chauffeur privé pour vos rendez-vous, réunions et voyages d'affaires.",
          alt: "Homme d'affaires travaillant à l'arrière d'une berline avec chauffeur privé",
        },
        {
          id: "service-4",
          image: "/services-image/mise-a-disposition-chauffeur-prive.webp",
          title: "Mise à disposition",
          description:
            "Chauffeur privé à l'heure ou à la journée selon votre programme.",
          alt: "Chauffeur privé ouvrant la portière à une cliente devant des boutiques de luxe",
        },
        {
          id: "service-5",
          image: "/services-image/chauffeur-mariage-evenement-mercedes-classe-v.webp",
          title: "Événements et mariages",
          description:
            "Transport élégant pour vos invités lors de mariages et événements privés.",
          alt: "Demoiselles d'honneur devant un Mercedes Classe V avec chauffeur pour un mariage",
        },
      ],
    },

    fleet: {
      title: "Véhicules premium avec chauffeur",
      empty: {
        title: "Aucun véhicule disponible pour le moment",
        description:
          "Flotte en cours de mise à jour. Utilisez le formulaire de réservation ou prenez contact via les coordonnées indiquées.",
      },
      capacity: {
        passenger: "passager",
        passengers: "passagers",
        baggage: "bagage",
        bagages: "bagages",
      },
      detailSpecs: {
        passengers: "Passagers :",
        vehicleType: "Type de véhicule :",
        modelYear: "Année :",
        baggage: "Bagages :",
        transmission: "Transmission :",
        interior: "Intérieur :",
      },
    },

    vehicleCta: {
      title: "Organisez votre transfert en toute simplicité",
      description:
        "Indiquez votre trajet, la date, l'heure et le nombre de passagers. Riviera Prime vérifie les disponibilités avant de confirmer votre réservation.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    transferTabs: [
      { id: "cityToCity" as const, label: "Transferts privés" },
      { id: "travelTransfers" as const, label: "Chauffeur à disposition" },
      { id: "winterTrips" as const, label: "Longue distance" },
    ],

    popularRoutes: {
      title: "Itinéraires populaires sur la Côte d'Azur",
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
          "Choisissez le véhicule souhaité, renseignez les informations de votre trajet, puis envoyez votre demande. La disponibilité du véhicule et du chauffeur est vérifiée avant la confirmation de votre réservation.",
      },
      {
        id: "faq-2",
        question: "La réservation est-elle immédiate ?",
        answer:
          "Non. Votre demande est d'abord vérifiée selon la disponibilité du véhicule et du chauffeur, ainsi que les contraintes liées au trajet. Vous recevez ensuite une confirmation écrite.",
      },
      {
        id: "faq-3",
        question: "Quand dois-je effectuer le paiement ?",
        answer:
          "Les modalités de paiement vous sont communiquées avant la confirmation de votre réservation. Selon la prestation, un acompte ou un paiement intégral peut être demandé, via une solution de paiement sécurisée.",
      },
      {
        id: "faq-4",
        question: "Puis-je choisir un véhicule précis ?",
        answer:
          "Oui, vous pouvez choisir un véhicule parmi ceux proposés. Sa disponibilité est confirmée lors du traitement de votre demande.",
      },
    ],

    faqContact: {
      title: "Besoin d'une précision avant votre demande ?",
      description:
        "Contactez directement Riviera Prime ou indiquez vos besoins particuliers dans le formulaire de réservation.",
    },
  };
}

export const chauffeurContent = createChauffeurContent("fr");
