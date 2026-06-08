import type { Fleet } from "@/src/features/FleetSection/data";
import type { FleetBookingPrefill } from "@/src/features/FleetSection/utils/fleetBookingPrefill";

export function buildFleetBookingPrefill(car: Fleet): FleetBookingPrefill {
  return {
    vehicleId: car.bookingVehicleId,
    carType: car.formCarType,
  };
}
