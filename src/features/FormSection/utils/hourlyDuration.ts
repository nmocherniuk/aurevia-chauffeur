import dayjs from "@/src/lib/dayjs";

function parseTimeToMinutes(hhmm: string): number | null {
  const d = dayjs(hhmm, "HH:mm", true);
  if (!d.isValid()) return null;
  return d.hour() * 60 + d.minute();
}

/**
 * Minutes between start and end on the same calendar day (end must be after start).
 */
export function hourlyDurationMinutes(start: string, end: string): number | null {
  const a = parseTimeToMinutes(start);
  const b = parseTimeToMinutes(end);
  if (a === null || b === null) return null;
  const d = b - a;
  if (d <= 0) return null;
  return d;
}
