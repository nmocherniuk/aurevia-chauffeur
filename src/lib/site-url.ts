export const DEFAULT_SITE_URL = "https://www.Riviera Prime.fr";

export function getSiteUrl(): string {
    return process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
}

export function toAbsoluteUrl(pathOrUrl: string): string {
    try {
        // If already absolute, keep as-is.
        return new URL(pathOrUrl).toString();
    } catch {
        return new URL(pathOrUrl, getSiteUrl()).toString();
    }
}