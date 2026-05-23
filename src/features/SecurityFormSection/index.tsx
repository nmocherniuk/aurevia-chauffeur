"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import type { FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import dayjs from "@/src/lib/dayjs";
import { StepIndicator } from "@/src/components/StepIndicator";
import { SummaryList } from "@/src/components/SummaryList";
import { Button } from "@/src/components/Button";
import { getSecurityStepSchemas } from "./validation/getSecurityStepSchemas";
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
import { useContent, useLocale } from "@/src/providers/LocaleProvider";
import { dayjsLocales } from "@/src/i18n/config";

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
  const locale = useLocale();
  const { securityForm } = useContent();
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  useScrollToSectionWhen(requestSuccess, SECURITY_REQUEST_SUCCESS_ID);

  const stepSchemas = useMemo(
    () => getSecurityStepSchemas(securityForm.validation),
    [securityForm.validation],
  );

  useEffect(() => {
    void import(`dayjs/locale/${dayjsLocales[locale]}`).then(() => {
      dayjs.locale(dayjsLocales[locale]);
    });
  }, [locale]);

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
          alt={securityForm.section.imageAlt}
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
                {securityForm.section.title}
              </h2>
              <p className="text-center text-base font-light text-text-primary sm:text-start">
                {securityForm.section.subtitle}
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
          validationSchema={stepSchemas[activeStepIndex]}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values, { resetForm }) => {
            if (activeStepIndex === lastStepIndex) {
              setSubmitError(null);
              try {
                await submitSecurityRequest(values);
                setRequestSuccess(true);
              } catch {
                setSubmitError(securityForm.section.submitError);
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
              securityForm,
              dayjsLocales[locale],
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
                {summaryItems.length > 0 &&
                activeStepIndex !== lastStepIndex ? (
                  <SummaryList
                    items={summaryItems}
                    className="mx-auto justify-center py-1 lg:justify-start"
                    aria-label={securityForm.section.summaryAriaLabel}
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
                        {securityForm.buttons.back}
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
                        ? securityForm.buttons.submitting
                        : activeStepIndex === lastStepIndex
                          ? securityForm.buttons.submit
                          : securityForm.buttons.continue}
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
