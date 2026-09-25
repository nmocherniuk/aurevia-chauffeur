import { Car } from "@/src/components/SVGManager/Car";
import { Clock } from "@/src/components/SVGManager/Clock";
import { ShieldCheck } from "@/src/components/SVGManager/ShieldCheck";
import { UserCheck } from "@/src/components/SVGManager/UserCheck";
import { getRoutes } from "@/src/config/routes";
import { commonContent } from "./common";

export function createSecurityContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Private security\nand close protection",
      subtitle:
        "Riviera Prime facilitates access to independent private security professionals for travel, events, sensitive locations, and specific requirements.",
      buttonText: commonContent.buttons.sendRequest,
      buttonLink: routes.security.book,
    },

    seoIntro: {
      title: "Coordinated private security solutions",
      paragraphs: [
        "Riviera Prime coordinates introductions to independent security professionals for close protection, property security, event security, and specialised missions. The platform reviews your request and organises a suitable arrangement — without employing the agents itself.",
        "Each assignment is assessed according to context, location, and required protection level to ensure clear, discreet coordination aligned with your constraints.",
      ],
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: ShieldCheck,
        title: "A plan tailored to every mission",
        description:
          "Each request is assessed based on context, location, schedule, and required security level to propose a coherent solution.",
      },
      {
        id: "why-choose-us-2",
        icon: UserCheck,
        title: "Rigorously selected agents",
        description:
          "Reliable, experienced professionals accustomed to sensitive and premium environments are coordinated with care.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Responsive, discreet coordination",
        description:
          "Your request is handled with care to organise a clear, confidential intervention adapted to your operational constraints.",
      },
      {
        id: "why-choose-us-4",
        icon: Car,
        title: "Coordinated security and transport",
        description:
          "When required, a solution combining protection, escort, and private chauffeur transport can be coordinated.",
      },
    ],

    securityServices: [
      {
        id: "service-1",
        image: "/services-image/security/luxury-bodyguard-agent.png",
        title: "Personal & executive protection",
        description:
          "Close protection and escort for executives and high-profile clients.",
        alt: "Close protection and executive security with independent professionals",
        highlights: [
          "Business and personal travel",
          "Discretion and responsiveness",
          "Protection and transport",
        ],
      },
      {
        id: "service-2",
        image: "/services-image/security/villa-security-residence.png",
        title: "Property & residence security",
        description:
          "Securing residences, villas, and sensitive private locations.",
        alt: "Private residence and villa security",
        highlights: [
          "Residences and villas",
          "Presence and surveillance",
          "Absolute confidentiality",
        ],
      },
      {
        id: "service-3",
        image: "/services-image/security/abstract-sphere-background.png",
        title: "Business & commercial security",
        description:
          "Security solutions for businesses, premises, and commercial activities.",
        alt: "Private security for business and commercial sites",
        highlights: [
          "Sensitive sites",
          "Professional escort",
          "Tailored coordination",
        ],
      },
      {
        id: "service-4",
        image: "/services-image/security/luxury-private-residence.png",
        title: "Event security",
        description:
          "Security for private events, evenings, and gatherings.",
        alt: "Event security for private events",
        highlights: [
          "Private events",
          "Evenings and galas",
          "Coordination with organisers",
        ],
      },
      {
        id: "service-5",
        image: "/services-image/security/security-room-monitoring.png",
        title: "Specialised solutions",
        description:
          "Specific missions requiring advanced expertise and coordination.",
        alt: "Specialised private security solutions",
        highlights: [
          "Bespoke missions",
          "Advanced expertise",
          "Adapted security plans",
        ],
      },
    ],

    securityCta: {
      title: "Need a tailored security plan?",
      description:
        "Describe your requirements in the form. Riviera Prime reviews your request and coordinates introductions to suitable independent professionals.",
      buttonText: commonContent.buttons.sendRequest,
      buttonLink: routes.security.book,
    },

    processSection: {
      title: "Your request in 4 steps",
    },

    securityProcessStepsItems: [
      {
        id: "security-step-1",
        title: "Submit your request",
        description:
          "Provide essential information through the secure form.",
      },
      {
        id: "security-step-2",
        title: "Assessment of your needs",
        description:
          "Your request, context, and mission constraints are reviewed with care.",
      },
      {
        id: "security-step-3",
        title: "Personalised response",
        description:
          "You receive a personalised response with the necessary information and next steps.",
      },
      {
        id: "security-step-4",
        title: "Deployment of the plan",
        description:
          "After approval, the intervention is coordinated according to agreed terms.",
      },
    ],

    faqItems: [
      {
        id: "security-faq-1",
        question: "How do I make a security request?",
        answer:
          "Complete the form with the required information: mission type, location, date, schedule, number of agents required, and any specific needs. Your request is then taken forward and reviewed.",
      },
      {
        id: "security-faq-2",
        question: "Is the request confirmed automatically?",
        answer:
          "No, submitting the form does not automatically confirm the mission. The request is reviewed, the information provided is verified, and a tailored response is sent to you.",
      },
      {
        id: "security-faq-3",
        question: "What information should I provide?",
        answer:
          "It is recommended to indicate the service type, address or intervention area, date, schedule, number of agents required, and any specific requirements related to the mission.",
      },
      {
        id: "security-faq-4",
        question: "When will I receive a response?",
        answer:
          "After submitting the form, your request is reviewed. You then receive a personalised response with the necessary information, possible availability, and next steps.",
      },
    ],

    faqContact: {
      title: "Need clarification before your request?",
      description:
        "Specify your requirements in the form. They will be taken into account along with your request.",
    },
  };
}

export const securityContent = createSecurityContent("en");
