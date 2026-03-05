import React, { FC } from "react";
import InputWithError from "@/src/components/Inputs/InputWithError";
import SelectWithError from "@/src/components/SelectWithError";
import DatePickerWithError from "@/src/components/Inputs/DatePickerWithError";
import TimePickerWithError from "@/src/components/Inputs/TimePickerWithError";
import type { FormStepProps } from "../types";

export const JourneyStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  return (
    <div className="grid gap-y-2.5 gap-x-4 grid-cols-1 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <SelectWithError
          name="tripType"
          label="Trip type"
          placeholder="Select vehicle type"
          options={[
            { label: "One way", value: "one-way" },
            { label: "Round trip", value: "round-trip" },
            { label: "Hourly", value: "hourly" },
          ]}
          value={(getValue("tripType", false) as string) || ""}
          onChange={(e) => setValue("tripType", e.target.value)}
          onBlur={handleBlur("tripType")}
          error={errors["tripType"]}
          onFocus={handleFocus("tripType")}
        />
      </div>
      <InputWithError
        name="from"
        label="From"
        placeholder="Enter pickup location"
        value={(getValue("from", false) as string) || ""}
        onChange={(e) => setValue("from", e.target.value)}
        onBlur={handleBlur("from")}
        onFocus={handleFocus("from")}
        error={errors["from"]}
      />
      <InputWithError
        name="to"
        label="To"
        placeholder="Enter destination"
        value={(getValue("to", false) as string) || ""}
        onChange={(e) => setValue("to", e.target.value)}
        onBlur={handleBlur("to")}
        onFocus={handleFocus("to")}
        error={errors["to"]}
      />
      <DatePickerWithError
        name="date"
        label="Date"
        placeholder="Select date"
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
        label="Time"
        placeholder="Select time"
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
    </div>
  );
};
