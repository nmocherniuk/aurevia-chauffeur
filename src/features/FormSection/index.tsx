"use client";

import React, { FC } from "react";
import { Form, Formik } from "formik";
import type { FormikErrors, FormikTouched } from "formik";
import { StepIndicator } from "@/src/components/StepIndicator";
import { SummaryList } from "@/src/components/SummaryList";
import Image from "next/image";
import { useFormSection } from "./hooks/useFormSection";
import { Button } from "@/src/components/Button";
import { STEP_SCHEMAS } from "./validation/schemas";
import { buildSummaryItems } from "./utils/buildSummaryItems";
import { getInitialFormValues } from "./utils/getInitialFormValues";
import { FORM_STEPS } from "./data";
import type { FormValues } from "./types";
import type { FormStepProps } from "./components/steps/types";
import { PaymentStep } from "./components/steps/PaymentStep";

const FormSection: FC = () => {
  const {
    steps,
    activeStepIndex,
    maxStepReached,
    goNext,
    goPrev,
    goToStep,
    ActiveStep,
    lastStepIndex,
  } = useFormSection();

  const isPaymentStep = activeStepIndex === lastStepIndex;

  return (
    <section
      id="reserver"
      className="w-full sm:px-0 md:grid lg:grid-cols-[2fr_3fr] lg:gap-x-13 lg:items-start"
    >
      <div className="hidden sm:block relative w-full overflow-hidden rounded-xl h-[260px] sm:h-[300px] lg:h-[800px] xl:h-[776px] lg:top-6 mb-9 lg:mb-0">
        <Image
          src="/images/form-car.png"
          alt="Form section background"
          fill
          className="object-cover object-center rounded-xl"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
      <div className="lg:pt-7 lg:pb-3 xl:pt-12">
        <div className="mb-8">
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

        <Formik<FormValues>
          initialValues={getInitialFormValues()}
          validationSchema={STEP_SCHEMAS[activeStepIndex]}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values, { resetForm }) => {
            if (isPaymentStep) return;

            goNext();
            resetForm({ values });
          }}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            submitCount,
          }) => {
            const summaryItems = buildSummaryItems(values, activeStepIndex);

            const getError = (
              name: string,
              allErrors: FormikErrors<FormValues>,
              allTouched: FormikTouched<FormValues>,
            ): string | null => {
              const isTouched = Boolean(
                (allTouched as Record<string, unknown>)[name],
              );
              const err = (allErrors as Record<string, unknown>)[name];
              return isTouched && typeof err === "string" ? err : null;
            };

            const errorsRecord: Record<string, string | null> = {};
            for (const step of FORM_STEPS) {
              for (const field of step.fields) {
                errorsRecord[field.name] = getError(
                  field.name,
                  errors,
                  touched,
                );
              }
            }

            const stepProps: FormStepProps = {
              getValue: (name: string, isCheckbox: boolean) => {
                const v = (values as Record<string, unknown>)[name];
                if (typeof v === "boolean" || typeof v === "string") return v;
                return isCheckbox ? false : "";
              },
              setValue: (name: string, value: string | boolean) => {
                void setFieldValue(name, value, true);
              },
              errors: errorsRecord,
              handleBlur: (name: string) => () => {
                if (!submitCount) return;
                void setFieldTouched(name, true, true);
              },
              handleFocus: (name: string) => () => {
                void setFieldTouched(name, false, false);
              },
            };

            return (
              <>
                {summaryItems.length > 0 && !isPaymentStep ? (
                  <SummaryList
                    items={summaryItems}
                    className="py-1 mx-auto justify-center lg:justify-start"
                    aria-label="Résumé de la réservation"
                  />
                ) : null}

                {isPaymentStep ? (
                  <div className="mt-6">
                    <PaymentStep {...stepProps} onBack={goPrev} />
                  </div>
                ) : (
                  <Form className="mt-6 flex flex-col gap-4">
                    {ActiveStep ? <ActiveStep {...stepProps} /> : null}

                    <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-end">
                      {activeStepIndex > 0 && (
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={goPrev}
                          className="sm:w-[220px]"
                        >
                          Précédent
                        </Button>
                      )}
                      <Button
                        type="submit"
                        variant="primary"
                        withArrow={false}
                        className="sm:w-[220px]"
                      >
                        Continue
                      </Button>
                    </div>
                  </Form>
                )}
              </>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default FormSection;
