"use client";

import React, { FC, useCallback, useState } from "react";
import dayjs from "@/src/lib/dayjs";
import { SERVICE_TZ } from "@/src/features/FormSection/constants";
import { createBooking } from "@/src/api/booking";
import { BookingSummary } from "./BookingSummary";
import { PaymentFooter } from "./PaymentFooter";
import { CheckoutForm } from "@/src/components/CheckoutForm";

interface PaymentFormSnapshot {
  from: string;
  to: string;
  date: string;
  time: string;
  tripType: string;
  carType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notesForChauffeur: string;
}

interface PaymentContainerProps {
  summary: {
    hasReview: boolean;
    journeyRoute: string | null;
    journeyDateTime: string | null;
    tripTypeLabel: string;
    carTypeLabel: string;
    carLabel: string;
    passengerName: string | null;
    email: string;
    phone: string;
    totalPrice: string;
  };
  formSnapshot: PaymentFormSnapshot;
  onBack?: () => void;
}

export const PaymentContainer: FC<PaymentContainerProps> = ({
  summary,
  formSnapshot,
  onBack,
}) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReviewCollapsed, setIsReviewCollapsed] = useState(false);

  const isPaymentReady = !!clientSecret;

  const handleConfirmAndPay = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const bookingAt = dayjs
        .tz(`${formSnapshot.date} ${formSnapshot.time}`, SERVICE_TZ)
        .toISOString();

      const body = {
        clientName: `${formSnapshot.firstName} ${formSnapshot.lastName}`.trim(),
        clientEmail: formSnapshot.email,
        clientPhone: formSnapshot.phone,
        tripType: formSnapshot.tripType,
        notesForDriver: formSnapshot.notesForChauffeur,
        bookingAt,
        vehicleId: "72f6d70d-a7c7-497e-9c98-073dbdb5163b",
        vehicleClass: formSnapshot.carType,
        to: formSnapshot.to,
        from: formSnapshot.from,
        durationMin: 100,
        status: "pending" as const,
        paymentStatus: "unpaid" as const,
      };

      const booking = await createBooking(body);

      const res = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: booking.id }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error ||
          "Failed to create payment intent",
        );
      }

      const { clientSecret: secret } = (await res.json()) as {
        clientSecret: string;
      };
      setClientSecret(secret);
      setIsReviewCollapsed(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }, [formSnapshot, isLoading]);

  return (
    <>
      <BookingSummary
        hasReview={summary.hasReview}
        isPaymentReady={isPaymentReady}
        isReviewCollapsed={isReviewCollapsed}
        onToggle={() => setIsReviewCollapsed((prev) => !prev)}
        journeyRoute={summary.journeyRoute}
        journeyDateTime={summary.journeyDateTime}
        tripTypeLabel={summary.tripTypeLabel}
        carTypeLabel={summary.carTypeLabel}
        carLabel={summary.carLabel}
        passengerName={summary.passengerName}
        email={summary.email}
        phone={summary.phone}
      />

      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <PaymentFooter
        totalPrice={summary.totalPrice}
        isPaymentReady={isPaymentReady}
        isLoading={isLoading}
        onConfirm={handleConfirmAndPay}
        onBack={onBack}
      />

      {isPaymentReady && clientSecret && (
        <CheckoutForm
          clientSecret={clientSecret}
          totalPrice={summary.totalPrice}
        />
      )}
    </>
  );
};
