import React, { type FC } from "react";
import { Cross } from "@/src/components/SVGManager/Cross";

type Props = {
  message: string;
};

export const PaymentErrorCard: FC<Props> = ({ message }) => {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center rounded-xl px-8 py-10 text-center ">
      <div className="mb-4 flex justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10">
          <Cross width={28} height={28} fill="#f87171" />
        </span>
      </div>
      <h2 className="text-xl text-text-secondary md:text-2xl">
        Access denied
      </h2>
      <p className="mt-3 text-sm font-light leading-relaxed text-text-primary">
        {message}
      </p>
    </div>
  );
};
