import type { ComponentType } from "react";
import type { StepIconProps } from "@/src/components/StepIndicator";

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
