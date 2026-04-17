"use client";

import React, { FC, useMemo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { FORM_STEPS } from "@/src/features/FormSection/data";
import {
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
}) => {
  const from = (getValue("from", false) as string) || "";
  const to = (getValue("to", false) as string) || "";
  const dateStr = (getValue("date", false) as string) || "";
  const timeStr = (getValue("time", false) as string) || "";
  const endTimeStr = (getValue("endTime", false) as string) || "";
  const tripType = (getValue("tripType", false) as string) || "";
  const carType = (getValue("carType", false) as string) || "";
  const car = (getValue("car", false) as string) || "";
  const price = (getValue("price", false) as string) || "";
  const firstName = (getValue("firstName", false) as string) || "";
  const lastName = (getValue("lastName", false) as string) || "";
  const email = (getValue("email", false) as string) || "";
  const phone = (getValue("phone", false) as string) || "";

  const journeyRoute = useMemo(() => {
    if (tripType === "hourly") {
      if (!from) return null;
      return from;
    }
    if (!from && !to) return null;
    return from && to ? `${from} → ${to}` : from || to;
  }, [from, to, tripType]);

  const journeyDateTime = useMemo(() => {
    if (!dateStr) return null;
    if (tripType === "hourly" && timeStr && endTimeStr) {
      const combined = `${dateStr} ${timeStr}`;
      const parsed = dayjs(combined);
      const datePart = parsed.isValid()
        ? parsed.format("D MMM YYYY")
        : dateStr;
      return `${datePart} · ${timeStr}–${endTimeStr}`;
    }
    const combined = timeStr ? `${dateStr} ${timeStr}` : dateStr;
    const parsed = dayjs(combined);
    return parsed.isValid() ? parsed.format(REVIEW_DATE_FORMAT) : combined;
  }, [dateStr, timeStr, tripType, endTimeStr]);

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

  const totalPrice = useMemo(() => (price ? price : "—"), [price]);

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
    <div className="">
      {hasReview ? (
        <div className="overflow-hidden">
          <div className="flex w-full flex-row gap-5 py-4 sm:max-w-full sm:gap-x-12 md:gap-x-17 sm:gap-y-6 flex-wrap">
            <section className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:shrink-0">
              <h3 className="text-sm font-medium text-text-primary">Journey</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-text-secondary">
                {journeyRoute && <li>{journeyRoute}</li>}
                {journeyDateTime && <li>{journeyDateTime}</li>}
                {tripTypeLabel && <li>{tripTypeLabel}</li>}
              </ul>
            </section>

            <section className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:shrink-0">
              <h3 className="text-sm font-medium text-text-primary">Vehicle</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-text-secondary">
                {carTypeLabel && <li>{carTypeLabel}</li>}
                {carLabel && <li>{carLabel}</li>}
              </ul>
            </section>

            <section className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:shrink-0">
              <h3 className="text-sm font-medium text-text-primary">Passenger</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-text-secondary">
                {passengerName && <li>{passengerName}</li>}
                {email && <li>{email}</li>}
                {phone && <li>{phone}</li>}
              </ul>
            </section>
          </div>
        </div>
      ) : null}
      <div className="flex items-center justify-between pt-6 pb-1">
        <p className="text-xl font-medium text-text-primary">
          Total:{" "}
          <span className="text-xl font-semibold text-primary">
            {totalPrice === "—" ? "—" : `€${totalPrice}`}
          </span>
        </p>
      </div>
    </div>
  );
};
