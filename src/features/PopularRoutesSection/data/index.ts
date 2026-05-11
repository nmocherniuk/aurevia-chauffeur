export interface Route {
  id: number;
  from: string;
  to: string;
  duration: string;
  distance: number;
}

export type RouteTabId = "cityToCity" | "travelTransfers" | "winterTrips";

export const ROUTES: Record<RouteTabId, Route[]> = {
  cityToCity: [
    { id: 1, from: "Monaco", to: "Cannes", duration: "45 min", distance: 50 },
    {
      id: 2,
      from: "Monaco",
      to: "Antibes / Cap d'Antibes",
      duration: "25 min",
      distance: 20,
    },
    {
      id: 3,
      from: "Monaco",
      to: "Saint-Tropez",
      duration: "1 h 45 min",
      distance: 100,
    },
    {
      id: 4,
      from: "Cannes",
      to: "Saint-Tropez",
      duration: "1 h 30 min",
      distance: 90,
    },
    { id: 5, from: "Cannes", to: "Antibes", duration: "30 min", distance: 25 },
    { id: 6, from: "Nice", to: "Saint-Tropez", duration: "2 h", distance: 110 },
  ],

  travelTransfers: [
    {
      id: 1,
      from: "Nice Airport",
      to: "Monaco",
      duration: "40 min",
      distance: 30,
    },
    {
      id: 2,
      from: "Nice Airport",
      to: "Cannes",
      duration: "30 min",
      distance: 27,
    },
    {
      id: 3,
      from: "Nice Airport",
      to: "Saint-Tropez",
      duration: "1 h 30 min",
      distance: 100,
    },
    {
      id: 4,
      from: "Nice Airport",
      to: "Antibes / Cap d'Antibes",
      duration: "25 min",
      distance: 20,
    },
    {
      id: 5,
      from: "Monaco",
      to: "Milan / Portofino",
      duration: "3 h 30 min",
      distance: 300,
    },
    {
      id: 6,
      from: "Cannes",
      to: "Marseille Airport (MRS)",
      duration: "2 h",
      distance: 180,
    },
  ],

  winterTrips: [
    {
      id: 1,
      from: "Monaco",
      to: "Courchevel",
      duration: "4 h 30 min",
      distance: 450,
    },
    {
      id: 2,
      from: "Monaco",
      to: "Val d'Isère",
      duration: "5 h 30 min",
      distance: 520,
    },
    {
      id: 3,
      from: "Nice",
      to: "Courchevel",
      duration: "4 h 15 min",
      distance: 430,
    },
    {
      id: 4,
      from: "Nice",
      to: "Val d'Isère",
      duration: "5 h 15 min",
      distance: 500,
    },
  ],
};
