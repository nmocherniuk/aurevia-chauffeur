export interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  alt: string;
}

export type SecurityService = Service & {
  highlights: string[];
};

export const chauffeurServices: Service[] = [
  {
    id: "service-1",
    image: "/services-image/transfert-aeroport-chauffeur-prive-vtc.png",
    title: "Transferts Aéroport",
    description:
      "Transferts privés vers tous les aéroports avec ponctualité garantie.",
    alt: "Chauffeur privé VTC pour transfert aéroport avec service premium",
  },
  {
    id: "service-2",
    image: "/services-image/transfert-hotel-residence-privee-chauffeur.png",
    title: "Hotels et Private Residences",
    description:
      "Transferts discrets vers hôtels de prestige et résidences privées.",
    alt: "Chauffeur privé pour transfert vers hôtel de luxe et résidence privée",
  },
  {
    id: "service-3",
    image: "/services-image/chauffeur-prive-luxe-interieur-mercedes.jpg",
    title: "Business et Corporate Travel",
    description:
      "Solutions premium pour vos déplacements professionnels et réunions.",
    alt: "Chauffeur privé business pour déplacements professionnels et corporate travel",
  },
  {
    id: "service-4",
    image: "/services-image/business-corporate-travel-chauffeur-prive.png",
    title: "Private Chauffeur",
    description:
      "Chauffeur privé à l’heure ou à la journée pour vos déplacements.",
    alt: "Service de chauffeur privé à l'heure ou à la journée avec véhicule de luxe",
  },
  {
    id: "service-5",
    image: "/services-image/chauffeur-mariage-evenement-prive-luxe.png",
    title: "Événements et Mariages",
    description:
      "Transport raffiné et élégant pour mariages et événements privés.",
    alt: "Chauffeur privé pour mariage et événement privé avec service de luxe",
  },
];

export const securityServices: SecurityService[] = [
  {
    id: "service-1",
    image: "/services-image/security/luxury-bodyguard-agent.png",
    title: "Transferts Aéroport",
    description:
      "Transferts privés vers tous les aéroports avec ponctualité garantie.",
    alt: "Chauffeur privé VTC pour transfert aéroport avec service premium",
    highlights: [
      "CDG, Orly, Le Bourget et autres plateformes",
      "Suivi de vol et accueil nominatif",
      "Véhicules premium, chauffeurs expérimentés",
    ],
  },
  {
    id: "service-2",
    image: "/services-image/security/villa-security-residence.png",
    title: "Hotels et Private Residences",
    description:
      "Transferts discrets vers hôtels de prestige et résidences privées.",
    alt: "Chauffeur privé pour transfert vers hôtel de luxe et résidence privée",
    highlights: [
      "Hôtels 5★ et palaces",
      "Résidences privées et villas",
      "Discrétion et confidentialité",
    ],
  },
  {
    id: "service-3",
    image: "/services-image/security/abstract-sphere-background.png",
    title: "Business et Corporate Travel",
    description:
      "Solutions premium pour vos déplacements professionnels et réunions.",
    alt: "Chauffeur privé business pour déplacements professionnels et corporate travel",
    highlights: [
      "Roadshows et tournées multi-villes",
      "Mise à disposition à la journée",
      "Facturation entreprise sur demande",
    ],
  },
  {
    id: "service-4",
    image: "/services-image/security/luxury-private-residence.png",
    title: "Private Chauffeur",
    description:
      "Chauffeur privé à l’heure ou à la journée pour vos déplacements.",
    alt: "Service de chauffeur privé à l'heure ou à la journée avec véhicule de luxe",
    highlights: [
      "À l’heure, demi-journée ou journée",
      "Itinéraires sur mesure",
      "Berlines et vans selon vos besoins",
    ],
  },
  {
    id: "service-5",
    image: "/services-image/security/security-room-monitoring.png",
    title: "Événements et Mariages",
    description:
      "Transport raffiné et élégant pour mariages et événements privés.",
    alt: "Chauffeur privé pour mariage et événement privé avec service de luxe",
    highlights: [
      "Mariages et cérémonies",
      "Soirées et galas",
      "Coordination avec vos organisateurs",
    ],
  },
];
