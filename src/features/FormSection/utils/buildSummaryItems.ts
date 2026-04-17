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
      const tripType = String(formValues["tripType"] ?? "");
      if (name === "endTime" && tripType !== "hourly") continue;
      if (
        tripType === "hourly" &&
        (name === "time" || name === "endTime")
      ) {
        continue;
      }
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
        if (tripType === "hourly") {
          const timeVal = formValues["time"];
          const endVal = formValues["endTime"];
          if (timeVal && endVal) {
            const parsed = dayjs(`${str} ${timeVal}`);
            items.push(
              parsed.isValid()
                ? `${parsed.format("D MMMM YYYY")} · ${timeVal} – ${endVal}`
                : `${str} ${timeVal} – ${endVal}`,
            );
          } else if (timeVal) {
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
        } else {
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

  const price = formValues["price"];
  if (typeof price === "string" && price) {
    items.push({ value: `Total price € ${price}`, highlight: true });
  }

  return items;
}
