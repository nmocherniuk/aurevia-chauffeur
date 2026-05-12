"use client";

import React, { FC, ReactNode } from "react";
import { Chevron } from "@/src/components/SVGManager/Chevron";
import { cn } from "@/src/lib/utils";

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10",
};
const iconSizes = { sm: 14, md: 16, lg: 18 } as const;

export type CarouselArrowButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const CarouselArrowButton: FC<CarouselArrowButtonProps> = ({
  direction,
  onClick,
  disabled = false,
  ariaLabel = direction === "prev" ? "Previous" : "Next",
  className,
  size = "md",
}) => {
  const iconSize = iconSizes[size];
  const btnClass = sizeClasses[size];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        "shrink-0 cursor-pointer rounded-full border border-grey bg-transparent text-grey transition-opacity hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center",
        btnClass,
        className,
      )}
    >
      <Chevron
        width={iconSize}
        height={iconSize}
        fill="currentColor"
        className={direction === "prev" ? "rotate-90" : "-rotate-90"}
      />
    </button>
  );
};

export type CarouselArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
};

export const CarouselArrows: FC<CarouselArrowsProps> = ({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  prevLabel = "Previous",
  nextLabel = "Next",
  className,
  size = "md",
  children,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2",
        children != null && "w-full",
        className,
      )}
    >
      <CarouselArrowButton
        direction="prev"
        onClick={onPrev}
        disabled={prevDisabled}
        ariaLabel={prevLabel}
        size={size}
      />
      {children}
      <CarouselArrowButton
        direction="next"
        onClick={onNext}
        disabled={nextDisabled}
        ariaLabel={nextLabel}
        size={size}
      />
    </div>
  );
};
