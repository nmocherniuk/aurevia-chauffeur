"use client";

import React, { FC, useMemo } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import { LocationAutocompleteInput } from "@/src/components/LocationAutocompleteInput";
import DatePickerWithError from "@/src/components/Inputs/DatePickerWithError";
import TimePickerWithError from "@/src/components/Inputs/TimePickerWithError";
import SelectWithError from "@/src/components/SelectWithError";
import type { FormStepProps } from "@/src/features/FormSection/components/steps/types";
import { useContent } from "@/src/providers/LocaleProvider";
import {
  AGENT_COUNT_OPTIONS,
  getCategorySelectOptions,
  getDurationOptions,
  getServiceTypeSelectOptions,
} from "../data/categories";

export const SecurityServiceStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const { securityForm } = useContent();
  const copy = securityForm.service;

  const category = (getValue("serviceCategory", false) as string) || "";
  const serviceType = (getValue("serviceType", false) as string) || "";
  const duration = (getValue("duration", false) as string) || "";
  const isMultiDay = duration === "multi";

  const serviceTypeOptions = useMemo(
    () => getServiceTypeSelectOptions(category, securityForm),
    [category, securityForm],
  );

  return (
    <div className="grid grid-cols-1 gap-y-2.5 gap-x-4 sm:grid-cols-2">
      <SelectWithError
        name="serviceCategory"
        label={copy.category.label}
        required
        placeholder={copy.category.placeholder}
        value={category}
        onChange={(e) => {
          const v = e.target.value;
          setValue("serviceCategory", v);
          setValue("serviceType", "");
          setValue("serviceTypeOther", "");
        }}
        onBlur={handleBlur("serviceCategory")}
        onFocus={handleFocus("serviceCategory")}
        error={errors.serviceCategory}
        options={getCategorySelectOptions(securityForm)}
      />
      <SelectWithError
        name="serviceType"
        label={copy.type.label}
        required
        placeholder={
          category ? copy.type.placeholder : copy.type.placeholderNoCategory
        }
        value={serviceType}
        disabled={!category}
        onChange={(e) => {
          const v = e.target.value;
          setValue("serviceType", v);
          if (v !== "other") setValue("serviceTypeOther", "");
        }}
        onBlur={handleBlur("serviceType")}
        onFocus={handleFocus("serviceType")}
        error={errors.serviceType}
        options={serviceTypeOptions}
      />
      {serviceType === "other" ? (
        <div className="sm:col-span-2">
          <InputWithError
            name="serviceTypeOther"
            label={copy.typeOther.label}
            placeholder={copy.typeOther.placeholder}
            value={(getValue("serviceTypeOther", false) as string) || ""}
            onChange={(e) => setValue("serviceTypeOther", e.target.value)}
            onBlur={handleBlur("serviceTypeOther")}
            onFocus={handleFocus("serviceTypeOther")}
            error={errors["serviceTypeOther"]}
          />
        </div>
      ) : null}

      <div className="sm:col-span-2">
        <LocationAutocompleteInput
          name="location"
          label={copy.location.label}
          placeholder={copy.location.placeholder}
          value={(getValue("location", false) as string) || ""}
          onChangeText={(text) => {
            setValue("location", text);
            setValue("locationLat", "");
            setValue("locationLng", "");
          }}
          onSelect={(place) => {
            setValue("location", place.label);
            setValue("locationLat", String(place.lat));
            setValue("locationLng", String(place.lng));
          }}
          onBlur={handleBlur("location")}
          onFocus={handleFocus("location")}
          error={errors["location"]}
        />
      </div>
      <DatePickerWithError
        name="date"
        label={copy.date.label}
        placeholder={copy.date.placeholder}
        value={(getValue("date", false) as string) || ""}
        onChange={(dateOrEvent) => {
          const v =
            typeof dateOrEvent === "string"
              ? dateOrEvent
              : ((dateOrEvent?.target as HTMLInputElement)?.value ?? "");
          setValue("date", v);
        }}
        onBlur={handleBlur("date")}
        error={errors["date"]}
        onFocus={handleFocus("date")}
      />
      <TimePickerWithError
        name="time"
        label={copy.time.label}
        placeholder={copy.time.placeholder}
        value={(getValue("time", false) as string) || ""}
        onChange={(eOrString) => {
          const v =
            typeof eOrString === "string"
              ? eOrString
              : ((eOrString?.target as HTMLInputElement)?.value ?? "");
          setValue("time", v);
        }}
        onBlur={handleBlur("time")}
        error={errors["time"]}
        onFocus={handleFocus("time")}
      />
      <SelectWithError
        name="duration"
        label={copy.duration.label}
        placeholder={copy.duration.placeholder}
        value={duration}
        onChange={(e) => {
          const v = e.target.value;
          setValue("duration", v);
          if (v !== "multi") setValue("endDate", "");
        }}
        onBlur={handleBlur("duration")}
        error={errors["duration"]}
        options={getDurationOptions(securityForm)}
      />
      {isMultiDay ? (
        <DatePickerWithError
          name="endDate"
          label={copy.endDate.label}
          placeholder={copy.endDate.placeholder}
          value={(getValue("endDate", false) as string) || ""}
          onChange={(dateOrEvent) => {
            const v =
              typeof dateOrEvent === "string"
                ? dateOrEvent
                : ((dateOrEvent?.target as HTMLInputElement)?.value ?? "");
            setValue("endDate", v);
          }}
          onBlur={handleBlur("endDate")}
          error={errors["endDate"]}
          onFocus={handleFocus("endDate")}
        />
      ) : null}
      <SelectWithError
        name="agentCount"
        label={copy.agentCount.label}
        placeholder={copy.agentCount.placeholder}
        value={(getValue("agentCount", false) as string) || ""}
        onChange={(e) => setValue("agentCount", e.target.value)}
        onBlur={handleBlur("agentCount")}
        error={errors["agentCount"]}
        options={AGENT_COUNT_OPTIONS}
      />
    </div>
  );
};
