import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import type { PlaceSuggestion } from "@/src/lib/geo";
import { MIN_PLACE_QUERY_CHARS, searchPlaces } from "@/src/api/places";
import { useLocale } from "@/src/providers/LocaleProvider";

const LIMIT = 5;

/** Airports first (transfers are mostly airport runs); otherwise keep Google's order. */
function rank(suggestions: PlaceSuggestion[]): PlaceSuggestion[] {
  return suggestions
    .map((s, i) => ({ s, i }))
    .sort((a, b) => Number(b.s.isAirport) - Number(a.s.isAirport) || a.i - b.i)
    .map(({ s }) => s)
    .slice(0, LIMIT);
}

/**
 * @param debouncedQuery already debounced input text
 * @param getSessionToken current autocomplete session token (one per field,
 *   rotated after a pick) — groups keystrokes + final details into one billed session.
 */
export function usePlacesSearch(
  debouncedQuery: string,
  getSessionToken: () => string,
) {
  const locale = useLocale();
  const [hits, setHits] = useState<PlaceSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reqId = useRef(0);

  const trimmed = debouncedQuery.trim();
  const queryOk = useMemo(() => trimmed.length >= MIN_PLACE_QUERY_CHARS, [trimmed]);

  useEffect(() => {
    if (!queryOk) {
      setHits([]);
      setLoading(false);
      setError(null);
      return;
    }

    const id = ++reqId.current;
    const ac = new AbortController();
    setLoading(true);
    setError(null);

    searchPlaces({ q: trimmed, lang: locale, session: getSessionToken(), signal: ac.signal })
      .then((res) => {
        if (reqId.current !== id) return;
        setHits(rank(res));
      })
      .catch((e: unknown) => {
        if (axios.isCancel(e) || reqId.current !== id) return;
        setHits([]);
        setError(e instanceof Error ? e.message : "Address search failed");
      })
      .finally(() => {
        if (reqId.current === id) setLoading(false);
      });

    return () => ac.abort();
    // getSessionToken reads a ref; it is intentionally not a dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trimmed, queryOk, locale]);

  const showNoResults = queryOk && !loading && !error && hits.length === 0;

  return { hits, loading, error, showNoResults, queryOk };
}
