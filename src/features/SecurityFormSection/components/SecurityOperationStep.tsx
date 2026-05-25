"use client";

import React, { FC } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import TextareaWithError from "@/src/components/Inputs/TextareaWithError";
import SelectWithError from "@/src/components/SelectWithError";
import type { FormStepProps } from "@/src/features/FormSection/components/steps/types";
import { useContent } from "@/src/providers/LocaleProvider";
import { getDressCodeOptions, getYesNoOptions } from "../data/categories";

export const SecurityOperationStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const { securityForm } = useContent();
  const copy = securityForm.operation;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-y-2.5 gap-x-4 grid-cols-1 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <TextareaWithError
            name="specialRequirements"
            label={copy.specialRequirements.label}
            placeholder={copy.specialRequirements.placeholder}
            value={(getValue("specialRequirements", false) as string) || ""}
            onChange={(e) => setValue("specialRequirements", e.target.value)}
            onBlur={handleBlur("specialRequirements")}
            onFocus={handleFocus("specialRequirements")}
            error={errors["specialRequirements"]}
          />
        </div>
        <InputWithError
          name="languagesRequired"
          label={copy.languagesRequired.label}
          placeholder={copy.languagesRequired.placeholder}
          value={(getValue("languagesRequired", false) as string) || ""}
          onChange={(e) => setValue("languagesRequired", e.target.value)}
          onBlur={handleBlur("languagesRequired")}
          onFocus={handleFocus("languagesRequired")}
          error={errors["languagesRequired"]}
        />
        <SelectWithError
          name="dressCode"
          label={copy.dressCode.label}
          placeholder={copy.dressCode.placeholder}
          value={(getValue("dressCode", false) as string) || ""}
          onChange={(e) => setValue("dressCode", e.target.value)}
          onBlur={handleBlur("dressCode")}
          error={errors["dressCode"]}
          options={getDressCodeOptions(securityForm)}
        />
        <SelectWithError
          name="vehicleRequired"
          label={copy.vehicleRequired.label}
          placeholder={copy.vehicleRequired.placeholder}
          value={(getValue("vehicleRequired", false) as string) || ""}
          onChange={(e) => setValue("vehicleRequired", e.target.value)}
          onBlur={handleBlur("vehicleRequired")}
          error={errors["vehicleRequired"]}
          options={getYesNoOptions(securityForm)}
        />
        <SelectWithError
          name="armedRequired"
          label={copy.armedRequired.label}
          placeholder={copy.armedRequired.placeholder}
          value={(getValue("armedRequired", false) as string) || ""}
          onChange={(e) => setValue("armedRequired", e.target.value)}
          onBlur={handleBlur("armedRequired")}
          error={errors["armedRequired"]}
          options={getYesNoOptions(securityForm)}
        />
      </div>
    </div>
  );
};
