export const securityFormContent = {
  section: {
    title: "Demande confidentielle",
    subtitle:
      "Expliquez votre besoin. Votre demande sera étudiée avec discrétion par notre équipe.",
    imageAlt: "Espace de coordination sécurité",
    summaryAriaLabel: "Résumé de la demande",
    submitError:
      "Une erreur est survenue. Veuillez réessayer dans un instant.",
  },
  steps: {
    service: "Service",
    client: "Client",
    details: "Détails",
    review: "Récapitulatif",
  },
  buttons: {
    back: "Précédent",
    continue: "Continuer",
    submitting: "Envoi…",
    submit: "Envoyer la demande",
  },
  service: {
    category: {
      label: "Catégorie de service",
      placeholder: "Sélectionnez une catégorie",
    },
    type: {
      label: "Type de service",
      placeholder: "Sélectionnez un type de service",
      placeholderNoCategory: "Sélectionnez d'abord une catégorie",
    },
    typeOther: {
      label: "Précisez le type de service",
      placeholder: "Quel service de sécurité recherchez-vous ?",
    },
    location: {
      label: "Lieu",
      placeholder: "Ville, site ou adresse",
    },
    date: { label: "Date", placeholder: "Sélectionnez une date" },
    time: {
      label: "Heure de début",
      placeholder: "Sélectionnez une heure",
    },
    duration: {
      label: "Durée",
      placeholder: "Sélectionnez une durée",
    },
    endDate: {
      label: "Date de fin",
      placeholder: "Sélectionnez une date de fin",
    },
    agentCount: {
      label: "Nombre d'agents",
      placeholder: "Sélectionner",
    },
  },
  client: {
    firstName: { label: "Prénom", placeholder: "Prénom" },
    lastName: { label: "Nom", placeholder: "Nom" },
    email: { label: "E-mail", placeholder: "E-mail" },
    phone: { label: "Téléphone", placeholder: "Téléphone" },
  },
  operation: {
    specialRequirements: {
      label: "Exigences particulières",
      placeholder: "Contexte, contraintes d'itinéraire, niveau de discrétion…",
    },
    languagesRequired: {
      label: "Langues requises",
      placeholder: "ex. français, anglais",
    },
    dressCode: {
      label: "Tenue souhaitée",
      placeholder: "Sélectionner",
    },
    vehicleRequired: {
      label: "Coordination véhicule nécessaire",
      placeholder: "Sélectionner",
    },
    armedRequired: {
      label: "Personnel armé demandé",
      placeholder: "Sélectionner",
    },
  },
  categories: [
    { value: "executive_protection", label: "Protection exécutive" },
    { value: "event_security", label: "Sécurité événementielle" },
    { value: "property_private", label: "Sécurité privée & propriétés" },
    { value: "business_commercial", label: "Entreprises & commerces" },
    { value: "advanced_specialized", label: "Avancé & spécialisé" },
  ],
  serviceTypes: {
    executive_protection: [
      { value: "bodyguard", label: "Garde du corps" },
      { value: "vip_escort", label: "Escorte VIP" },
      { value: "close_protection", label: "Protection rapprochée" },
    ],
    event_security: [
      { value: "event_security", label: "Sécurité événementielle" },
      { value: "crowd_management", label: "Gestion de foule" },
      { value: "access_control", label: "Contrôle d'accès" },
    ],
    property_private: [
      { value: "villa_security", label: "Sécurité villa" },
      { value: "hotel_security", label: "Sécurité hôtel" },
      { value: "construction_site_security", label: "Sécurité chantier" },
    ],
    business_commercial: [
      { value: "retail_security", label: "Sécurité commerce" },
      { value: "office_security", label: "Sécurité bureaux" },
      { value: "reception_access_control", label: "Accueil & contrôle d'accès" },
    ],
    advanced_specialized: [
      { value: "mobile_patrol", label: "Patrouille mobile" },
      { value: "alarm_response", label: "Intervention alarme" },
      { value: "k9_unit", label: "Unité cynophile" },
      { value: "soc", label: "Centre d'opérations sécurité" },
    ],
  },
  otherServiceType: { value: "other", label: "Autre" },
  duration: [
    { value: "4", label: "4 heures" },
    { value: "8", label: "8 heures" },
    { value: "12", label: "12 heures" },
    { value: "24", label: "24 heures (journée complète)" },
    { value: "multi", label: "Mission sur plusieurs jours" },
  ],
  dressCode: [
    { value: "", label: "Aucune préférence" },
    { value: "business", label: "Business" },
    { value: "formal", label: "Formel" },
    { value: "discreet", label: "Discret" },
    { value: "casual", label: "Décontracté" },
  ],
  yesNo: [
    { value: "", label: "Sélectionner" },
    { value: "yes", label: "Oui" },
    { value: "no", label: "Non" },
  ],
  review: {
    mission: "Mission",
    client: "Client",
    details: "Détails",
    until: "Jusqu'au",
    agents: "agent",
    agentsPlural: "agents",
    other: "Autre",
    noPreference: "Aucune préférence",
    notProvided: "Non renseigné",
    specialRequirements: "Exigences particulières",
    languages: "Langues",
    dressCode: "Tenue souhaitée",
    vehicleCoordination: "Coordination véhicule",
    armedPersonnel: "Personnel armé",
  },
  summary: {
    agentsPrefix: "Agents :",
  },
  success: {
    title: "Demande reçue",
    message:
      "Merci. Notre équipe de coordination analysera votre demande et vous contactera personnellement pour affiner les détails. Il ne s'agit pas d'une réservation instantanée : chaque mission est confirmée avec discrétion et rigueur.",
    button: "Continuer",
  },
  validation: {
    dateRequired: "La date est requise",
    dateFuture: "La date doit être aujourd'hui ou dans le futur",
    timeRequired: "L'heure de début est requise",
    categoryRequired: "Veuillez choisir une catégorie de service",
    typeRequired: "Veuillez choisir un type de service",
    typeOtherRequired: "Veuillez décrire le service souhaité",
    typeOtherMin: "Veuillez fournir un peu plus de détails",
    locationRequired: "Le lieu est requis",
    locationMin: "Veuillez saisir un lieu plus précis",
    durationRequired: "La durée est requise",
    endDateRequired:
      "La date de fin est requise pour une mission sur plusieurs jours",
    endDateAfterStart:
      "La date de fin doit être le même jour ou après la date de début",
    agentCountRequired: "Le nombre d'agents est requis",
    agentCountInvalid: "Saisissez un nombre valide",
    firstNameRequired: "Le prénom est requis",
    lastNameRequired: "Le nom est requis",
    emailRequired: "L'e-mail est requis",
    emailLong: "L'e-mail est trop long",
    emailSpaces: "L'e-mail ne peut pas contenir d'espaces",
    emailInvalid: "Veuillez entrer une adresse e-mail valide",
    phoneRequired: "Le numéro de téléphone est requis",
  },
} as const;
