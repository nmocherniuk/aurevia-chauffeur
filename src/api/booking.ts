import { api } from "./api";
import type { EmailLocale } from "@/src/lib/email-locale";

export type CreateBookingBody = {
  locale: EmailLocale;
  clientName: string;
  vehicleId: string;
  driverId?: string | null;
  bookingAt: string;
  route?: string;
  durationMin?: number;
  status?: BookingStatus;
  paymentStatus?: PaymentStatus;
};

export type BookingStatus = "pending" | "assigned" | "completed" | "cancelled";

export type PaymentStatus = "paid" | "unpaid";

export async function createBooking(body: CreateBookingBody) {
  try {
    const { data } = await api.post("/public/bookings", body);
    return data.booking;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}
