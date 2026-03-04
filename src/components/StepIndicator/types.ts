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
  iconSize?: number;
};

export type StepIndicatorProps = {
  steps: Step[];
  defaultStepIcon?: ComponentType<StepIconProps>;
  className?: string;
  onStepClick?: (index: number) => void;
  maxReachableStepIndex?: number;
};

export function getStepsFromIndex(
  labels: string[],
  activeStepIndex: number,
  maxStepReached: number,
): Step[] {
  const current = Math.max(0, Number(activeStepIndex) || 0);
  const maxReached = Math.max(0, Number(maxStepReached) || 0);

  return labels.map((label, index): Step => {
    const status: StepStatus =
      index === current
        ? "current"
        : index <= maxReached
          ? "completed"
          : "notStarted";
    return { label, status };
  });
}
