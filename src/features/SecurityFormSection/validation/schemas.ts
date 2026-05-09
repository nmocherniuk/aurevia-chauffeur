import * as yup from "yup";
import type { SecurityFormValues } from "../types";
import { EMAIL_REGEX, MAX_EMAIL_LENGTH } from "@/src/features/FormSection/validation/regex";

type StepSchema = yup.ObjectSchema<Partial<SecurityFormValues>>;

const dateYupSchema = yup
  .string()
  .required("Date is required")
  .test(
    "future-date",
    "Date must be today or in the future",
    (value) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
  );

const timeYupSchema = yup.string().required("Start time is required");

const serviceStepSchema: StepSchema = yup.object({
  serviceCategory: yup.string().required("Please choose a service category"),
  serviceType: yup.string().required("Please choose a service type"),
  serviceTypeOther: yup.string().when("serviceType", {
    is: "other",
    then: (schema) =>
      schema
        .trim()
        .required("Please describe the service you need")
        .min(3, "Please provide a bit more detail"),
    otherwise: (schema) => schema.optional(),
  }),
  location: yup
    .string()
    .trim()
    .required("Location is required")
    .min(3, "Please enter a more precise location"),
  date: dateYupSchema,
  time: timeYupSchema,
  duration: yup.string().required("Duration is required"),
  endDate: yup.string().when("duration", {
    is: "multi",
    then: (schema) =>
      schema
        .required("End date is required for multi-day assignments")
        .test(
          "after-start-date",
          "End date must be on or after the start date",
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
    .required("Number of agents is required")
    .matches(/^\d+$/, "Enter a valid number"),
});

const clientStepSchema: StepSchema = yup.object({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .trim()
    .max(MAX_EMAIL_LENGTH, "Email is too long")
    .matches(/^\S+$/, "Email cannot contain spaces")
    .test(
      "email-format",
      "Please enter a valid email",
      (value) => (value ? EMAIL_REGEX.test(value) : false),
    ),
  phone: yup.string().trim().required("Phone number is required"),
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
