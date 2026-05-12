import { FORM_STEPS } from "./data";

export const STEP_LABELS = FORM_STEPS.map((s) => s.label);
export const LAST_STEP_INDEX = FORM_STEPS.length - 1;

export const SUMMARY_DATE_FORMAT = "D MMMM YYYY, HH:mm";

/** Format for review block: "12 Jan 2025 • 16:00" */
export const REVIEW_DATE_FORMAT = "D MMM YYYY • HH:mm";

export const SERVICE_TZ = "Europe/Paris";

/** Internal `TripType` values → legacy API string (keeps payload stable). */
export function mapTripTypeToApi(tripType: string): string {
  if (tripType === "one_way") return "one-way";
  return tripType;
}
