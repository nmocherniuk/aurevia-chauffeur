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
      title: "Aurevia Chauffeur\nPrivate Executive Transportation",
      subtitle:
        "Premium chauffeur services designed for comfort, discretion, and precision.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
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
          "Experienced chauffeurs, immaculate vehicles, and absolute discretion ensure a safe, refined experience.",
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
      title: commonContent.servicesSectionTitle,
      items: [
        {
          id: "service-1",
          image: "/services-image/transfert-aeroport-chauffeur-prive-vtc.png",
          title: "Airport Transfers",
          description:
            "Private transfers to all airports with guaranteed punctuality.",
          alt: "Private chauffeur for premium airport transfer service",
        },
        {
          id: "service-2",
          image: "/services-image/transfert-hotel-residence-privee-chauffeur.png",
          title: "Hotels and Private Residences",
          description:
            "Discreet transfers to luxury hotels and private residences.",
          alt: "Private chauffeur transfer to luxury hotel and private residence",
        },
        {
          id: "service-3",
          image: "/services-image/chauffeur-prive-luxe-interieur-mercedes.jpg",
          title: "Business and Corporate Travel",
          description:
            "Premium solutions for business travel and meetings.",
          alt: "Business chauffeur for professional and corporate travel",
        },
        {
          id: "service-4",
          image: "/services-image/business-corporate-travel-chauffeur-prive.png",
          title: "Private Chauffeur",
          description:
            "Hourly or daily private chauffeur for your journeys.",
          alt: "Private chauffeur service by the hour or day with luxury vehicle",
        },
        {
          id: "service-5",
          image: "/services-image/chauffeur-mariage-evenement-prive-luxe.png",
          title: "Events and Weddings",
          description:
            "Refined, elegant transport for weddings and private events.",
          alt: "Private chauffeur for wedding and private event luxury service",
        },
      ],
    },

    vehicleCta: {
      title: "Book Your Chauffeur with Ease",
      description:
        "Arrange your transfer in a few clicks and enjoy an elegant, punctual, and discreet journey.",
      buttonText: commonContent.buttons.reserve,
      buttonLink: routes.chauffeur.book,
    },

    transferTabs: [
      { id: "cityToCity" as const, label: "City-to-city transfers" },
      { id: "travelTransfers" as const, label: "Travel transfers" },
      { id: "winterTrips" as const, label: "Winter trips" },
    ],

    popularRoutes: {
      title: "Most popular routes",
      navAriaLabel: "Route categories",
      cityToCity: [
        { id: 1, from: "Monaco", to: "Cannes", duration: "45 min", distance: 50 },
        { id: 2, from: "Monaco", to: "Antibes / Cap d'Antibes", duration: "25 min", distance: 20 },
        { id: 3, from: "Monaco", to: "Saint-Tropez", duration: "1 h 45 min", distance: 100 },
        { id: 4, from: "Cannes", to: "Saint-Tropez", duration: "1 h 30 min", distance: 90 },
        { id: 5, from: "Cannes", to: "Antibes", duration: "30 min", distance: 25 },
        { id: 6, from: "Nice", to: "Saint-Tropez", duration: "2 h", distance: 110 },
      ],
      travelTransfers: [
        { id: 1, from: "Nice Airport", to: "Monaco", duration: "40 min", distance: 30 },
        { id: 2, from: "Nice Airport", to: "Cannes", duration: "30 min", distance: 27 },
        { id: 3, from: "Nice Airport", to: "Saint-Tropez", duration: "1 h 30 min", distance: 100 },
        { id: 4, from: "Nice Airport", to: "Antibes / Cap d'Antibes", duration: "25 min", distance: 20 },
        { id: 5, from: "Monaco", to: "Milan / Portofino", duration: "3 h 30 min", distance: 300 },
        { id: 6, from: "Cannes", to: "Marseille Airport", duration: "2 h", distance: 180 },
      ],
      winterTrips: [
        { id: 1, from: "Monaco", to: "Courchevel", duration: "4 h 30 min", distance: 450 },
        { id: 2, from: "Monaco", to: "Val d'Isère", duration: "5 h 30 min", distance: 520 },
        { id: 3, from: "Nice", to: "Courchevel", duration: "4 h 15 min", distance: 430 },
        { id: 4, from: "Nice", to: "Val d'Isère", duration: "5 h 15 min", distance: 500 },
      ],
    },

    faqItems: [
      {
        id: "faq-1",
        question: "How do I book a vehicle?",
        answer:
          "Select your preferred vehicle, enter your journey details, and submit your request. Our team checks vehicle and chauffeur availability before confirming the booking.",
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
          "Yes, you can choose a specific vehicle from those offered. Availability is confirmed after review by our team.",
      },
    ],

    faqContact: {
      title: "Need clarification before your request?",
      description:
        "You can write to us directly or specify your requirements in the booking form.",
    },
  };
}

export const chauffeurContent = createChauffeurContent("en");
