"use client";

import React, { FC } from "react";
import { cn } from "@/src/lib/utils";

export type CarouselDotsProps = {
  total: number;
  currentIndex: number;
  onGoTo: (index: number) => void;
  /** Доступність: підпис для кнопок (наприклад "Photo"). */
  itemLabel?: (index: number) => string;
  className?: string;
};

export const CarouselDots: FC<CarouselDotsProps> = ({
  total,
  currentIndex,
  onGoTo,
  itemLabel = (i) => `Item ${i + 1}`,
  className,
}) => {
  if (total <= 0) return null;

  return (
    <div
      className={cn("flex items-center justify-center gap-1.5", className)}
      role="tablist"
      aria-label="Carousel pagination"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-label={itemLabel(i)}
          aria-selected={i === currentIndex}
          onClick={() => onGoTo(i)}
          className={cn(
            "shrink-0 rounded-full transition-[width,background-color]",
            i === currentIndex
              ? "h-1.5 w-4 bg-primary"
              : "h-1.5 w-1.5 bg-grey hover:bg-grey-light",
          )}
        />
      ))}
    </div>
  );
};
