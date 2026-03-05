"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { getStepsFromIndex } from "@/src/components/StepIndicator/utils/getStepsFromIndex";
import { FORM_STEPS } from "../data";
import { STEP_LABELS, LAST_STEP_INDEX } from "../constants";
import { buildSummaryItems } from "../utils/buildSummaryItems";
import type { FormValues } from "../types";
import type { FormStepProps } from "../components/steps/types";
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
  const [formValues, setFormValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});

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

  const summaryItems = useMemo(
    () => buildSummaryItems(formValues, activeStepIndex),
    [formValues, activeStepIndex],
  );

  const getValue = useCallback(
    (name: string, isCheckbox: boolean): string | boolean => {
      if (name in formValues) return formValues[name];
      return isCheckbox ? false : "";
    },
    [formValues],
  );

  const setValue = useCallback((name: string, value: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }, []);

  const handleBlur = useCallback(
    (name: string) => () => {
      // Could be validation with Yup
    },
    [],
  );

  useEffect(() => {
    setMaxStepReached((prev) => Math.max(prev, activeStepIndex));
  }, [activeStepIndex]);

  const goNext = useCallback(() => {
    setActiveStepIndex((i) => (i < LAST_STEP_INDEX ? i + 1 : i));
  }, []);

  const goPrev = useCallback(() => {
    setActiveStepIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

  const goToStep = useCallback(
    (index: number) => {
      setActiveStepIndex((i) => {
        const clamped = Math.max(0, Math.min(index, maxStepReached));
        return clamped;
      });
    },
    [maxStepReached],
  );

  const stepProps: FormStepProps = useMemo(
    () => ({
      getValue,
      setValue,
      errors,
      handleBlur,
    }),
    [getValue, setValue, errors, handleBlur],
  );

  const renderStep = useCallback(() => {
    if (activeStepIndex < 0 || activeStepIndex >= STEP_COMPONENTS.length) {
      return null;
    }
    const Step = STEP_COMPONENTS[activeStepIndex];
    return <Step {...stepProps} />;
  }, [activeStepIndex, stepProps]);

  return {
    steps,
    summaryItems,
    activeStepIndex,
    maxStepReached,
    goNext,
    goPrev,
    goToStep,
    renderStep,
    lastStepIndex: LAST_STEP_INDEX,
  };
}
