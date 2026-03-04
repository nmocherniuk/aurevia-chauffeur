"use client";

import React, { FC, useMemo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import SelectWithError from "@/src/components/SelectWithError";
import { FORM_STEPS } from "@/src/features/FormSection/data";
import {
  CAR_PRICES,
  REVIEW_DATE_FORMAT,
} from "@/src/features/FormSection/constants";
import type { FormStepProps } from "../types";

dayjs.locale("fr");

function getSelectLabel(
  stepIndex: number,
  fieldName: string,
  value: string,
): string {
  if (!value) return "";
  const step = FORM_STEPS[stepIndex];
  const field = step?.fields?.find(
    (f) => "name" in f && f.name === fieldName && "options" in f,
  );
  if (!field || !("options" in field)) return value;
  const option = field.options.find((o) => o.value === value);
  return option ? option.label : value;
}

export const PaymentStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
}) => {
  const from = (getValue("from", false) as string) || "";
  const to = (getValue("to", false) as string) || "";
  const dateStr = (getValue("date", false) as string) || "";
  const timeStr = (getValue("time", false) as string) || "";
  const tripType = (getValue("tripType", false) as string) || "";
  const carType = (getValue("carType", false) as string) || "";
  const car = (getValue("car", false) as string) || "";
  const firstName = (getValue("firstName", false) as string) || "";
  const lastName = (getValue("lastName", false) as string) || "";
  const email = (getValue("email", false) as string) || "";
  const phone = (getValue("phone", false) as string) || "";

  const journeyRoute = useMemo(() => {
    if (!from && !to) return null;
    return from && to ? `${from} → ${to}` : from || to;
  }, [from, to]);

  const journeyDateTime = useMemo(() => {
    if (!dateStr) return null;
    const combined = timeStr ? `${dateStr} ${timeStr}` : dateStr;
    const parsed = dayjs(combined);
    return parsed.isValid() ? parsed.format(REVIEW_DATE_FORMAT) : combined;
  }, [dateStr, timeStr]);

  const tripTypeLabel = useMemo(
    () => getSelectLabel(0, "tripType", tripType),
    [tripType],
  );

  const carTypeLabel = useMemo(
    () => getSelectLabel(1, "carType", carType),
    [carType],
  );

  const carLabel = useMemo(() => getSelectLabel(1, "car", car), [car]);

  const passengerName = useMemo(() => {
    const name = [firstName, lastName].filter(Boolean).join(" ");
    return name || null;
  }, [firstName, lastName]);

  const totalPrice = useMemo(() => {
    return car ? (CAR_PRICES[car] ?? "0") : "0";
  }, [car]);

  const hasReview =
    journeyRoute ||
    journeyDateTime ||
    tripTypeLabel ||
    carTypeLabel ||
    carLabel ||
    passengerName ||
    email ||
    phone;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-x-10 lg:gap-y-0">
      {/* Left column: Review data */}
      <div className="flex flex-col gap-6 lg:gap-8">
        {hasReview ? (
          <>
            <section className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-text-primary">Journey</h3>
              <ul className="flex flex-col gap-1.5 text-sm font-light text-text-secondary">
                {journeyRoute && <li>{journeyRoute}</li>}
                {journeyDateTime && <li>{journeyDateTime}</li>}
                {tripTypeLabel && <li>{tripTypeLabel}</li>}
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-text-primary">Vehicle</h3>
              <ul className="flex flex-col gap-1.5 text-sm font-light text-text-secondary">
                {carTypeLabel && <li>{carTypeLabel}</li>}
                {carLabel && <li>{carLabel}</li>}
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-text-primary">
                Passenger
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm font-light text-text-secondary">
                {passengerName && <li>{passengerName}</li>}
                {email && <li>{email}</li>}
                {phone && <li>{phone}</li>}
              </ul>
            </section>
          </>
        ) : null}

        <div className="mt-auto flex flex-col gap-4 pt-4 lg:pt-6">
          <p className="text-sm font-medium text-text-primary">
            Total:{" "}
            <span className="font-semibold text-primary">€{totalPrice}</span>
          </p>
        </div>
      </div>

      {/* Right column: Card / payment form */}
      <div className="flex flex-col gap-4">
        <SelectWithError
          name="paymentMethod"
          label="Payment method"
          placeholder="Select payment method"
          options={[
            { label: "Card", value: "card" },
            { label: "Bank transfer", value: "transfer" },
          ]}
          value={(getValue("paymentMethod", false) as string) || ""}
          onChange={(e) => setValue("paymentMethod", e.target.value)}
          error={errors["paymentMethod"]}
        />
        {/* Placeholder for card fields (number, expiry, CVC, etc.) */}
      </div>
    </div>
  );
};
