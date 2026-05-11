import * as yup from "yup";
import type { SecurityFormValues } from "../types";
import { EMAIL_REGEX, MAX_EMAIL_LENGTH } from "@/src/features/FormSection/validation/regex";

type StepSchema = yup.ObjectSchema<Partial<SecurityFormValues>>;

const dateYupSchema = yup
  .string()
  .required("La date est requise")
  .test(
    "future-date",
    "La date doit etre aujourd'hui ou dans le futur",
    (value) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
  );

const timeYupSchema = yup.string().required("L'heure de debut est requise");

const serviceStepSchema: StepSchema = yup.object({
  serviceCategory: yup.string().required("Veuillez choisir une categorie de service"),
  serviceType: yup.string().required("Veuillez choisir un type de service"),
  serviceTypeOther: yup.string().when("serviceType", {
    is: "other",
    then: (schema) =>
      schema
        .trim()
        .required("Veuillez decrire le service souhaite")
        .min(3, "Veuillez fournir un peu plus de details"),
    otherwise: (schema) => schema.optional(),
  }),
  location: yup
    .string()
    .trim()
    .required("Le lieu est requis")
    .min(3, "Veuillez saisir un lieu plus precis"),
  date: dateYupSchema,
  time: timeYupSchema,
  duration: yup.string().required("La duree est requise"),
  endDate: yup.string().when("duration", {
    is: "multi",
    then: (schema) =>
      schema
        .required("La date de fin est requise pour une mission sur plusieurs jours")
        .test(
          "after-start-date",
          "La date de fin doit etre le meme jour ou apres la date de debut",
          function (endVal) {
            const start = (this.parent as { date?: string }).date;
            if (!endVal || !start) return true;
            return new Date(endVal) >= new Date(start);
          },
        ),
    otherwise: (schema) => schema.optional(),
  }),
  agentCount: yup
    .string()
    .required("Le nombre d'agents est requis")
    .matches(/^\d+$/, "Saisissez un nombre valide"),
});

const clientStepSchema: StepSchema = yup.object({
  firstName: yup.string().trim().required("Le prenom est requis"),
  lastName: yup.string().trim().required("Le nom est requis"),
  email: yup
    .string()
    .required("L'e-mail est requis")
    .trim()
    .max(MAX_EMAIL_LENGTH, "L'e-mail est trop long")
    .matches(/^\S+$/, "L'e-mail ne peut pas contenir d'espaces")
    .test(
      "email-format",
      "Veuillez entrer une adresse e-mail valide",
      (value) => (value ? EMAIL_REGEX.test(value) : false),
    ),
  phone: yup.string().trim().required("Le numero de telephone est requis"),
  company: yup.string().optional(),
});

const detailsStepSchema: StepSchema = yup.object({
  specialRequirements: yup.string().optional(),
  languagesRequired: yup.string().optional(),
  dressCode: yup.string().optional(),
  vehicleRequired: yup.string().optional(),
  armedRequired: yup.string().optional(),
});

const reviewStepSchema: StepSchema = yup.object({});

export const SECURITY_STEP_SCHEMAS: StepSchema[] = [
  serviceStepSchema,
  clientStepSchema,
  detailsStepSchema,
  reviewStepSchema,
];
