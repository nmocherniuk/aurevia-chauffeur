"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/components/Button";
import { CAR_SPECS } from "../data/specs";
import { CONTENT_ANIMATION } from "../constants";
import type { Fleet } from "@/src/features/FleetSection/data";
import { useContent } from "@/src/providers/LocaleProvider";

type FleetCarDetailModalContentProps = {
  car: Fleet;
  classLabel: string;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
  onAnimationComplete: () => void;
};

export function FleetCarDetailModalContent({
  car,
  classLabel,
  isOpen,
  onClose,
  onBookNow,
  onAnimationComplete,
}: FleetCarDetailModalContentProps) {
  const { common: commonContent } = useContent();

  return (
    <motion.div
      initial={CONTENT_ANIMATION.initial}
      animate={CONTENT_ANIMATION.animate}
      exit={CONTENT_ANIMATION.exit}
      transition={CONTENT_ANIMATION.transition}
      onAnimationComplete={() => isOpen && onAnimationComplete()}
      className="flex flex-col p-5 pt-2 sm:p-6 sm:pt-4"
    >
      <span className="text-sm text-primary">{classLabel}</span>
      <h3 className="font-onest text-xl sm:text-2xl text-text-secondary mt-1 mb-3">
        {car.carTitle}
      </h3>
      <p className="text-base font-light text-grey mb-6">{car.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 sm:gap-x-4 mb-6 lg:grid-cols-[auto_auto_auto] lg:gap-x-6">
        {CAR_SPECS.map(({ id, Icon, label, getValue }) => {
          const value = getValue(car);
          if (value === null || value === undefined || value === "") return null;
          return (
            <div key={id} className="flex items-center gap-2 min-w-0">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                <Icon fill="var(--primary)" className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <span className="text-grey text-sm font-light">{label} </span>
                <span className="text-text-secondary text-sm">{value}</span>
              </div>
            </div>
          );
        })}
      </div>

      {car.amenities && car.amenities.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {car.amenities.map((label) => (
            <span
              key={label}
              className="rounded-md border border-primary px-3 py-1.5 text-sm text-text-secondary"
            >
              {label}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-auto">
        <Button
          type="button"
          variant="secondary"
          className="w-full sm:flex-1"
          onClick={onClose}
        >
          {commonContent.buttons.closeModalButton}
        </Button>
        <Button
          type="button"
          variant="primary"
          className="w-full sm:flex-1"
          onClick={onBookNow}
        >
          {commonContent.buttons.reserve}
        </Button>
      </div>
    </motion.div>
  );
}
