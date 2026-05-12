import type { SecurityFormValues } from "../types";

export function getInitialSecurityFormValues(): SecurityFormValues {
  return {
    serviceCategory: "",
    serviceType: "",
    serviceTypeOther: "",
    location: "",
    locationLat: "",
    locationLng: "",
    date: "",
    time: "",
    duration: "",
    endDate: "",
    agentCount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    specialRequirements: "",
    languagesRequired: "",
    dressCode: "",
    vehicleRequired: "",
    armedRequired: "",
  };
}
