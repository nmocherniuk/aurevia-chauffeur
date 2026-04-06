import * as yup from "yup";

import type { FormValues } from "../types";
import { FORM_STEPS } from "../data";
import { EMAIL_REGEX, MAX_EMAIL_LENGTH, PHONE_REGEX } from "./regex";

type StepSchema = yup.ObjectSchema<Partial<FormValues>>;

const dateYupSchema = yup
  .string()
  .required("Une date de rendez-vous est requise")
  .test(
    "future-date",
    "La date de rendez-vous doit être dans le futur",
    (value) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
  );

const timeYupSchema = yup
  .string()
  .required("L’heure de rendez-vous est requise");

const journeySchema: StepSchema = yup.object({
  tripType: yup.string().required("Trip type is required"),
  from: yup.string().required("Pickup location is required"),
  to: yup.string().required("Destination is required"),
  date: dateYupSchema,
  time: timeYupSchema,
});

const vehicleSchema: StepSchema = yup.object({
  carType: yup.string().required("Car type is required"),
  car: yup.string().required("Car is required"),
  bodyguardService: yup.boolean(),
});

const passengerSchema: StepSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),

  email: yup
    .string()
    .required("Une adresse email est requise")
    .trim()
    .min(5, "L’adresse email est trop courte")
    .max(MAX_EMAIL_LENGTH, "L’adresse email est trop longue")
    .matches(/^\S+$/, "L’adresse email ne doit pas contenir d’espaces")
    .test(
      "email-format",
      "Veuillez entrer une adresse email valide",
      (value) => (value ? EMAIL_REGEX.test(value) : false),
    ),

  phone: yup.string().required("Un numéro de téléphone est requis"),
  // TODO: Uncomment this when we have a valid phone number regex

  // .test(
  //   "fr-phone",
  //   "Veuillez entrer un numéro de téléphone français valide",
  //   (value) => {
  //     if (!value) return false;
  //     const phoneWithPrefix = `+33 ${value}`.trim();
  //     return PHONE_REGEX.test(phoneWithPrefix);
  //   },
  // ),
  notesForChauffeur: yup.string().optional(),
});

const paymentSchema: StepSchema = yup.object({
  paymentMethod: yup.string().required("Payment method is required"),
});

export const STEP_SCHEMAS: StepSchema[] = [
  journeySchema,
  vehicleSchema,
  passengerSchema,
  paymentSchema,
];

export const STEP_SCHEMAS_BY_LABEL: Record<string, StepSchema | undefined> =
  FORM_STEPS.reduce<Record<string, StepSchema | undefined>>(
    (acc, step, idx) => {
      acc[step.label] = STEP_SCHEMAS[idx];
      return acc;
    },
    {},
  );
