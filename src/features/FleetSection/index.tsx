"use client";

import React, { FC, useEffect, useMemo } from "react";
import FleetCard from "@/src/components/Layouts/FleetCard";
import { FleetEmptyState } from "@/src/features/FleetSection/components/FleetEmptyState";
import { type Fleet } from "@/src/features/FleetSection/data";
import { BOOKING_VEHICLE_IDS } from "@/src/features/FormSection/data/bookingVehicles";
import { useContent } from "@/src/providers/LocaleProvider";
import { useVehiclesStore } from "@/src/store/vehiclesStore";

const FLEET_ORDER: ("comfort" | "business" | "van")[] = [
  "comfort",
  "business",
  "van",
];
const CLASS_LABELS: Record<string, string> = {
  comfort: "Comfort",
  business: "Business",
  van: "Van",
};

const FleetSection: FC = () => {
  const { chauffeur } = useContent();
  const { fleet: fleetCopy } = chauffeur;
  const vehicles = useVehiclesStore((s) => s.vehicles);
  const vehiclesStatus = useVehiclesStore((s) => s.status);
  const fetchVehicles = useVehiclesStore((s) => s.fetchVehicles);

  useEffect(() => {
    void fetchVehicles();
  }, [fetchVehicles]);

  const fleetGroups = useMemo(() => {
    const grouped: Record<string, Fleet[]> = {
      comfort: [],
      business: [],
      van: [],
    };

    for (const item of vehicles) {
      const key = item.class;
      if (!(key in grouped)) continue;

      grouped[key].push({
        id: item.id,
        bookingVehicleId:
          item.vehicleName.toLowerCase().includes("bmw")
            ? BOOKING_VEHICLE_IDS.bmw7
            : BOOKING_VEHICLE_IDS.mercedesS580,
        image: item.imageUrl || "/images/dummy-car.png",
        alt: item.vehicleName,
        carClass: CLASS_LABELS[key],
        carTitle: item.vehicleName,
        description: item.description,
        passengers: item.passengers ?? 0,
        baggage: item.baggageCount ?? 0,
        vehicleType: item.vehicleType || undefined,
        modelYear: item.year || undefined,
        transmission: item.transmission || undefined,
        interior: item.interior || undefined,
        amenities: item.amenities ?? [],
      });
    }

    return grouped;
  }, [vehicles]);

  const hasAnyVehicles = useMemo(
    () => FLEET_ORDER.some((key) => (fleetGroups[key] ?? []).length > 0),
    [fleetGroups],
  );

  const showEmptyState =
    !hasAnyVehicles &&
    (vehiclesStatus === "success" || vehiclesStatus === "error");

  return (
    <section id="flotte" className="w-full">
      <h2 className="font-benzin text-white text-center text-2xl mb-10 sm:text-start sm:text-[28px] md:text-3xl lg:text-4xl lg:mb-11">
        {fleetCopy.title}
      </h2>
      {showEmptyState ? (
        <FleetEmptyState
          title={fleetCopy.empty.title}
          description={fleetCopy.empty.description}
        />
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {hasAnyVehicles
            ? FLEET_ORDER.map((key) =>
                (fleetGroups[key] ?? []).length > 0 ? (
                  <FleetCard
                    key={key}
                    cars={fleetGroups[key]}
                    classLabel={CLASS_LABELS[key]}
                  />
                ) : null,
              )
            : null}
        </div>
      )}
    </section>
  );
};

export default FleetSection;
