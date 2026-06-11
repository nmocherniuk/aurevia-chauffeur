import React, { FC } from "react";
import CardOutline from "../CardOutline";
import { Route } from "@/src/features/PopularRoutesSection/data";
import { RouteCardMeta } from "./components/RouteCardMeta";
import { RouteCardRoute } from "./components/RouteCardRoute";

interface RouteCardProps {
  route: Route;
  index: number;
}

const RouteCard: FC<RouteCardProps> = ({ route, index }) => {
  return (
    <article
      className="min-w-0"
      aria-label={`Route ${index + 1}: ${route.from} vers ${route.to}`}
    >
      <CardOutline className="flex w-full min-w-0 flex-col items-start gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:flex-col lg:items-start lg:gap-1.5 xl:flex-row xl:items-center xl:justify-between">
        <RouteCardRoute from={route.from} to={route.to} index={index} />
        <RouteCardMeta
          className="shrink-0"
          duration={route.duration}
          distance={route.distance}
        />
      </CardOutline>
    </article>
  );
};

export default RouteCard;
