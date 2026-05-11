export type VehicleApiClass = "COMFORT" | "BUSINESS" | "VAN";

export type PublicVehicleJson = {
  id: string;
  vehicleName: string;
  class: Lowercase<VehicleApiClass>;
  year: string;
  imageUrl: string | null;
  description: string;
  passengers: number | null;
  baggageCount: number | null;
  vehicleType: string;
  transmission: string;
  interior: string;
  amenities: string[];
};
