"use client";

import { useState, useCallback, useMemo } from "react";
import { getStepsFromIndex } from "@/src/components/StepIndicator/utils/getStepsFromIndex";
import { FORM_STEPS } from "../data";
import { STEP_LABELS, LAST_STEP_INDEX } from "../constants";
import { JourneyStep } from "../components/steps/JourneyStep";
import { VehicleStep } from "../components/steps/VehicleStep";
import { PassengerStep } from "../components/steps/PassengerStep";
import { PaymentStep } from "../components/steps/PaymentStep";

const STEP_COMPONENTS = [
  JourneyStep,
  VehicleStep,
  PassengerStep,
  PaymentStep,
] as const;

export function useFormSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);

  const steps = useMemo(
    () =>
      getStepsFromIndex(STEP_LABELS, activeStepIndex, maxStepReached).map(
        (step, i) => ({
          ...step,
          icon: FORM_STEPS[i]?.icon,
          iconSize: FORM_STEPS[i]?.iconSize,
        }),
      ),
    [activeStepIndex, maxStepReached],
  );

  const goNext = useCallback(() => {
    setActiveStepIndex((i) => {
      const next = i < LAST_STEP_INDEX ? i + 1 : i;
      setMaxStepReached((prev) => Math.max(prev, next));
      return next;
    });
  }, []);

  const goPrev = useCallback(() => {
    setActiveStepIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

  const goToStep = useCallback(
    (index: number) => {
      setActiveStepIndex(() => {
        const clamped = Math.max(0, Math.min(index, maxStepReached));
        return clamped;
      });
    },
    [maxStepReached],
  );

  const resetFlow = useCallback(() => {
    setActiveStepIndex(0);
    setMaxStepReached(0);
  }, []);

  const ActiveStep = useMemo(() => {
    if (activeStepIndex < 0 || activeStepIndex >= STEP_COMPONENTS.length) {
      return null;
    }
    return STEP_COMPONENTS[activeStepIndex];
  }, [activeStepIndex]);

  return {
    steps,
    activeStepIndex,
    maxStepReached,
    goNext,
    goPrev,
    goToStep,
    resetFlow,
    ActiveStep,
    lastStepIndex: LAST_STEP_INDEX,
  };
}
