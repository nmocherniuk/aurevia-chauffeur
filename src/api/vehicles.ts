import { api } from "./api";
import type { PublicVehicleJson } from "@/src/features/FleetSection/types/publicVehicle";
import {
  normalizePublicVehicle,
  sortVehiclesByCreatedAt,
} from "@/src/features/FleetSection/utils/sortVehicles";

type VehiclesResponse =
  | PublicVehicleJson[]
  | { vehicles?: PublicVehicleJson[] };

function normalizeVehiclesList(items: PublicVehicleJson[]): PublicVehicleJson[] {
  return sortVehiclesByCreatedAt(items.map(normalizePublicVehicle));
}

export async function getPublicVehicles() {
  const { data } = await api.get<VehiclesResponse>("/public/vehicles");
  if (Array.isArray(data)) return normalizeVehiclesList(data);
  return Array.isArray(data.vehicles)
    ? normalizeVehiclesList(data.vehicles)
    : [];
}
