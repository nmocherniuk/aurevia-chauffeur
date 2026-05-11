import dayjs from "dayjs";
import "dayjs/locale/fr";
import { REVIEW_DATE_FORMAT } from "@/src/features/FormSection/constants";
import type { SecurityFormValues } from "../types";
import {
  AGENT_COUNT_OPTIONS,
  DRESS_CODE_OPTIONS,
  DURATION_OPTIONS,
  SECURITY_CATEGORIES,
  SECURITY_SERVICE_TYPES,
  YES_NO_OPTIONS,
  type SecurityCategoryId,
} from "../data/categories";

dayjs.locale("fr");

export type SecurityReviewSection = {
  title: string;
  /** Plain lines like the driver PaymentStep review (`<li>` text only). */
  lines: string[];
};

function labelForCategory(id: string): string {
  return SECURITY_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

function labelForServiceType(categoryId: string, typeValue: string): string {
  const key = categoryId as SecurityCategoryId;
  const opts = SECURITY_SERVICE_TYPES[key];
  return opts?.find((o) => o.value === typeValue)?.label ?? typeValue;
}

function labelForDuration(v: string): string {
  return DURATION_OPTIONS.find((o) => o.value === v)?.label ?? v;
}

function labelDressCode(v: string): string {
  return (
    DRESS_CODE_OPTIONS.find((o) => o.value === v)?.label ?? "Aucune preference"
  );
}

function labelYesNo(v: string): string {
  if (v === "yes" || v === "no") {
    return YES_NO_OPTIONS.find((o) => o.value === v)?.label ?? v;
  }
  return "";
}

/**
 * Review blocks matching the driver {@link PaymentStep} layout: titled sections
 * with plain text lines (no label/value grid).
 */
export function buildSecurityReviewSections(
  values: SecurityFormValues,
): SecurityReviewSection[] {
  const sections: SecurityReviewSection[] = [];
  const cat = values.serviceCategory || "";

  const assignmentLines: string[] = [];

  if (cat) {
    assignmentLines.push(labelForCategory(cat));
  }

  if (values.serviceType === "other") {
    assignmentLines.push(
      values.serviceTypeOther?.trim()
        ? values.serviceTypeOther.trim()
        : "Autre",
    );
  } else if (values.serviceType && cat) {
    assignmentLines.push(labelForServiceType(cat, values.serviceType));
  }

  if (values.location?.trim()) {
    assignmentLines.push(values.location.trim());
  }

  const lat = values.locationLat?.trim();
  const lng = values.locationLng?.trim();
  if (lat && lng) {
    assignmentLines.push(`${lat}, ${lng}`);
  }

  if (values.date && values.time) {
    const combined = `${values.date} ${values.time}`;
    const parsed = dayjs(combined);
    assignmentLines.push(
      parsed.isValid() ? parsed.format(REVIEW_DATE_FORMAT) : combined,
    );
  } else if (values.date) {
    const parsed = dayjs(values.date);
    assignmentLines.push(
      parsed.isValid() ? parsed.format("D MMM YYYY") : values.date,
    );
  }

  if (values.duration) {
    assignmentLines.push(labelForDuration(values.duration));
  }

  if (values.duration === "multi" && values.endDate) {
    const parsed = dayjs(values.endDate);
    const end =
      parsed.isValid() ? parsed.format("D MMM YYYY") : values.endDate;
    assignmentLines.push(`Jusqu'au ${end}`);
  }

  if (values.agentCount) {
    const n =
      AGENT_COUNT_OPTIONS.find((o) => o.value === values.agentCount)?.label ??
      values.agentCount;
    assignmentLines.push(`${n} agent${n === "1" ? "" : "s"}`);
  }

  if (assignmentLines.length > 0) {
    sections.push({ title: "Mission", lines: assignmentLines });
  }

  const passengerLines: string[] = [];
  const fullName = [values.firstName, values.lastName].filter(Boolean).join(" ");
  if (fullName) passengerLines.push(fullName);
  if (values.email?.trim()) passengerLines.push(values.email.trim());
  if (values.phone?.trim()) passengerLines.push(values.phone.trim());
  if (values.company?.trim()) passengerLines.push(values.company.trim());

  if (passengerLines.length > 0) {
    sections.push({ title: "Client", lines: passengerLines });
  }

  /** Affiche toujours une colonne de details (meme layout que Mission / Client). */
  const detailLines: string[] = [
    `Exigences particulieres — ${values.specialRequirements?.trim() || "—"}`,
    `Langues — ${values.languagesRequired?.trim() || "—"}`,
    `Tenue souhaitee — ${labelDressCode(values.dressCode ?? "")}`,
    values.vehicleRequired === "yes" || values.vehicleRequired === "no"
      ? `Coordination vehicule — ${labelYesNo(values.vehicleRequired)}`
      : "Coordination vehicule — Non renseigne",
    values.armedRequired === "yes" || values.armedRequired === "no"
      ? `Personnel arme — ${labelYesNo(values.armedRequired)}`
      : "Personnel arme — Non renseigne",
  ];

  sections.push({ title: "Details", lines: detailLines });

  return sections;
}
