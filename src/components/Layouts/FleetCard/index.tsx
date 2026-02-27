"use client";

import React, { FC, memo } from "react";
import { Fleet } from "@/src/features/FleetSection/data";
import { useFleetCarousel } from "./hooks/useFleetCarousel";
import { FleetCardImage } from "./components/FleetCardImage";
import { FleetCardNavigation } from "./components/FleetCardNavigation";
import { FleetCardContent } from "./components/FleetCardContent";

interface FleetCardProps {
  cars: Fleet[];
  classLabel: string;
}

const FleetCardComponent: FC<FleetCardProps> = ({ cars, classLabel }) => {
  const {
    currentIndex,
    car,
    goTo,
    goPrev,
    goNext,
    handleTouchStart,
    handleTouchEnd,
  } = useFleetCarousel(cars);

  return (
    <article className="flex flex-col py-6 sm:flex-row gap-4 sm:gap-7 sm:items-stretch md:gap-12 lg:flex-col lg:gap-4 lg:px-2">
      <div className="min-w-0 sm:min-w-[280px] sm:flex-1 sm:basis-0 lg:max-w-[400px] lg:min-w-0">
        <FleetCardImage
          car={car}
          currentIndex={currentIndex}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
        <FleetCardNavigation
          currentIndex={currentIndex}
          total={cars.length}
          onPrev={goPrev}
          onNext={goNext}
          onGoTo={goTo}
        />
      </div>
      <FleetCardContent classLabel={classLabel} car={car} />
    </article>
  );
};

const FleetCard = memo(FleetCardComponent);
FleetCard.displayName = "FleetCard";

export default FleetCard;
