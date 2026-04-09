import React, { FC } from "react";
import { Chevron } from "@/src/components/SVGManager/Chevron";

interface BookingSummaryProps {
  hasReview: boolean;
  isPaymentReady: boolean;
  isReviewCollapsed: boolean;
  onToggle: () => void;
  journeyRoute: string | null;
  journeyDateTime: string | null;
  tripTypeLabel: string;
  carTypeLabel: string;
  carLabel: string;
  passengerName: string | null;
  email: string;
  phone: string;
}

export const BookingSummary: FC<BookingSummaryProps> = ({
  hasReview,
  isPaymentReady,
  isReviewCollapsed,
  onToggle,
  journeyRoute,
  journeyDateTime,
  tripTypeLabel,
  carTypeLabel,
  carLabel,
  passengerName,
  email,
  phone,
}) => {
  if (!hasReview) return null;

  return (
    <div className="border-b border-b-white/10">
      {isPaymentReady ? (
        <button
          type="button"
          onClick={onToggle}
          className={`flex w-full items-center justify-between pt-3 text-left transition-[padding] duration-400 ease-out  ${isReviewCollapsed ? "pb-3" : "pb-0"
            } cursor-pointer`}
          aria-expanded={!isReviewCollapsed}
          aria-controls="payment-review-content"
        >
          <span
            className={`text-base font-medium ${isReviewCollapsed ? "text-text-primary" : "text-primary"
              }`}
          >
            Booking summary
          </span>
          <span
            className={`inline-flex h-8 w-8 items-center justify-center transition-transform duration-300 ${isReviewCollapsed ? "rotate-0" : "rotate-180"
              }`}
            aria-hidden="true"
          >
            <Chevron
              width={20}
              height={20}
              fill="currentColor"
              className={`${isReviewCollapsed
                  ? "rotate-0 text-text-primary"
                  : "rotate-180 text-primary"
                }`}
            />
          </span>
        </button>
      ) : null}

      <div
        id="payment-review-content"
        className={`grid transition-all duration-400 ease-out ${isReviewCollapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
          }`}
      >
        <div className="overflow-hidden">
          <div className="flex w-full flex-col gap-5 py-4 sm:max-w-full sm:flex-row sm:gap-x-7 sm:gap-y-4 sm:self-center sm:justify-between md:self-start xl:gap-x-17">
            <section className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:shrink-0">
              <h3 className="text-sm font-medium text-text-primary">Journey</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-text-secondary">
                {journeyRoute && <li>{journeyRoute}</li>}
                {journeyDateTime && <li>{journeyDateTime}</li>}
                {tripTypeLabel && <li>{tripTypeLabel}</li>}
              </ul>
            </section>

            <section className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:shrink-0">
              <h3 className="text-sm font-medium text-text-primary">Vehicle</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-text-secondary">
                {carTypeLabel && <li>{carTypeLabel}</li>}
                {carLabel && <li>{carLabel}</li>}
              </ul>
            </section>

            <section className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:shrink-0">
              <h3 className="text-sm font-medium text-text-primary">Passenger</h3>
              <ul className="flex flex-col gap-1 text-sm font-light text-text-secondary">
                {passengerName && <li>{passengerName}</li>}
                {email && <li>{email}</li>}
                {phone && <li>{phone}</li>}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
