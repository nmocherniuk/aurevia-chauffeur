import React, { FC } from "react";
import SelectWithError from "@/src/components/SelectWithError";
import type { FormStepProps } from "./types";

export const PaymentStep: FC<FormStepProps> = ({ getValue, setValue }) => {
    return (
        <div className="grid gap-4">
            <div>
                <SelectWithError
                    name="paymentMethod"
                    label="Payment method"
                    placeholder="Select payment method"
                    options={[
                        { label: "Card", value: "card" },
                        { label: "Bank transfer", value: "transfer" },
                    ]}
                    value={(getValue("paymentMethod", false) as string) || ""}
                    onChange={(e) => setValue("paymentMethod", e.target.value)}
                />
            </div>
        </div>
    );
};
