export type NominatimSearchHit = {
  lat: string;
  lon: string;
  display_name: string;
  importance?: number | string;
  class?: string;
  type?: string;
};
