export type TripType = "one_way" | "hourly";

/**
 * Journey step fields. For hourly, `endTime` is HH:mm; duration is derived for API.
 */
export type BookingFormState = {
  tripType: TripType | "";
  from?: string;
  to?: string;
  /**
   * Set when the user picks a Google suggestion (strings for Formik):
   * placeId + coordinates returned by our backend details lookup.
   * Cleared as soon as the text is edited by hand.
   */
  fromPlaceId?: string;
  fromLat?: string;
  fromLng?: string;
  toPlaceId?: string;
  toLat?: string;
  toLng?: string;
  date: string;
  time: string;
  endTime?: string;
};

export type FormValues = Record<string, string | boolean>;
