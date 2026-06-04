import type { PublicVehicleJson } from "@/src/features/FleetSection/types/publicVehicle";

export type VehicleSelectOption = {
  label: string;
  value: string;
  detail?: string;
};

/** Form vehicle-class value → API vehicle `class`. */
const FORM_CARTYPE_TO_API_CLASS: Record<string, PublicVehicleJson["class"]> = {
  comfort: "comfort",
  business: "business",
  luxury: "van",
};

function buildDetail(vehicle: PublicVehicleJson): string | undefined {
  const parts: string[] = [];
  if (vehicle.passengers != null) parts.push(`${vehicle.passengers}P`);
  if (vehicle.baggageCount != null) parts.push(`${vehicle.baggageCount}L`);
  return parts.length ? parts.join(" · ") : undefined;
}

/**
 * Maps API vehicles to select options, optionally filtered by the chosen
 * form vehicle class. The option `value` is the vehicle id used by the
 * pricing and booking APIs.
 */
export function buildVehicleOptions(
  vehicles: PublicVehicleJson[],
  carType?: string,
): VehicleSelectOption[] {
  const apiClass = carType ? FORM_CARTYPE_TO_API_CLASS[carType] : undefined;

  return vehicles
    .filter((vehicle) => (apiClass ? vehicle.class === apiClass : true))
    .map((vehicle) => ({
      label: vehicle.vehicleName,
      value: vehicle.id,
      detail: buildDetail(vehicle),
    }));
}
