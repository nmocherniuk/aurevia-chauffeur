import React, { FC } from "react";
import { cn } from "@/src/lib/utils";

export type ProcessStepCircleVariant = "default" | "active";

export interface ProcessStepCircleProps {
  step: number;
  variant?: ProcessStepCircleVariant;
  size?: number;
  className?: string;
}

const ProcessStepCircle: FC<ProcessStepCircleProps> = ({
  step,
  variant = "default",
  size = 80,
  className,
}) => {

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full border font-bold leading-none transition-colors text-3xl shadow-[0_0_30px_rgba(249,188,6,0.2)]",
        variant === "active"
          ? "border-primary bg-primary text-black"
          : [
            "border-primary bg-background text-primary",
          ],
        className,
      )}
      style={{
        width: size,
        height: size,
      }}
      aria-hidden
    >
      {step}
    </div>
  );
};

export default ProcessStepCircle;
