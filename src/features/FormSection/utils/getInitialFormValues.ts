import type { FormValues } from "../types";

const FORM_FIELD_NAMES = [
  "tripType",
  "from",
  "to",
  "date",
  "time",
  "endTime",
  "carType",
  "car",
  "firstName",
  "lastName",
  "email",
  "phone",
  "notesForChauffeur",
] as const;

export function getInitialFormValues(): FormValues {
  const initial: FormValues = {};

  for (const name of FORM_FIELD_NAMES) {
    initial[name] = "";
  }

  initial["fromLat"] = "";
  initial["fromLng"] = "";
  initial["toLat"] = "";
  initial["toLng"] = "";
  initial["price"] = "";
  initial["distanceKm"] = "";

  return initial;
}
