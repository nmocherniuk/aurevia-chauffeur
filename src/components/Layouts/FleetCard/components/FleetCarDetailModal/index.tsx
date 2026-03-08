"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { Cross } from "@/src/components/SVGManager/Cross";
import { useCarouselIndex } from "@/src/hooks/useCarouselIndex";
import { FleetCarDetailModalImage } from "./components/FleetCarDetailModalImage";
import { FleetCarDetailModalContent } from "./components/FleetCarDetailModalContent";
import { BACKDROP } from "./constants";
import type { Fleet } from "@/src/features/FleetSection/data";

export type FleetCarDetailModalProps = {
  car: Fleet | null;
  classLabel: string;
  isOpen: boolean;
  onClose: () => void;
  onCloseComplete?: () => void;
};

export function FleetCarDetailModal({
  car,
  classLabel,
  isOpen,
  onClose,
  onCloseComplete,
}: FleetCarDetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const images = useMemo(
    () =>
      car
        ? (car.images ?? [car.image]).filter((src): src is string => Boolean(src))
        : [],
    [car],
  );

  const carouselResetDeps = useMemo(() => [isOpen, car?.id], [isOpen, car?.id]);
  const {
    currentIndex: currentImageIndex,
    goTo: goToImage,
    goPrev: goPrevImage,
    goNext: goNextImage,
    handleTouchStart,
    handleTouchEnd,
  } = useCarouselIndex(images.length, { resetWhen: carouselResetDeps });

  const currentSrc = images[currentImageIndex] ?? "";
  const hasValidImage = currentSrc.length > 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) setScrollEnabled(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleExitComplete = useCallback(() => {
    onCloseComplete?.();
  }, [onCloseComplete]);

  if (!mounted || !car) return null;

  const content = (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && car ? (
        <motion.div
          key="fleet-detail-modal"
          initial={false}
          animate={false}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="contents"
        >
          <motion.div
            role="presentation"
            aria-hidden
            initial={BACKDROP.initial}
            animate={BACKDROP.animate}
            exit={BACKDROP.exit}
            transition={BACKDROP.transition}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative pointer-events-auto flex w-full max-w-3xl max-h-[90dvh] flex-col overflow-hidden rounded-xl border border-grey bg-background shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-grey transition-colors duration-200 hover:text-grey-light cursor-pointer"
              >
                <Cross fill="currentColor" />
              </button>

              <div
                className={cn(
                  "scrollbar-thin-modal flex min-h-0 flex-1 flex-col",
                  scrollEnabled ? "overflow-auto" : "overflow-hidden",
                )}
              >
                <FleetCarDetailModalImage
                  car={car}
                  images={images}
                  currentImageIndex={currentImageIndex}
                  hasValidImage={hasValidImage}
                  currentSrc={currentSrc}
                  onPrev={goPrevImage}
                  onNext={goNextImage}
                  onGoTo={goToImage}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                />
                <FleetCarDetailModalContent
                  car={car}
                  classLabel={classLabel}
                  isOpen={isOpen}
                  onClose={onClose}
                  onAnimationComplete={() => setScrollEnabled(true)}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
