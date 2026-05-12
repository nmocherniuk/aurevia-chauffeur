import { useRef, useState, useCallback, useEffect } from "react";

const SWIPE_THRESHOLD = 50;

export type UseCarouselIndexOptions = {
  /** Початковий індекс. */
  initialIndex?: number;
  /** При зміні цих значень індекс скидається в 0. Краще передати useMemo(() => [a, b], [a, b]). */
  resetWhen?: unknown[];
};

export function useCarouselIndex(
  total: number,
  options: UseCarouselIndexOptions = {},
) {
  const { initialIndex = 0, resetWhen } = options;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (resetWhen && resetWhen.length > 0) setCurrentIndex(0);
  }, [resetWhen]);

  useEffect(() => {
    if (total > 0) {
      setCurrentIndex((i) => Math.min(i, total - 1));
    }
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((i) => Math.max(0, Math.min(index, total - 1)));
    },
    [total],
  );

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (total <= 1) return;
      const endX = e.changedTouches[0].clientX;
      const delta = touchStartX.current - endX;
      if (Math.abs(delta) >= SWIPE_THRESHOLD) {
        if (delta > 0) setCurrentIndex((i) => Math.min(total - 1, i + 1));
        else setCurrentIndex((i) => Math.max(0, i - 1));
      }
    },
    [total],
  );

  return {
    currentIndex,
    goTo,
    goPrev,
    goNext,
    handleTouchStart,
    handleTouchEnd,
  };
}
