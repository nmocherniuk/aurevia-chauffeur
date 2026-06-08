import { fleets } from "../data";
import type { Fleet } from "../data";

const FLEET_PREFILL_SESSION_KEY = "Riviera Prime_driver_fleet_prefill";

export const FLEET_BOOKING_PREFILL_EVENT = "Riviera Prime-fleet-booking-prefill";

export type FleetCategoryKey = keyof typeof fleets;

export type FleetBookingPrefill = {
  vehicleId: string;
  carType: "comfort" | "business" | "van";
};

const CATEGORY_TO_FORM_CAR_TYPE: Record<
  FleetCategoryKey,
  FleetBookingPrefill["carType"]
> = {
  comfort: "comfort",
  business: "business",
  van: "van",
};

/** Передає вибране авто у форму на `/driver` без query у посиланні. */
export function queueFleetBookingPrefill(prefill: FleetBookingPrefill): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(FLEET_PREFILL_SESSION_KEY, JSON.stringify(prefill));
  } catch {
    /* private mode / quota */
  }
}

export function consumeFleetBookingPrefill(): FleetBookingPrefill | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(FLEET_PREFILL_SESSION_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(FLEET_PREFILL_SESSION_KEY);

    try {
      const parsed = JSON.parse(raw) as Partial<FleetBookingPrefill>;
      if (parsed.vehicleId && parsed.carType) {
        return {
          vehicleId: parsed.vehicleId,
          carType: parsed.carType,
        };
      }
    } catch {
      /* legacy: plain fleet card id string */
    }

    const legacy = getFleetFormPrefill(raw);
    return legacy
      ? { vehicleId: legacy.car, carType: legacy.carType }
      : null;
  } catch {
    return null;
  }
}

/** Після `router.push('/driver')` — форма на тій самій вкладці підхопить sessionStorage. */
export function notifyFleetBookingPrefillReady(): void {
  if (typeof window === "undefined") return;
  queueMicrotask(() => {
    window.dispatchEvent(new CustomEvent(FLEET_BOOKING_PREFILL_EVENT));
  });
}

export function findFleetCarById(
  fleetCarId: string,
): { car: Fleet; category: FleetCategoryKey } | null {
  for (const category of Object.keys(fleets) as FleetCategoryKey[]) {
    const car = fleets[category].find((c) => c.id === fleetCarId);
    if (car) return { car, category };
  }
  return null;
}

/** @deprecated Legacy static fleet catalog lookup. */
export function getFleetFormPrefill(fleetCarId: string): {
  car: string;
  carType: FleetBookingPrefill["carType"];
} | null {
  const found = findFleetCarById(fleetCarId);
  if (!found) return null;
  const vehicleId = found.car.bookingVehicleId;
  if (!vehicleId) return null;
  return {
    car: vehicleId,
    carType: CATEGORY_TO_FORM_CAR_TYPE[found.category],
  };
}
