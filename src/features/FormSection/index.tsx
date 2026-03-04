"use client";

import React, { FC } from "react";
import { StepIndicator } from "@/src/components/StepIndicator";
import { SummaryList } from "@/src/components/SummaryList";
import Image from "next/image";
import { useFormSection } from "./hooks/useFormSection";
import { Button } from "@/src/components/Button";

const FormSection: FC = () => {
  const {
    steps,
    summaryItems,
    activeStepIndex,
    maxStepReached,
    goNext,
    goPrev,
    goToStep,
    renderStep,
    lastStepIndex,
  } = useFormSection();

  console.log("steps", steps);

  return (
    <section
      id="form"
      className="mb-28 w-full flex flex-col gap-y-9 sm:px-0 md:grid lg:grid-cols-[2fr_3fr] lg:gap-x-13 lg:items-start"
    >
      <div className="hidden sm:block relative w-full overflow-hidden rounded-xl h-[260px] sm:h-[300px] lg:h-[777px] lg:top-6">
        <Image
          src="/images/form-car.png"
          alt="Form section background"
          fill
          className="object-cover object-center rounded-xl"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
      <div className="lg:pt-12 lg:pb-3">
        <div>
          <h2 className="font-benzin text-white text-center text-2xl lg:text-start mb-4 sm:text-[28px] md:text-3xl lg:text-4xl">
            Réservez votre transfert
          </h2>
          <p className="text-text-primary text-base font-light text-center lg:text-start">
            Enter your transfer details below and continue to confirmation.
          </p>
        </div>
        <StepIndicator
          steps={steps}
          onStepClick={goToStep}
          maxReachableStepIndex={maxStepReached}
          className="justify-center max-w-[348px] mt-8 mb-12 mx-auto lg:mx-0"
        />

        {summaryItems.length > 0 && activeStepIndex !== lastStepIndex ? (
          <SummaryList
            items={summaryItems}
            className="py-1 mx-auto justify-center lg:justify-start"
            aria-label="Résumé de la réservation"
          />
        ) : null}

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {renderStep()}

          <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-end">
            {activeStepIndex > 0 && (
              <Button
                variant="secondary"
                onClick={goPrev}
                className="sm:w-[220px]"
              >
                Précédent
              </Button>
            )}
            <Button
              variant="primary"
              withArrow={false}
              onClick={goNext}
              className="sm:w-[220px]"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
