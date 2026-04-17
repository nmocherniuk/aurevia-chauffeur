import { api } from "./api";
import axios from "axios";

export type GetPriceBody = {
    vehicleId: string;
    tripType: "one_way" | "hourly";
    distanceKm?: number;
    /** Provide for one_way so backend can compute distanceKm via coords. */
    fromLat?: number;
    fromLon?: number;
    toLat?: number;
    toLon?: number;
    /** Provide for hourly. */
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
