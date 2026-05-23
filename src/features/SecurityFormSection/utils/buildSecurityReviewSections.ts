import dayjs from "dayjs";
import { REVIEW_DATE_FORMAT } from "@/src/features/FormSection/constants";
import type { SecurityFormValues } from "../types";
import {
  AGENT_COUNT_OPTIONS,
  labelDressCode,
  labelForCategory,
  labelForDuration,
  labelForServiceType,
  labelYesNo,
  type SecurityFormCopy,
} from "../data/categories";

export type SecurityReviewSection = {
  title: string;
  lines: string[];
};

export function buildSecurityReviewSections(
  values: SecurityFormValues,
  form: SecurityFormCopy,
  dayjsLocale: string,
): SecurityReviewSection[] {
  dayjs.locale(dayjsLocale);
  const { review } = form;
  const sections: SecurityReviewSection[] = [];
  const cat = values.serviceCategory || "";

  const assignmentLines: string[] = [];

  if (cat) {
    assignmentLines.push(labelForCategory(form, cat));
  }

  if (values.serviceType === "other") {
    assignmentLines.push(
      values.serviceTypeOther?.trim()
        ? values.serviceTypeOther.trim()
        : review.other,
    );
  } else if (values.serviceType && cat) {
    assignmentLines.push(labelForServiceType(form, cat, values.serviceType));
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
    assignmentLines.push(labelForDuration(form, values.duration));
  }

  if (values.duration === "multi" && values.endDate) {
    const parsed = dayjs(values.endDate);
    const end =
      parsed.isValid() ? parsed.format("D MMM YYYY") : values.endDate;
    assignmentLines.push(`${review.until} ${end}`);
  }

  if (values.agentCount) {
    const n =
      AGENT_COUNT_OPTIONS.find((o) => o.value === values.agentCount)?.label ??
      values.agentCount;
    assignmentLines.push(
      `${n} ${n === "1" ? review.agents : review.agentsPlural}`,
    );
  }

  if (assignmentLines.length > 0) {
    sections.push({ title: review.mission, lines: assignmentLines });
  }

  const passengerLines: string[] = [];
  const fullName = [values.firstName, values.lastName].filter(Boolean).join(" ");
  if (fullName) passengerLines.push(fullName);
  if (values.email?.trim()) passengerLines.push(values.email.trim());
  if (values.phone?.trim()) passengerLines.push(values.phone.trim());
  if (values.company?.trim()) passengerLines.push(values.company.trim());

  if (passengerLines.length > 0) {
    sections.push({ title: review.client, lines: passengerLines });
  }

  const detailLines: string[] = [
    `${review.specialRequirements} — ${values.specialRequirements?.trim() || "—"}`,
    `${review.languages} — ${values.languagesRequired?.trim() || "—"}`,
    `${review.dressCode} — ${labelDressCode(form, values.dressCode ?? "")}`,
    values.vehicleRequired === "yes" || values.vehicleRequired === "no"
      ? `${review.vehicleCoordination} — ${labelYesNo(form, values.vehicleRequired)}`
      : `${review.vehicleCoordination} — ${review.notProvided}`,
    values.armedRequired === "yes" || values.armedRequired === "no"
      ? `${review.armedPersonnel} — ${labelYesNo(form, values.armedRequired)}`
      : `${review.armedPersonnel} — ${review.notProvided}`,
  ];

  sections.push({ title: review.details, lines: detailLines });

  return sections;
}
