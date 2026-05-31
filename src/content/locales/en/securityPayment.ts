export const securityPaymentContent = {
  meta: {
    title: "Security payment",
    description:
      "Complete your secure payment for your Riviera Prime private security service booking.",
  },
  loading: "Verifying your payment link…",
  errors: {
    invalidLink: "Invalid payment link",
    expired: "This payment link has expired or is invalid.",
    generic: "Something went wrong. Please try again later.",
    accessDenied: "Access denied",
    paymentFailed: "Payment failed",
  },
  reservation: {
    title: "Complete your reservation",
    greeting: "Hello {name}, please review and pay to confirm.",
    route: "Route",
    dateTime: "Date & time",
    duration: "Duration",
    durationMin: "{min} min",
    vehicle: "Vehicle",
    total: "Total",
  },
  checkout: {
    pay: "Pay €{amount}",
    processing: "Processing…",
    successTitle: "Payment successful!",
    successMessage: "Your trip has been confirmed. Thank you!",
  },
  result: {
    redirectSuccessTitle: "Payment successful!",
    redirectSuccessMessage: "Thank you! Your trip has been confirmed.",
    alreadyPaidTitle: "Already paid",
    alreadyPaidMessage: "Your trip {from} → {to} has been paid. Thank you!",
  },
} as const;
