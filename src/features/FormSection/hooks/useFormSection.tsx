"use client";

import { useState, useCallback, useMemo } from "react";
import { getStepsFromIndex } from "@/src/components/StepIndicator/utils/getStepsFromIndex";
import { getFormSteps } from "../data/getFormSteps";
import { LAST_STEP_INDEX } from "../constants";
import { useContent } from "@/src/providers/LocaleProvider";
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
  const { bookingForm } = useContent();
  const formSteps = useMemo(() => getFormSteps(bookingForm), [bookingForm]);
  const stepLabels = useMemo(
    () => formSteps.map((s) => s.label),
    [formSteps],
  );

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);

  const steps = useMemo(
    () =>
      getStepsFromIndex(stepLabels, activeStepIndex, maxStepReached).map(
        (step, i) => ({
          ...step,
          icon: formSteps[i]?.icon,
          iconSize: formSteps[i]?.iconSize,
        }),
      ),
    [stepLabels, activeStepIndex, maxStepReached, formSteps],
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
    formSteps,
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
