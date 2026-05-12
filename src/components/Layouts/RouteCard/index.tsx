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
    <article aria-label={`Route ${index + 1}: ${route.from} vers ${route.to}`}>
      <CardOutline className="flex flex-col gap-2 p-5 sm:flex-row sm:justify-between lg:flex-col lg:gap-1.5 xl:flex-row xl:justify-between">
        <RouteCardRoute from={route.from} to={route.to} index={index} />
        <RouteCardMeta duration={route.duration} distance={route.distance} />
      </CardOutline>
    </article>
  );
};

export default RouteCard;
