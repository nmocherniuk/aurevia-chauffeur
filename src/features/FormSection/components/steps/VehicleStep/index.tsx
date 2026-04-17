import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import SelectWithError from "@/src/components/SelectWithError";
import { getPrice } from "@/src/api/price";
import { hourlyDurationMinutes } from "@/src/features/FormSection/utils/hourlyDuration";
import type { FormStepProps } from "../types";

export const VehicleStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const selectedVehicleId = (getValue("car", false) as string) || "";
  const tripType = (getValue("tripType", false) as string) || "";
  const fromLat = (getValue("fromLat", false) as string) || "";
  const fromLng = (getValue("fromLng", false) as string) || "";
  const toLat = (getValue("toLat", false) as string) || "";
  const toLng = (getValue("toLng", false) as string) || "";
  const date = (getValue("date", false) as string) || "";
  const time = (getValue("time", false) as string) || "";
  const endTime = (getValue("endTime", false) as string) || "";

  const price = (getValue("price", false) as string) || "";
  const distanceKm = (getValue("distanceKm", false) as string) || "";
  const [isLoadingPrice, setIsLoadingPrice] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const canQuote = useMemo(() => {
    if (!selectedVehicleId) return false;
    if (!date || !time) return false;
    if (!fromLat || !fromLng) return false;

    if (tripType === "hourly") {
      if (!endTime) return false;
      const dur = hourlyDurationMinutes(time, endTime);
      return dur !== null && dur > 0;
    }

    if (tripType === "one_way") {
      if (!toLat || !toLng) return false;
      return true;
    }

    return false;
  }, [
    selectedVehicleId,
    tripType,
    fromLat,
    fromLng,
    toLat,
    toLng,
    date,
    time,
    endTime,
  ]);

  useEffect(() => {
    abortRef.current?.abort();
    abortRef.current = null;

    if (!canQuote) {
      setIsLoadingPrice(false);
      if (price) setValue("price", "");
      if (distanceKm) setValue("distanceKm", "");
      return;
    }

    const ac = new AbortController();
    abortRef.current = ac;
    setIsLoadingPrice(true);

    void getPrice(
      tripType === "hourly"
        ? {
          vehicleId: selectedVehicleId,
          tripType: "hourly",
          durationMin: hourlyDurationMinutes(time, endTime) ?? undefined,
        }
        : {
          vehicleId: selectedVehicleId,
          tripType: "one_way",
          fromLat: Number(fromLat),
          fromLon: Number(fromLng),
          toLat: Number(toLat),
          toLon: Number(toLng),
        },
      ac.signal,
    )
      .then((quote) => {
        if (ac.signal.aborted) return;
        setValue("price", String(quote.totalPrice));
        if (tripType === "one_way" && quote.distanceKm != null) {
          setValue("distanceKm", String(Math.round(quote.distanceKm * 10) / 10));
        } else {
          setValue("distanceKm", "");
        }
      })
      .catch(() => {
        if (ac.signal.aborted) return;
        setValue("price", "");
        setValue("distanceKm", "");
      })
      .finally(() => {
        if (!ac.signal.aborted) setIsLoadingPrice(false);
      });

    return () => {
      ac.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canQuote, selectedVehicleId, fromLat, fromLng, toLat, toLng, date, time, tripType, endTime]);

  return (
    <div>
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-2">
        <div className="flex flex-col gap-y-2.5 gap-x-4 ">
          <SelectWithError
            name="carType"
            label="Car type"
            placeholder="Select vehicle type"
            options={[
              { label: "Comfort", value: "comfort" },
              { label: "Business", value: "business" },
              { label: "Luxury", value: "luxury" },
            ]}
            value={(getValue("carType", false) as string) || ""}
            onChange={(e) => setValue("carType", e.target.value)}
            onBlur={handleBlur("carType")}
            onFocus={handleFocus("carType")}
            error={errors["carType"]}
          />
          <SelectWithError
            name="car"
            label="Car"
            placeholder="Select vehicle type"
            options={[
              {
                label: "Mercedes S580",
                value: "cafff580-9141-46fe-b2d5-18ea3d9fc543",
                detail: "3P · 3L",
              },
              {
                label: "BMW 7 Series",
                value: "72f6d70d-a7c7-497e-9c98-073dbdb5163b",
                detail: "3P · 2L",
              },
            ]}
            value={(getValue("car", false) as string) || ""}
            onChange={(e) => {
              setValue("car", e.target.value);
              setValue("price", "");
              setValue("distanceKm", "");
            }}
            onBlur={handleBlur("car")}
            onFocus={handleFocus("car")}
            error={errors["car"]}
          />
        </div>

        <div className="flex flex-col gap-1.5 justify-center items-center font-medium leading-none row-start-1 py-8 md:row-start-auto">
          <span className="text-primary text-[49px]">
            {isLoadingPrice ? (
              <span className="inline-flex items-center gap-3">
                <span
                  className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"
                  aria-hidden
                />
                —
              </span>
            ) : price ? (
              <>€ {price}</>
            ) : (
              <>—</>
            )}
          </span>
          <span className="text-sm font-light text-text-primary">
            {selectedVehicleId
              ? isLoadingPrice
                ? "Calculating price…"
                : price
                  ? "Price for selected vehicle"
                  : "Select journey to see price"
              : "Select vehicle to see price"}
          </span>
          {tripType === "one_way" && distanceKm ? (
            <span className="text-xs font-light text-white/90">
              {distanceKm} km
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
