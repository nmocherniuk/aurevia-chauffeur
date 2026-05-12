import { useEffect, useMemo, useRef, useState } from "react";
import type { NominatimSearchHit } from "@/src/lib/places/nominatimTypes";
import { prioritizeNominatimResults } from "@/src/lib/places/prioritizeResults";

const LIMIT = 5;

export function usePlacesSearch(debouncedQuery: string) {
  const [hits, setHits] = useState<NominatimSearchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const reqId = useRef(0);

  const queryOk = useMemo(
    () => debouncedQuery.trim().length >= 2,
    [debouncedQuery],
  );

  useEffect(() => {
    if (!queryOk) {
      setHits([]);
      setLoading(false);
      return;
    }

    const id = ++reqId.current;
    const ac = new AbortController();
    setLoading(true);

    const run = async () => {
      try {
        const url = `/api/places/search?q=${encodeURIComponent(debouncedQuery.trim())}`;
        const res = await fetch(url, { signal: ac.signal });
        if (reqId.current !== id) return;
        const raw = (await res.json()) as unknown;
        const arr = Array.isArray(raw) ? (raw as NominatimSearchHit[]) : [];
        const ranked = prioritizeNominatimResults(arr, LIMIT);
        if (reqId.current !== id) return;
        setHits(ranked);
      } catch {
        if (reqId.current !== id) return;
        setHits([]);
      } finally {
        if (reqId.current === id) {
          setLoading(false);
        }
      }
    };

    void run();

    return () => {
      ac.abort();
    };
  }, [debouncedQuery, queryOk]);

  const showNoResults = queryOk && !loading && hits.length === 0;

  return { hits, loading, showNoResults };
}
