import type { SecurityFormValues } from "@/src/features/SecurityFormSection/types";
import type { Locale } from "@/src/i18n/config";
import { toEmailLocale } from "@/src/lib/email-locale";

export async function submitSecurityRequest(
  payload: SecurityFormValues,
  locale: Locale,
): Promise<void> {
  const res = await fetch("/api/security-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, locale: toEmailLocale(locale) }),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(err.message ?? "Request failed");
  }
}
