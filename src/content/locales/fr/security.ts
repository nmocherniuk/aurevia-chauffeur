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
      title: "Protection privée et sécurité haut de gamme",
      subtitle:
        "Riviera Prime coordonne des prestations de sécurité privée pour vos déplacements, événements, lieux sensibles et besoins spécifiques.",
      buttonText: commonContent.buttons.sendRequest,
      buttonLink: routes.security.book,
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: ShieldCheck,
        title: "Un dispositif adapté à chaque mission",
        description:
          "Chaque demande est analysée selon le contexte, le lieu, les horaires et le niveau de sécurité requis afin de proposer une solution cohérente.",
      },
      {
        id: "why-choose-us-2",
        icon: UserCheck,
        title: "Des agents sélectionnés avec exigence",
        description:
          "Nous coordonnons l'intervention de professionnels fiables, expérimentés et habitués aux environnements sensibles ou haut de gamme.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Une coordination réactive et discrète",
        description:
          "Votre demande est traitée avec attention afin d'organiser une intervention claire, confidentielle et adaptée à vos contraintes opérationnelles.",
      },
      {
        id: "why-choose-us-4",
        icon: Car,
        title: "Sécurité et transport coordonnés",
        description:
          "Lorsque la situation l'exige, nous pouvons coordonner une solution associant protection, accompagnement et transport privé avec chauffeur.",
      },
    ],

    securityServices: [
      {
        id: "service-1",
        image: "/services-image/security/luxury-bodyguard-agent.png",
        title: "Personal & Executive",
        description:
          "Protection rapprochée et accompagnement pour dirigeants et personnalités.",
        alt: "Agent de sécurité privée pour protection exécutive",
        highlights: [
          "Déplacements professionnels et personnels",
          "Discrétion et réactivité",
          "Protection et transport",
        ],
      },
      {
        id: "service-2",
        image: "/services-image/security/villa-security-residence.png",
        title: "Property & Private Security",
        description:
          "Sécurisation de résidences, villas et lieux privés sensibles.",
        alt: "Sécurité de résidence privée et villa de luxe",
        highlights: [
          "Résidences et villas",
          "Surveillance et présence",
          "Confidentialité absolue",
        ],
      },
      {
        id: "service-3",
        image: "/services-image/security/abstract-sphere-background.png",
        title: "Business & Commercial",
        description:
          "Solutions de sécurité pour entreprises, sites et activités commerciales.",
        alt: "Sécurité privée pour entreprises et sites commerciaux",
        highlights: [
          "Sites sensibles",
          "Accompagnement professionnel",
          "Coordination sur mesure",
        ],
      },
      {
        id: "service-4",
        image: "/services-image/security/luxury-private-residence.png",
        title: "Sécurité Événementielle",
        description:
          "Sécurisation d'événements privés, soirées et rassemblements.",
        alt: "Gestion de sécurité pour événements privés",
        highlights: [
          "Événements privés",
          "Soirées et galas",
          "Coordination avec organisateurs",
        ],
      },
      {
        id: "service-5",
        image: "/services-image/security/security-room-monitoring.png",
        title: "Solutions Spécialisées",
        description:
          "Missions spécifiques nécessitant une expertise et une coordination avancées.",
        alt: "Services de sécurité privée spécialisés",
        highlights: [
          "Missions sur mesure",
          "Expertise avancée",
          "Dispositifs adaptés",
        ],
      },
    ],

    securityCta: {
      title: "Besoin d'un dispositif de sécurité adapté ?",
      description:
        "Décrivez votre besoin dans le formulaire. Notre équipe analysera votre demande et vous recontactera rapidement.",
      buttonText: commonContent.buttons.sendRequest,
      buttonLink: routes.security.book,
    },

    securityProcessStepsItems: [
      {
        id: "security-step-1",
        title: "Envoyer votre demande",
        description:
          "Renseignez les informations essentielles via notre formulaire sécurisé.",
      },
      {
        id: "security-step-2",
        title: "Analyse de votre besoin",
        description:
          "Notre équipe étudie votre demande, le contexte et les contraintes de la mission.",
      },
      {
        id: "security-step-3",
        title: "Retour personnalisé",
        description:
          "Nous vous recontactons avec les informations nécessaires et les prochaines étapes.",
      },
      {
        id: "security-step-4",
        title: "Mise en place du dispositif",
        description:
          "Après validation, l'intervention est coordonnée selon les conditions convenues.",
      },
    ],

    faqItems: [
      {
        id: "security-faq-1",
        question: "Comment envoyer une demande de sécurité ?",
        answer:
          "Remplissez le formulaire avec les informations nécessaires : type de mission, lieu, date, horaires, nombre d'agents souhaité et besoins spécifiques. Votre demande est ensuite transmise à notre équipe pour traitement.",
      },
      {
        id: "security-faq-2",
        question: "La demande est-elle confirmée automatiquement ?",
        answer:
          "Non, l'envoi du formulaire ne confirme pas automatiquement la mission. Notre équipe analyse votre demande, vérifie les informations transmises et revient vers vous avec une réponse adaptée.",
      },
      {
        id: "security-faq-3",
        question: "Quelles informations dois-je fournir ?",
        answer:
          "Il est recommandé d'indiquer le type de prestation, l'adresse ou la zone d'intervention, la date, les horaires, le nombre d'agents souhaité, ainsi que toute exigence particulière liée à la mission.",
      },
      {
        id: "security-faq-4",
        question: "Quand vais-je recevoir une réponse ?",
        answer:
          "Après l'envoi du formulaire, votre demande est étudiée par notre équipe. Nous vous recontactons ensuite avec les informations nécessaires, les disponibilités possibles et les prochaines étapes.",
      },
    ],

    faqContact: {
      title: "Besoin d'une précision avant votre demande ?",
      description:
        "Indiquez vos besoins spécifiques dans le formulaire. Nous les analyserons avec votre demande.",
    },
  };
}

export const securityContent = createSecurityContent("fr");
