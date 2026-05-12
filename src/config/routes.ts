export const routes = {
  home: {
    index: "/",
    services: "/#services",
  },

  chauffeur: {
    index: "/driver",
    request: "/driver/request",
    book: "/driver#reserver",
  },

  security: {
    index: "/security",
    request: "/security/request",
    book: "/security#reserver",
  },

  legal: {
    privacyPolicy: "/privacy-policy",
    terms: "/terms",
    legalNotice: "/legal-notice",
    cookies: "/cookies",
  },

  forms: {
    chauffeurRequest: "/chauffeur/request",
    securityRequest: "/security/request",
  },
} as const;
