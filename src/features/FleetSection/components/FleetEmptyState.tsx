import React, { FC } from "react";
import CardOutline from "@/src/components/Layouts/CardOutline";

type FleetEmptyStateProps = {
  title: string;
  description: string;
};

export const FleetEmptyState: FC<FleetEmptyStateProps> = ({
  title,
  description,
}) => (
  <CardOutline className="flex flex-col items-center justify-center gap-4 px-6 py-14 text-center sm:px-10 sm:py-16">
    <h3 className="font-benzin text-xl text-text-secondary sm:text-2xl">
      {title}
    </h3>
    <p className="max-w-md text-base font-light leading-relaxed text-text-primary">
      {description}
    </p>
  </CardOutline>
);
