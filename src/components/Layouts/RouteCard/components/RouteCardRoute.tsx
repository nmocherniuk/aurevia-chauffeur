import React, { FC } from "react";
import { ArrowsHorizontal } from "../../../SVGManager/ArrowsHorizontal";

interface RouteCardRouteProps {
  from: string;
  to: string;
  index: number;
}

export const RouteCardRoute: FC<RouteCardRouteProps> = ({
  from,
  to,
  index,
}) => (
  <div className="flex w-full min-w-0 items-center gap-4 sm:min-w-0 sm:flex-1">
    <span className="shrink-0 text-sm text-text-primary">{index + 1}</span>
    <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden xl:gap-2">
      <span
        className="min-w-0 max-w-[46%] shrink truncate text-base text-text-secondary"
        title={from}
      >
        {from}
      </span>
      <ArrowsHorizontal className="shrink-0" aria-hidden />
      <span
        className="min-w-0 flex-1 truncate text-base text-text-secondary"
        title={to}
      >
        {to}
      </span>
    </div>
  </div>
);
