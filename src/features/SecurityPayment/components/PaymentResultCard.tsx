import React, { type FC } from "react";
import { CircleCheck } from "@/src/components/SVGManager/CircleCheck";
import type { SecurityPayBooking } from "../types";

type Props =
  | { variant: "redirect_success" }
  | { variant: "already_paid"; booking: SecurityPayBooking };

export const PaymentResultCard: FC<Props> = (props) => {
  const title =
    props.variant === "redirect_success"
      ? "Payment successful!"
      : "Already paid";

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center rounded-xl px-8 py-10 text-center ">
      <div className="mb-4 flex justify-center">
        <CircleCheck width={56} height={56} fill="#4ade80" />
      </div>
      <h2 className="font-benzin text-xl text-text-secondary md:text-2xl">
        {title}
      </h2>
      {props.variant === "redirect_success" ? (
        <p className="mt-3 text-sm font-light leading-relaxed text-text-primary">
          Thank you! Your trip has been confirmed.
        </p>
      ) : (
        <p className="mt-3 text-sm font-light leading-relaxed text-text-primary">
          Your trip{" "}
          <strong className="font-medium text-text-secondary">
            {props.booking.from} → {props.booking.to}
          </strong>{" "}
          has been paid. Thank you!
        </p>
      )}
    </div>
  );
};
