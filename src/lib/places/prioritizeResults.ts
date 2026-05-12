import type { NominatimSearchHit } from "./nominatimTypes";

function parseImportance(hit: NominatimSearchHit): number {
  const i = hit.importance;
  if (typeof i === "number" && !Number.isNaN(i)) return i;
  if (typeof i === "string") {
    const n = Number.parseFloat(i);
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

function score(hit: NominatimSearchHit): number {
  let s = parseImportance(hit);
  const t = `${hit.class ?? ""} ${hit.type ?? ""}`.toLowerCase();
  const name = (hit.display_name ?? "").toLowerCase();
  if (t.includes("aeroway") || t.includes("aerodrome") || name.includes("airport")) {
    s += 0.35;
  }
  if (hit.type === "administrative" && hit.class === "boundary") {
    s += 0.08;
  }
  return s;
}

export function prioritizeNominatimResults(
  hits: NominatimSearchHit[],
  limit: number,
): NominatimSearchHit[] {
  return [...hits]
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}
