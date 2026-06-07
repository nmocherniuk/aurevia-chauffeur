"use client";

import React, { FC, memo, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Fleet } from "@/src/features/FleetSection/data";
import {
  notifyFleetBookingPrefillReady,
  queueFleetBookingPrefill,
} from "@/src/features/FleetSection/utils/fleetBookingPrefill";
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
  const router = useRouter();
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
  const pendingBookNowFleetId = useRef<string | null>(null);

  const handleDetailsClick = useCallback(() => {
    setModalCar(car);
    setModalOpen(true);
  }, [car]);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleModalCloseComplete = useCallback(() => {
    const fleetId = pendingBookNowFleetId.current;
    pendingBookNowFleetId.current = null;
    if (fleetId) {
      queueFleetBookingPrefill(fleetId);
      router.push("/driver", { scroll: false });
      notifyFleetBookingPrefillReady();
    }
    setModalCar(null);
  }, [router]);

  const handleBookNow = useCallback(() => {
    queueFleetBookingPrefill(car.id);
    router.push("/driver", { scroll: false });
    notifyFleetBookingPrefillReady();
  }, [car.id, router]);

  const handleModalBookNow = useCallback(() => {
    if (!modalCar) return;
    pendingBookNowFleetId.current = modalCar.id;
    setModalOpen(false);
  }, [modalCar]);

  return (
    <article className="flex flex-col py-6 sm:flex-row gap-4 sm:gap-7 sm:items-stretch md:gap-12 lg:flex-col lg:gap-4 lg:px-2">
      <div className="min-w-0 sm:min-w-[280px] sm:flex-1 sm:basis-0 lg:max-w-[400px] lg:min-w-0">
        <FleetCardImage
          car={car}
          currentIndex={currentIndex}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
        {cars.length > 1 ? (
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
        ) : null}
      </div>
      <FleetCardContent
        classLabel={classLabel}
        car={car}
        onDetailsClick={handleDetailsClick}
        onBookNow={handleBookNow}
      />
      <FleetCarDetailModal
        car={modalCar}
        classLabel={classLabel}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onCloseComplete={handleModalCloseComplete}
        onBookNow={handleModalBookNow}
      />
    </article>
  );
};

const FleetCard = memo(FleetCardComponent);
FleetCard.displayName = "FleetCard";

export default FleetCard;
