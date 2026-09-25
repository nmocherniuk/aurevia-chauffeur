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
        "Riviera Prime coordinates introductions to independent private chauffeurs for transfers, travel, and events.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    seoIntro: {
      title: "Chauffeur-driven transport, coordinated to your needs",
      paragraphs: [
        "Riviera Prime facilitates access to independent private chauffeurs for demanding journeys: airport transfers, business travel, hourly hire, and events. The platform coordinates the request, availability, and confirmation — without employing the chauffeurs itself.",
        "The most requested routes centre on Nice, Cannes, Monaco, Antibes, and Saint-Tropez, as well as connections from Nice Airport — journeys already featured among the platform's popular routes.",
      ],
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: List,
        title: "Clear, fixed pricing",
        description:
          "Your transfer price is confirmed in advance. No hidden fees, no surprises — full transparency at every step.",
      },
      {
        id: "why-choose-us-2",
        icon: ShieldCheck,
        title: "A service you can trust",
        description:
          "Experienced independent chauffeurs, immaculate vehicles, and absolute discretion for a safe, refined experience.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Uncompromising precision",
        description:
          "Every detail of your journey is carefully coordinated to ensure perfect punctuality and impeccable service.",
      },
      {
        id: "why-choose-us-4",
        icon: Diamond,
        title: "Travel in exceptional conditions",
        description:
          "Spacious interiors, impeccable presentation, and premium amenities elevate every journey.",
      },
    ],

    services: {
      title: "Private chauffeur services",
      items: [
        {
          id: "service-1",
          image: "/services-image/transfert-aeroport-chauffeur-prive-vtc.png",
          title: "Airport transfers",
          description:
            "Private transfers to all airports with guaranteed punctuality.",
          alt: "Airport transfer with private chauffeur — premium service on the French Riviera",
        },
        {
          id: "service-2",
          image: "/services-image/transfert-hotel-residence-privee-chauffeur.png",
          title: "Hotels and private residences",
          description:
            "Discreet transfers to luxury hotels and private residences.",
          alt: "Hotel or private residence transfer with private chauffeur",
        },
        {
          id: "service-3",
          image: "/services-image/chauffeur-prive-luxe-interieur-mercedes.jpg",
          title: "Business travel",
          description:
            "Premium solutions for business travel and meetings.",
          alt: "Business travel with private chauffeur",
        },
        {
          id: "service-4",
          image: "/services-image/business-corporate-travel-chauffeur-prive.png",
          title: "Chauffeur hire",
          description:
            "Hourly or daily private chauffeur for your journeys.",
          alt: "Hourly or daily private chauffeur hire",
        },
        {
          id: "service-5",
          image: "/services-image/chauffeur-mariage-evenement-prive-luxe.png",
          title: "Events and weddings",
          description:
            "Refined, elegant transport for weddings and private events.",
          alt: "Private chauffeur for weddings and private events",
        },
      ],
    },

    fleet: {
      title: "Premium vehicles and independent chauffeurs",
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
        "Describe your journey — Riviera Prime coordinates the introduction to an independent private chauffeur for an elegant, punctual, and discreet trip.",
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
        question: "How do I book a vehicle?",
        answer:
          "Select your preferred vehicle, enter your journey details, and submit your request. Vehicle and chauffeur availability is verified before the booking is confirmed.",
      },
      {
        id: "faq-2",
        question: "Is the booking immediate?",
        answer:
          "The request is not automatically confirmed. It is first reviewed based on vehicle and chauffeur availability and journey constraints. You then receive a confirmation.",
      },
      {
        id: "faq-3",
        question: "When do I need to pay?",
        answer:
          "Payment is requested after your request is validated. Once the vehicle and chauffeur are confirmed, you receive secure payment instructions.",
      },
      {
        id: "faq-4",
        question: "Can I choose a specific vehicle?",
        answer:
          "Yes, you can choose a specific vehicle from those offered. Availability is confirmed after review during request processing.",
      },
    ],

    faqContact: {
      title: "Need clarification before your request?",
      description:
        "You can get in touch directly or specify your requirements in the booking form.",
    },
  };
}

export const chauffeurContent = createChauffeurContent("en");
