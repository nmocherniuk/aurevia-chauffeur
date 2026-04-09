"use client";

import React, { FC, useCallback, useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const PaymentForm: FC<{ totalPrice: string }> = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!stripe || !elements) return;

      setIsProcessing(true);
      setErrorMessage(null);

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
      });

      if (error) {
        setErrorMessage(error.message ?? "An unexpected error occurred.");
      }

      setIsProcessing(false);
    },
    [stripe, elements],
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PaymentElement />

      {errorMessage && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-4">
        {totalPrice && (
          <div className="flex items-center justify-between self-start sm:self-center">
            <p className="text-xl font-medium text-text-primary">
              Total:{" "}
              <span className="text-xl font-semibold text-primary">
                €{totalPrice}
              </span>
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="bg-primary text-white rounded-lg py-2 h-[42px] px-5 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:bg-[#AC8458] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto sm:self-end sm:min-w-[220px]"
        >
          {isProcessing ? "Processing..." : `Pay €${totalPrice}`}
        </button>
      </div>
    </form>
  );
};

interface CheckoutFormProps {
  clientSecret: string;
  totalPrice: string;
}

export const CheckoutForm: FC<CheckoutFormProps> = ({ clientSecret, totalPrice }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "night",
          variables: {
            colorPrimary: "#C4956A",
            colorBackground: "#06070a",
            colorText: "#e9e7e2",
          },
        },
      }}
    >
      <PaymentForm totalPrice={totalPrice} />
    </Elements>
  );
};
