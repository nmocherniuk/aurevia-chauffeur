export type SecurityPayBooking = {
  id: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  clientLocale?: string;
  from: string;
  to: string;
  bookingAt: string;
  durationMin: number;
  vehicleName: string | null;
  vehicleClass: string | null;
  status: string;
  paymentStatus: string;
  price: number;
  totalPrice: number;
};

export type SecurityPaymentPageState =
  | { kind: "loading" }
  | {
      kind: "ready";
      booking: SecurityPayBooking;
      clientSecret: string;
    }
  | { kind: "already_paid"; booking: SecurityPayBooking }
  | { kind: "success" }
  | { kind: "error"; message: string };
