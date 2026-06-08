import type { PublicVehicleJson } from "../types/publicVehicle";

type RawPublicVehicle = PublicVehicleJson & { created_at?: string };

export function normalizePublicVehicle(raw: RawPublicVehicle): PublicVehicleJson {
  const { created_at, ...rest } = raw;
  return {
    ...rest,
    createdAt: rest.createdAt ?? created_at,
  };
}

function createdAtMs(vehicle: PublicVehicleJson): number {
  const value = vehicle.createdAt;
  if (!value) return Number.POSITIVE_INFINITY;
  const ms = Date.parse(value);
  return Number.isNaN(ms) ? Number.POSITIVE_INFINITY : ms;
}

/** Oldest created vehicles first; items without a date appear last. */
export function sortVehiclesByCreatedAt(
  vehicles: PublicVehicleJson[],
): PublicVehicleJson[] {
  return [...vehicles].sort(
    (a, b) => createdAtMs(a) - createdAtMs(b),
  );
}
