import type { FleetBookingPrefill } from "@/src/features/FleetSection/utils/fleetBookingPrefill";
import type { FormValues } from "../types";

export function applyFleetPrefillToFormValues(
  base: FormValues,
  prefill: FleetBookingPrefill,
): FormValues {
  return {
    ...base,
    car: prefill.vehicleId,
    carType: prefill.carType,
  };
}
