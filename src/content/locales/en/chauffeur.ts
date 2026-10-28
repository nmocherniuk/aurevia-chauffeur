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
      title: "Private chauffeur\non the French Riviera",
      subtitle:
        "Riviera Prime handles your private transfers, business travel and events on the French Riviera, directly or with qualified partner chauffeurs.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    seoIntro: {
      title: "Private chauffeur service tailored to your needs",
      paragraphs: [
        "Riviera Prime provides a private chauffeur service for airport transfers, business travel, hourly hire and events on the French Riviera. Journeys are carried out directly by Riviera Prime or by independent partner chauffeurs, depending on availability.",
        "We operate in Nice, Cannes, Monaco, Antibes and Saint-Tropez, as well as to and from Nice Côte d'Azur Airport.",
      ],
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: List,
        title: "Clear, transparent pricing",
        description:
          "The price of your transfer is communicated before your booking is confirmed.",
      },
      {
        id: "why-choose-us-2",
        icon: ShieldCheck,
        title: "A service you can trust",
        description:
          "Professional chauffeurs, well-maintained vehicles and complete discretion for a safe, comfortable journey.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Careful planning",
        description:
          "Every journey is carefully prepared around your schedule and requirements.",
      },
      {
        id: "why-choose-us-4",
        icon: Diamond,
        title: "Travel in exceptional conditions",
        description:
          "Premium saloons and vans, spacious interiors and high-end amenities for every journey.",
      },
    ],

    services: {
      title: "Private chauffeur services",
      items: [
        {
          id: "service-1",
          image: "/services-image/transfert-aeroport-nice-chauffeur-prive-vtc.webp",
          title: "Airport transfers",
          description:
            "Private transfers to and from Nice Airport and other airports served.",
          alt: "Private chauffeur welcoming a client at Nice Côte d'Azur Airport",
        },
        {
          id: "service-2",
          image: "/services-image/transfert-villa-residence-privee-chauffeur.webp",
          title: "Hotels and private residences",
          description:
            "Discreet transfers to luxury hotels and private residences.",
          alt: "Chauffeur loading a family's luggage outside a sea-view villa",
        },
        {
          id: "service-3",
          image: "/services-image/deplacement-professionnel-chauffeur-prive.webp",
          title: "Business travel",
          description:
            "A private chauffeur for your appointments, meetings and business trips.",
          alt: "Businessman working in the back of a chauffeur-driven saloon",
        },
        {
          id: "service-4",
          image: "/services-image/mise-a-disposition-chauffeur-prive.webp",
          title: "Chauffeur hire",
          description:
            "Hourly or daily private chauffeur to fit your schedule.",
          alt: "Private chauffeur opening the door for a client outside luxury boutiques",
        },
        {
          id: "service-5",
          image: "/services-image/chauffeur-mariage-evenement-mercedes-classe-v.webp",
          title: "Events and weddings",
          description:
            "Elegant transport for your guests at weddings and private events.",
          alt: "Bridesmaids beside a chauffeur-driven Mercedes V-Class at a wedding",
        },
      ],
    },

    fleet: {
      title: "Premium chauffeur-driven vehicles",
      empty: {
        title: "No vehicles available at the moment",
        description:
          "The fleet is being updated. Use the booking form or get in touch using the contact details provided.",
      },
      capacity: {
        passenger: "passenger",
        passengers: "passengers",
        baggage: "baggage",
        bagages: "baggages",
      },
      detailSpecs: {
        passengers: "Passengers:",
        vehicleType: "Vehicle type:",
        modelYear: "Model year:",
        baggage: "Baggage:",
        transmission: "Transmission:",
        interior: "Interior:",
      },
    },

    vehicleCta: {
      title: "Arrange your transfer with ease",
      description:
        "Enter your route, date, time and number of passengers. Riviera Prime checks availability before confirming your booking.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    transferTabs: [
      { id: "cityToCity" as const, label: "Private transfers" },
      { id: "travelTransfers" as const, label: "Chauffeur on demand" },
      { id: "winterTrips" as const, label: "Long distance" },
    ],

    popularRoutes: {
      title: "Popular routes on the French Riviera",
      navAriaLabel: "Route categories",
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
          from: "Nice Airport",
          to: "Monaco",
          duration: "35 min",
          distance: 30,
        },
        {
          id: 2,
          from: "Nice Airport",
          to: "Cannes",
          duration: "35 min",
          distance: 32,
        },
        {
          id: 3,
          from: "Nice Airport",
          to: "Saint-Tropez",
          duration: "2 h",
          distance: 110,
        },
        {
          id: 4,
          from: "Nice Airport",
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
          to: "Marseille Airport",
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
        question: "How do I book a vehicle?",
        answer:
          "Choose your preferred vehicle, enter your journey details and submit your request. Vehicle and chauffeur availability is checked before your booking is confirmed.",
      },
      {
        id: "faq-2",
        question: "Is the booking immediate?",
        answer:
          "No. Your request is first checked against vehicle and chauffeur availability and any journey constraints. You then receive a written confirmation.",
      },
      {
        id: "faq-3",
        question: "When do I need to pay?",
        answer:
          "Payment terms are communicated before your booking is confirmed. Depending on the service, a deposit or full payment may be requested through a secure payment solution.",
      },
      {
        id: "faq-4",
        question: "Can I choose a specific vehicle?",
        answer:
          "Yes, you can choose a vehicle from those offered. Its availability is confirmed when your request is processed.",
      },
    ],

    faqContact: {
      title: "Need clarification before your request?",
      description:
        "Contact Riviera Prime directly or add any specific requirements in the booking form.",
    },
  };
}

export const chauffeurContent = createChauffeurContent("en");
