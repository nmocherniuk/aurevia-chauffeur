"use client";

import React, { FC } from "react";
import { Fleet } from "@/src/features/FleetSection/data";
import { People } from "../../../SVGManager/People";
import { Bagage } from "../../../SVGManager/Bagage";
import { Button } from "../../../Button";

interface FleetCardContentProps {
  classLabel: string;
  car: Fleet;
  onDetailsClick: () => void;
  onBookNow: () => void;
}

export const FleetCardContent: FC<FleetCardContentProps> = ({
  classLabel,
  car,
  onDetailsClick,
  onBookNow,
}) => {
  return (
    <div
      key={car.id}
      className="flex animate-fade-in flex-col gap-6 sm:justify-center"
    >
      <div>
        <span className="font-onest text-sm text-primary mb-1">
          {classLabel}
        </span>
        <h3 className="font-onest text-xl text-text-secondary mb-3">
          {car.carTitle}
        </h3>
        <p className="mt-1 text-base font-light text-grey">{car.description}</p>
      </div>
      <div className="flex justify-center gap-8 sm:justify-start md:gap-12 lg:justify-center lg:gap-5 lg:px-1.5 xl:gap-9">
        <div className="flex items-center gap-2">
          <People />
          <span className="text-text-secondary leading-none ">
            {car.passengers}
          </span>{" "}
          <span className="text-grey text-sm font-light">
            {car.passengers > 1 ? "passengers" : "passenger"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Bagage />
          <span className="text-text-secondary leading-none">
            {car.baggage}
          </span>{" "}
          <span className="text-grey text-sm font-light">
            {car.baggage > 1 ? "baggages" : "baggage"}
          </span>
        </div>
      </div>
      <div className="flex gap-3 flex-col sm:flex-row md:gap-5 lg:flex-col lg:gap-3 xl:flex-row xl:gap-4">
        <Button
          type="button"
          variant="secondary"
          className="sm:flex-1"
          onClick={onDetailsClick}
        >
          Voir les détails
        </Button>
        <Button
          type="button"
          variant="primary"
          className="sm:flex-1"
          onClick={onBookNow}
        >
          Book now
        </Button>
      </div>
    </div>
  );
};
