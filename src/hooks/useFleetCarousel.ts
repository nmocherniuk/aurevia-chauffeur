import { useRef, useState } from "react";
import { Fleet } from "@/src/features/FleetSection/data";

const SWIPE_THRESHOLD = 50;

export function useFleetCarousel(cars: Fleet[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const car = cars[currentIndex];

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, cars.length - 1)));
  };
  const goNext = () => goTo(currentIndex + 1);
  const goPrev = () => goTo(currentIndex - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const delta = touchStartX.current - endX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta > 0) goNext();
      else goPrev();
    }
  };

  return {
    currentIndex,
    car,
    cars,
    goTo,
    goNext,
    goPrev,
    handleTouchStart,
    handleTouchEnd,
  };
}
