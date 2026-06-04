import type { ComponentType } from "react";
import { Location } from "@/src/components/SVGManager/Location";
import { Vehicle } from "@/src/components/SVGManager/Vehicle";
import { Person } from "@/src/components/SVGManager/Person";
import { PaymentCard } from "@/src/components/SVGManager/PaymentCard";
import type { StepIconProps } from "@/src/components/StepIndicator";
import type { VehicleSelectOption } from "@/src/features/FormSection/utils/vehicleOptions";
import type { bookingFormContent as FrBookingForm } from "@/src/content/locales/fr/bookingForm";
import type { FormStep } from "./types";

type BookingFormContent = typeof FrBookingForm;

export function getFormSteps(
  content: BookingFormContent,
  vehicleOptions: VehicleSelectOption[] = [],
): FormStep[] {
  return [
    {
      label: content.steps.journey,
      icon: Location as ComponentType<StepIconProps>,
      iconSize: 25,
      fields: [
        {
          type: "select",
          name: "tripType",
          label: content.journey.tripType.label,
          placeholder: content.journey.tripType.placeholder,
          options: [...content.tripTypes],
        },
        {
          type: "input",
          name: "from",
          label: content.journey.from.label,
          placeholder: content.journey.fromPlaceholder,
        },
        {
          type: "input",
          name: "to",
          label: content.journey.to.label,
          placeholder: content.journey.to.placeholder,
        },
        {
          type: "date",
          name: "date",
          label: content.journey.date.label,
          placeholder: content.journey.date.placeholder,
        },
        {
          type: "time",
          name: "time",
          label: content.journey.time.label,
          placeholder: content.journey.time.placeholder,
        },
        {
          type: "time",
          name: "endTime",
          label: content.journey.endTime.label,
          placeholder: content.journey.endTime.placeholder,
        },
      ],
    },
    {
      label: content.steps.vehicle,
      icon: Vehicle as ComponentType<StepIconProps>,
      iconSize: 22,
      fields: [
        {
          type: "select",
          name: "carType",
          label: content.vehicle.carType.label,
          placeholder: content.vehicle.carType.placeholder,
          options: [...content.vehicleClasses],
        },
        {
          type: "select",
          name: "car",
          label: content.vehicle.car.label,
          placeholder: content.vehicle.car.placeholder,
          options: vehicleOptions,
        },
      ],
    },
    {
      label: content.steps.passenger,
      icon: Person as ComponentType<StepIconProps>,
      iconSize: 21,
      fields: [
        {
          type: "input",
          name: "firstName",
          label: content.passenger.firstName.label,
          placeholder: content.passenger.firstName.placeholder,
        },
        {
          type: "input",
          name: "lastName",
          label: content.passenger.lastName.label,
          placeholder: content.passenger.lastName.placeholder,
        },
        {
          type: "input",
          name: "email",
          label: content.passenger.email.label,
          placeholder: content.passenger.email.placeholder,
        },
        {
          type: "input",
          name: "phone",
          label: content.passenger.phone.label,
          placeholder: content.passenger.phone.placeholder,
        },
        {
          type: "textarea",
          name: "notesForChauffeur",
          label: content.passenger.notes.label,
          placeholder: content.passenger.notes.placeholder,
        },
      ],
    },
    {
      label: content.steps.payment,
      icon: PaymentCard as ComponentType<StepIconProps>,
      iconSize: 22,
      fields: [],
    },
  ];
}
