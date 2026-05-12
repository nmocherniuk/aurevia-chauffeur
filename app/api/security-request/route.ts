import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    if (!body || typeof body !== "object") {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }
    // Future: forward to email / CRM. Payload retained server-side only in logs if needed.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
