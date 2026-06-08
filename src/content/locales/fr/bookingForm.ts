export const bookingFormContent = {
  section: {
    title: "Réservez votre transfert",
    subtitle:
      "Entrez les détails de votre trajet puis poursuivez vers la confirmation.",
    imageAlt: "Véhicule de luxe pour transfert privé",
    summaryAriaLabel: "Résumé de la réservation",
    submitError:
      "Une erreur est survenue. Veuillez réessayer dans un instant.",
  },
  steps: {
    journey: "Trajet",
    vehicle: "Véhicule",
    passenger: "Passager",
    payment: "Paiement",
  },
  tripTypes: [
    { value: "one_way", label: "Aller simple" },
    { value: "hourly", label: "À l'heure" },
  ],
  vehicleClasses: [
    { value: "comfort", label: "Comfort" },
    { value: "business", label: "Business" },
    { value: "van", label: "Van" },
  ],
  journey: {
    tripType: {
      label: "Type de trajet",
      placeholder: "Sélectionnez le type de trajet",
    },
    from: { label: "Départ", labelHourly: "Lieu de prise en charge" },
    fromPlaceholder: "Entrez le lieu de prise en charge",
    to: { label: "Arrivée", placeholder: "Entrez la destination" },
    date: { label: "Date", placeholder: "Sélectionnez une date" },
    time: { label: "Heure", placeholder: "Sélectionnez une heure" },
    startTime: {
      label: "Heure de début",
      placeholder: "Sélectionnez l'heure de début",
    },
    endTime: {
      label: "Heure de fin",
      placeholder: "Sélectionnez l'heure de fin",
    },
  },
  vehicle: {
    carType: {
      label: "Type de véhicule",
      placeholder: "Sélectionnez le type de véhicule",
    },
    car: { label: "Véhicule", placeholder: "Sélectionnez un véhicule" },
    carLoading: "Chargement des véhicules…",
    carEmpty: "Aucun véhicule disponible",
    calculatingPrice: "Calcul du prix…",
    priceForSelected: "Prix pour le véhicule sélectionné",
    selectTripForPrice: "Sélectionnez un trajet pour voir le prix",
    selectVehicleForPrice: "Sélectionnez un véhicule pour voir le prix",
  },
  passenger: {
    firstName: { label: "Prénom", placeholder: "Prénom" },
    lastName: { label: "Nom", placeholder: "Nom" },
    email: { label: "E-mail", placeholder: "E-mail" },
    phone: { label: "Téléphone", placeholder: "Téléphone" },
    notes: {
      label: "Notes pour le chauffeur",
      placeholder: "Notes optionnelles",
    },
  },
  payment: {
    journey: "Trajet",
    vehicle: "Véhicule",
    passenger: "Passager",
    total: "Total :",
  },
  success: {
    title: "Succès",
    message:
      "Votre demande a bien été enregistrée. Nous vous confirmerons les détails de votre transfert sous peu.",
    button: "Continuer",
  },
  summary: {
    totalPricePrefix: "Prix total",
  },
  validation: {
    dateRequired: "Une date de rendez-vous est requise",
    dateFuture: "La date de rendez-vous doit être dans le futur",
    timeRequired: "L'heure de rendez-vous est requise",
    tripTypeRequired: "Le type de trajet est requis",
    fromRequired: "Le lieu de prise en charge est requis",
    fromPicked: "Choisissez un lieu parmi les suggestions",
    toRequired: "La destination est requise",
    toPicked: "Choisissez un lieu parmi les suggestions",
    endTimeRequired: "L'heure de fin est requise",
    endTimeAfterStart: "L'heure de fin doit être après l'heure de début",
    carTypeRequired: "Le type de véhicule est requis",
    carRequired: "Le véhicule est requis",
    priceRequired:
      "Veuillez attendre le calcul du prix avant de continuer",
    firstNameRequired: "Le prénom est requis",
    lastNameRequired: "Le nom est requis",
    emailRequired: "Une adresse e-mail est requise",
    emailShort: "L'adresse e-mail est trop courte",
    emailLong: "L'adresse e-mail est trop longue",
    emailSpaces: "L'adresse e-mail ne doit pas contenir d'espaces",
    emailInvalid: "Veuillez entrer une adresse e-mail valide",
    phoneRequired: "Un numéro de téléphone est requis",
  },
} as const;
