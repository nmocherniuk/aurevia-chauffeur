/**
 * Single coordinate model for the landing app (mirrors backend `src/lib/geo.ts`).
 * Always named fields — never a `[a, b]` tuple.
 */
export type GeoPoint = { lat: number; lng: number };

/** A place the user picked from autocomplete; `location` comes from our backend details lookup. */
export type SelectedPlace = {
  placeId: string;
  label: string;
  secondaryText?: string;
  location: GeoPoint;
};

/** One autocomplete suggestion from `GET /public/places/search` (no coordinates yet). */
export type PlaceSuggestion = {
  placeId: string;
  label: string;
  secondaryText: string;
  fullText: string;
  isAirport: boolean;
};

/** Formik stores strings; parses `"43.7"` / `"7.27"` back into a GeoPoint or null. */
export function geoPointFromStrings(
  lat: string | undefined,
  lng: string | undefined,
): GeoPoint | null {
  if (!lat || !lng) return null;
  const p = { lat: Number(lat), lng: Number(lng) };
  return Number.isFinite(p.lat) && Number.isFinite(p.lng) ? p : null;
}
