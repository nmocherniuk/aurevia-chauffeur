import { api } from "./api";
import type { SecurityPayBooking } from "@/src/features/SecurityPayment/types";

export async function fetchPayBooking(token: string): Promise<SecurityPayBooking> {
  const { data } = await api.get<{ booking: SecurityPayBooking }>(
    `/public/security-payment/${token}`,
  );
  return data.booking;
}

export async function createPayIntent(token: string): Promise<string> {
  const { data } = await api.post<{ clientSecret: string }>(
    `/public/security-payment/${token}/create-intent`,
  );
  return data.clientSecret;
}
