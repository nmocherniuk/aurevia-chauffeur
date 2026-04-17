function parseTimeToMinutes(time: string): number | null {
  const t = time.trim();
  const m = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(t);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (!Number.isFinite(h) || !Number.isFinite(min)) return null;
  if (h < 0 || h > 23) return null;
  if (min < 0 || min > 59) return null;
  return h * 60 + min;
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
