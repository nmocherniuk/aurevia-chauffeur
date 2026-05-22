import { useState, useEffect, useRef } from "react";
import type { NavLink } from "@/src/data/routes";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: "-20% 0px -50% 0px",
};

export function useActiveSectionId(
  links: NavLink[],
): [string | null, (id: string | null) => void] {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    ratiosRef.current = {};

    const sectionIds = links
      .map((l) => l.sectionId)
      .filter((id): id is string => id != null);

    const allowedIds = new Set(sectionIds);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const MIN_RATIO = 0.01;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id) {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio;
        }
      });
      const entries_ = Object.entries(ratiosRef.current).filter(([id]) =>
        allowedIds.has(id),
      );
      if (entries_.length === 0) return;
      const [maxId, maxRatio] = entries_.reduce((a, b) =>
        a[1] >= b[1] ? a : b,
      );
      setActiveSectionId((prev) =>
        maxRatio >= MIN_RATIO ? maxId : prev,
      );
    }, OBSERVER_OPTIONS);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  return [activeSectionId, setActiveSectionId];
}
