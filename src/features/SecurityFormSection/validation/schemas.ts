import { securityFormContent } from "@/src/content/locales/fr/securityForm";
import { getSecurityStepSchemas } from "./getSecurityStepSchemas";

/** @deprecated Use getSecurityStepSchemas(securityForm.validation) with locale content */
export const SECURITY_STEP_SCHEMAS = getSecurityStepSchemas(
  securityFormContent.validation,
);
