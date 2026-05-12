export type SecurityCategoryId =
  | "executive_protection"
  | "event_security"
  | "property_private"
  | "business_commercial"
  | "advanced_specialized";

export const SECURITY_CATEGORIES: {
  id: SecurityCategoryId;
  label: string;
  description: string;
}[] = [
  {
    id: "executive_protection",
    label: "Protection executive",
    description: "Protection rapprochee discrete adaptee a votre itineraire.",
  },
  {
    id: "event_security",
    label: "Securite evenementielle",
    description: "Dispositif maitrise pour evenements prives et publics.",
  },
  {
    id: "property_private",
    label: "Securite privee & proprietes",
    description: "Residences, sejours et sites prives avec presence dediee.",
  },
  {
    id: "business_commercial",
    label: "Entreprises & commerces",
    description: "Bureaux, commerces et environnements professionnels.",
  },
  {
    id: "advanced_specialized",
    label: "Avance & specialise",
    description: "Besoins complexes ou non standards traites avec rigueur.",
  },
];

export type ServiceTypeOption = { value: string; label: string };

export const CATEGORY_SELECT_OPTIONS: ServiceTypeOption[] =
  SECURITY_CATEGORIES.map((c) => ({ value: c.id, label: c.label }));

export const SECURITY_SERVICE_TYPES: Record<SecurityCategoryId, ServiceTypeOption[]> = {
  executive_protection: [
    { value: "bodyguard", label: "Garde du corps" },
    { value: "vip_escort", label: "Escorte VIP" },
    { value: "close_protection", label: "Protection rapprochee" },
  ],
  event_security: [
    { value: "event_security", label: "Securite evenementielle" },
    { value: "crowd_management", label: "Gestion de foule" },
    { value: "access_control", label: "Controle d'acces" },
  ],
  property_private: [
    { value: "villa_security", label: "Securite villa" },
    { value: "hotel_security", label: "Securite hotel" },
    { value: "construction_site_security", label: "Securite chantier" },
  ],
  business_commercial: [
    { value: "retail_security", label: "Securite commerce" },
    { value: "office_security", label: "Securite bureaux" },
    { value: "reception_access_control", label: "Accueil & controle d'acces" },
  ],
  advanced_specialized: [
    { value: "mobile_patrol", label: "Patrouille mobile" },
    { value: "alarm_response", label: "Intervention alarme" },
    { value: "k9_unit", label: "Unite cynophile" },
    { value: "soc", label: "Centre d'operations securite" },
  ],
};

const OTHER_SERVICE_OPTION: ServiceTypeOption = {
  value: "other",
  label: "Autre",
};

/** Types pour la categorie selectionnee + "Autre" (detail dans `serviceTypeOther`). */
export function getServiceTypeSelectOptions(
  categoryId: string,
): ServiceTypeOption[] {
  if (!categoryId || !(categoryId in SECURITY_SERVICE_TYPES)) {
    return [];
  }
  const base = SECURITY_SERVICE_TYPES[categoryId as SecurityCategoryId];
  return [...base, OTHER_SERVICE_OPTION];
}

export const DURATION_OPTIONS = [
  { value: "4", label: "4 heures" },
  { value: "8", label: "8 heures" },
  { value: "12", label: "12 heures" },
  { value: "24", label: "24 heures (journee complete)" },
  { value: "multi", label: "Mission sur plusieurs jours" },
] as const;

export const AGENT_COUNT_OPTIONS = Array.from({ length: 24 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

export const DRESS_CODE_OPTIONS = [
  { value: "", label: "Aucune preference" },
  { value: "business", label: "Business" },
  { value: "formal", label: "Formel" },
  { value: "discreet", label: "Discret" },
  { value: "casual", label: "Decontracte" },
];

export const YES_NO_OPTIONS = [
  { value: "", label: "Selectionner" },
  { value: "yes", label: "Oui" },
  { value: "no", label: "Non" },
];
