import type { ComponentType } from "react";
import { Location } from "@/src/components/SVGManager/Location";
import type { StepIconProps } from "@/src/components/StepIndicator";

export interface FormStep {
    label: string;
    icon: ComponentType<StepIconProps>;
    fields: FormFieldConfig[];
}

/** 1 = одна колонка (два поля в ряд), 2 = на всю ширину. За замовчуванням 2. */
export type FormFieldSpan = 1 | 2;

/** Breakpoint, з якого форма переходить на дві колонки. Нижче — одна колонка. */
export type FormGridBreakpoint = "sm" | "md" | "lg";

/** З якого breakpoint показувати сітку в 2 колонки. */
export const FORM_GRID_BREAKPOINT: FormGridBreakpoint = "md";

export type FormFieldConfig = { span?: FormFieldSpan } & (
    | {
          type: "select";
          name: string;
          label: string;
          placeholder: string;
          options: { label: string; value: string; detail?: string }[];
      }
    | {
          type: "input";
          name: string;
          label: string;
          placeholder: string;
      }
    | {
          type: "textarea";
          name: string;
          label: string;
          placeholder: string;
      }
    | {
          type: "date";
          name: string;
          label: string;
          placeholder: string;
      }
    | {
          type: "time";
          name: string;
          label: string;
          placeholder: string;
      }
    | {
          type: "checkbox";
          name: string;
          label: string;
          /** Короткий текст для підсумку (наприклад "Bodyguard service" без дужок) */
          summaryLabel?: string;
      }
);

export const FORM_STEPS: FormStep[] = [
    {
        label: "Journey",
        icon: Location,
        fields: [
            {
                type: "select",
                name: "tripType",
                label: "Trip type",
                placeholder: "Select vehicle type",
                options: [
                    { label: "One way", value: "one-way" },
                    { label: "Round trip", value: "round-trip" },
                    { label: "Hourly", value: "hourly" },
                ],
            },
            {
                type: "input",
                name: "from",
                label: "From",
                placeholder: "Enter pickup location",
                span: 1,
            },
            {
                type: "input",
                name: "to",
                label: "To",
                placeholder: "Enter destination",
                span: 1,
            },
            {
                type: "date",
                name: "date",
                label: "Date",
                placeholder: "Select date",
                span: 1,
            },
            {
                type: "time",
                name: "time",
                label: "Time",
                placeholder: "Select time",
                span: 1,
            },
        ],
    },
    {
        label: "Vehicle",
        icon: Location,
        fields: [
            {
                type: "select",
                name: "carType",
                label: "Car type",
                placeholder: "Select vehicle type",
                options: [
                    { label: "Comfort", value: "comfort" },
                    { label: "Business", value: "business" },
                    { label: "Luxury", value: "luxury" },
                ],
            },
            {
                type: "select",
                name: "car",
                label: "Car",
                placeholder: "Select vehicle type",
                options: [
                    { label: "Mercedes S580", value: "mercedes-s580", detail: "3P · 3L" },
                    { label: "BMW 7 Series", value: "bmw-7", detail: "3P · 2L" },
                ],
            },
            {
                type: "checkbox",
                name: "bodyguardService",
                label: "Bodyguard service (Availability and pricing will be confirmed via email after your request.)",
                summaryLabel: "Bodyguard service",
            },
        ],
    },
    {
        label: "Passenger",
        icon: Location,
        fields: [
            {
                type: "input",
                name: "firstName",
                label: "Nom",
                placeholder: "First name",
                span: 1,
            },
            {
                type: "input",
                name: "lastName",
                label: "Last name",
                placeholder: "Last name",
                span: 1,
            },
            {
                type: "input",
                name: "email",
                label: "Email",
                placeholder: "Email",
            },
            {
                type: "input",
                name: "phone",
                label: "Phone",
                placeholder: "Phone",
            },
            {
                type: "textarea",
                name: "notesForChauffeur",
                label: "Notes for chauffeur",
                placeholder: "Optional notes",
            },
        ],
    },
    {
        label: "Payment",
        icon: Location,
        fields: [
            {
                type: "select",
                name: "paymentMethod",
                label: "Payment method",
                placeholder: "Select payment method",
                options: [
                    { label: "Card", value: "card" },
                    { label: "Bank transfer", value: "transfer" },
                ],
            },
        ],
    },
];
