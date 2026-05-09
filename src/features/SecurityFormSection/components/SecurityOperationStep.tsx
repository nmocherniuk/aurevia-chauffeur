"use client";

import React, { FC } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import TextareaWithError from "@/src/components/Inputs/TextareaWithError";
import SelectWithError from "@/src/components/SelectWithError";
import type { FormStepProps } from "@/src/features/FormSection/components/steps/types";
import { DRESS_CODE_OPTIONS, YES_NO_OPTIONS } from "../data/categories";

export const SecurityOperationStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-y-2.5 gap-x-4 grid-cols-1 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <TextareaWithError
            name="specialRequirements"
            label="Special requirements"
            placeholder="Context, itinerary constraints, discretion level…"
            value={(getValue("specialRequirements", false) as string) || ""}
            onChange={(e) => setValue("specialRequirements", e.target.value)}
            onBlur={handleBlur("specialRequirements")}
            onFocus={handleFocus("specialRequirements")}
            error={errors["specialRequirements"]}
          />
        </div>
        <InputWithError
          name="languagesRequired"
          label="Languages required"
          placeholder="e.g. English, French"
          value={(getValue("languagesRequired", false) as string) || ""}
          onChange={(e) => setValue("languagesRequired", e.target.value)}
          onBlur={handleBlur("languagesRequired")}
          onFocus={handleFocus("languagesRequired")}
          error={errors["languagesRequired"]}
        />
        <SelectWithError
          name="dressCode"
          label="Preferred attire"
          placeholder="Select"
          value={(getValue("dressCode", false) as string) || ""}
          onChange={(e) => setValue("dressCode", e.target.value)}
          onBlur={handleBlur("dressCode")}
          error={errors["dressCode"]}
          options={[...DRESS_CODE_OPTIONS]}
        />
        <SelectWithError
          name="vehicleRequired"
          label="Vehicle coordination needed"
          placeholder="Select"
          value={(getValue("vehicleRequired", false) as string) || ""}
          onChange={(e) => setValue("vehicleRequired", e.target.value)}
          onBlur={handleBlur("vehicleRequired")}
          error={errors["vehicleRequired"]}
          options={[...YES_NO_OPTIONS]}
        />
        <SelectWithError
          name="armedRequired"
          label="Armed personnel requested"
          placeholder="Select"
          value={(getValue("armedRequired", false) as string) || ""}
          onChange={(e) => setValue("armedRequired", e.target.value)}
          onBlur={handleBlur("armedRequired")}
          error={errors["armedRequired"]}
          options={[...YES_NO_OPTIONS]}
        />
      </div>
    </div>
  );
};
