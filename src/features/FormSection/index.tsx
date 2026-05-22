"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import type { FormikErrors, FormikTouched } from "formik";
import { StepIndicator } from "@/src/components/StepIndicator";
import { SummaryList } from "@/src/components/SummaryList";
import Image from "next/image";
import { useFormSection } from "./hooks/useFormSection";
import { Button } from "@/src/components/Button";
import { getStepSchemas } from "./validation/getStepSchemas";
import { buildSummaryItems } from "./utils/buildSummaryItems";
import { getInitialFormValues } from "./utils/getInitialFormValues";
import type { FormValues } from "./types";
import type { FormStepProps } from "./components/steps/types";
import { BookingStatus, createBooking } from "@/src/api/booking";
import dayjs from "@/src/lib/dayjs";
import { mapTripTypeToApi, SERVICE_TZ } from "./constants";
import { hourlyDurationMinutes } from "./utils/hourlyDuration";
import {
  BookingSuccessView,
  BOOKING_SUCCESS_SECTION_ID,
} from "./components/BookingSuccessView";
import { useScrollToSectionWhen } from "@/src/hooks/useScrollToSectionWhen";
import {
  consumeFleetBookingPrefill,
  FLEET_BOOKING_PREFILL_EVENT,
} from "@/src/features/FleetSection/utils/fleetBookingPrefill";
import { applyFleetPrefillToFormValues } from "./utils/applyFleetPrefill";
import { scrollToBookingFormSmoothAfterNav } from "@/src/lib/scrollToBookingForm";
import { dayjsLocales, type Locale } from "@/src/i18n/config";
import { useContent, useLocale } from "@/src/providers/LocaleProvider";

