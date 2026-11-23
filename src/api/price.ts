import { api } from "./api";
import axios from "axios";

/**
 * One-way: both addresses as selected places (placeId + the coordinates our
 * backend returned). The backend re-verifies them and computes the distance
 * with Google Routes — the client never sends a distance.
 */
export type GetPriceBody = {
    vehicleId: string;
    tripType: "one_way" | "hourly";
    fromPlaceId?: string;
    fromLat?: number;
    fromLng?: number;
    toPlaceId?: string;
    toLat?: number;
    toLng?: number;
    durationMin?: number;
};

export type PublicPriceQuote = {
    price: number;
    totalPrice: number;
    distanceKm: number | null;
    durationMin: number | null;
};

export async function getPrice(body: GetPriceBody, signal?: AbortSignal) {
    try {
        const { data } = await api.get("/public/pricing/quote", { params: body, signal });
        const quote = (data as { quote?: PublicPriceQuote }).quote;
        if (!quote || typeof quote.totalPrice !== "number") {
            throw new Error("Invalid quote response");
        }
        return quote;
    } catch (error) {
        if (axios.isCancel(error) || (error as { code?: string })?.code === "ERR_CANCELED") {
            throw error;
        }

        console.error("error", error);
        throw error;
    }
}
