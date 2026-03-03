"use client";

import React, { FC, useState } from "react";
import CustomSelect from "@/src/components/CustomSelect";
import InputWithError from "@/src/components/Inputs/InputWithError";
import SelectWithError from "@/src/components/SelectWithError";
import Checkbox from "@/src/components/Inputs/Checkbox";
import DatePickerWithError from "@/src/components/Inputs/DatePickerWithError";
import TimePickerWithError from "@/src/components/Inputs/TimePickerWithError";
import { StepIndicator, getStepsFromIndex } from "@/src/components/StepIndicator";
import { Location } from "@/src/components/SVGManager/Location";
import { FORM_STEPS } from "./data";

const STEP_LABELS = FORM_STEPS.map((s) => s.label);
const LAST_STEP_INDEX = STEP_LABELS.length - 1;

const FormSection: FC = () => {
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const steps = getStepsFromIndex(STEP_LABELS, activeStepIndex);

    const goNext = () => {
        setActiveStepIndex((i) => (i < LAST_STEP_INDEX ? i + 1 : i));
    };
    const goPrev = () => {
        setActiveStepIndex((i) => (i > 0 ? i - 1 : i));
    };

    return (
        <section id="form" className="mb-28 w-full">
            <h2 className="font-benzin text-white text-center text-2xl sm:text-start mb-2 sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
                Contactez-nous
            </h2>
            <p className="text-text-primary text-base font-light text-center mb-10">
                Enter your transfer details below and continue to confirmation.
            </p>
            <StepIndicator steps={steps} defaultStepIcon={Location} />

            <form className="flex flex-col gap-4">
                <SelectWithError
                    placeholder="Choisissez un service"
                    label="Service"
                    options={[
                        { label: "Service 1", value: "service1" },
                        { label: "Service 2", value: "service2" },
                        { label: "Service 3", value: "service3" },
                    ]}
                />

                <InputWithError
                    placeholder="Nom"
                    label="Nom"
                />
                <Checkbox
                    label="J'accepte les conditions d'utilisation"
                />
                <DatePickerWithError
                    name="birthDate"
                    placeholder="Date de naissance"
                    label="Date de naissance"
                    value=""
                    onChange={() => { }}
                    onBlur={() => { }}
                />
                <TimePickerWithError
                    name="birthTime"
                    placeholder="Heure de naissance"
                    label="Heure de naissance"
                    value=""
                    onChange={() => { }}
                    onBlur={() => { }}
                />
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
        </section>
    );
};

export default FormSection;
