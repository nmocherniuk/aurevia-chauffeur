"use client";

import React, { FC } from "react";
import { Chevron } from "../../../SVGManager/Chevron";

interface FleetCardNavigationProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export const FleetCardNavigation: FC<FleetCardNavigationProps> = ({
  currentIndex,
  total,
  onPrev,
  onNext,
  onGoTo,
}) => {
  return (
    <div className="mb-2 flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-grey bg-transparent text-grey transition-opacity hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none"
        aria-label="Previous car"
      >
        <Chevron
          width={16}
          height={16}
          fill="currentColor"
          className="rotate-90"
        />
      </button>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onGoTo(i)}
            className={`shrink-0 rounded-full transition-[width,background-color] ${
              i === currentIndex
                ? "h-1.5 w-4 bg-primary"
                : "h-1.5 w-1.5 bg-grey hover:bg-grey-light"
            }`}
            aria-label={`Car ${i + 1}`}
            aria-current={i === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        disabled={currentIndex === total - 1}
        className="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-grey bg-transparent text-grey transition-opacity hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none"
        aria-label="Next car"
      >
        <Chevron
          width={16}
          height={16}
          fill="currentColor"
          className="-rotate-90"
        />
      </button>
    </div>
  );
};
