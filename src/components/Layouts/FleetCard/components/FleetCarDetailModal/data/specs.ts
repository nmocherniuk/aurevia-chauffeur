import type { Fleet } from "@/src/features/FleetSection/data";
import { People } from "@/src/components/SVGManager/People";
import { Bagage } from "@/src/components/SVGManager/Bagage";
import { VehicleFilled } from "@/src/components/SVGManager/VehicleFilled";
import { CalendarFilled } from "@/src/components/SVGManager/CalendarFilled";
import { Transmission } from "@/src/components/SVGManager/Transmission";
import { CarSeat } from "@/src/components/SVGManager/CarSeat";

export type CarSpecItem = {
  id: string;
  Icon: React.ComponentType<{ fill?: string; className?: string }>;
  label: string;
  getValue: (car: Fleet) => string | number | null | undefined;
};

export const CAR_SPECS: CarSpecItem[] = [
  {
    id: "passengers",
    Icon: People,
    label: "Passagers:",
    getValue: (car) => car.passengers,
  },
  {
    id: "vehicleType",
    Icon: VehicleFilled,
    label: "Vehicle type:",
    getValue: (car) => car.vehicleType ?? null,
  },
  {
    id: "modelYear",
    Icon: CalendarFilled,
    label: "Model year:",
    getValue: (car) => car.modelYear != null ? String(car.modelYear) : null,
  },
  {
    id: "baggage",
    Icon: Bagage,
    label: "bagages:",
    getValue: (car) => car.baggage,
  },
  {
    id: "transmission",
    Icon: Transmission,
    label: "Transmission:",
    getValue: (car) => car.transmission ?? null,
  },
  {
    id: "interior",
    Icon: CarSeat,
    label: "Interior:",
    getValue: (car) => car.interior ?? null,
  },
];
