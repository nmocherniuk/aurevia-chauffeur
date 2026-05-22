import React, { FC, useCallback } from "react";
import SelectWithError from "@/src/components/SelectWithError";
import DatePickerWithError from "@/src/components/Inputs/DatePickerWithError";
import TimePickerWithError from "@/src/components/Inputs/TimePickerWithError";
import { LocationAutocompleteInput } from "@/src/components/LocationAutocompleteInput";
import { useContent } from "@/src/providers/LocaleProvider";
import type { FormStepProps } from "../types";

export const JourneyStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const { bookingForm: t } = useContent();
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

  const fromLabel = isHourly ? t.journey.from.labelHourly : t.journey.from.label;

  const datePicker = (
    <DatePickerWithError
      name="date"
      label={t.journey.date.label}
      placeholder={t.journey.date.placeholder}
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
      label={t.journey.time.label}
      placeholder={t.journey.time.placeholder}
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
          label={t.journey.tripType.label}
          placeholder={t.journey.tripType.placeholder}
          options={[...t.tripTypes]}
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
            placeholder={t.journey.fromPlaceholder}
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
            placeholder={t.journey.fromPlaceholder}
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
            label={t.journey.to.label}
            placeholder={t.journey.to.placeholder}
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
            label={t.journey.startTime.label}
            placeholder={t.journey.startTime.placeholder}
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
            label={t.journey.endTime.label}
            placeholder={t.journey.endTime.placeholder}
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
