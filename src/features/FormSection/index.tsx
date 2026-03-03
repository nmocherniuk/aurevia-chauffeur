"use client";

import React, { FC, useState, useCallback, useMemo } from "react";
import { cn } from "@/src/lib/utils";
import { StepIndicator, getStepsFromIndex } from "@/src/components/StepIndicator";
import { SummaryList } from "@/src/components/SummaryList";
import type { SummaryListItem } from "@/src/components/SummaryList";
import { FORM_STEPS } from "./data";
import { JourneyStep } from "./steps/JourneyStep";
import { VehicleStep } from "./steps/VehicleStep";
import { PassengerStep } from "./steps/PassengerStep";
import { PaymentStep } from "./steps/PaymentStep";
import Image from "next/image";
const STEP_LABELS = FORM_STEPS.map((s) => s.label);
const LAST_STEP_INDEX = FORM_STEPS.length - 1;

type FormValues = Record<string, string | boolean>;

function buildSummaryItems(formValues: FormValues, stepsUpToIndex: number): SummaryListItem[] {
    const items: SummaryListItem[] = [];
    for (let stepIndex = 0; stepIndex < stepsUpToIndex; stepIndex++) {
        const step = FORM_STEPS[stepIndex];
        for (const field of step.fields) {
            const name = field.name;
            const value = formValues[name];
            if (value === undefined || value === "") continue;
            if (field.type === "checkbox") {
                if (value === true) items.push(field.summaryLabel ?? field.label);
                continue;
            }
            const str = String(value);
            if (field.type === "select" && "options" in field) {
                const option = field.options.find((o) => o.value === str);
                items.push(option ? option.label : str);
            } else if (field.name === "from") {
                const toVal = formValues["to"];
                items.push(toVal ? `${str} - ${toVal}` : str);
            } else if (field.name === "to") {
                if (!formValues["from"]) items.push(str);
            } else if (field.name === "date") {
                const timeVal = formValues["time"];
                items.push(timeVal ? `${str} ${timeVal}` : str);
            } else if (field.name === "time") {
                if (!formValues["date"]) items.push(str);
            } else {
                items.push(str);
            }
        }
    }
    if (stepsUpToIndex >= 2 && (formValues["carType"] || formValues["car"])) {
        const price = "Total price € 123";
        items.push({ value: price, highlight: true });
    }
    return items;
}

const FormSection: FC = () => {
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [formValues, setFormValues] = useState<FormValues>({});
    const [errors, setErrors] = useState<Record<string, string | null>>({});

    const steps = getStepsFromIndex(STEP_LABELS, activeStepIndex).map((step, i) => ({
        ...step,
        icon: FORM_STEPS[i].icon,
    }));

    const summaryItems = useMemo(
        () => buildSummaryItems(formValues, activeStepIndex),
        [formValues, activeStepIndex]
    );

    const getValue = useCallback(
        (name: string, isCheckbox: boolean): string | boolean => {
            if (name in formValues) {
                return formValues[name];
            }
            return isCheckbox ? false : "";
        },
        [formValues]
    );

    const setValue = useCallback((name: string, value: string | boolean) => {
        setFormValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: null }));
    }, []);

    const handleBlur = useCallback((name: string) => () => {
        // Можна додати валідацію при blur
    }, []);

    const goNext = () => {
        setActiveStepIndex((i) => (i < LAST_STEP_INDEX ? i + 1 : i));
    };
    const goPrev = () => {
        setActiveStepIndex((i) => (i > 0 ? i - 1 : i));
    };

    const stepProps = {
        getValue,
        setValue,
        errors,
        handleBlur,
    };

    const renderStep = () => {
        switch (activeStepIndex) {
            case 0:
                return <JourneyStep {...stepProps} />;
            case 1:
                return <VehicleStep {...stepProps} />;
            case 2:
                return <PassengerStep {...stepProps} />;
            case 3:
                return <PaymentStep {...stepProps} />;
            default:
                return null;
        }
    };

    return (
        <section id="form" className="mb-28 w-full sm:px-0 lg:grid lg:grid-cols-2">
            <div className="relative w-full overflow-hidden aspect-video lg:aspect-4/5">
                <Image
                    src="/images/form-car.png"
                    alt="Form section background"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div
                    className="pointer-events-none absolute inset-0 opacity-100"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(0,0,0,0) 0%, #06070A 100%)",
                    }}
                    aria-hidden
                />
            </div>
            <div>
                <h2 className="font-benzin text-white text-center text-2xl sm:text-start mb-2 sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
                    Contactez-nous
                </h2>
                <p className="text-text-primary text-base font-light text-center mb-10">
                    Enter your transfer details below and continue to confirmation.
                </p>

                <StepIndicator steps={steps} className="justify-center max-w-[348px]" />

                {summaryItems.length > 0 ? (
                    <SummaryList
                        items={summaryItems}
                        className="mt-6 mb-4"
                        aria-label="Résumé de la réservation"
                    />
                ) : null}

                <form
                    className="mt-6 flex flex-col gap-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {renderStep()}

                    <div className="mt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={goPrev}
                            disabled={activeStepIndex === 0}
                            className="rounded-lg border border-primary bg-transparent px-5 py-2.5 h-[42px] text-text-secondary transition-colors hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Précédent
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            disabled={activeStepIndex === LAST_STEP_INDEX}
                            className="rounded-lg bg-primary px-5 py-2.5 h-[42px] text-white flex items-center justify-center gap-2 transition-colors hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            {activeStepIndex === LAST_STEP_INDEX ? "Terminer" : "Suivant"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormSection;
