"use client";

import React, { FC, useMemo } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import { LocationAutocompleteInput } from "@/src/components/LocationAutocompleteInput";
import DatePickerWithError from "@/src/components/Inputs/DatePickerWithError";
import TimePickerWithError from "@/src/components/Inputs/TimePickerWithError";
import SelectWithError from "@/src/components/SelectWithError";
import type { FormStepProps } from "@/src/features/FormSection/components/steps/types";
import {
  AGENT_COUNT_OPTIONS,
  CATEGORY_SELECT_OPTIONS,
  DURATION_OPTIONS,
  getServiceTypeSelectOptions,
} from "../data/categories";

export const SecurityServiceStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const category = (getValue("serviceCategory", false) as string) || "";
  const serviceType = (getValue("serviceType", false) as string) || "";
  const duration = (getValue("duration", false) as string) || "";
  const isMultiDay = duration === "multi";

  const serviceTypeOptions = useMemo(
    () => getServiceTypeSelectOptions(category),
    [category],
  );

  return (
    <div className="grid grid-cols-1 gap-y-2.5 gap-x-4 sm:grid-cols-2">
      <SelectWithError
        name="serviceCategory"
        label="Categorie de service"
        required
        placeholder="Selectionnez une categorie"
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
        options={CATEGORY_SELECT_OPTIONS}
      />
      <SelectWithError
        name="serviceType"
        label="Type de service"
        required
        placeholder={
          category ? "Selectionnez un type de service" : "Selectionnez d'abord une categorie"
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
            label="Precisez le type de service"
            placeholder="Quel service de securite recherchez-vous ?"
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
          label="Lieu"
          placeholder="Ville, site ou adresse"
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
        label="Date"
        placeholder="Selectionnez une date"
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
        label="Heure de debut"
        placeholder="Selectionnez une heure"
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
        label="Duree"
        placeholder="Selectionnez une duree"
        value={duration}
        onChange={(e) => {
          const v = e.target.value;
          setValue("duration", v);
          if (v !== "multi") setValue("endDate", "");
        }}
        onBlur={handleBlur("duration")}
        error={errors["duration"]}
        options={[...DURATION_OPTIONS]}
      />
      {isMultiDay ? (
        <DatePickerWithError
          name="endDate"
          label="Date de fin"
          placeholder="Selectionnez une date de fin"
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
        label="Nombre d'agents"
        placeholder="Selectionner"
        value={(getValue("agentCount", false) as string) || ""}
        onChange={(e) => setValue("agentCount", e.target.value)}
        onBlur={handleBlur("agentCount")}
        error={errors["agentCount"]}
        options={AGENT_COUNT_OPTIONS}
      />
    </div>
  );
};
