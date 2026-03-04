import React, { FC } from "react";
import { cn } from "@/src/lib/utils";
import { Arrow } from "../SVGManager/Arrow";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "muted" | "tab" | "tabActive";
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
  const variants = {
    primary:
      "bg-primary text-white rounded-lg py-2 h-[42px] px-5 flex items-center justify-center gap-2 cursor-pointer",
    secondary:
      "border border-primary text-text-secondary bg-transparent rounded-lg py-2 h-[42px] px-5 cursor-pointer",
    muted:
      "border border-grey text-grey bg-transparent rounded-md py-2 h-[42px] px-5 cursor-pointer",
    tab: "border border-grey text-grey rounded-md px-5 h-[42px] cursor-pointer",
    tabActive:
      "border border-primary bg-primary text-white rounded-md px-5 h-[42px] cursor-pointer",
  };

  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
      {variant === "primary" && withArrow && (
        <Arrow className="w-4 h-4" fill="white" />
      )}
    </button>
  );
};
