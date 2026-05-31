"use client";

import React, { type FC } from "react";
import { CircleCheck } from "@/src/components/SVGManager/CircleCheck";
import { useContent } from "@/src/providers/LocaleProvider";
import { fillTemplate } from "../utils/formatBookingDateTime";
import type { SecurityPayBooking } from "../types";

type Props =
  | { variant: "redirect_success" }
  | { variant: "already_paid"; booking: SecurityPayBooking };

export const PaymentResultCard: FC<Props> = (props) => {
  const { securityPayment: copy } = useContent();

  const title =
    props.variant === "redirect_success"
      ? copy.result.redirectSuccessTitle
      : copy.result.alreadyPaidTitle;

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
          {copy.result.redirectSuccessMessage}
        </p>
      ) : (
        <p className="mt-3 text-sm font-light leading-relaxed text-text-primary">
          {fillTemplate(copy.result.alreadyPaidMessage, {
            from: props.booking.from,
            to: props.booking.to,
          })}
        </p>
      )}
    </div>
  );
};
