export type NominatimSearchHit = {
  lat: string;
  lon: string;
  display_name: string;
  importance?: number | string;
  class?: string;
  type?: string;
  address?: {
    house_number?: string;
    road?: string;
    pedestrian?: string;
    neighbourhood?: string;
    suburb?: string;
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    state?: string;
    country?: string;
  };
};
