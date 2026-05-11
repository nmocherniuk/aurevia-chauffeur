"use client";

import React, { FC, useState } from "react";
import { Form, Formik } from "formik";
import type { FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import { StepIndicator } from "@/src/components/StepIndicator";
import { SummaryList } from "@/src/components/SummaryList";
import { Button } from "@/src/components/Button";
import { SECURITY_STEP_SCHEMAS } from "./validation/schemas";
import { getInitialSecurityFormValues } from "./utils/getInitialSecurityFormValues";
import { buildSecuritySummaryItems } from "./utils/buildSecuritySummaryItems";
import type { SecurityFormValues } from "./types";
import type { FormStepProps } from "@/src/features/FormSection/components/steps/types";
import { useSecurityFormSection } from "./hooks/useSecurityFormSection";
import {
  SecurityRequestSuccessView,
  SECURITY_REQUEST_SUCCESS_ID,
} from "./components/SecurityRequestSuccessView";
import { useScrollToSectionWhen } from "@/src/hooks/useScrollToSectionWhen";
import { submitSecurityRequest } from "@/src/api/securityRequest";

const SECURITY_FIELDS_BY_STEP: readonly (readonly string[])[] = [
  [
    "serviceCategory",
    "serviceType",
    "serviceTypeOther",
    "location",
    "date",
    "time",
    "duration",
    "endDate",
    "agentCount",
  ],
  ["firstName", "lastName", "email", "phone", "company"],
  [
    "specialRequirements",
    "languagesRequired",
    "dressCode",
    "vehicleRequired",
    "armedRequired",
  ],
  [],
];

const SecurityFormSection: FC = () => {
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  useScrollToSectionWhen(requestSuccess, SECURITY_REQUEST_SUCCESS_ID);

  const {
    steps,
    activeStepIndex,
    maxStepReached,
    goNext,
    goPrev,
    goToStep,
    resetFlow,
    ActiveStep,
    lastStepIndex,
  } = useSecurityFormSection();

  return (
    <section
      id="reserver"
      className="w-full sm:px-0 md:grid lg:grid-cols-[2fr_3fr] lg:gap-x-13 lg:items-start"
    >
      <div className="relative mb-9 hidden h-[260px] w-full overflow-hidden rounded-xl sm:block sm:h-[300px] lg:top-6 lg:mb-0 lg:h-[800px] xl:h-[776px]">
        <Image
          src="/images/security-guard-workspace.jpg"
          alt=""
          fill
          className="rounded-xl object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
      <div className="lg:pb-3 lg:pt-7 xl:pt-12">
        {!requestSuccess ? (
          <>
            <div className="mb-8">
              <h2 className="mb-4 text-center font-benzin text-2xl text-white sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl">
                Demande confidentielle de service
              </h2>
              <p className="text-center text-base font-light text-text-primary sm:text-start">
                Indiquez votre besoin : notre equipe vous repondra personnellement.
                Aucune confirmation instantanee ; chaque demande est analysee avec discretion.
              </p>
            </div>
            <StepIndicator
              steps={steps}
              onStepClick={goToStep}
              maxReachableStepIndex={maxStepReached}
              className="mx-auto mb-12 mt-8 flex max-w-[348px] justify-center sm:mx-0"
            />
          </>
        ) : null}

        <Formik<SecurityFormValues>
          initialValues={getInitialSecurityFormValues()}
          validationSchema={SECURITY_STEP_SCHEMAS[activeStepIndex]}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values, { resetForm }) => {
            if (activeStepIndex === lastStepIndex) {
              setSubmitError(null);
              try {
                await submitSecurityRequest(values);
                setRequestSuccess(true);
              } catch {
                setSubmitError(
                  "Une erreur est survenue. Veuillez reessayer dans un instant.",
                );
              }
              return;
            }
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
            resetForm,
            isSubmitting,
          }) => {
            if (requestSuccess) {
              return (
                <SecurityRequestSuccessView
                  onContinue={() => {
                    resetForm({ values: getInitialSecurityFormValues() });
                    setRequestSuccess(false);
                    setSubmitError(null);
                    resetFlow();
                  }}
                />
              );
            }

            const summaryItems = buildSecuritySummaryItems(
              values,
              activeStepIndex,
            );

            const getError = (
              name: string,
              allErrors: FormikErrors<SecurityFormValues>,
              allTouched: FormikTouched<SecurityFormValues>,
            ): string | null => {
              const isTouched = Boolean(
                (allTouched as Record<string, unknown>)[name],
              );
              const err = (allErrors as Record<string, unknown>)[name];
              return isTouched && typeof err === "string" ? err : null;
            };

            const errorsRecord: Record<string, string | null> = {};
            for (const names of SECURITY_FIELDS_BY_STEP) {
              for (const field of names) {
                errorsRecord[field] = getError(field, errors, touched);
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
                {summaryItems.length > 0 && activeStepIndex !== lastStepIndex ? (
                  <SummaryList
                    items={summaryItems}
                    className="mx-auto justify-center py-1 lg:justify-start"
                    aria-label="Resume de la demande"
                  />
                ) : null}

                <Form className="mt-6 flex flex-col gap-4">
                  {submitError ? (
                    <p className="text-sm text-red-400" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                  {ActiveStep ? <ActiveStep {...stepProps} /> : null}

                  <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-end">
                    {activeStepIndex > 0 ? (
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={goPrev}
                        disabled={isSubmitting}
                        className="sm:w-[220px]"
                      >
                        Precedent
                      </Button>
                    ) : null}
                    <Button
                      type="submit"
                      variant="primary"
                      withArrow={false}
                      disabled={isSubmitting}
                      className="sm:w-[220px]"
                    >
                      {isSubmitting && activeStepIndex === lastStepIndex
                        ? "Envoi…"
                        : activeStepIndex === lastStepIndex
                          ? "Envoyer la demande"
                          : "Continuer"}
                    </Button>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default SecurityFormSection;
