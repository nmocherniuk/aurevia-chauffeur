import React from "react";
import { cn } from "@/src/lib/utils";
import { StepCircle } from "../StepCircle";
import { CIRCLE_SIZE } from "../../constants";
import type { Step, StepIconProps } from "../../types";

export type StepItemProps = {
  step: Step;
  index: number;
  totalSteps: number;
  defaultStepIcon?: React.ComponentType<StepIconProps>;
};

export function StepItem({
  step,
  index,
  totalSteps,
  defaultStepIcon,
}: StepItemProps) {

  return (
    <div
      className="relative flex shrink-0 flex-col items-center"
      style={{ width: CIRCLE_SIZE }}
    >
      <StepCircle
        status={step.status}
        stepIcon={step.icon}
        defaultIcon={defaultStepIcon}
      />
      <span
        className={cn(
          "absolute left-1/2 top-full -translate-x-1/2 pt-1.5 text-center text-xs font-light whitespace-nowrap transition-colors",
          step.status === "completed" && "text-primary",
          step.status === "current" && "text-primary",
          step.status === "notStarted" && "text-(--grey)"
        )}
      >
        {step.label}
      </span>
    </div>
  );
}
