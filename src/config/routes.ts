export const routes = {
    home: "/",
    chauffeur: {
        index: "/driver",
        request: "/driver/request",
        book: "/driver#reserver",
    },
    security: "/security",

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