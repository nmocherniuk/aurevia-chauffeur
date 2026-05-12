import React, { FC } from "react";
import { cn } from "@/src/lib/utils";
import { Arrow } from "../SVGManager/Arrow";
import { BUTTON_VARIANTS, ButtonVariant } from "./variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariant;
  className?: string;
  withArrow?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  withArrow = true,
  className,
  ...props
}) => {
  return (
    <button className={cn(BUTTON_VARIANTS[variant], className)} {...props}>
      {children}
      {variant === "primary" && withArrow && (
        <Arrow className="w-4 h-4" fill="white" />
      )}
    </button>
  );
};
