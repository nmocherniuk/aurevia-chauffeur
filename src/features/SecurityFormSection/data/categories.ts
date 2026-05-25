import type { securityFormContent as FrSecurityForm } from "@/src/content/locales/fr/securityForm";

export type SecurityCategoryId =
  | "executive_protection"
  | "event_security"
  | "property_private"
  | "business_commercial"
  | "advanced_specialized";

export type SecurityFormCopy = typeof FrSecurityForm;
export type ServiceTypeOption = { value: string; label: string };

export function getCategorySelectOptions(
  form: SecurityFormCopy,
): ServiceTypeOption[] {
  return [...form.categories];
}

export function getServiceTypeSelectOptions(
  categoryId: string,
  form: SecurityFormCopy,
): ServiceTypeOption[] {
  if (!categoryId || !(categoryId in form.serviceTypes)) {
    return [];
  }
  const base =
    form.serviceTypes[categoryId as keyof typeof form.serviceTypes];
  return [...base, form.otherServiceType];
}

export function getDurationOptions(form: SecurityFormCopy): ServiceTypeOption[] {
  return [...form.duration];
}

export const AGENT_COUNT_OPTIONS = Array.from({ length: 24 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

export function getDressCodeOptions(
  form: SecurityFormCopy,
): ServiceTypeOption[] {
  return [...form.dressCode];
}

export function getYesNoOptions(form: SecurityFormCopy): ServiceTypeOption[] {
  return [...form.yesNo];
}

export function labelForCategory(
  form: SecurityFormCopy,
  id: string,
): string {
  return form.categories.find((c) => c.value === id)?.label ?? id;
}

export function labelForServiceType(
  form: SecurityFormCopy,
  categoryId: string,
  typeValue: string,
): string {
  if (!(categoryId in form.serviceTypes)) return typeValue;
  const opts =
    form.serviceTypes[categoryId as keyof typeof form.serviceTypes];
  return opts.find((o) => o.value === typeValue)?.label ?? typeValue;
}

export function labelForDuration(
  form: SecurityFormCopy,
  value: string,
): string {
  return form.duration.find((o) => o.value === value)?.label ?? value;
}

export function labelDressCode(
  form: SecurityFormCopy,
  value: string,
): string {
  return (
    form.dressCode.find((o) => o.value === value)?.label ??
    form.review.noPreference
  );
}

export function labelYesNo(
  form: SecurityFormCopy,
  value: string,
): string {
  if (value === "yes" || value === "no") {
    return form.yesNo.find((o) => o.value === value)?.label ?? value;
  }
  return "";
}
