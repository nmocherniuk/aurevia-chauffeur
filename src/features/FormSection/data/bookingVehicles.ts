/** Values must match pricing / booking API vehicle catalog. */
export const BOOKING_VEHICLE_IDS = {
  mercedesS580: "d612e445-2cb0-4b6d-ba98-69c540051705",
  bmw7: "d612e445-2cb0-4b6d-ba98-69c540051705",
} as const;

export const BOOKING_VEHICLE_OPTIONS = [
  {
    label: "Mercedes S580",
    value: BOOKING_VEHICLE_IDS.mercedesS580,
    detail: "3P · 3L",
  },
  {
    label: "BMW 7 Series",
    value: BOOKING_VEHICLE_IDS.bmw7,
    detail: "3P · 2L",
  },
] as const;
