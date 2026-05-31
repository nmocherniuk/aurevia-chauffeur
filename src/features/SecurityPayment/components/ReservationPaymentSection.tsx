"use client";

import React, { type FC } from "react";
import Calendar from "@/src/components/SVGManager/Calendar";
import { Clock } from "@/src/components/SVGManager/Clock";
import { Vehicle } from "@/src/components/SVGManager/Vehicle";
import { useContent, useLocale } from "@/src/providers/LocaleProvider";
import {
  fillTemplate,
  formatBookingDate,
  formatBookingTime,
} from "../utils/formatBookingDateTime";
import type { SecurityPayBooking } from "../types";
import { PaymentCheckoutForm } from "./PaymentCheckoutForm";
import { PaymentInfoRow } from "./PaymentInfoRow";

type Props = {
  booking: SecurityPayBooking;
  token: string;
};

export const ReservationPaymentSection: FC<Props> = ({ booking, token }) => {
  const locale = useLocale();
  const { securityPayment: copy } = useContent();
  const routeLabel = `${booking.from} → ${booking.to}`;
  const dateTimeLabel = `${formatBookingDate(booking.bookingAt, locale)} · ${formatBookingTime(booking.bookingAt, locale)}`;

  return (
    <div className="w-full min-w-0">
      <div className="grid w-full min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] lg:gap-12 xl:gap-16 lg:items-start">
        <section className="flex min-w-0 w-full max-w-full flex-col gap-8">
          <header className="space-y-2">
            <h2 className="font-benzin text-xl text-text-secondary md:text-2xl">
              {copy.reservation.title}
            </h2>
            <p className="text-sm font-light leading-relaxed text-text-primary md:text-base">
              {fillTemplate(copy.reservation.greeting, { name: booking.clientName })}
            </p>
          </header>

          <div className="flex flex-col gap-5">
            <PaymentInfoRow
              icon={<Vehicle width={22} height={22} fill="var(--primary)" />}
              label={copy.reservation.route}
              value={routeLabel}
            />
            <PaymentInfoRow
              icon={<Calendar width={22} height={22} fill="var(--primary)" />}
              label={copy.reservation.dateTime}
              value={dateTimeLabel}
            />
            <PaymentInfoRow
              icon={
                <Clock width={22} height={22} fill="var(--primary)" strokeWidth="1.5" />
              }
              label={copy.reservation.duration}
              value={fillTemplate(copy.reservation.durationMin, {
                min: booking.durationMin,
              })}
            />
            {booking.vehicleName ? (
              <PaymentInfoRow
                icon={<Vehicle width={22} height={22} fill="var(--primary)" />}
                label={copy.reservation.vehicle}
                value={
                  booking.vehicleClass
                    ? `${booking.vehicleName} (${booking.vehicleClass})`
                    : booking.vehicleName
                }
              />
            ) : null}
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
            <span className="text-base font-medium text-text-secondary">
              {copy.reservation.total}
            </span>
            <span className=" text-2xl text-primary md:text-3xl">
              €{booking.totalPrice.toFixed(2)}
            </span>
          </div>
        </section>

        <aside className="flex min-h-0 min-w-0 w-full flex-col gap-6 lg:sticky lg:top-28">
          <PaymentCheckoutForm booking={booking} token={token} />
        </aside>
      </div>
    </div>
  );
};
