import { FORM_STEPS } from "../data";
import type { FormValues } from "../types";

export function getInitialFormValues(): FormValues {
  const initial: FormValues = {};

  for (const step of FORM_STEPS) {
    for (const field of step.fields) {
      if (field.type === "checkbox") {
        initial[field.name] = false;
      } else {
        initial[field.name] = "";
      }
    }
  }

  initial["fromLat"] = "";
  initial["fromLng"] = "";
  initial["toLat"] = "";
  initial["toLng"] = "";
  initial["price"] = "";
  initial["distanceKm"] = "";

  return initial;
}

