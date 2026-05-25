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
      title: "Private protection and premium security",
      subtitle:
        "Riviera Prime coordinates private security services for your travel, events, sensitive locations, and specific requirements.",
      buttonText: commonContent.buttons.sendRequest,
      buttonLink: routes.security.book,
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
          "We coordinate reliable, experienced professionals accustomed to sensitive and premium environments.",
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
          "When required, we can coordinate a solution combining protection, escort, and private chauffeur transport.",
      },
    ],

    securityServices: [
      {
        id: "service-1",
        image: "/services-image/security/luxury-bodyguard-agent.png",
        title: "Personal & Executive",
        description:
          "Close protection and escort for executives and high-profile clients.",
        alt: "Private security agent for executive protection",
        highlights: [
          "Business and personal travel",
          "Discretion and responsiveness",
          "Experienced agents",
        ],
      },
      {
        id: "service-2",
        image: "/services-image/security/villa-security-residence.png",
        title: "Property & Private Security",
        description:
          "Securing residences, villas, and sensitive private locations.",
        alt: "Private residence and luxury villa security",
        highlights: [
          "Residences and villas",
          "Presence and surveillance",
          "Absolute confidentiality",
        ],
      },
      {
        id: "service-3",
        image: "/services-image/security/abstract-sphere-background.png",
        title: "Business & Commercial",
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
        title: "Event & Crowd Management",
        description:
          "Security for private events, evenings, and gatherings.",
        alt: "Security management for private events",
        highlights: [
          "Private events",
          "Evenings and galas",
          "Coordination with organisers",
        ],
      },
      {
        id: "service-5",
        image: "/services-image/security/security-room-monitoring.png",
        title: "Advanced & Specialized",
        description:
          "Specific missions requiring advanced expertise and coordination.",
        alt: "Specialised private security services",
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
        "Describe your requirements in the form. Our team will review your request and get back to you promptly.",
      buttonText: commonContent.buttons.sendRequest,
      buttonLink: routes.security.book,
    },

    securityProcessStepsItems: [
      {
        id: "security-step-1",
        title: "Submit your request",
        description:
          "Provide essential information through our secure form.",
      },
      {
        id: "security-step-2",
        title: "Assessment of your needs",
        description:
          "Our team reviews your request, context, and mission constraints.",
      },
      {
        id: "security-step-3",
        title: "Personalised response",
        description:
          "We contact you with the necessary information and next steps.",
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
        question: "How do I submit a security request?",
        answer:
          "Complete the form with the required information: mission type, location, date, schedule, number of agents required, and any specific needs. Your request is then forwarded to our team for processing.",
      },
      {
        id: "security-faq-2",
        question: "Is the request confirmed automatically?",
        answer:
          "No, submitting the form does not automatically confirm the mission. Our team reviews your request, verifies the information provided, and responds with a tailored answer.",
      },
      {
        id: "security-faq-3",
        question: "What information should I provide?",
        answer:
          "We recommend indicating the service type, address or intervention area, date, schedule, number of agents required, and any specific requirements related to the mission.",
      },
      {
        id: "security-faq-4",
        question: "When will I receive a response?",
        answer:
          "After submitting the form, your request is reviewed by our team. We then contact you with the necessary information, possible availability, and next steps.",
      },
    ],

    faqContact: {
      title: "Need clarification before your request?",
      description:
        "Specify your requirements in the form. We will review them along with your request.",
    },
  };
}

export const securityContent = createSecurityContent("en");
