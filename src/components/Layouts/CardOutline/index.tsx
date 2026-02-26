import React, { FC } from "react";
import { cn } from "@/src/lib/utils";

interface CardOutlineProps {
  children: React.ReactNode;
  className?: string;
}

const CardOutline: FC<CardOutlineProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-transparent rounded-md border border-primary",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardOutline;
