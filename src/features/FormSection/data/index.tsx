import type { ComponentType } from "react";
import { Location } from "@/src/components/SVGManager/Location";
import type { StepIconProps } from "@/src/components/StepIndicator";
import { Vehicle } from "@/src/components/SVGManager/Vehicle";
import { Person } from "@/src/components/SVGManager/Person";
import { PaymentCard } from "@/src/components/SVGManager/PaymentCard";

export interface FormStep {
  label: string;
  icon: ComponentType<StepIconProps>;
  iconSize?: number;
  fields: FormFieldConfig[];
}

export type FormFieldConfig =
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
      summaryLabel?: string;
    };

export const FORM_STEPS: FormStep[] = [
  {
    label: "Journey",
    icon: Location,
    iconSize: 25,
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
      },
      {
        type: "input",
        name: "to",
        label: "To",
        placeholder: "Enter destination",
      },
      {
        type: "date",
        name: "date",
        label: "Date",
        placeholder: "Select date",
      },
      {
        type: "time",
        name: "time",
        label: "Time",
        placeholder: "Select time",
      },
    ],
  },
  {
    label: "Vehicle",
    icon: Vehicle,
    iconSize: 22,
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
        label:
          "Bodyguard service (Availability and pricing will be confirmed via email after your request.)",
        summaryLabel: "Bodyguard service",
      },
    ],
  },
  {
    label: "Passenger",
    icon: Person,
    iconSize: 21,
    fields: [
      {
        type: "input",
        name: "firstName",
        label: "Nom",
        placeholder: "First name",
      },
      {
        type: "input",
        name: "lastName",
        label: "Last name",
        placeholder: "Last name",
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
    icon: PaymentCard,
    iconSize: 22,
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
