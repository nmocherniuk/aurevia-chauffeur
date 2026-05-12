import dayjs from "dayjs";
import "dayjs/locale/fr";
import type { SummaryListItem } from "@/src/components/SummaryList";
import type { SecurityFormValues } from "../types";
import {
  SECURITY_CATEGORIES,
  SECURITY_SERVICE_TYPES,
  DURATION_OPTIONS,
  AGENT_COUNT_OPTIONS,
  type SecurityCategoryId,
} from "../data/categories";

dayjs.locale("fr");

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

export function buildSecuritySummaryItems(
  values: SecurityFormValues,
  activeStepIndex: number,
): SummaryListItem[] {
  const items: SummaryListItem[] = [];

  if (activeStepIndex >= 1) {
    const cat = values.serviceCategory;
    if (cat) {
      items.push(labelForCategory(cat));
      if (values.serviceType) {
        if (values.serviceType === "other" && values.serviceTypeOther?.trim()) {
          items.push(values.serviceTypeOther.trim());
        } else if (values.serviceType !== "other") {
          items.push(labelForServiceType(cat, values.serviceType));
        } else {
          items.push("Autre");
        }
      }
    }
    if (values.location) items.push(values.location);
    if (values.date && values.time) {
      const d = dayjs(`${values.date} ${values.time}`);
      items.push(
        d.isValid() ? d.format("D MMMM YYYY, HH:mm") : `${values.date} ${values.time}`,
      );
    } else if (values.date) {
      const d = dayjs(values.date);
      items.push(d.isValid() ? d.format("D MMMM YYYY") : values.date);
    }
    if (values.duration) items.push(labelForDuration(values.duration));
    if (values.endDate) {
      const d = dayjs(values.endDate);
      items.push(
        d.isValid() ? `Jusqu'au ${d.format("D MMMM YYYY")}` : `Jusqu'au ${values.endDate}`,
      );
    }
    if (values.agentCount) {
      const n = AGENT_COUNT_OPTIONS.find((o) => o.value === values.agentCount)?.label;
      items.push(`Agents : ${n ?? values.agentCount}`);
    }
  }

  if (activeStepIndex >= 2) {
    const name = [values.firstName, values.lastName].filter(Boolean).join(" ");
    if (name) items.push(name);
    if (values.email) items.push(values.email);
    if (values.phone) items.push(values.phone);
    if (values.company) items.push(values.company);
  }

  return items;
}
