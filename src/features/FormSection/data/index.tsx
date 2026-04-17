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

export const TRIP_TYPE_SELECT_OPTIONS = [
  { label: "One way", value: "one_way" },
  { label: "Hourly", value: "hourly" },
] as const;

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
        options: [...TRIP_TYPE_SELECT_OPTIONS],
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
      {
        type: "time",
        name: "endTime",
        label: "End time",
        placeholder: "Select end time",
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
          {
            label: "Mercedes S580",
            value: "cafff580-9141-46fe-b2d5-18ea3d9fc543",
            detail: "3P · 3L",
          },
          {
            label: "BMW 7 Series",
            value: "72f6d70d-a7c7-497e-9c98-073dbdb5163b",
            detail: "3P · 2L",
          },
        ],
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
    fields: []
  },
];
