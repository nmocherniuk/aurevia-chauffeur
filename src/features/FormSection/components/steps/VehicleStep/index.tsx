import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import SelectWithError from "@/src/components/SelectWithError";
import axios from "axios";
import { getPrice } from "@/src/api/price";
import { hourlyDurationMinutes } from "@/src/features/FormSection/utils/hourlyDuration";
import {
  buildAvailableVehicleClassOptions,
  buildVehicleOptions,
} from "@/src/features/FormSection/utils/vehicleOptions";
import { useVehiclesStore } from "@/src/store/vehiclesStore";
import { useContent } from "@/src/providers/LocaleProvider";
import dayjs from "@/src/lib/dayjs";
import { SERVICE_TZ } from "@/src/features/FormSection/constants";
import type { FormStepProps } from "../types";

export const VehicleStep: FC<FormStepProps> = ({
  getValue,
  setValue,
  errors,
  handleBlur,
  handleFocus,
}) => {
  const { bookingForm: t } = useContent();
  const vehicles = useVehiclesStore((s) => s.vehicles);
  const vehiclesStatus = useVehiclesStore((s) => s.status);
  const fetchVehicles = useVehiclesStore((s) => s.fetchVehicles);

  const selectedVehicleId = (getValue("car", false) as string) || "";
  const carType = (getValue("carType", false) as string) || "";
  const tripType = (getValue("tripType", false) as string) || "";
  const fromPlaceId = (getValue("fromPlaceId", false) as string) || "";
  const toPlaceId = (getValue("toPlaceId", false) as string) || "";
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
  /** Why the quote failed (shown instead of the neutral hint). */
  const [priceError, setPriceError] = useState<string | null>(null);
  const priceLoadingInForm = getValue("priceLoading", true) === true;
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    void fetchVehicles();
  }, [fetchVehicles]);

  const vehicleClassOptions = useMemo(
    () => buildAvailableVehicleClassOptions(vehicles, t.vehicleClasses),
    [vehicles, t.vehicleClasses],
  );

  const vehicleOptions = useMemo(
    () => buildVehicleOptions(vehicles, carType),
    [vehicles, carType],
  );

  useEffect(() => {
    if (
      carType &&
      vehicleClassOptions.length > 0 &&
      !vehicleClassOptions.some((option) => option.value === carType)
    ) {
      setValue("carType", "");
      setValue("car", "");
      setValue("price", "");
      setValue("distanceKm", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicleClassOptions, carType]);

  useEffect(() => {
    if (
      selectedVehicleId &&
      vehicleOptions.length > 0 &&
      !vehicleOptions.some((option) => option.value === selectedVehicleId)
    ) {
      setValue("car", "");
      setValue("price", "");
      setValue("distanceKm", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicleOptions, selectedVehicleId]);

  const vehiclesLoading = vehiclesStatus === "loading";

  const canQuote = useMemo(() => {
    if (!selectedVehicleId) return false;
    if (!date || !time) return false;
    if (!fromPlaceId || !fromLat || !fromLng) return false;

    if (tripType === "hourly") {
      if (!endTime) return false;
      const dur = hourlyDurationMinutes(time, endTime);
      return dur !== null && dur > 0;
    }

    if (tripType === "one_way") {
      if (!toPlaceId || !toLat || !toLng) return false;
      return true;
    }

    return false;
  }, [
    selectedVehicleId,
    tripType,
    fromPlaceId,
    toPlaceId,
    fromLat,
    fromLng,
    toLat,
    toLng,
    date,
    time,
    endTime,
  ]);

  // Mirror loading state into Formik only when it actually differs.
  // `setValue` is a new function on every render and Formik re-renders on every
  // setFieldValue (even with the same value), so depending on it here caused an
  // infinite render loop (React error #185).
  useEffect(() => {
    if (priceLoadingInForm !== isLoadingPrice) {
      setValue("priceLoading", isLoadingPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingPrice, priceLoadingInForm]);

  useEffect(() => {
    abortRef.current?.abort();
    abortRef.current = null;

    setPriceError(null);

    if (!canQuote) {
      setIsLoadingPrice(false);
      if (price) setValue("price", "");
      if (distanceKm) setValue("distanceKm", "");
      return;
    }

    const ac = new AbortController();
    abortRef.current = ac;
    setIsLoadingPrice(true);

    // Trip date/time (Paris), same as the booking submit — night/holiday
    // surcharges must depend on when the trip happens, not on "now".
    const tripAt = dayjs.tz(`${date} ${time}`, SERVICE_TZ);
    const bookingAt = tripAt.isValid() ? tripAt.toISOString() : undefined;

    void getPrice(
      tripType === "hourly"
        ? {
            vehicleId: selectedVehicleId,
            tripType: "hourly",
            durationMin: hourlyDurationMinutes(time, endTime) ?? undefined,
            bookingAt,
          }
        : {
            vehicleId: selectedVehicleId,
            tripType: "one_way",
            fromPlaceId,
            fromLat: Number(fromLat),
            fromLng: Number(fromLng),
            toPlaceId,
            toLat: Number(toLat),
            toLng: Number(toLng),
            bookingAt,
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
      .catch((error: unknown) => {
        if (ac.signal.aborted) return;
        setValue("price", "");
        setValue("distanceKm", "");
        const code = axios.isAxiosError(error)
          ? (error.response?.data as { code?: unknown } | undefined)?.code
          : undefined;
        setPriceError(
          code === "INVALID_LOCATION" &&
            axios.isAxiosError(error) &&
            /service area/i.test(String((error.response?.data as { message?: unknown })?.message ?? ""))
            ? t.vehicle.outsideServiceArea
            : t.vehicle.priceUnavailable,
        );
      })
      .finally(() => {
        if (!ac.signal.aborted) setIsLoadingPrice(false);
      });

    return () => {
      ac.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canQuote, selectedVehicleId, fromPlaceId, toPlaceId, fromLat, fromLng, toLat, toLng, date, time, tripType, endTime]);

  const priceHint = selectedVehicleId
    ? isLoadingPrice
      ? t.vehicle.calculatingPrice
      : price
        ? t.vehicle.priceForSelected
        : priceError ?? t.vehicle.selectTripForPrice
    : t.vehicle.selectVehicleForPrice;

  return (
    <div>
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-2">
        <div className="flex flex-col gap-y-2.5 gap-x-4 ">
          <SelectWithError
            name="carType"
            label={t.vehicle.carType.label}
            placeholder={t.vehicle.carType.placeholder}
            options={vehicleClassOptions}
            disabled={vehiclesLoading || vehicleClassOptions.length === 0}
            value={(getValue("carType", false) as string) || ""}
            onChange={(e) => {
              setValue("carType", e.target.value);
              setValue("car", "");
              setValue("price", "");
              setValue("distanceKm", "");
            }}
            onBlur={handleBlur("carType")}
            onFocus={handleFocus("carType")}
            error={errors["carType"]}
          />
          <SelectWithError
            name="car"
            label={t.vehicle.car.label}
            placeholder={
              vehiclesLoading
                ? t.vehicle.carLoading
                : vehicleOptions.length === 0
                  ? t.vehicle.carEmpty
                  : t.vehicle.car.placeholder
            }
            options={vehicleOptions}
            disabled={vehiclesLoading || vehicleOptions.length === 0}
            value={selectedVehicleId}
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
          <span
            className={
              priceError && !isLoadingPrice && !price
                ? "text-sm font-light text-text-error"
                : "text-sm font-light text-text-primary"
            }
            role={priceError ? "alert" : undefined}
          >
            {priceHint}
          </span>
          {errors["price"] ? (
            <span
              className="text-xs text-text-error text-center"
              role="alert"
            >
              {errors["price"]}
            </span>
          ) : null}
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
