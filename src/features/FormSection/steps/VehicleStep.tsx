"use client";

import React, { FC } from "react";
import SelectWithError from "@/src/components/SelectWithError";
import Checkbox from "@/src/components/Inputs/Checkbox";
import type { FormStepProps } from "./types";

export const VehicleStep: FC<FormStepProps> = ({ getValue, setValue, errors }) => {
    return (
        <div className="grid gap-4">
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
                    { label: "Mercedes S580", value: "mercedes-s580", detail: "3P · 3L" },
                    { label: "BMW 7 Series", value: "bmw-7", detail: "3P · 2L" },
                ]}
                value={(getValue("car", false) as string) || ""}
                onChange={(e) => setValue("car", e.target.value)}
            />
            <Checkbox
                name="bodyguardService"
                label="Bodyguard service (Availability and pricing will be confirmed via email after your request.)"
                checked={!!getValue("bodyguardService", true)}
                onChange={(e) => setValue("bodyguardService", e.target.checked)}
                error={errors["bodyguardService"]}
            />
        </div>
    );
};
