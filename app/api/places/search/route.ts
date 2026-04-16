import { NextRequest, NextResponse } from "next/server";

const NOMINATIM = "https://nominatim.openstreetmap.org/search";

/** Server-side proxy: browser clients cannot set a compliant User-Agent. */
export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim();
  if (q.length < 2) {
    return NextResponse.json([]);
  }

  const url = new URL(NOMINATIM);
  url.searchParams.set("q", q);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "12");
  url.searchParams.set("addressdetails", "1");

  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  try {
    const res = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
        "Accept-Language": "en", // Set language to French
        "User-Agent": `AureviaChauffeur/1.0 (${appUrl}; booking form)`,
      },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json([]);
    }

    const data = (await res.json()) as unknown;
    return NextResponse.json(Array.isArray(data) ? data : []);
  } catch {
    return NextResponse.json([]);
  }
}
