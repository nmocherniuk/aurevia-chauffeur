"use client";

import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fleet } from "@/src/features/FleetSection/data";
import { People } from "../../../SVGManager/People";
import { Bagage } from "../../../SVGManager/Bagage";
import { Button } from "../../../Button";
import { cn } from "@/src/lib/utils";

type FleetCarDetailModalProps = {
  car: Fleet | null;
  classLabel: string;
  isOpen: boolean;
  onClose: () => void;
  onCloseComplete?: () => void;
};

const BACKDROP = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
};
const CONTENT = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, delay: 0.1 },
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(
                "pointer-events-auto w-full max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90dvh] rounded-xl border border-grey bg-background shadow-xl",
                scrollEnabled ? "overflow-auto" : "overflow-hidden",
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative mx-auto mt-4 w-full max-w-[280px] aspect-4/3 overflow-hidden rounded-lg sm:max-w-[320px] lg:max-w-[400px]"
              >
                <Image
                  src={car.image}
                  alt={car.alt}
                  fill
                  className="object-contain object-center"
                  sizes="320px"
                />
              </motion.div>
              <motion.div
                initial={CONTENT.initial}
                animate={CONTENT.animate}
                exit={CONTENT.exit}
                transition={CONTENT.transition}
                onAnimationComplete={() => isOpen && setScrollEnabled(true)}
                className="p-6 pt-4"
              >
                <span className="text-sm text-primary">{classLabel}</span>
                <h3 className="font-onest text-xl text-text-secondary mt-1 mb-3">
                  {car.carTitle}
                </h3>
                <p className="text-base font-light text-grey mb-6">
                  {car.description}
                </p>
                <div className="flex gap-8 mb-6">
                  <div className="flex items-center gap-2">
                    <People />
                    <span className="text-text-secondary leading-none">
                      {car.passengers}
                    </span>
                    <span className="text-grey text-sm font-light">
                      {car.passengers > 1 ? "passengers" : "passenger"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bagage />
                    <span className="text-text-secondary leading-none">
                      {car.baggage}
                    </span>
                    <span className="text-grey text-sm font-light">
                      {car.baggage > 1 ? "baggages" : "baggage"}
                    </span>
                  </div>
                </div>
                <Button variant="primary" className="w-full" onClick={onClose}>
                  Fermer
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
