/**
 * Base URL for the Express API (includes `/api` suffix).
 *
 * - `BACKEND_URL` — e.g. `http://localhost:5000` or `https://api.example.com`
 * - `NEXT_PUBLIC_API_URL` — e.g. `http://localhost:5000/api` (used by client axios)
 */
export function getBackendApiBaseUrl(): string {
  const backend = process.env.BACKEND_URL?.trim();
  if (backend) {
    const normalized = backend.replace(/\/+$/, "");
    return normalized.endsWith("/api") ? normalized : `${normalized}/api`;
  }

  const publicApi = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (publicApi) {
    return publicApi.replace(/\/+$/, "");
  }

  return "http://localhost:5000/api";
}
