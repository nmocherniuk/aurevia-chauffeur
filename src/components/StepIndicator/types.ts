import type { ComponentType } from "react";

export type StepStatus = "completed" | "current" | "notStarted" | "started";

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
