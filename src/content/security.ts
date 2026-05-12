import { Car } from "../components/SVGManager/Car";
import { Clock } from "../components/SVGManager/Clock";
import { ShieldCheck } from "../components/SVGManager/ShieldCheck";
import { UserCheck } from "../components/SVGManager/UserCheck";
import { routes } from "../config/routes";
import { commonContent } from "./common";

export const securityContent = {
  heroSection: {
    title: "Protection privée et sécurité haut de gamme",
    subtitle:
      "Aurevia coordonne des prestations de sécurité privée pour vos déplacements, événements, lieux sensibles et besoins spécifiques.",
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
        "Nous coordonnons l’intervention de professionnels fiables, expérimentés et habitués aux environnements sensibles ou haut de gamme.",
    },
    {
      id: "why-choose-us-3",
      icon: Clock,
      title: "Une coordination réactive et discrète",
      description:
        "Votre demande est traitée avec attention afin d’organiser une intervention claire, confidentielle et adaptée à vos contraintes opérationnelles.",
    },
    {
      id: "why-choose-us-4",
      icon: Car,
      title: "Sécurité et transport coordonnés",
      description:
        "Lorsque la situation l’exige, nous pouvons coordonner une solution associant protection, accompagnement et transport privé avec chauffeur.",
    },
  ],

  securityCta: {
    title: "Besoin d’un dispositif de sécurité adapté ?",
    description:
      "Décrivez votre besoin dans le formulaire. Notre équipe analysera votre demande et vous recontactera rapidement.",
    buttonText: commonContent.buttons.sendRequest,
    buttonLink: routes.chauffeur.book,
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
        "Après validation, l’intervention est coordonnée selon les conditions convenues.",
    },
  ],

  faqItems: [
    {
      id: "security-faq-1",
      question: "Comment envoyer une demande de sécurité ?",
      answer:
        "Remplissez le formulaire avec les informations nécessaires : type de mission, lieu, date, horaires, nombre d’agents souhaité et besoins spécifiques. Votre demande est ensuite transmise à notre équipe pour traitement.",
    },
    {
      id: "security-faq-2",
      question: "La demande est-elle confirmée automatiquement ?",
      answer:
        "Non, l’envoi du formulaire ne confirme pas automatiquement la mission. Notre équipe analyse votre demande, vérifie les informations transmises et revient vers vous avec une réponse adaptée.",
    },
    {
      id: "security-faq-3",
      question: "Quelles informations dois-je fournir ?",
      answer:
        "Il est recommandé d’indiquer le type de prestation, l’adresse ou la zone d’intervention, la date, les horaires, le nombre d’agents souhaité, ainsi que toute exigence particulière liée à la mission.",
    },
    {
      id: "security-faq-4",
      question: "Quand vais-je recevoir une réponse ?",
      answer:
        "Après l’envoi du formulaire, votre demande est étudiée par notre équipe. Nous vous recontactons ensuite avec les informations nécessaires, les disponibilités possibles et les prochaines étapes.",
    },
  ],

  faqContact: {
    title: "Besoin d’une précision avant votre demande ?",
    description:
      "Indiquez vos besoins spécifiques dans le formulaire. Nous les analyserons avec votre demande.",
  },
} as const;
