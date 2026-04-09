"use client";

import React, { FC, useMemo } from "react";
import dayjs from "@/src/lib/dayjs";
import "dayjs/locale/fr";
import { FORM_STEPS } from "@/src/features/FormSection/data";
import { CAR_PRICES, REVIEW_DATE_FORMAT } from "@/src/features/FormSection/constants";
import type { FormStepProps } from "../types";
import { PaymentContainer } from "./components/PaymentContainer";

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

export interface PaymentStepProps extends FormStepProps {
  onBack?: () => void;
}

export const PaymentStep: FC<PaymentStepProps> = ({ getValue, onBack }) => {
  const from = (getValue("from", false) as string) || "";
  const to = (getValue("to", false) as string) || "";
  const date = (getValue("date", false) as string) || "";
  const time = (getValue("time", false) as string) || "";
  const tripType = (getValue("tripType", false) as string) || "";
  const carType = (getValue("carType", false) as string) || "";
  const car = (getValue("car", false) as string) || "";
  const firstName = (getValue("firstName", false) as string) || "";
  const lastName = (getValue("lastName", false) as string) || "";
  const email = (getValue("email", false) as string) || "";
  const phone = (getValue("phone", false) as string) || "";
  const notesForChauffeur = (getValue("notesForChauffeur", false) as string) || "";

  const journeyRoute = useMemo(() => {
    if (!from && !to) return null;
    return from && to ? `${from} → ${to}` : from || to;
  }, [from, to]);

  const journeyDateTime = useMemo(() => {
    if (!date) return null;
    const combined = time ? `${date} ${time}` : date;
    const parsed = dayjs(combined);
    return parsed.isValid() ? parsed.format(REVIEW_DATE_FORMAT) : combined;
  }, [date, time]);

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
    <div className="flex flex-col gap-6 sm:gap-8">
      <PaymentContainer
        summary={{
          hasReview: Boolean(hasReview),
          journeyRoute,
          journeyDateTime,
          tripTypeLabel,
          carTypeLabel,
          carLabel,
          passengerName,
          email,
          phone,
          totalPrice,
        }}
        formSnapshot={{
          from,
          to,
          date,
          time,
          tripType,
          carType,
          firstName,
          lastName,
          email,
          phone,
          notesForChauffeur,
        }}
        onBack={onBack}
      />
    </div>
  );
};