const FormSection: FC = () => {
  const locale = useLocale();
  const { common: commonContent, bookingForm } = useContent();
  const [initialValues, setInitialValues] = useState<FormValues>(() =>
    getInitialFormValues(),
  );
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  useScrollToSectionWhen(bookingSuccess, BOOKING_SUCCESS_SECTION_ID);

  const {
    steps,
    formSteps,
    activeStepIndex,
    maxStepReached,
    goNext,
    goPrev,
    goToStep,
    resetFlow,
    ActiveStep,
    lastStepIndex,
  } = useFormSection();

  const stepSchemas = useMemo(
    () => getStepSchemas(bookingForm.validation),
    [bookingForm.validation],
  );

  useEffect(() => {
    void import(`dayjs/locale/${dayjsLocales[locale]}`).then(() => {
      dayjs.locale(dayjsLocales[locale]);
    });
  }, [locale]);

  useEffect(() => {
    function applyPrefillFromSession(): void {
      const fleetId = consumeFleetBookingPrefill();
      if (!fleetId) return;
      const merged = applyFleetPrefillToFormValues(
        getInitialFormValues(),
        fleetId,
      );
      if (!merged) return;
      setInitialValues(merged);
      scrollToBookingFormSmoothAfterNav();
    }

    applyPrefillFromSession();

    window.addEventListener(FLEET_BOOKING_PREFILL_EVENT, applyPrefillFromSession);
    return () =>
      window.removeEventListener(
        FLEET_BOOKING_PREFILL_EVENT,
        applyPrefillFromSession,
      );
  }, []);

  return (
    <section
      id="reserver"
      className="w-full sm:px-0 md:grid lg:grid-cols-[2fr_3fr] lg:gap-x-13 lg:items-start"
    >
      <div className="hidden sm:block relative w-full overflow-hidden rounded-xl h-[260px] sm:h-[300px] lg:h-[800px] xl:h-[776px] lg:top-6 mb-9 lg:mb-0">
        <Image
          src="/images/form-car.png"
          alt={bookingForm.section.imageAlt}
          fill
          className="object-cover object-center rounded-xl"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
      <div className="lg:pt-7 lg:pb-3 xl:pt-12">
        {!bookingSuccess ? (
          <>
            <div className="mb-8">
              <h2 className="font-benzin text-white text-center text-2xl sm:text-start mb-4 sm:text-[28px] md:text-3xl lg:text-4xl">
                {bookingForm.section.title}
              </h2>
              <p className="text-text-primary text-base font-light text-center sm:text-start">
                {bookingForm.section.subtitle}
              </p>
            </div>
            <StepIndicator
              steps={steps}
              onStepClick={goToStep}
              maxReachableStepIndex={maxStepReached}
              className="justify-center max-w-[348px] mt-8 mb-12 mx-auto sm:mx-0"
            />
          </>
        ) : null}

        <Formik<FormValues>
          initialValues={initialValues}
          enableReinitialize
          validationSchema={stepSchemas[activeStepIndex]}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values, { resetForm }) => {
            console.log("values", values);

            const bookingAt = dayjs
              .tz(`${values.date} ${values.time}`, SERVICE_TZ)
              .toISOString();

            if (activeStepIndex === lastStepIndex) {
              setSubmitError(null);
              const durationMinParsed =
                values.tripType === "hourly"
                  ? (() => {
                    const start = String(values.time ?? "");
                    const end = String(values.endTime ?? "");
                    const computed = hourlyDurationMinutes(start, end);
                    return computed ?? 100;
                  })()
                  : 100;

              const body = {
                clientName: values.firstName + " " + values.lastName, // TODO: змінити на одне поле
                clientEmail: values.email,
                clientPhone: values.phone,

                tripType: mapTripTypeToApi(String(values.tripType)),
                notesForDriver: values.notesForChauffeur,
                bookingAt: bookingAt,

                vehicleId: String(values.car),
                vehicleClass: values.carType,

                to: values.to,
                from: values.from,
                durationMin: durationMinParsed,
                status: "assigned" as BookingStatus,
              };

              console.log("values", values);
              console.log("body", body);

              try {
                await createBooking(body);
                setBookingSuccess(true);
              } catch {
                setSubmitError(bookingForm.section.submitError);
              }
              return;
            }
            goNext();

            resetForm({
              values,
            });
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
            if (bookingSuccess) {
              return (
                <BookingSuccessView
                  onContinue={() => {
                    const blank = getInitialFormValues();
                    setInitialValues(blank);
                    resetForm({ values: blank });
                    setBookingSuccess(false);
                    setSubmitError(null);
                    resetFlow();
                  }}
                />
              );
            }

            const summaryItems = buildSummaryItems(
              values,
              activeStepIndex,
              formSteps,
              bookingForm.summary.totalPricePrefix,
              dayjsLocales[locale],
            );

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
            for (const step of formSteps) {
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
                {summaryItems.length > 0 &&
                  activeStepIndex !== lastStepIndex ? (
                  <SummaryList
                    items={summaryItems}
                    className="py-1 mx-auto justify-center lg:justify-start"
                    aria-label={bookingForm.section.summaryAriaLabel}
                  />
                ) : null}

                <Form className="mt-6 flex flex-col gap-4">
                  {submitError ? (
                    <p
                      className="text-sm text-red-400"
                      role="alert"
                    >
                      {submitError}
                    </p>
                  ) : null}
                  {ActiveStep ? <ActiveStep {...stepProps} /> : null}

                  <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-end">
                    {activeStepIndex > 0 && (
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={goPrev}
                        disabled={isSubmitting}
                        className="sm:w-[220px]"
                      >
                        {commonContent.buttons.previous}
                      </Button>
                    )}
                    <Button
                      type="submit"
                      variant="primary"
                      withArrow={false}
                      disabled={isSubmitting}
                      className="sm:w-[220px]"
                    >
                      {isSubmitting && activeStepIndex === lastStepIndex
                        ? commonContent.buttons.sendingRequest
                        : commonContent.buttons.continue}
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

export default FormSection;
