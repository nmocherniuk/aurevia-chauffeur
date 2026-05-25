import { bookingFormContent } from "@/src/content/locales/fr/bookingForm";
import { getStepSchemas } from "./getStepSchemas";

/** @deprecated Use getStepSchemas(bookingForm.validation) with locale content */
export const STEP_SCHEMAS = getStepSchemas(bookingFormContent.validation);
