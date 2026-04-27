import React, { FC } from "react";
import { cn } from "@/src/lib/utils";

/** Figma: #BB9B78 — 0% → 30% @50% → 0% */
const GRADIENT_HORIZONTAL =
  "linear-gradient(to right, rgba(187, 155, 120, 0) 0%, rgba(187, 155, 120, 0.3) 50%, rgba(187, 155, 120, 0) 100%)";

const GRADIENT_VERTICAL =
  "linear-gradient(to bottom, rgba(187, 155, 120, 0) 0%, rgba(187, 155, 120, 0.3) 50%, rgba(187, 155, 120, 0) 100%)";

export interface ProcessStepsConnectorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

const ProcessStepsConnector: FC<ProcessStepsConnectorProps> = ({
  orientation = "horizontal",
  className,
  style,
  ...props
}) => (
  <div
    role="presentation"
    className={cn(
      "pointer-events-none",
      orientation === "horizontal" ? "h-px min-h-px w-full" : "h-full w-px min-w-px",
      className,
    )}
    style={{
      background:
        orientation === "horizontal" ? GRADIENT_HORIZONTAL : GRADIENT_VERTICAL,
      ...style,
    }}
    {...props}
  />
);

export default ProcessStepsConnector;
