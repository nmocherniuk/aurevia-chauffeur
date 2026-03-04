import React, { FC } from "react";
import SelectWithError from "@/src/components/SelectWithError";
import Checkbox from "@/src/components/Inputs/Checkbox";
import { CAR_PRICES } from "@/src/features/FormSection/constants";
import type { FormStepProps } from "../types";

export const VehicleStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
}) => {
  const selectedCar = (getValue("car", false) as string) || "";
  const price = selectedCar ? CAR_PRICES[selectedCar] ?? "—" : "—";

  return (
    <div>
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-2">
        <div className="flex flex-col gap-4 ">
          <SelectWithError
            name="carType"
            label="Car type"
            placeholder="Select vehicle type"
            options={[
              { label: "Comfort", value: "comfort" },
              { label: "Business", value: "business" },
              { label: "Luxury", value: "luxury" },
            ]}
            value={(getValue("carType", false) as string) || ""}
            onChange={(e) => setValue("carType", e.target.value)}
          />
          <SelectWithError
            name="car"
            label="Car"
            placeholder="Select vehicle type"
            options={[
              {
                label: "Mercedes S580",
                value: "mercedes-s580",
                detail: "3P · 3L",
              },
              { label: "BMW 7 Series", value: "bmw-7", detail: "3P · 2L" },
            ]}
            value={(getValue("car", false) as string) || ""}
            onChange={(e) => setValue("car", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5 justify-center items-center font-medium leading-none row-start-1 py-8 md:row-start-auto">
          <span className="text-primary text-[49px]">€ {price}</span>
          <span className="text-sm font-light text-text-primary">
            {selectedCar
              ? "Price for selected vehicle"
              : "Select vehicle to see price"}
          </span>
        </div>
      </div>
      <Checkbox
        name="bodyguardService"
        label="Bodyguard service (Availability and pricing will be confirmed via email after your request.)"
        checked={!!getValue("bodyguardService", true)}
        onChange={(e) => setValue("bodyguardService", e.target.checked)}
        error={errors["bodyguardService"]}
        className="pl-1 mt-8"
      />
    </div>
  );
};
