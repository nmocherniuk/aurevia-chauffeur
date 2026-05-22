import * as yup from "yup";
import type { FormValues } from "../types";
import { hourlyDurationMinutes } from "../utils/hourlyDuration";
import { EMAIL_REGEX, MAX_EMAIL_LENGTH } from "./regex";
import type { bookingFormContent as FrBookingForm } from "@/src/content/locales/fr/bookingForm";

type BookingValidation = typeof FrBookingForm.validation;

type StepSchema = yup.ObjectSchema<Partial<FormValues>>;

export function getStepSchemas(v: BookingValidation): StepSchema[] {
  const dateYupSchema = yup
    .string()
    .required(v.dateRequired)
    .test("future-date", v.dateFuture, (value) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    });

  const timeYupSchema = yup.string().required(v.timeRequired);

  const journeySchema: StepSchema = yup.object({
    tripType: yup.string().required(v.tripTypeRequired),
    from: yup
      .string()
      .required(v.fromRequired)
      .test("from-picked", v.fromPicked, function () {
        const lat = (this.parent as Record<string, unknown>).fromLat;
        return typeof lat === "string" && lat.length > 0;
      }),
    to: yup.string().when("tripType", {
      is: "hourly",
      then: (schema) => schema.optional(),
      otherwise: (schema) =>
        schema
          .required(v.toRequired)
          .test("to-picked", v.toPicked, function () {
            const lat = (this.parent as Record<string, unknown>).toLat;
            return typeof lat === "string" && lat.length > 0;
          }),
    }),
    endTime: yup.string().when("tripType", {
      is: "hourly",
      then: (schema) =>
        schema
          .required(v.endTimeRequired)
          .test("after-start", v.endTimeAfterStart, function (endVal) {
            const parent = this.parent as { time?: string };
            const start = parent.time;
            if (!endVal || !start) return true;
            const min = hourlyDurationMinutes(start, endVal);
            return min !== null && min > 0;
          }),
      otherwise: (schema) => schema.optional(),
    }),
    date: dateYupSchema,
    time: timeYupSchema,
  });

  const vehicleSchema: StepSchema = yup.object({
    carType: yup.string().required(v.carTypeRequired),
    car: yup.string().required(v.carRequired),
  });

  const passengerSchema: StepSchema = yup.object({
    firstName: yup.string().required(v.firstNameRequired),
    lastName: yup.string().required(v.lastNameRequired),
    email: yup
      .string()
      .required(v.emailRequired)
      .trim()
      .min(5, v.emailShort)
      .max(MAX_EMAIL_LENGTH, v.emailLong)
      .matches(/^\S+$/, v.emailSpaces)
      .test("email-format", v.emailInvalid, (value) =>
        value ? EMAIL_REGEX.test(value) : false,
      ),
    phone: yup.string().required(v.phoneRequired),
    notesForChauffeur: yup.string().optional(),
  });

  return [journeySchema, vehicleSchema, passengerSchema];
}
