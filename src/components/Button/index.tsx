import React, { FC } from "react";
import { cn } from "@/src/lib/utils";
import { Arrow } from "../SVGManager/Arrow";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
      "bg-primary text-white rounded-lg py-2 h-[42px] px-5 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:bg-[#AC8458]",
    secondary:
      "border border-primary text-primary bg-transparent rounded-lg py-2 h-[42px] px-5 cursor-pointer transition-all duration-300 hover:border-text-secondary hover:text-text-secondary",
    muted:
      "border border-grey text-grey bg-transparent rounded-md py-2 h-[42px] px-5 cursor-pointer transition-colors duration-300 hover:border-grey-light hover:text-grey-light hover:bg-grey/10",
    tab: "border border-grey text-grey rounded-md px-5 h-[42px] cursor-pointer transition-colors duration-300 hover:border-text-secondary hover:text-text-secondary",
    tabActive:
      "border border-primary bg-primary text-white rounded-md px-5 h-[42px] cursor-pointer transition-all duration-300 hover:bg-[#AC8458]",
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
