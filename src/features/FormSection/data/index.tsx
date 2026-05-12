import type { ComponentType } from "react";
import { BOOKING_VEHICLE_OPTIONS } from "@/src/features/FormSection/data/bookingVehicles";
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
  { label: "Aller simple", value: "one_way" },
  { label: "A l'heure", value: "hourly" },
] as const;

export const FORM_STEPS: FormStep[] = [
  {
    label: "Trajet",
    icon: Location,
    iconSize: 25,
    fields: [
      {
        type: "select",
        name: "tripType",
        label: "Type de trajet",
        placeholder: "Selectionnez le type de trajet",
        options: [...TRIP_TYPE_SELECT_OPTIONS],
      },
      {
        type: "input",
        name: "from",
        label: "Depart",
        placeholder: "Entrez le lieu de prise en charge",
      },
      {
        type: "input",
        name: "to",
        label: "Arrivee",
        placeholder: "Entrez la destination",
      },
      {
        type: "date",
        name: "date",
        label: "Date",
        placeholder: "Selectionnez une date",
      },
      {
        type: "time",
        name: "time",
        label: "Heure",
        placeholder: "Selectionnez une heure",
      },
      {
        type: "time",
        name: "endTime",
        label: "Heure de fin",
        placeholder: "Selectionnez l'heure de fin",
      },
    ],
  },
  {
    label: "Vehicule",
    icon: Vehicle,
    iconSize: 22,
    fields: [
      {
        type: "select",
        name: "carType",
        label: "Type de vehicule",
        placeholder: "Selectionnez le type de vehicule",
        options: [
          { label: "Comfort", value: "comfort" },
          { label: "Business", value: "business" },
          { label: "Luxury", value: "luxury" },
        ],
      },
      {
        type: "select",
        name: "car",
        label: "Vehicule",
        placeholder: "Selectionnez un vehicule",
        options: [...BOOKING_VEHICLE_OPTIONS],
      },
    ],
  },
  {
    label: "Passager",
    icon: Person,
    iconSize: 21,
    fields: [
      {
        type: "input",
        name: "firstName",
        label: "Nom",
        placeholder: "Prenom",
      },
      {
        type: "input",
        name: "lastName",
        label: "Nom",
        placeholder: "Nom",
      },
      {
        type: "input",
        name: "email",
        label: "E-mail",
        placeholder: "E-mail",
      },
      {
        type: "input",
        name: "phone",
        label: "Telephone",
        placeholder: "Telephone",
      },
      {
        type: "textarea",
        name: "notesForChauffeur",
        label: "Notes pour le chauffeur",
        placeholder: "Notes optionnelles",
      },
    ],
  },
  {
    label: "Paiement",
    icon: PaymentCard,
    iconSize: 22,
    fields: []
  },
];
