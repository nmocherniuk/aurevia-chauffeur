
import React from "react";
import { cn } from "@/src/lib/utils";
import { StepItem } from "./components/StepItem";
import type { StepIndicatorProps } from "./types";

export function StepIndicator({
  steps,
  defaultStepIcon,
  className,
}: StepIndicatorProps) {
  if (!steps.length) return null;

  return (
    <nav
      className={cn("flex w-full gap-x-2", className)}
      aria-label="Progress"
    >
      {steps.map((step, index) => (
        <StepItem
          key={step.id ?? index}
          step={step}
          index={index}
          totalSteps={steps.length}
          defaultStepIcon={defaultStepIcon}
        />
      ))}
    </nav>
  );
}

export type { StepIndicatorProps, Step, StepStatus, StepIconProps } from "./types";
export { getStepsFromIndex } from "./types";
