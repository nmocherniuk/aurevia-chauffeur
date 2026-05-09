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
    label: "Executive Protection",
    description: "Discreet close protection tailored to your itinerary.",
  },
  {
    id: "event_security",
    label: "Event Security",
    description: "Calm, controlled coverage for private and public events.",
  },
  {
    id: "property_private",
    label: "Property & Private Security",
    description: "Residences, stays, and private sites with dedicated presence.",
  },
  {
    id: "business_commercial",
    label: "Business & Commercial",
    description: "Offices, retail, and professional environments.",
  },
  {
    id: "advanced_specialized",
    label: "Advanced & Specialized",
    description: "Complex or non-standard requirements handled with care.",
  },
];

export type ServiceTypeOption = { value: string; label: string };

export const CATEGORY_SELECT_OPTIONS: ServiceTypeOption[] =
  SECURITY_CATEGORIES.map((c) => ({ value: c.id, label: c.label }));

export const SECURITY_SERVICE_TYPES: Record<SecurityCategoryId, ServiceTypeOption[]> = {
  executive_protection: [
    { value: "bodyguard", label: "Bodyguard" },
    { value: "vip_escort", label: "VIP Escort" },
    { value: "close_protection", label: "Close Protection" },
  ],
  event_security: [
    { value: "event_security", label: "Event Security" },
    { value: "crowd_management", label: "Crowd Management" },
    { value: "access_control", label: "Access Control" },
  ],
  property_private: [
    { value: "villa_security", label: "Villa Security" },
    { value: "hotel_security", label: "Hotel Security" },
    { value: "construction_site_security", label: "Construction Site Security" },
  ],
  business_commercial: [
    { value: "retail_security", label: "Retail Security" },
    { value: "office_security", label: "Office Security" },
    { value: "reception_access_control", label: "Reception & Access Control" },
  ],
  advanced_specialized: [
    { value: "mobile_patrol", label: "Mobile Patrol" },
    { value: "alarm_response", label: "Alarm Response" },
    { value: "k9_unit", label: "K9 Unit" },
    { value: "soc", label: "Security Operations Center" },
  ],
};

const OTHER_SERVICE_OPTION: ServiceTypeOption = {
  value: "other",
  label: "Other",
};

/** Types for the selected category plus “Other” (custom detail in `serviceTypeOther`). */
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
  { value: "4", label: "4 hours" },
  { value: "8", label: "8 hours" },
  { value: "12", label: "12 hours" },
  { value: "24", label: "24 hours (full day)" },
  { value: "multi", label: "Multi-day assignment" },
] as const;

export const AGENT_COUNT_OPTIONS = Array.from({ length: 24 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

export const DRESS_CODE_OPTIONS = [
  { value: "", label: "No preference" },
  { value: "business", label: "Business" },
  { value: "formal", label: "Formal" },
  { value: "discreet", label: "Low-profile / discreet" },
  { value: "casual", label: "Casual" },
];

export const YES_NO_OPTIONS = [
  { value: "", label: "Select" },
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
