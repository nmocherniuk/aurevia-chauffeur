export const securityPaymentContent = {
  meta: {
    title: "Paiement sécurité",
    description:
      "Finalisez votre paiement sécurisé pour votre réservation de service de sécurité privée Riviera Prime.",
  },
  loading: "Vérification de votre lien de paiement…",
  errors: {
    invalidLink: "Lien de paiement invalide",
    expired: "Ce lien de paiement a expiré ou n'est plus valide.",
    generic: "Une erreur s'est produite. Veuillez réessayer plus tard.",
    accessDenied: "Accès refusé",
    paymentFailed: "Le paiement a échoué",
  },
  reservation: {
    title: "Finaliser votre réservation",
    greeting: "Bonjour {name}, veuillez vérifier et payer pour confirmer.",
    route: "Trajet",
    dateTime: "Date et heure",
    duration: "Durée",
    durationMin: "{min} min",
    vehicle: "Véhicule",
    total: "Total",
  },
  checkout: {
    pay: "Payer €{amount}",
    processing: "Traitement…",
    successTitle: "Paiement réussi !",
    successMessage: "Votre trajet a été confirmé. Merci !",
  },
  result: {
    redirectSuccessTitle: "Paiement réussi !",
    redirectSuccessMessage: "Merci ! Votre trajet a été confirmé.",
    alreadyPaidTitle: "Déjà payé",
    alreadyPaidMessage:
      "Votre trajet {from} → {to} a été payé. Merci !",
  },
} as const;
