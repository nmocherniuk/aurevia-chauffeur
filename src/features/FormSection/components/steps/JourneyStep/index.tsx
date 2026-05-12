import React, { FC, useCallback } from "react";
import SelectWithError from "@/src/components/SelectWithError";
import DatePickerWithError from "@/src/components/Inputs/DatePickerWithError";
import TimePickerWithError from "@/src/components/Inputs/TimePickerWithError";
import { LocationAutocompleteInput } from "@/src/components/LocationAutocompleteInput";
import { TRIP_TYPE_SELECT_OPTIONS } from "@/src/features/FormSection/data";
import type { FormStepProps } from "../types";

export const JourneyStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const tripType = (getValue("tripType", false) as string) || "";
  const isHourly = tripType === "hourly";

  const handleTripTypeChange = useCallback(
    (next: string) => {
      setValue("tripType", next);
      if (next === "hourly") {
        setValue("to", "");
        setValue("toLat", "");
        setValue("toLng", "");
      } else {
        setValue("endTime", "");
      }
    },
    [setValue],
  );

  const fromLabel = isHourly ? "Lieu de prise en charge" : "Depart";
  const fromPlaceholder = "Entrez le lieu de prise en charge";

  const datePicker = (
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
  );

  const timeRowOneWay = (
    <TimePickerWithError
      name="time"
      label="Heure"
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
  );

  return (
    <div className="grid gap-y-2.5 gap-x-4 grid-cols-1 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <SelectWithError
          name="tripType"
          label="Type de trajet"
          placeholder="Selectionnez le type de trajet"
          options={[...TRIP_TYPE_SELECT_OPTIONS]}
          value={tripType}
          onChange={(e) => handleTripTypeChange(e.target.value)}
          onBlur={handleBlur("tripType")}
          error={errors["tripType"]}
          onFocus={handleFocus("tripType")}
        />
      </div>
      {isHourly ? (
        <div className="sm:col-span-2">
          <LocationAutocompleteInput
            name="from"
            label={fromLabel}
            placeholder={fromPlaceholder}
            value={(getValue("from", false) as string) || ""}
            onChangeText={(text) => {
              setValue("from", text);
              setValue("fromLat", "");
              setValue("fromLng", "");
            }}
            onSelect={(place) => {
              setValue("from", place.label);
              setValue("fromLat", String(place.lat));
              setValue("fromLng", String(place.lng));
            }}
            onBlur={handleBlur("from")}
            onFocus={handleFocus("from")}
            error={errors["from"]}
          />
        </div>
      ) : (
        <>
          <LocationAutocompleteInput
            name="from"
            label={fromLabel}
            placeholder={fromPlaceholder}
            value={(getValue("from", false) as string) || ""}
            onChangeText={(text) => {
              setValue("from", text);
              setValue("fromLat", "");
              setValue("fromLng", "");
            }}
            onSelect={(place) => {
              setValue("from", place.label);
              setValue("fromLat", String(place.lat));
              setValue("fromLng", String(place.lng));
            }}
            onBlur={handleBlur("from")}
            onFocus={handleFocus("from")}
            error={errors["from"]}
          />
          <LocationAutocompleteInput
            name="to"
            label="Arrivee"
            placeholder="Entrez la destination"
            value={(getValue("to", false) as string) || ""}
            onChangeText={(text) => {
              setValue("to", text);
              setValue("toLat", "");
              setValue("toLng", "");
            }}
            onSelect={(place) => {
              setValue("to", place.label);
              setValue("toLat", String(place.lat));
              setValue("toLng", String(place.lng));
            }}
            onBlur={handleBlur("to")}
            onFocus={handleFocus("to")}
            error={errors["to"]}
          />
        </>
      )}

      {isHourly ? (
        <div className="sm:col-span-2">{datePicker}</div>
      ) : (
        datePicker
      )}

      {isHourly ? (
        <>
          <TimePickerWithError
            name="time"
            label="Heure de debut"
            placeholder="Selectionnez l'heure de debut"
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
          <TimePickerWithError
            name="endTime"
            label="Heure de fin"
            placeholder="Selectionnez l'heure de fin"
            value={(getValue("endTime", false) as string) || ""}
            onChange={(eOrString) => {
              const v =
                typeof eOrString === "string"
                  ? eOrString
                  : ((eOrString?.target as HTMLInputElement)?.value ?? "");
              setValue("endTime", v);
            }}
            onBlur={handleBlur("endTime")}
            error={errors["endTime"]}
            onFocus={handleFocus("endTime")}
          />
        </>
      ) : (
        timeRowOneWay
      )}
    </div>
  );
};
