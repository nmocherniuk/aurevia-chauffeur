import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSectionIdFromHref(href: string): string | null {
  const hash = href.split('#')[1];
  return hash ?? null;
}

const DEFAULT_SCROLL_OFFSET = -77;

export function scrollToSection(
  sectionId: string,
  offset: number = DEFAULT_SCROLL_OFFSET
): void {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(sectionId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
