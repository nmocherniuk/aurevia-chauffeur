"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/src/lib/utils";

/**
 * When `active` becomes true, smoothly scrolls the window so the target section
 * is in view (same offset behavior as header nav via {@link scrollToSection}).
 */
export function useScrollToSectionWhen(
  active: boolean,
  sectionId: string,
  offset?: number,
) {
  useEffect(() => {
    if (!active) return;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(sectionId, offset);
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [active, sectionId, offset]);
}
