import { getRoutes } from "@/src/config/routes";
import { commonContent } from "./common";

export function createHomeContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Riviera Prime\nPrivate transport and protection",
      subtitle:
        "Premium services for your journeys, events, and security requirements.",
      buttonText: commonContent.buttons.services,
      buttonLink: routes.home.services,
    },

    whoWeAreTitle: "Riviera Prime — Excellence in every detail",

    whoWeAreItems: [
      "Riviera Prime is a premium coordination platform connecting clients with trusted independent professionals in private chauffeur and executive security services. We prioritise discretion, reliability, and seamless service management from the first request through to final confirmation.",
      "Our network is built on experienced professionals selected for service quality, responsiveness, and the ability to operate in demanding environments with the highest level of professionalism. Every request is handled with precision to ensure clear, confidential coordination tailored to your needs.",
    ] as const,

    servicesSectionTitle: "Choose your experience",

    servicesSection: [
      {
        title: "Private chauffeur",
        description:
          "Premium transport for airport transfers, business travel, events, and bespoke journeys.",
        href: routes.chauffeur.index,
        image: "/images/hyundai-motor-group.png",
        buttonText: commonContent.buttons.discover,
      },
      {
        title: "Private security",
        description:
          "Protection, escort, and security solutions coordinated to your needs, locations, and constraints.",
        href: routes.security.index,
        image: "/images/luxury-private-bodyguards.png",
        buttonText: commonContent.buttons.discover,
      },
    ] as const,

    partnerCta: {
      title: "Interested in becoming our partner?",
      description:
        "Chauffeurs, security agents, or premium providers: get in touch to introduce your services and join our network.",
    },

    faqItems: [
      {
        id: "home-faq-1",
        question: "What services does Riviera Prime offer?",
        answer:
          "Riviera Prime offers premium private chauffeur and private security services for travel, events, business needs, and bespoke requests.",
      },
      {
        id: "home-faq-2",
        question: "How does a booking request work?",
        answer:
          "You submit your request with the required information. Our team then checks availability, feasibility, and suitable partners before confirming the service.",
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
