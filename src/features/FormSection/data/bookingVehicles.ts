/** Values must match pricing / booking API vehicle catalog. */
export const BOOKING_VEHICLE_IDS = {
  mercedesS580: "cafff580-9141-46fe-b2d5-18ea3d9fc543",
  bmw7: "72f6d70d-a7c7-497e-9c98-073dbdb5163b",
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
