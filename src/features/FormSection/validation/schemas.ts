import * as yup from "yup";

import type { FormValues } from "../types";
import { FORM_STEPS } from "../data";
import { EMAIL_REGEX, MAX_EMAIL_LENGTH, PHONE_REGEX } from "./regex";
import { hourlyDurationMinutes } from "../utils/hourlyDuration";

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
  tripType: yup.string().required("Le type de trajet est requis"),
  from: yup
    .string()
    .required("Le lieu de prise en charge est requis")
    .test(
      "from-picked",
      "Choisissez un lieu parmi les suggestions",
      function () {
        const lat = (this.parent as Record<string, unknown>).fromLat;
        return typeof lat === "string" && lat.length > 0;
      },
    ),
  to: yup.string().when("tripType", {
    is: "hourly",
    then: (schema) => schema.optional(),
    otherwise: (schema) =>
      schema
        .required("La destination est requise")
        .test(
          "to-picked",
          "Choisissez un lieu parmi les suggestions",
          function () {
            const lat = (this.parent as Record<string, unknown>).toLat;
            return typeof lat === "string" && lat.length > 0;
          },
        ),
  }),
  endTime: yup.string().when("tripType", {
    is: "hourly",
    then: (schema) =>
      schema
        .required("L'heure de fin est requise")
        .test(
          "after-start",
          "L'heure de fin doit etre apres l'heure de debut",
          function (endVal) {
            const parent = this.parent as { time?: string };
            const start = parent.time;
            if (!endVal || !start) return true;
            const min = hourlyDurationMinutes(start, endVal);
            return min !== null && min > 0;
          },
        ),
    otherwise: (schema) => schema.optional(),
  }),
  date: dateYupSchema,
  time: timeYupSchema,
});

const vehicleSchema: StepSchema = yup.object({
  carType: yup.string().required("Le type de vehicule est requis"),
  car: yup.string().required("Le vehicule est requis"),
});

const passengerSchema: StepSchema = yup.object({
  firstName: yup.string().required("Le prenom est requis"),
  lastName: yup.string().required("Le nom est requis"),

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

  phone: yup.string().required("Un numero de telephone est requis"),
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

export const STEP_SCHEMAS: StepSchema[] = [
  journeySchema,
  vehicleSchema,
  passengerSchema,
];

export const STEP_SCHEMAS_BY_LABEL: Record<string, StepSchema | undefined> =
  FORM_STEPS.reduce<Record<string, StepSchema | undefined>>(
    (acc, step, idx) => {
      acc[step.label] = STEP_SCHEMAS[idx];
      return acc;
    },
    {},
  );
