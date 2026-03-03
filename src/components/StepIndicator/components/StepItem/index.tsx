import React from "react";
import { cn } from "@/src/lib/utils";
import { StepCircle } from "../StepCircle";
import { ConnectorLine } from "../ConnectorLine";
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
  const showConnector = index < totalSteps - 1;

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex w-full items-center gap-x-2">
        <StepCircle
          status={step.status}
          stepIcon={step.icon}
          defaultIcon={defaultStepIcon}
        />
        {showConnector && (
          <ConnectorLine isCompleted={step.status === "completed"} />
        )}
      </div>
      <div className="mt-2 flex w-full items-center">
        <div
          className="flex shrink-0 justify-center"
          style={{ width: CIRCLE_SIZE }}
        >
          <span
            className={cn(
              "text-center text-xs font-light whitespace-nowrap transition-colors",
              step.status === "completed" && "text-primary",
              step.status === "current" && "text-primary",
              step.status === "notStarted" && "text-(--grey)"
            )}
          >
            {step.label}
          </span>
        </div>
        {showConnector && (
          <div className="min-w-6 flex-1 shrink-0" aria-hidden />
        )}
      </div>
    </div>
  );
}
