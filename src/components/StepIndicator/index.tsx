import React from "react";
import { cn } from "@/src/lib/utils";
import { StepItem } from "./components/StepItem";
import type { StepIndicatorProps } from "./types";
import { ConnectorLine } from "./components/ConnectorLine";
import { CIRCLE_SIZE } from "./constants";

export function StepIndicator({
  steps,
  defaultStepIcon,
  className,
  onStepClick,
  maxReachableStepIndex,
}: StepIndicatorProps) {
  if (!steps.length) return null;
  const showConnector = steps.length > 1;

  return (
    <nav
      className={cn("flex w-full gap-x-1.5", className)}
      aria-label="Progress"
    >
      {steps.map((step, index) => (
        <React.Fragment key={step.id ?? index}>
          <StepItem
            step={step}
            index={index}
            totalSteps={steps.length}
            defaultStepIcon={defaultStepIcon}
            onStepClick={onStepClick}
            maxReachableStepIndex={maxReachableStepIndex}
          />
          {showConnector && index < steps.length - 1 && (
            <div
              className="flex min-w-0 flex-1 items-center"
              style={{ height: CIRCLE_SIZE }}
              aria-hidden
            >
              <ConnectorLine
                isCompleted={
                  step.status === "completed" ||
                  index < (maxReachableStepIndex ?? 0)
                }
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export type {
  StepIndicatorProps,
  Step,
  StepStatus,
  StepIconProps,
} from "./types";
