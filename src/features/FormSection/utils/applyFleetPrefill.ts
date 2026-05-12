import { getFleetFormPrefill } from "@/src/features/FleetSection/utils/fleetBookingPrefill";
import type { FormValues } from "../types";

export function applyFleetPrefillToFormValues(
  base: FormValues,
  fleetCarId: string,
): FormValues | null {
  const prefill = getFleetFormPrefill(fleetCarId);
  if (!prefill) return null;
  return {
    ...base,
    car: prefill.car,
    carType: prefill.carType,
  };
}
