"use client";

import React, { useEffect, useState, type FC } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { isAxiosError } from "axios";
import getStripe from "@/src/utils/getStripe";
import { createPayIntent, fetchPayBooking } from "@/src/api/pay";
import { useContent } from "@/src/providers/LocaleProvider";
import type { SecurityPaymentPageState, SecurityPayBooking } from "./types";
import { securityPaymentElementsOptions } from "./stripeAppearance";
import { PaymentLoading } from "./components/PaymentLoading";
import { PaymentErrorCard } from "./components/PaymentErrorCard";
import { PaymentResultCard } from "./components/PaymentResultCard";
import { ReservationPaymentSection } from "./components/ReservationPaymentSection";

type Props = {
  token: string;
  redirectStatus: string | null;
};

function parseConflictBooking(err: unknown): SecurityPayBooking | null {
  if (!isAxiosError(err)) return null;
  const booking = err.response?.data as { booking?: SecurityPayBooking } | undefined;
  return booking?.booking ?? null;
}

export const SecurityPaymentView: FC<Props> = ({ token, redirectStatus }) => {
  const { securityPayment: copy } = useContent();
  const [state, setState] = useState<SecurityPaymentPageState>({
    kind: "loading",
  });

  useEffect(() => {
    if (redirectStatus === "succeeded") {
      setState({ kind: "success" });
      return;
    }

    if (!token) {
      setState({ kind: "error", message: copy.errors.invalidLink });
      return;
    }

    let cancelled = false;

    void (async () => {
      try {
        const booking = await fetchPayBooking(token);
        if (cancelled) return;

        try {
          const clientSecret = await createPayIntent(token);
          if (cancelled) return;
          setState({ kind: "ready", booking, clientSecret });
        } catch (intentErr) {
          if (cancelled) return;
          if (isAxiosError(intentErr) && intentErr.response?.status === 409) {
            setState({ kind: "already_paid", booking });
            return;
          }
          throw intentErr;
        }
      } catch (err) {
        if (cancelled) return;
        if (isAxiosError(err) && err.response?.status === 409) {
          const b = parseConflictBooking(err);
          if (b) {
            setState({ kind: "already_paid", booking: b });
            return;
          }
        }
        if (isAxiosError(err) && err.response?.status === 403) {
          setState({
            kind: "error",
            message: copy.errors.expired,
          });
          return;
        }
        setState({
          kind: "error",
          message: copy.errors.generic,
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token, redirectStatus, copy.errors]);

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col">
      {state.kind === "loading" && <PaymentLoading />}

      {state.kind === "error" && <PaymentErrorCard message={state.message} />}

      {state.kind === "success" && (
        <PaymentResultCard variant="redirect_success" />
      )}
      {state.kind === "already_paid" && (
        <PaymentResultCard variant="already_paid" booking={state.booking} />
      )}

      {state.kind === "ready" && (
        <Elements
          stripe={getStripe()}
          options={securityPaymentElementsOptions(state.clientSecret)}
        >
          <ReservationPaymentSection booking={state.booking} token={token} />
        </Elements>
      )}
    </div>
  );
};
