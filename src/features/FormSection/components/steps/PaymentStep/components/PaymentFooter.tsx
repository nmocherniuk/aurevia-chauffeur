import React, { FC } from "react";
import { Button } from "@/src/components/Button";

interface PaymentFooterProps {
  totalPrice: string;
  isPaymentReady: boolean;
  isLoading: boolean;
  onConfirm: () => void;
  onBack?: () => void;
}

export const PaymentFooter: FC<PaymentFooterProps> = ({
  totalPrice,
  isPaymentReady,
  isLoading,
  onConfirm,
  onBack,
}) => {
  return (
    <>
      {!isPaymentReady && (
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium text-text-primary">
            Total:{" "}
            <span className="text-xl font-semibold text-primary">
              €{totalPrice}
            </span>
          </p>
        </div>
      )}

      {!isPaymentReady && (
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          {onBack && (
            <Button
              type="button"
              variant="secondary"
              onClick={onBack}
              disabled={isLoading}
              className="sm:w-[220px]"
            >
              Précédent
            </Button>
          )}
          <Button
            type="button"
            variant="primary"
            withArrow={false}
            onClick={onConfirm}
            disabled={isLoading}
            className="sm:w-[220px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Preparing secure payment..." : "Confirm & Pay"}
          </Button>
        </div>
      )}
    </>
  );
};
