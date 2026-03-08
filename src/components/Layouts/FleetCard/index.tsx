"use client";

import React, { FC, memo, useState, useCallback } from "react";
import { Fleet } from "@/src/features/FleetSection/data";
import { useFleetCarousel } from "../../../hooks/useFleetCarousel";
import { FleetCardImage } from "./components/FleetCardImage";
import { CarouselArrows } from "@/src/components/CarouselArrows";
import { CarouselDots } from "@/src/components/CarouselDots";
import { FleetCardContent } from "./components/FleetCardContent";
import { FleetCarDetailModal } from "./components/FleetCarDetailModal";

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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalCar, setModalCar] = useState<Fleet | null>(null);

  const handleDetailsClick = useCallback(() => {
    setModalCar(car);
    setModalOpen(true);
  }, [car]);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleModalCloseComplete = useCallback(() => {
    setModalCar(null);
  }, []);

  return (
    <article className="flex flex-col py-6 sm:flex-row gap-4 sm:gap-7 sm:items-stretch md:gap-12 lg:flex-col lg:gap-4 lg:px-2">
      <div className="min-w-0 sm:min-w-[280px] sm:flex-1 sm:basis-0 lg:max-w-[400px] lg:min-w-0">
        <FleetCardImage
          car={car}
          currentIndex={currentIndex}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
        <CarouselArrows
          onPrev={goPrev}
          onNext={goNext}
          prevDisabled={currentIndex === 0}
          nextDisabled={currentIndex === cars.length - 1}
          prevLabel="Previous car"
          nextLabel="Next car"
        >
          <CarouselDots
            total={cars.length}
            currentIndex={currentIndex}
            onGoTo={goTo}
            itemLabel={(i) => `Car ${i + 1}`}
          />
        </CarouselArrows>
      </div>
      <FleetCardContent
        classLabel={classLabel}
        car={car}
        onDetailsClick={handleDetailsClick}
      />
      <FleetCarDetailModal
        car={modalCar}
        classLabel={classLabel}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onCloseComplete={handleModalCloseComplete}
      />
    </article>
  );
};

const FleetCard = memo(FleetCardComponent);
FleetCard.displayName = "FleetCard";

export default FleetCard;
