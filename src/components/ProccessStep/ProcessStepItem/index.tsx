import React, { FC } from "react";
import { cn } from "@/src/lib/utils";
import ProcessStepCircle, {
  type ProcessStepCircleVariant,
} from "@/src/components/ProccessStep/ProcessStepCircle";

export interface ProcessStepItemProps {
  step: number;
  title: string;
  description: string;
  variant?: ProcessStepCircleVariant;
  circleSize?: number;
  className?: string;
}

const ProcessStepItem: FC<ProcessStepItemProps> = ({
  step,
  title,
  description,
  variant = "default",
  circleSize = 80,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        className,
      )}
    >
      <ProcessStepCircle step={step} variant={variant} size={circleSize} />
      <h3 className="mt-5 max-w-[280px] text-lg text-text-secondary sm:mt-6">
        {title}
      </h3>
      <p className="mt-2 max-w-[300px] text-base font-light leading-relaxed text-text-primary">
        {description}
      </p>
    </div>
  );
};

export default ProcessStepItem;
