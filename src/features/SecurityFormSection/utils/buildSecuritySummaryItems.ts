import dayjs from "dayjs";
import type { SummaryListItem } from "@/src/components/SummaryList";
import type { SecurityFormValues } from "../types";
import {
  AGENT_COUNT_OPTIONS,
  labelForCategory,
  labelForDuration,
  labelForServiceType,
  type SecurityFormCopy,
} from "../data/categories";

export function buildSecuritySummaryItems(
  values: SecurityFormValues,
  activeStepIndex: number,
  form: SecurityFormCopy,
  dayjsLocale: string,
): SummaryListItem[] {
  dayjs.locale(dayjsLocale);
  const items: SummaryListItem[] = [];

  if (activeStepIndex >= 1) {
    const cat = values.serviceCategory;
    if (cat) {
      items.push(labelForCategory(form, cat));
      if (values.serviceType) {
        if (values.serviceType === "other" && values.serviceTypeOther?.trim()) {
          items.push(values.serviceTypeOther.trim());
        } else if (values.serviceType !== "other") {
          items.push(labelForServiceType(form, cat, values.serviceType));
        } else {
          items.push(form.review.other);
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
    if (values.duration) {
      items.push(labelForDuration(form, values.duration));
    }
    if (values.endDate) {
      const d = dayjs(values.endDate);
      items.push(
        d.isValid()
          ? `${form.review.until} ${d.format("D MMMM YYYY")}`
          : `${form.review.until} ${values.endDate}`,
      );
    }
    if (values.agentCount) {
      const n = AGENT_COUNT_OPTIONS.find((o) => o.value === values.agentCount)?.label;
      items.push(`${form.summary.agentsPrefix} ${n ?? values.agentCount}`);
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
