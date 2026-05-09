import type { SecurityFormValues } from "@/src/features/SecurityFormSection/types";

export async function submitSecurityRequest(
  payload: SecurityFormValues,
): Promise<void> {
  const res = await fetch("/api/security-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(err.message ?? "Request failed");
  }
}
