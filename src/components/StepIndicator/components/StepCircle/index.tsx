import React from "react";
import { cn } from "@/src/lib/utils";
import { CircleCheck } from "../../../SVGManager/CircleCheck";
import { Location } from "../../../SVGManager/Location";
import { CIRCLE_SIZE, STEP_ICON_SIZE } from "../../constants";
import type { StepStatus, StepIconProps } from "../../types";

const DEFAULT_STEP_ICON = Location;

export type StepCircleProps = {
  isLastReachableStep: boolean;
  status: StepStatus;
  stepIcon?: React.ComponentType<StepIconProps>;
  stepIconSize?: number;
  defaultIcon?: React.ComponentType<StepIconProps>;
  stepIndex: number;
};

export function StepCircle({
  isLastReachableStep,
  status,
  stepIcon,
  stepIconSize,
  defaultIcon,
}: StepCircleProps) {
  const isCompleted = status === "completed";
  const isCurrent = status === "current";
  const isNotStarted = status === "notStarted";
  const Icon = stepIcon ?? defaultIcon ?? DEFAULT_STEP_ICON;
  const iconSize = stepIconSize ?? STEP_ICON_SIZE;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border-[1.5px] bg-transparent transition-colors",
        isCompleted && "border-primary",
        isCurrent && "border-primary",
        isNotStarted && "border-(--grey) opacity-60",
        isLastReachableStep && "border-(--grey-light)",
      )}
      style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
      aria-hidden
    >
      {isCompleted && !isLastReachableStep ? (
        <CircleCheck width={34} height={34} fill="var(--primary)" />
      ) : (
        <Icon
          width={iconSize}
          height={iconSize}
          fill={
            isCurrent
              ? "var(--primary)"
              : isLastReachableStep
                ? "var(--grey-light)"
                : "var(--grey)"
          }
        />
      )}
    </div>
  );
}
