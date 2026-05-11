"use client";

import React, { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OutlineCheck } from "@/src/components/SVGManager/OutlineCheck";
import { Button } from "@/src/components/Button";

export const BOOKING_SUCCESS_SECTION_ID = "booking-success";

type Props = {
  onContinue: () => void;
};

export const BookingSuccessView: FC<Props> = ({ onContinue }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={BOOKING_SUCCESS_SECTION_ID}
      className="flex min-h-[min(70vh,776px)] flex-col items-center justify-center px-4 py-16 text-center lg:py-8"
      aria-labelledby="booking-success-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <OutlineCheck
        className="shrink-0"
        fill="#BB9B78"
        aria-hidden
      />
      <h4
        id="booking-success-title"
        className="my-3 text-xl text-text-secondary"
      >
        Succès
      </h4>
      <p className="mb-6 max-w-[558px] text-base font-light leading-relaxed text-text-primary">
        Votre demande a bien été enregistrée. Nous vous confirmerons les détails
        de votre transfert sous peu.
      </p>
      <Button
        type="button"
        onClick={onContinue}
        variant="primary"
        withArrow={false}
        className="w-[280px]"
      >
        Continuer
      </Button>
    </motion.section>
  );
};
