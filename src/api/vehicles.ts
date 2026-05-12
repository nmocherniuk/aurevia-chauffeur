import { api } from "./api";
import type { PublicVehicleJson } from "@/src/features/FleetSection/types/publicVehicle";

export async function getPublicVehicles() {
  const { data } = await api.get<
    PublicVehicleJson[] | { vehicles?: PublicVehicleJson[] }
  >("/public/vehicles");
  if (Array.isArray(data)) return data;
  return Array.isArray(data.vehicles) ? data.vehicles : [];
}
