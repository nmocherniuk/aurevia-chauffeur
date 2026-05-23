import * as yup from "yup";
import type { SecurityFormValues } from "../types";
import { EMAIL_REGEX, MAX_EMAIL_LENGTH } from "@/src/features/FormSection/validation/regex";
import type { securityFormContent as FrSecurityForm } from "@/src/content/locales/fr/securityForm";

type SecurityValidation = typeof FrSecurityForm.validation;

type StepSchema = yup.ObjectSchema<Partial<SecurityFormValues>>;

export function getSecurityStepSchemas(v: SecurityValidation): StepSchema[] {
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

  const serviceStepSchema: StepSchema = yup.object({
    serviceCategory: yup.string().required(v.categoryRequired),
    serviceType: yup.string().required(v.typeRequired),
    serviceTypeOther: yup.string().when("serviceType", {
      is: "other",
      then: (schema) =>
        schema
          .trim()
          .required(v.typeOtherRequired)
          .min(3, v.typeOtherMin),
      otherwise: (schema) => schema.optional(),
    }),
    location: yup
      .string()
      .trim()
      .required(v.locationRequired)
      .min(3, v.locationMin),
    date: dateYupSchema,
    time: timeYupSchema,
    duration: yup.string().required(v.durationRequired),
    endDate: yup.string().when("duration", {
      is: "multi",
      then: (schema) =>
        schema
          .required(v.endDateRequired)
          .test("after-start-date", v.endDateAfterStart, function (endVal) {
            const start = (this.parent as { date?: string }).date;
            if (!endVal || !start) return true;
            return new Date(endVal) >= new Date(start);
          }),
      otherwise: (schema) => schema.optional(),
    }),
    agentCount: yup
      .string()
      .required(v.agentCountRequired)
      .matches(/^\d+$/, v.agentCountInvalid),
  });

  const clientStepSchema: StepSchema = yup.object({
    firstName: yup.string().trim().required(v.firstNameRequired),
    lastName: yup.string().trim().required(v.lastNameRequired),
    email: yup
      .string()
      .required(v.emailRequired)
      .trim()
      .max(MAX_EMAIL_LENGTH, v.emailLong)
      .matches(/^\S+$/, v.emailSpaces)
      .test("email-format", v.emailInvalid, (value) =>
        value ? EMAIL_REGEX.test(value) : false,
      ),
    phone: yup.string().trim().required(v.phoneRequired),
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

  return [
    serviceStepSchema,
    clientStepSchema,
    detailsStepSchema,
    reviewStepSchema,
  ];
}
