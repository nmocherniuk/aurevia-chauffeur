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
  onStepClick?: (index: number) => void;
  maxReachableStepIndex?: number;
};

export function StepItem({
  step,
  index,
  totalSteps,
  defaultStepIcon,
  onStepClick,
  maxReachableStepIndex,
}: StepItemProps) {
  const isReachable =
    maxReachableStepIndex === undefined || index <= maxReachableStepIndex;

  const isLastReachableStep =
    index === maxReachableStepIndex && step.status !== "current";

  const handleClick = () => {
    if (isReachable) onStepClick?.(index);
  };

  return (
    <button
      type="button"
      className={cn(
        "relative flex shrink-0 flex-col items-center focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary",
        isReachable ? "cursor-pointer" : "cursor-not-allowed",
      )}
      style={{ width: CIRCLE_SIZE }}
      onClick={handleClick}
      disabled={!isReachable}
      aria-current={step.status === "current" ? "step" : undefined}
      aria-disabled={!isReachable}
      aria-label={`${step.label}, ${step.status === "completed" ? "completed" : step.status === "current" ? "current step" : "not started"}${!isReachable ? ", not yet available" : ""}`}
    >
      <StepCircle
        isLastReachableStep={isLastReachableStep}
        stepIndex={index}
        status={step.status}
        stepIcon={step.icon}
        stepIconSize={step.iconSize}
        defaultIcon={defaultStepIcon}
      />
      <span
        className={cn(
          "absolute left-1/2 top-full -translate-x-1/2 pt-1.5 text-center text-xs font-light whitespace-nowrap transition-colors",
          step.status === "completed" && "text-primary",
          step.status === "current" && "text-primary",
          step.status === "notStarted" && "text-(--grey)",
          isLastReachableStep && "text-(--grey-light)",
        )}
      >
        {step.label}
      </span>
    </button>
  );
}
