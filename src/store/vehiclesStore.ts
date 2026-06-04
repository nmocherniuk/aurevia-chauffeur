import { create } from "zustand";
import { getPublicVehicles } from "@/src/api/vehicles";
import type { PublicVehicleJson } from "@/src/features/FleetSection/types/publicVehicle";

export type VehiclesStatus = "idle" | "loading" | "success" | "error";

type VehiclesState = {
  vehicles: PublicVehicleJson[];
  status: VehiclesStatus;
  /** Fetches the public vehicle catalog once; re-runs only on force or after an error. */
  fetchVehicles: (options?: { force?: boolean }) => Promise<void>;
};

export const useVehiclesStore = create<VehiclesState>((set, get) => ({
  vehicles: [],
  status: "idle",

  fetchVehicles: async ({ force = false } = {}) => {
    const { status } = get();
    if (!force && (status === "loading" || status === "success")) {
      return;
    }

    set({ status: "loading" });
    try {
      const vehicles = await getPublicVehicles();
      set({ vehicles, status: "success" });
    } catch {
      set({ vehicles: [], status: "error" });
    }
  },
}));
