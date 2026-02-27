"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Fleet } from "@/src/features/FleetSection/data";

interface FleetCardImageProps {
  car: Fleet;
  currentIndex: number;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

export const FleetCardImage: FC<FleetCardImageProps> = ({
  car,
  currentIndex,
  onTouchStart,
  onTouchEnd,
}) => {
  return (
    <div
      className="relative w-full max-w-full overflow-hidden touch-pan-y aspect-4/3"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div key={currentIndex} className="animate-fade-in absolute inset-0">
        <Image
          src={car.image}
          alt={car.alt}
          fill
          className="select-none object-contain object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
          draggable={false}
        />
      </div>
    </div>
  );
};
