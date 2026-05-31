"use client";

import React, { type FC } from "react";
import { useContent } from "@/src/providers/LocaleProvider";

export const PaymentLoading: FC = () => {
  const { securityPayment: copy } = useContent();

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-6 px-4 py-12 text-center"
    >
      <span
        className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent"
        aria-hidden
      />
      <p className="text-sm font-light text-text-primary">{copy.loading}</p>
    </div>
  );
};
