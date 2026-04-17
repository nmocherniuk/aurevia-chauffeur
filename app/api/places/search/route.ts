import { NextRequest, NextResponse } from "next/server";

const MAPBOX = "https://api.mapbox.com/geocoding/v5/mapbox.places";

type MapboxFeature = {
  id: string;
  text: string;
  place_name: string;
  relevance?: number;
  center?: [number, number]; // [lon, lat]
  geometry?: { coordinates?: [number, number] };
  place_type?: string[];
  properties?: { address?: string };
  context?: Array<{ id: string; text: string }>;
};

function pickLang(req: NextRequest): string {
  const h = req.headers.get("accept-language") ?? "";
  const first = h.split(",")[0]?.trim() ?? "";
  const lang = first.split(";")[0]?.trim() ?? "";
  return lang || "fr";
}

function ctxText(feature: MapboxFeature, prefix: string): string {
  const ctx = feature.context ?? [];
  const item = ctx.find((c) => c.id.startsWith(prefix));
  return item?.text ?? "";
}

function toHit(feature: MapboxFeature) {
  const coords = feature.center ?? feature.geometry?.coordinates;
  const lon = coords?.[0];
  const lat = coords?.[1];
  if (typeof lat !== "number" || typeof lon !== "number") return null;

  const country = ctxText(feature, "country.");
  const city =
    ctxText(feature, "place.") ||
    ctxText(feature, "locality.") ||
    ctxText(feature, "neighborhood.") ||
    "";

  return {
    lat: String(lat),
    lon: String(lon),
    display_name: feature.place_name ?? feature.text,
    importance:
      typeof feature.relevance === "number" ? String(feature.relevance) : undefined,
    class: "mapbox",
    type: (feature.place_type?.[0] ?? "place") as string,
    address: {
      house_number: feature.properties?.address,
      road: feature.text,
      city: city || undefined,
      country: country || undefined,
    },
  };
}

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim();
  if (q.length < 2) {
    return NextResponse.json([]);
  }

  const token = process.env.MAPBOX_TOKEN;
  if (!token) return NextResponse.json([]);

  const lang = pickLang(req);

  const url = new URL(`${MAPBOX}/${encodeURIComponent(q)}.json`);
  url.searchParams.set("access_token", token);
  url.searchParams.set("autocomplete", "true");
  url.searchParams.set("limit", "5");
  url.searchParams.set("language", lang);
  url.searchParams.set("types", "address,poi,place");

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 0 } });

    if (!res.ok) {
      return NextResponse.json([]);
    }

    const data = (await res.json()) as unknown as { features?: MapboxFeature[] };
    const features = Array.isArray(data?.features) ? data.features : [];
    const hits = features.map(toHit).filter(Boolean);
    return NextResponse.json(hits);
  } catch {
    return NextResponse.json([]);
  }
}


async function getRoute(from, to) {
  const token = process.env.MAPBOX_TOKEN;

  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${from.lng},${from.lat};${to.lng},${to.lat}?access_token=${token}&overview=false`;

  const res = await fetch(url);
  const data = await res.json();

  const route = data.routes?.[0];

  if (!route) throw new Error("Route not found");

  return {
    distanceKm: route.distance / 1000,
    durationMin: route.duration / 60,
  };
}