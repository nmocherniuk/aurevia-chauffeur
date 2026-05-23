"use client";

import React, { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OutlineCheck } from "@/src/components/SVGManager/OutlineCheck";
import { Button } from "@/src/components/Button";
import { useContent } from "@/src/providers/LocaleProvider";

export const SECURITY_REQUEST_SUCCESS_ID = "security-request-success";

type Props = {
  onContinue: () => void;
};

export const SecurityRequestSuccessView: FC<Props> = ({ onContinue }) => {
  const { securityForm } = useContent();
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={SECURITY_REQUEST_SUCCESS_ID}
      className="flex min-h-[min(70vh,776px)] flex-col items-center justify-center px-4 py-16 text-center lg:py-8"
      aria-labelledby="security-request-success-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <OutlineCheck className="shrink-0" fill="#BB9B78" aria-hidden />
      <h4
        id="security-request-success-title"
        className="my-3 text-xl text-text-secondary"
      >
        {securityForm.success.title}
      </h4>
      <p className="mb-6 max-w-[558px] text-base font-light leading-relaxed text-text-primary">
        {securityForm.success.message}
      </p>
      <Button
        type="button"
        onClick={onContinue}
        variant="primary"
        withArrow={false}
        className="w-[280px]"
      >
        {securityForm.success.button}
      </Button>
    </motion.section>
  );
};
