import type { StripeElementsOptions } from "@stripe/stripe-js";

/** Stripe Elements styling aligned with Aurevia dark / bronze theme */
export const securityPaymentElementsOptions = (
  clientSecret: string,
): StripeElementsOptions => ({
  clientSecret,
  appearance: {
    theme: "night",
    variables: {
      colorPrimary: "#ba8c5a",
      colorBackground: "#0a0b0f",
      colorText: "#e9e7e2",
      colorDanger: "#f87171",
      borderRadius: "12px",
    },
    rules: {
      ".Input": {
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "none",
      },
    },
  },
});
