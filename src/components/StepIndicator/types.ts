import type { ComponentType } from "react";

export type StepStatus = "completed" | "current" | "notStarted";

export type StepIconProps = {
  width?: number;
  height?: number;
  fill?: string;
};

export type Step = {
  id?: string;
  label: string;
  status: StepStatus;
  icon?: ComponentType<StepIconProps>;
};

export type StepIndicatorProps = {
  steps: Step[];
  defaultStepIcon?: ComponentType<StepIconProps>;
  className?: string;
};

export function getStepsFromIndex(
  labels: string[],
  activeStepIndex: number
): Step[] {
  return labels.map((label, index) => ({
    label,
    status:
      index < activeStepIndex
        ? "completed"
        : index === activeStepIndex
          ? "current"
          : "notStarted",
  }));
}
