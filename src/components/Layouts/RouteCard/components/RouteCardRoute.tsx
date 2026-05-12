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
  <div className="flex items-center gap-4">
    <span className="text-text-primary text-sm">{index + 1}</span>
    <div className="text-text-secondary text-base flex items-center gap-3 xl:gap-2">
      <span className="shrink-0">{from}</span>
      <ArrowsHorizontal />
      <span className="shrink-0">{to}</span>
    </div>
  </div>
);
