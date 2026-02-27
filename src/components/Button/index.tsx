import React, { FC } from "react";
import { cn } from "@/src/lib/utils";
import { Arrow } from "../SVGManager/Arrow";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "muted";
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
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
  };

  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
      {variant === "primary" && <Arrow className="w-4 h-4" fill="white" />}
    </button>
  );
};
