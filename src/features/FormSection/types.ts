export type TripType = "one_way" | "hourly";

/**
 * Journey step fields. For hourly, `endTime` is HH:mm; duration is derived for API.
 */
export type BookingFormState = {
  tripType: TripType | "";
  from?: string;
  to?: string;
  /** Set when user picks a Nominatim result (stored as strings for Formik). */
  fromLat?: string;
  fromLng?: string;
  toLat?: string;
  toLng?: string;
  date: string;
  time: string;
  endTime?: string;
};

export type FormValues = Record<string, string | boolean>;
