import React, { FC } from "react";
import { Clock } from "../../../SVGManager/Clock";
import { Location } from "../../../SVGManager/Location";

interface RouteCardMetaProps {
  duration: string;
  distance: number;
}

const iconFill = "var(--color-primary)";

export const RouteCardMeta: FC<RouteCardMetaProps> = ({
  duration,
  distance,
}) => (
  <div className="flex items-center gap-4 lg:gap-8 xl:gap-4">
    <div className="flex items-center gap-2">
      <Clock fill={iconFill} width={20} height={20} aria-hidden />
      <span className="text-text-primary text-sm font-light">{duration}</span>
    </div>
    <div className="flex items-center gap-2">
      <Location fill={iconFill} aria-hidden />
      <span className="text-text-primary text-sm font-light">
        {distance} km
      </span>
    </div>
  </div>
);
