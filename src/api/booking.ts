import { api } from "./api";
import type { EmailLocale } from "@/src/lib/email-locale";
import type { GeoPoint } from "@/src/lib/geo";

/** Address picked from suggestions; the backend re-verifies `location` by `placeId`. */
export type BookingPlaceRef = { placeId: string; location: GeoPoint };

export type CreateBookingBody = {
  locale: EmailLocale;
  clientName: string;
  vehicleId: string;
  driverId?: string | null;
  bookingAt: string;
  fromPlace?: BookingPlaceRef;
  toPlace?: BookingPlaceRef;
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
