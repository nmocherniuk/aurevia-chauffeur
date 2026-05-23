"use client";

import { useState, useCallback, useMemo } from "react";
import { getStepsFromIndex } from "@/src/components/StepIndicator/utils/getStepsFromIndex";
import {
  SECURITY_LAST_STEP_INDEX,
  SECURITY_STEP_ICON_SIZES,
  SECURITY_STEP_ICONS,
} from "../constants";
import { SecurityServiceStep } from "../components/SecurityServiceStep";
import { SecurityClientStep } from "../components/SecurityClientStep";
import { SecurityOperationStep } from "../components/SecurityOperationStep";
import { SecurityReviewStep } from "../components/SecurityReviewStep";
import { useContent } from "@/src/providers/LocaleProvider";

const STEP_COMPONENTS = [
  SecurityServiceStep,
  SecurityClientStep,
  SecurityOperationStep,
  SecurityReviewStep,
] as const;

export function useSecurityFormSection() {
  const { securityForm } = useContent();
  const stepLabels = useMemo(
    () => [
      securityForm.steps.service,
      securityForm.steps.client,
      securityForm.steps.details,
      securityForm.steps.review,
    ],
    [securityForm.steps],
  );

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);

  const steps = useMemo(
    () =>
      getStepsFromIndex(stepLabels, activeStepIndex, maxStepReached).map(
        (step, i) => ({
          ...step,
          icon: SECURITY_STEP_ICONS[i],
          iconSize: SECURITY_STEP_ICON_SIZES[i],
        }),
      ),
    [stepLabels, activeStepIndex, maxStepReached],
  );

  const goNext = useCallback(() => {
    setActiveStepIndex((i) => {
      const next = i < SECURITY_LAST_STEP_INDEX ? i + 1 : i;
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
    lastStepIndex: SECURITY_LAST_STEP_INDEX,
  };
}
