import React from "react";
import { cn } from "@/src/lib/utils";
import { CircleCheck } from "../../../SVGManager/CircleCheck";
import { Location } from "../../../SVGManager/Location";
import { CIRCLE_SIZE, STEP_ICON_SIZE } from "../../constants";
import type { StepStatus, StepIconProps } from "../../types";

const DEFAULT_STEP_ICON = Location;

export type StepCircleProps = {
  status: StepStatus;
  stepIcon?: React.ComponentType<StepIconProps>;
  defaultIcon?: React.ComponentType<StepIconProps>;
};

export function StepCircle({
  status,
  stepIcon,
  defaultIcon,
}: StepCircleProps) {
  const isCompleted = status === "completed";
  const isCurrent = status === "current";
  const isNotStarted = status === "notStarted";
  const Icon = stepIcon ?? defaultIcon ?? DEFAULT_STEP_ICON;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border-[1.5px] bg-transparent transition-colors",
        isCompleted && "border-primary",
        isCurrent && "border-primary",
        isNotStarted && "border-(--grey)"
      )}
      style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
      aria-hidden
    >
      {isCompleted ? (
        <CircleCheck
          width={34}
          height={34}
          fill="var(--primary)"
        />
      ) : (
        <Icon
          width={STEP_ICON_SIZE}
          height={STEP_ICON_SIZE}
          fill={isCurrent ? "var(--primary)" : "var(--grey)"}
        />
      )}
    </div>
  );
}
