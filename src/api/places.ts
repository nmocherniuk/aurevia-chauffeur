import axios from "axios";
import { api } from "./api";
import type { GeoPoint, PlaceSuggestion } from "@/src/lib/geo";

/**
 * Address search goes through our backend (`/public/places/*`), which holds the
 * Google key and caches placeId → location for server-side price verification.
 * No Google key or Google URL ever reaches the browser.
 */

export const MIN_PLACE_QUERY_CHARS = 3;

export class PlacesRequestError extends Error {}

function errorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    const msg = (error.response?.data as { message?: unknown } | undefined)?.message;
    if (typeof msg === "string" && msg) return msg;
  }
  return fallback;
}

export async function searchPlaces(params: {
  q: string;
  lang: string;
  session: string;
  signal?: AbortSignal;
}): Promise<PlaceSuggestion[]> {
  try {
    const { data } = await api.get<{ suggestions?: PlaceSuggestion[] }>(
      "/public/places/search",
      {
        params: { q: params.q, lang: params.lang, session: params.session },
        signal: params.signal,
      },
    );
    return Array.isArray(data?.suggestions) ? data.suggestions : [];
  } catch (error) {
    if (axios.isCancel(error)) throw error;
    throw new PlacesRequestError(errorMessage(error, "Address search failed"));
  }
}

export async function getPlaceLocation(params: {
  placeId: string;
  lang: string;
  session: string;
}): Promise<GeoPoint> {
  try {
    const { data } = await api.get<{ location?: GeoPoint }>("/public/places/details", {
      params: { id: params.placeId, lang: params.lang, session: params.session },
    });
    const loc = data?.location;
    if (!loc || !Number.isFinite(loc.lat) || !Number.isFinite(loc.lng)) {
      throw new PlacesRequestError("Selected address has no coordinates");
    }
    return { lat: loc.lat, lng: loc.lng };
  } catch (error) {
    if (error instanceof PlacesRequestError) throw error;
    throw new PlacesRequestError(errorMessage(error, "Could not resolve the selected address"));
  }
}
