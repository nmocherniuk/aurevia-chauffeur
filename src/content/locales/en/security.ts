import { Car } from "@/src/components/SVGManager/Car";
import { Clock } from "@/src/components/SVGManager/Clock";
import { ShieldCheck } from "@/src/components/SVGManager/ShieldCheck";
import { UserCheck } from "@/src/components/SVGManager/UserCheck";
import { getRoutes } from "@/src/config/routes";

export function createSecurityContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Private security and close protection on the French Riviera",
      subtitle:
        "Riviera Prime facilitates access to private security companies for your travel, villas, events and protection needs in Nice, Cannes, Monaco and Saint-Tropez.",
      buttonText: "Request a quote",
      buttonLink: routes.security.book,
    },

    seoIntro: {
      title: "Private security solutions tailored to your needs",
      paragraphs: [
        "Riviera Prime puts clients in touch with private security companies for close protection and for villa, residence, business and event security on the French Riviera.",
        "Services are offered, contracted and carried out directly by the security companies concerned, which must hold the applicable regulatory authorisations, including those issued by the CNAPS (France's private security regulator) where required.",
      ],
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: ShieldCheck,
        title: "A solution for every need",
        description:
          "Each request is assessed according to context, location, schedule and the level of security required, so it can be directed to a suitable solution.",
      },
      {
        id: "why-choose-us-2",
        icon: UserCheck,
        title: "Qualified security companies",
        description:
          "Requests are directed to private security companies experienced in sensitive and high-end environments.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Discretion and responsiveness",
        description:
          "Every request is handled with care and confidentiality, taking your operational constraints into account.",
      },
      {
        id: "why-choose-us-4",
        icon: Car,
        title: "Security and private chauffeur",
        description:
          "Combine your private security request with our private chauffeur service for your travel on the French Riviera.",
      },
    ],

    securityServices: [
      {
        id: "service-1",
        image: "/services-image/security/protection-rapprochee-garde-du-corps.webp",
        title: "Close protection",
        description:
          "Close protection and escort for executives, high-profile individuals and private clients.",
        alt: "Bodyguards escorting a client along a French Riviera promenade",
        highlights: [
          "Business and personal travel",
          "Discretion and responsiveness",
          "Protection and transport",
        ],
      },
      {
        id: "service-2",
        image: "/services-image/security/securite-villa-residence-privee.webp",
        title: "Villa and residence security",
        description:
          "Surveillance and protection of villas, residences and private properties.",
        alt: "Security guard with a radio watching over a seafront villa with a pool",
        highlights: [
          "Villas and residences",
          "On-site presence and surveillance",
          "Complete confidentiality",
        ],
      },
      {
        id: "service-3",
        image: "/services-image/security/securite-entreprise-escorte-dirigeants.webp",
        title: "Business and retail security",
        description:
          "Security solutions for companies, offices, sites and shops.",
        alt: "Security officers escorting executives outside a business building",
        highlights: [
          "Sensitive sites",
          "Reception and access control",
          "Tailored solutions",
        ],
      },
      {
        id: "service-4",
        image: "/services-image/security/securite-evenementielle-yacht.webp",
        title: "Event security",
        description:
          "Security for private events, receptions, parties and gatherings.",
        alt: "Security officer at a private reception on a yacht at sunset",
        highlights: [
          "Private events",
          "Parties and galas",
          "Liaison with organisers",
        ],
      },
      {
        id: "service-5",
        image: "/services-image/security/securite-specialisee-protection-vip.webp",
        title: "Specialised security services",
        description:
          "Specific missions requiring advanced expertise and planning.",
        alt: "High-profile client with two protection officers on a villa terrace",
        highlights: [
          "Bespoke missions",
          "Advanced expertise",
          "Adapted security plans",
        ],
      },
    ],

    securityCta: {
      title: "Need a private security solution?",
      description:
        "Describe your requirements in the form. Riviera Prime reviews your request and can refer you to a suitable private security company.",
      buttonText: "Request a quote",
      buttonLink: routes.security.book,
    },

    processSection: {
      title: "Your request in 4 steps",
    },

    securityProcessStepsItems: [
      {
        id: "security-step-1",
        title: "Send your request",
        description:
          "Provide the essential information through the secure form.",
      },
      {
        id: "security-step-2",
        title: "Assessment of your needs",
        description:
          "Your request, its context and the mission constraints are reviewed with care.",
      },
      {
        id: "security-step-3",
        title: "Provider proposal",
        description:
          "A suitable private security company sends you a proposal.",
      },
      {
        id: "security-step-4",
        title: "Service confirmation",
        description:
          "Terms, pricing and arrangements are agreed directly with the provider company.",
      },
    ],

    faqTitle: "Private security FAQ",

    faqItems: [
      {
        id: "security-faq-1",
        question: "How do I find a private security company?",
        answer:
          "Complete the form with the type of service, location, date, schedule and number of agents required. Riviera Prime reviews your request and can pass it on to a suitable private security company.",
      },
      {
        id: "security-faq-2",
        question: "Is my request confirmed automatically?",
        answer:
          "No. Submitting the form is not a booking. The service is confirmed only once the security company concerned has accepted it and its terms have been agreed.",
      },
      {
        id: "security-faq-3",
        question: "What information should I provide?",
        answer:
          "Indicate the type of service, the address or area, the date, the schedule, the number of agents required and any specific requirements related to the mission.",
      },
      {
        id: "security-faq-4",
        question: "When will I receive a response?",
        answer:
          "Riviera Prime aims to respond as quickly as possible. Timing depends on the nature of the request and the availability of the security companies.",
      },
    ],

    faqContact: {
      title: "A question before your request?",
      description:
        "Contact Riviera Prime by WhatsApp, email or phone to discuss your private security needs on the French Riviera.",
    },
  };
}

export const securityContent = createSecurityContent("en");
