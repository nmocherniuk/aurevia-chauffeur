import { Car } from "@/src/components/SVGManager/Car";
import { Clock } from "@/src/components/SVGManager/Clock";
import { ShieldCheck } from "@/src/components/SVGManager/ShieldCheck";
import { UserCheck } from "@/src/components/SVGManager/UserCheck";
import { getRoutes } from "@/src/config/routes";

export function createSecurityContent(locale: "fr" | "en") {
  const routes = getRoutes(locale);

  return {
    heroSection: {
      title: "Sécurité privée et protection rapprochée sur la Côte d'Azur",
      subtitle:
        "Riviera Prime facilite l'accès à des entreprises de sécurité privée pour vos déplacements, villas, événements et besoins de protection à Nice, Cannes, Monaco et Saint-Tropez.",
      buttonText: "Demander un devis",
      buttonLink: routes.security.book,
    },

    seoIntro: {
      title: "Des solutions de sécurité privée adaptées à vos besoins",
      paragraphs: [
        "Riviera Prime facilite la mise en relation avec des entreprises de sécurité privée pour la protection rapprochée, la sécurité des villas, des résidences, des entreprises et des événements sur la Côte d'Azur.",
        "Les prestations sont proposées, contractualisées et réalisées directement par les entreprises de sécurité concernées, qui doivent disposer des autorisations réglementaires applicables, notamment celles délivrées par le CNAPS lorsqu'elles sont requises.",
      ],
    },

    whyChooseUsItems: [
      {
        id: "why-choose-us-1",
        icon: ShieldCheck,
        title: "Une solution adaptée à chaque besoin",
        description:
          "Chaque demande est étudiée selon le contexte, le lieu, les horaires et le niveau de sécurité souhaité afin d'orienter vers une solution cohérente.",
      },
      {
        id: "why-choose-us-2",
        icon: UserCheck,
        title: "Des entreprises de sécurité qualifiées",
        description:
          "Les demandes sont orientées vers des entreprises de sécurité privée habituées aux environnements sensibles et haut de gamme.",
      },
      {
        id: "why-choose-us-3",
        icon: Clock,
        title: "Discrétion et réactivité",
        description:
          "Chaque demande est traitée avec attention et confidentialité, en tenant compte de vos contraintes opérationnelles.",
      },
      {
        id: "why-choose-us-4",
        icon: Car,
        title: "Sécurité et chauffeur privé",
        description:
          "Associez votre demande de sécurité privée à notre service de chauffeur VTC pour vos déplacements sur la Côte d'Azur.",
      },
    ],

    securityServices: [
      {
        id: "service-1",
        image: "/services-image/security/protection-rapprochee-garde-du-corps.webp",
        title: "Protection rapprochée",
        description:
          "Protection rapprochée et accompagnement de dirigeants, personnalités et clients privés.",
        alt: "Gardes du corps accompagnant un client sur une promenade de la Côte d'Azur",
        highlights: [
          "Déplacements professionnels et personnels",
          "Discrétion et réactivité",
          "Protection et transport",
        ],
      },
      {
        id: "service-2",
        image: "/services-image/security/securite-villa-residence-privee.webp",
        title: "Sécurité des villas et résidences",
        description:
          "Surveillance et sécurisation de villas, résidences et propriétés privées.",
        alt: "Agent de sécurité avec radio surveillant une villa avec piscine en bord de mer",
        highlights: [
          "Villas et résidences",
          "Présence et surveillance",
          "Confidentialité absolue",
        ],
      },
      {
        id: "service-3",
        image: "/services-image/security/securite-entreprise-escorte-dirigeants.webp",
        title: "Sécurité des entreprises et commerces",
        description:
          "Solutions de sécurité pour entreprises, bureaux, sites et commerces.",
        alt: "Agents de sécurité escortant des dirigeants devant un immeuble d'affaires",
        highlights: [
          "Sites sensibles",
          "Accueil et contrôle d'accès",
          "Solutions sur mesure",
        ],
      },
      {
        id: "service-4",
        image: "/services-image/security/securite-evenementielle-yacht.webp",
        title: "Sécurité événementielle",
        description:
          "Sécurisation d'événements privés, réceptions, soirées et rassemblements.",
        alt: "Agent de sécurité lors d'une réception privée sur un yacht au coucher du soleil",
        highlights: [
          "Événements privés",
          "Soirées et galas",
          "Lien avec les organisateurs",
        ],
      },
      {
        id: "service-5",
        image: "/services-image/security/securite-specialisee-protection-vip.webp",
        title: "Prestations de sécurité spécialisées",
        description:
          "Missions spécifiques nécessitant une expertise et une organisation avancées.",
        alt: "Personnalité accompagnée de deux agents de protection sur la terrasse d'une villa",
        highlights: [
          "Missions sur mesure",
          "Expertise avancée",
          "Dispositifs adaptés",
        ],
      },
    ],

    securityCta: {
      title: "Besoin d'une solution de sécurité privée ?",
      description:
        "Décrivez votre besoin dans le formulaire. Riviera Prime étudie votre demande et peut vous orienter vers une entreprise de sécurité privée adaptée.",
      buttonText: "Demander un devis",
      buttonLink: routes.security.book,
    },

    processSection: {
      title: "Votre demande en 4 étapes",
    },

    securityProcessStepsItems: [
      {
        id: "security-step-1",
        title: "Envoyez votre demande",
        description:
          "Renseignez les informations essentielles via le formulaire sécurisé.",
      },
      {
        id: "security-step-2",
        title: "Analyse de vos besoins",
        description:
          "Votre demande, le contexte et les contraintes de la mission sont étudiés avec attention.",
      },
      {
        id: "security-step-3",
        title: "Proposition du prestataire",
        description:
          "Une entreprise de sécurité privée adaptée vous adresse une proposition.",
      },
      {
        id: "security-step-4",
        title: "Confirmation de la prestation",
        description:
          "Les conditions, les tarifs et la mise en place de la prestation sont convenus directement avec l'entreprise prestataire.",
      },
    ],

    faqTitle: "Questions fréquentes sur la sécurité privée",

    faqItems: [
      {
        id: "security-faq-1",
        question: "Comment trouver une entreprise de sécurité privée ?",
        answer:
          "Remplissez le formulaire en précisant le type de prestation, le lieu, la date, les horaires et le nombre d'agents souhaité. Riviera Prime étudie votre demande et peut la transmettre à une entreprise de sécurité privée adaptée.",
      },
      {
        id: "security-faq-2",
        question: "Ma demande est-elle automatiquement confirmée ?",
        answer:
          "Non. L'envoi du formulaire ne constitue pas une réservation. La prestation est confirmée uniquement après acceptation par l'entreprise de sécurité concernée et accord sur ses conditions.",
      },
      {
        id: "security-faq-3",
        question: "Quelles informations dois-je fournir ?",
        answer:
          "Indiquez le type de prestation, l'adresse ou la zone d'intervention, la date, les horaires, le nombre d'agents souhaité ainsi que toute exigence particulière liée à la mission.",
      },
      {
        id: "security-faq-4",
        question: "Quand recevrai-je une réponse ?",
        answer:
          "Riviera Prime s'efforce de répondre dans les meilleurs délais. Le délai dépend de la nature de la demande et de la disponibilité des entreprises de sécurité.",
      },
    ],

    faqContact: {
      title: "Une question avant votre demande ?",
      description:
        "Contactez Riviera Prime par WhatsApp, e-mail ou téléphone pour préciser votre besoin de sécurité privée sur la Côte d'Azur.",
    },
  };
}

export const securityContent = createSecurityContent("fr");
