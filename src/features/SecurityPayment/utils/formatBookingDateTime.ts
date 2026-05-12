export function formatBookingDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
}

export function formatBookingTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Paris",
  });
}
