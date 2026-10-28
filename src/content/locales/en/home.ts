import { getRoutes } from "@/src/config/routes";
import { commonContent } from "./common";

export function createHomeContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Private chauffeur & private security\non the French Riviera",
      subtitle:
        "Private transfers, business travel and tailored security solutions in Nice, Cannes, Monaco, Antibes and Saint-Tropez.",
      buttonText: "Discover the services",
      buttonLink: routes.home.services,
    },

    whoWeAreTitle: "Riviera Prime — Excellence in every detail",

    whoWeAreItems: [
      "Riviera Prime provides private chauffeur services on the French Riviera: airport transfers, business travel, events and bespoke journeys. Transport is carried out directly by our own chauffeur service or by independent partner chauffeurs, depending on availability and the booking terms agreed.",
      "For private security needs, Riviera Prime puts you in touch with specialised companies holding the required regulatory authorisations. Our priority is a personal approach built on discretion, professionalism, transparency and attention to every detail.",
    ] as const,

    servicesSectionTitle: "Private chauffeur and private security",

    servicesSection: [
      {
        title: "Private chauffeur on the French Riviera",
        description:
          "Airport transfers, business travel, events and bespoke journeys with a professional chauffeur.",
        href: routes.chauffeur.index,
        image: "/images/chauffeur-prive-vtc-nice-promenade-des-anglais.webp",
        imageAlt:
          "Private chauffeurs and premium vehicles on the Promenade des Anglais in Nice",
        buttonText: commonContent.buttons.discover,
      },
      {
        title: "Private security solutions",
        description:
          "Close protection, villa, event and business security with specialised providers.",
        href: routes.security.index,
        image: "/images/protection-rapprochee-securite-privee-cote-azur.webp",
        imageAlt: "Close protection officers standing by black vehicles at an airport",
        buttonText: commonContent.buttons.discover,
      },
    ] as const,

    partnerCta: {
      title: "Interested in becoming a partner?",
      description:
        "Independent chauffeur, transport operator or private security company: Riviera Prime is growing its partner network on the French Riviera. Get in touch to introduce your business. Any collaboration is subject to verification of the applicable qualifications, authorisations and professional insurance.",
    },

    faqItems: [
      {
        id: "home-faq-1",
        question: "What services does Riviera Prime offer?",
        answer:
          "Riviera Prime provides private chauffeur services on the French Riviera: airport transfers, business travel, chauffeur hire and events. For private security, Riviera Prime puts you in touch with specialised companies holding the necessary authorisations.",
      },
      {
        id: "home-faq-2",
        question: "How does a booking request work?",
        answer:
          "You submit your request with the required details. For transport, Riviera Prime checks availability and sends you a confirmation. A private security request is passed on to a specialised company able to handle it.",
      },
      {
        id: "home-faq-3",
        question: "Is the booking confirmed immediately?",
        answer:
          "No. A transport booking becomes final once availability has been checked and confirmed in writing. A private security service is confirmed directly by the provider company, under its own terms.",
      },
      {
        id: "home-faq-4",
        question: "When is payment required?",
        answer:
          "For transport, the price and payment terms are communicated before confirmation. For a private security service, pricing and payment terms are set with the provider company.",
      },
    ],
  };
}

export const homeContent = createHomeContent("en");
