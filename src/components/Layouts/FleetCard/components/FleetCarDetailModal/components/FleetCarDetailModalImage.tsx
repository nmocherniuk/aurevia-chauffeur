"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CarouselArrowButton } from "@/src/components/CarouselArrows";
import { CarouselDots } from "@/src/components/CarouselDots";
import type { Fleet } from "@/src/features/FleetSection/data";

type FleetCarDetailModalImageProps = {
  car: Fleet;
  images: string[];
  currentImageIndex: number;
  hasValidImage: boolean;
  currentSrc: string;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
};

export function FleetCarDetailModalImage({
  car,
  images,
  currentImageIndex,
  hasValidImage,
  currentSrc,
  onPrev,
  onNext,
  onGoTo,
  onTouchStart,
  onTouchEnd,
}: FleetCarDetailModalImageProps) {
  return (
    <div className="relative w-full shrink-0 px-5 sm:px-0">
      <div
        className="relative mx-auto w-full max-w-[480px] aspect-square sm:aspect-video overflow-hidden touch-pan-y sm:max-w-[510px] lg:max-w-[580px]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            {hasValidImage ? (
              <Image
                src={currentSrc}
                alt={`${car.alt} ${currentImageIndex + 1}`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
              />
            ) : (
              <div className="absolute inset-0 bg-grey/20" aria-hidden />
            )}
          </motion.div>
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-1">
              <CarouselArrowButton
                direction="prev"
                onClick={onPrev}
                disabled={currentImageIndex === 0}
                ariaLabel="Photo précédente"
                size="md"
                className="border-grey-light/80 bg-black/40 text-white"
              />
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-1">
              <CarouselArrowButton
                direction="next"
                onClick={onNext}
                disabled={currentImageIndex === images.length - 1}
                ariaLabel="Photo suivante"
                size="md"
                className="border-grey-light/80 bg-black/40 text-white"
              />
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="pb-3 pt-2">
          <CarouselDots
            total={images.length}
            currentIndex={currentImageIndex}
            onGoTo={onGoTo}
            itemLabel={(i) => `Photo ${i + 1}`}
          />
        </div>
      )}
    </div>
  );
}
