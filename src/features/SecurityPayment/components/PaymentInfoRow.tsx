import React, { type FC, type ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  value: string;
};

export const PaymentInfoRow: FC<Props> = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-primary [&_svg]:block">{icon}</span>
      <div className="min-w-0 text-left">
        <p className="text-xs font-medium uppercase tracking-wide text-text-primary">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-normal leading-snug text-text-secondary">
          {value}
        </p>
      </div>
    </div>
  );
};
