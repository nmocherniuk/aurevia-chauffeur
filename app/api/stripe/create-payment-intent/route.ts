import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { bookingId } = await req.json();

    if (!bookingId || typeof bookingId !== "string") {
      return NextResponse.json(
        { error: "bookingId is required" },
        { status: 400 },
      );
    }

    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";
    const bookingUrl = `${apiUrl}/public/bookings/${bookingId}`;

    console.log("[PaymentIntent] Fetching booking from:", bookingUrl);

    const res = await fetch(bookingUrl);

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        `[PaymentIntent] Backend returned ${res.status}: ${text}`,
      );
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 },
      );
    }

    const data = await res.json();
    const booking = data.booking ?? data;

    console.log("[PaymentIntent] Booking data:", JSON.stringify(booking));

    const price = Number(booking.price ?? booking.totalPrice ?? 0);

    if (!price || price <= 0) {
      return NextResponse.json(
        { error: "Invalid booking price" },
        { status: 400 },
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(price * 100),
      currency: "eur",
      automatic_payment_methods: { enabled: true },
      metadata: { bookingId },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("[PaymentIntent] Creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 },
    );
  }
}
