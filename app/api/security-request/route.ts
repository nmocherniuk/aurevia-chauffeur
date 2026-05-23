import { NextRequest, NextResponse } from "next/server";
import { getBackendApiBaseUrl } from "@/src/lib/backend-api-url";

function errorMessageFromBody(data: unknown): string {
  if (data && typeof data === "object" && "message" in data) {
    const message = (data as { message: unknown }).message;
    if (typeof message === "string" && message.trim()) {
      return message;
    }
  }
  return "Request failed";
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  const targetUrl = `${getBackendApiBaseUrl()}/security-request`;

  try {
    const upstream = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data: unknown = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      return NextResponse.json(
        { message: errorMessageFromBody(data) },
        { status: upstream.status },
      );
    }

    if (data && typeof data === "object" && "ok" in data) {
      return NextResponse.json(data, { status: upstream.status });
    }

    return NextResponse.json({ ok: true }, { status: upstream.status });
  } catch (error) {
    console.error("[security-request] proxy to backend failed:", error);
    return NextResponse.json(
      { message: "Backend unavailable. Please try again later." },
      { status: 502 },
    );
  }
}
