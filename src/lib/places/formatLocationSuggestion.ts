import type { NominatimSearchHit } from "./nominatimTypes";

export type FormattedLocationSuggestion = {
  title: string;
  subtitle: string;
};

const POSTAL_PATTERN = /^\d{4,12}(-\d{4})?$/;
const UK_POSTAL_PATTERN = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

function isAdminNoise(segment: string): boolean {
  const t = segment.toLowerCase();
  return /\b(oblast|област|raion|район|hromada|громада|urban\s+hromada|voivodeship|wojew|powiat|\bgmina\b|district|province|prefecture|department|county|krai|parish|metro\s+area|arrondissement|kreis|landskreis)\b/i.test(
    t,
  );
}

function isPostalCode(segment: string): boolean {
  const s = segment.trim();
  if (POSTAL_PATTERN.test(s)) return true;
  if (UK_POSTAL_PATTERN.test(s.replace(/\s+/g, " "))) return true;
  return false;
}

function splitSegments(displayName: string): string[] {
  return displayName
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function pickCity(address?: NominatimSearchHit["address"]): string {
  if (!address) return "";
  return (
    address.city ??
    address.town ??
    address.village ??
    address.municipality ??
    address.suburb ??
    address.neighbourhood ??
    ""
  );
}

function formatTitleFromAddress(address?: NominatimSearchHit["address"]): string {
  if (!address) return "";
  const road = address.road ?? address.pedestrian ?? "";
  const house = address.house_number ?? "";
  if (!road && !house) return "";
  return [road, house].filter(Boolean).join(" ").trim();
}

export function formatLocationSuggestion(
  item: Pick<NominatimSearchHit, "display_name" | "address">,
): FormattedLocationSuggestion {
  const titleFromAddress = formatTitleFromAddress(item.address);
  const cityFromAddress = pickCity(item.address);
  const countryFromAddress = item.address?.country ?? "";
  if (titleFromAddress) {
    const subtitle =
      cityFromAddress && countryFromAddress
        ? `${cityFromAddress}, ${countryFromAddress}`
        : cityFromAddress || countryFromAddress || "";
    return { title: titleFromAddress, subtitle };
  }

  const raw = item.display_name.trim();
  if (!raw) {
    return { title: "", subtitle: "" };
  }

  const parts = splitSegments(raw).filter(
    (seg) => !isPostalCode(seg) && !isAdminNoise(seg),
  );

  if (parts.length === 0) {
    const fallback = raw.split(",")[0]?.trim() ?? raw;
    return { title: fallback.slice(0, 120), subtitle: "" };
  }

  if (parts.length === 1) {
    return { title: parts[0], subtitle: "" };
  }

  if (parts.length === 2) {
    return { title: parts[0], subtitle: parts[1] };
  }

  const country = parts[parts.length - 1];
  const city = parts[parts.length - 2];
  let titleParts = parts.slice(0, -2);

  if (/^\d+[A-Za-zА-Яа-я]?$/i.test(titleParts[0])) {
    if (titleParts.length > 1) {
      titleParts = [`${titleParts[1]} ${titleParts[0]}`];
    }
  }

  const title = titleParts.join(", ").trim();
  const subtitle = `${city}, ${country}`;

  if (!title) {
    return { title: city, subtitle: country };
  }

  return { title, subtitle };
}
