import { getRoutes } from "@/src/config/routes";
import { commonContent } from "./common";

export function createHomeContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Riviera Prime\nPrivate chauffeur & private security",
      subtitle:
        "Premium coordination for transfers, events, and private security needs on the French Riviera.",
      buttonText: commonContent.buttons.services,
      buttonLink: routes.home.services,
    },

    whoWeAreTitle: "Riviera Prime — Excellence in every detail",

    whoWeAreItems: [
      "Riviera Prime is a coordination platform that connects clients with independent professionals selected according to their needs, in private chauffeur and private security services. The platform prioritises discretion, reliability, and seamless service management from the first request through to final confirmation.",
      "The network brings together experienced independent professionals selected for service quality, responsiveness, and the ability to operate in demanding environments. Every request is handled with precision to ensure clear, confidential coordination tailored to your needs on the French Riviera and beyond.",
    ] as const,

    servicesSectionTitle: "Private chauffeur and private security",

    servicesSection: [
      {
        title: "Private chauffeur on the French Riviera",
        description:
          "Coordinated access for airport transfers, business travel, events, and bespoke journeys with independent private chauffeurs.",
        href: routes.chauffeur.index,
        image: "/images/hyundai-motor-group.png",
        imageAlt:
          "Private chauffeur on the French Riviera — premium vehicle for transfers and travel",
        buttonText: commonContent.buttons.discover,
      },
      {
        title: "Private security solutions",
        description:
          "Coordinated access to independent security professionals for protection, escort, and security tailored to your constraints.",
        href: routes.security.index,
        image: "/images/luxury-private-bodyguards.png",
        imageAlt:
          "Private security — independent professionals for protection and escort",
        buttonText: commonContent.buttons.discover,
      },
    ] as const,

    partnerCta: {
      title: "Interested in becoming a partner?",
      description:
        "Chauffeurs, security agents, or premium providers: get in touch to introduce your services and join the Riviera Prime network.",
    },

    faqItems: [
      {
        id: "home-faq-1",
        question: "What services does Riviera Prime offer?",
        answer:
          "Riviera Prime coordinates connections with independent private chauffeurs and independent private security professionals for travel, events, business needs, and bespoke requests.",
      },
      {
        id: "home-faq-2",
        question: "How does a booking request work?",
        answer:
          "You submit your request with the required information. Availability, feasibility of the request, and identification of suitable partners are then verified before any confirmation.",
      },
      {
        id: "home-faq-3",
        question: "Is the booking confirmed immediately?",
        answer:
          "No, a request is not automatically confirmed. The booking becomes final only after availability is validated and written confirmation is provided.",
      },
      {
        id: "home-faq-4",
        question: "When is payment required?",
        answer:
          "Payment is requested depending on the service: at booking, as a deposit, or after confirmation. All payments are processed through a secure payment solution.",
      },
    ],
  };
}

export const homeContent = createHomeContent("en");
