import dayjs from "dayjs";
import "dayjs/locale/fr";
import type { SummaryListItem } from "@/src/components/SummaryList";
import type { FormValues } from "../types";
import { FORM_STEPS } from "../data";
import { SUMMARY_DATE_FORMAT } from "../constants";

dayjs.locale("fr");

export function buildSummaryItems(
  formValues: FormValues,
  stepsUpToIndex: number,
): SummaryListItem[] {
  const items: SummaryListItem[] = [];

  for (let stepIndex = 0; stepIndex < stepsUpToIndex; stepIndex++) {
    const step = FORM_STEPS[stepIndex];
    for (const field of step.fields) {
      const name = field.name;
      if (name === "notesForChauffeur") continue;
      const value = formValues[name];
      if (value === undefined || value === "") continue;
      if (field.type === "checkbox") {
        if (value === true) items.push(field.summaryLabel ?? field.label);
        continue;
      }
      const str = String(value);
      if (field.type === "select" && "options" in field) {
        const option = field.options.find((o) => o.value === str);
        items.push(option ? option.label : str);
      } else if (field.name === "from") {
        const toVal = formValues["to"];
        items.push(toVal ? `${str} - ${toVal}` : str);
      } else if (field.name === "to") {
        if (!formValues["from"]) items.push(str);
      } else if (field.name === "date") {
        const timeVal = formValues["time"];
        if (timeVal) {
          const parsed = dayjs(`${str} ${timeVal}`);
          items.push(
            parsed.isValid()
              ? parsed.format(SUMMARY_DATE_FORMAT)
              : `${str} ${timeVal}`,
          );
        } else {
          const parsed = dayjs(str);
          items.push(parsed.isValid() ? parsed.format("D MMMM YYYY") : str);
        }
      } else if (field.name === "time") {
        if (!formValues["date"]) {
          const parsed = dayjs(str, "HH:mm", true);
          items.push(parsed.isValid() ? parsed.format("HH:mm") : str);
        }
      } else {
        items.push(str);
      }
    }
  }

  if (stepsUpToIndex >= 2 && (formValues["carType"] || formValues["car"])) {
    items.push({ value: "Total price € 123", highlight: true });
  }

  return items;
}
