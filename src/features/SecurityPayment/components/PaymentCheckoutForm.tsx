"use client";

import React, { useCallback, useState, type FC } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CircleCheck } from "@/src/components/SVGManager/CircleCheck";
import type { SecurityPayBooking } from "../types";
import { Button } from "@/src/components/Button";

type Props = {
  booking: SecurityPayBooking;
  token: string;
};

export const PaymentCheckoutForm: FC<Props> = ({ booking, token }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!stripe || !elements) return;

      setProcessing(true);
      setError(null);

      const returnUrl = `${window.location.origin}${window.location.pathname}`;

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: { return_url: returnUrl },
        redirect: "if_required",
      });

      if (result.error) {
        setError(result.error.message ?? "Payment failed");
        setProcessing(false);
        return;
      }

      if (result.paymentIntent?.status === "succeeded") {
        setSucceeded(true);
      }
      setProcessing(false);
    },
    [stripe, elements, token],
  );

  if (succeeded) {
    return (
      <div className="py-4 text-center">
        <div className="mb-3 flex justify-center">
          <CircleCheck width={48} height={48} fill="#4ade80" />
        </div>
        <p className="font-benzin text-lg text-text-secondary">
          Payment successful!
        </p>
        <p className="mt-2 text-sm font-light text-text-primary">
          Your trip has been confirmed. Thank you!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <div className="py-2">
        <PaymentElement />
      </div>
      {error ? (
        <p className="text-center text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
      <Button variant="primary" className="w-full" disabled={processing} type="submit" withArrow={false}>
        {processing
          ? "Processing…"
          : `Pay €${booking.totalPrice.toFixed(2)}`}
      </Button>
    </form>
  );
};
