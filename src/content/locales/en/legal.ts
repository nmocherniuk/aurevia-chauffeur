import type { LegalContent } from "../fr/legal";

export const legalContent: LegalContent = {
  privacyPolicy: {
    title: "Privacy policy",
    meta: {
      title: "Privacy policy",
      description:
        "Riviera Prime privacy policy: data collected, purposes, retention, security, and user rights.",
    },
    intro: [
      {
        type: "p",
        text: "This privacy policy is intended to inform users of how the platform collects and processes their personal data, in accordance with Regulation (EU) 2016/679 (GDPR) and applicable French law.",
      },
      {
        type: "p",
        text: "The platform acts as an intermediary connecting clients with independent professionals, in particular private chauffeurs and security agents. It does not directly carry out the operational services entrusted to its partners.",
      },
    ],
    groups: [
      {
        sections: [
          {
            id: "donnees-collectees",
            heading: "1. Data collected",
            blocks: [
              {
                type: "p",
                text: "In connection with the use of the platform and the handling of requests, the following data may be collected:",
              },
              {
                type: "ul",
                items: [
                  "first and last name;",
                  "phone number;",
                  "email address;",
                  "pick-up and drop-off addresses;",
                  "booking information, such as date, time, type of service and specific requirements;",
                  "content of exchanges necessary for processing the request and following up on the booking.",
                ],
              },
              {
                type: "p",
                text: "Regarding payment, transactions are processed via Stripe or any equivalent solution. Full banking data is not stored directly by the platform. Only information strictly necessary for administrative and accounting follow-up may be retained, such as payment status, transaction reference, amount and date.",
              },
            ],
          },
          {
            id: "finalites-traitement",
            heading: "2. Purposes of processing",
            blocks: [
              { type: "p", text: "Personal data is processed for the following purposes:" },
              {
                type: "ul",
                items: [
                  "receiving and managing booking requests;",
                  "coordinating services with the independent professionals concerned;",
                  "communicating with clients before, during and after the service;",
                  "processing and following up on payments;",
                  "preventing fraud, abuse and unauthorized use;",
                  "improving service quality;",
                  "complying with applicable legal, tax, accounting and regulatory obligations.",
                ],
              },
            ],
          },
          {
            id: "partage-donnees",
            heading: "3. Data sharing",
            blocks: [
              {
                type: "p",
                text: "Data may be shared, strictly to the extent necessary to perform the requested service:",
              },
              {
                type: "ul",
                items: [
                  "with partner professionals in charge of the service, such as private chauffeurs or security agents;",
                  "with Stripe or any equivalent payment provider, for secure payment processing;",
                  "with Meta (WhatsApp Cloud API), when this channel is used for operational exchanges related to the organization or follow-up of the booking;",
                  "with technical providers involved in hosting, maintenance or operation of the platform;",
                  "with the competent authorities, where required by law.",
                ],
              },
            ],
          },
          {
            id: "duree-conservation",
            heading: "4. Retention period",
            blocks: [
              {
                type: "p",
                text: "Personal data is kept for a period proportionate to the purposes for which it was collected.",
              },
              {
                type: "p",
                text: "Information needed to manage bookings is kept for as long as required to process the request and fulfil the commercial relationship. It may then be archived for the period required to meet applicable legal, accounting, tax or evidentiary obligations.",
              },
              {
                type: "p",
                text: "Once the applicable retention periods have elapsed, data is deleted or anonymized, unless a legal obligation requires longer retention.",
              },
            ],
          },
          {
            id: "securite",
            heading: "5. Security",
            blocks: [
              {
                type: "p",
                text: "The platform implements appropriate technical and organizational measures to ensure the security and confidentiality of personal data and to protect it against destruction, loss, alteration, unauthorized disclosure or unauthorized access.",
              },
              {
                type: "p",
                text: "These measures are adapted to the nature of the data processed and to the level of risk presented by the processing concerned.",
              },
            ],
          },
          {
            id: "droits-utilisateurs",
            heading: "6. User rights",
            blocks: [
              {
                type: "p",
                text: "In accordance with the GDPR, any data subject is entitled, under the conditions provided for by the applicable regulations, to the following rights:",
              },
              {
                type: "ul",
                items: [
                  "right of access;",
                  "right to rectification;",
                  "right to erasure;",
                  "right to restriction of processing;",
                  "right to object on legitimate grounds.",
                ],
              },
              {
                type: "p",
                text: "Where processing is based on consent, it may be withdrawn at any time without affecting the lawfulness of processing carried out before its withdrawal.",
              },
              {
                type: "p",
                text: "Users may exercise their rights by contacting the platform through the contact channel dedicated to data protection requests.",
              },
              {
                type: "p",
                text: "If a difficulty remains unresolved, the user may lodge a complaint with the French Data Protection Authority (CNIL).",
              },
            ],
          },
          {
            id: "cookies",
            heading: "7. Cookies",
            blocks: [
              {
                type: "p",
                text: "The platform may use cookies and similar technologies necessary for its operation, for audience measurement and, where applicable, to improve the user experience.",
              },
              {
                type: "p",
                text: "Detailed terms regarding the use of cookies and the collection of consent are set out in the Cookie Policy.",
              },
            ],
          },
          {
            id: "positionnement-juridique",
            heading: "8. Legal status of the platform",
            blocks: [
              {
                type: "p",
                text: "The platform acts as an intermediary and digital services operator. The professionals carrying out the services are legally independent and remain solely responsible for their professional, administrative, social, tax and regulatory obligations.",
              },
              {
                type: "p",
                text: "In this context, certain personal data may be transmitted to these independent professionals where necessary to organize, confirm and deliver the service requested by the client.",
              },
            ],
          },
        ],
      },
    ],
  },

  terms: {
    title: "Terms and conditions",
    meta: {
      title: "Terms and conditions",
      description:
        "Read Riviera Prime terms of use, booking, payment, and cancellation policies.",
    },
    groups: [
      {
        groupTitle: "Terms of use",
        sections: [
          {
            id: "objet-du-site",
            heading: "1. Purpose of the website",
            blocks: [
              {
                type: "p",
                text: "Riviera Prime offers a premium organization, booking and coordination service providing access to a network of independent professionals working in particular in:",
              },
              {
                type: "ul",
                items: [
                  "private chauffeured passenger transport;",
                  "private security;",
                  "associated high-end services.",
                ],
              },
            ],
          },
          {
            id: "role-de-la-societe",
            heading: "2. Role of the company",
            blocks: [
              { type: "p", text: "RIVIERA STRATEGIE acts primarily as:" },
              {
                type: "ul",
                items: [
                  "an organization company;",
                  "a booking coordinator;",
                  "a commercial facilitator;",
                  "a digital services operator.",
                ],
              },
              {
                type: "p",
                text: "The company receives client requests, organizes their handling and coordinates, according to the needs expressed, the intervention of selected independent partner professionals.",
              },
              {
                type: "p",
                text: "The company does not directly perform the material execution of the operational services entrusted to its partners.",
              },
            ],
          },
          {
            id: "partenaires-executants",
            heading: "3. Executing partners",
            blocks: [
              {
                type: "p",
                text: "Operational services are carried out by legally independent professionals.",
              },
              { type: "p", text: "Each partner remains solely responsible for:" },
              {
                type: "ul",
                items: [
                  "its administrative authorizations;",
                  "its insurance;",
                  "its staff;",
                  "compliance with professional rules;",
                  "regulatory compliance of its activity;",
                  "proper performance of the assigned mission.",
                ],
              },
            ],
          },
          {
            id: "responsabilite",
            heading: "4. Liability",
            blocks: [
              { type: "p", text: "The company cannot be held liable for:" },
              {
                type: "ul",
                items: [
                  "delays attributable to the executing partner;",
                  "an incident occurring during the service;",
                  "a failure by the service provider;",
                  "a case of force majeure;",
                  "a temporary unavailability of the website.",
                ],
              },
              {
                type: "p",
                text: "In any event, the company's potential liability is limited to the amounts actually received in respect of the booking concerned, unless mandatory legal provisions state otherwise.",
              },
            ],
          },
          {
            id: "liens-externes",
            heading: "5. External links",
            blocks: [
              {
                type: "p",
                text: "The website may contain links to third-party websites. The company has no control over their content or their operation.",
              },
            ],
          },
          {
            id: "mediation-consommation",
            heading: "6. CONSUMER MEDIATION",
            blocks: [
              {
                type: "p",
                text: "In the event of a dispute not resolved after a prior complaint, the consumer client may free of charge refer the matter to:",
              },
              { type: "p", text: "ANM Conso" },
              { type: "p", text: "2 rue de Colmar, 94300 Vincennes." },
            ],
          },
        ],
      },
      {
        groupTitle: "Booking, payment and cancellation terms",
        sections: [
          {
            id: "demande-reservation",
            heading: "1. Booking request",
            blocks: [
              { type: "p", text: "Any request submitted by the user remains subject to:" },
              {
                type: "ul",
                items: [
                  "partner availability;",
                  "operational validation;",
                  "logistical feasibility;",
                  "final confirmation.",
                ],
              },
              { type: "p", text: "The booking is only final after written confirmation." },
            ],
          },
          {
            id: "tarification",
            heading: "2. Pricing",
            blocks: [
              { type: "p", text: "Pricing terms may be:" },
              {
                type: "ul",
                items: [
                  "fixed;",
                  "established on a quote basis;",
                  "variable depending on location, time, duration, urgency, service level or any specific constraint.",
                ],
              },
            ],
          },
          {
            id: "paiement",
            heading: "3. Payment",
            blocks: [
              { type: "p", text: "Payments are secured by Stripe or any equivalent solution." },
              { type: "p", text: "Depending on the situation, payment may take the form of:" },
              {
                type: "ul",
                items: [
                  "full payment at the time of booking;",
                  "a deposit;",
                  "deferred payment;",
                  "payment after confirmation.",
                ],
              },
              {
                type: "p",
                text: "Any abusive dispute, unjustified chargeback or fraudulent use may result in suspension of the file and any useful action.",
              },
            ],
          },
          {
            id: "remuneration-societe",
            heading: "4. Compensation of the company",
            blocks: [
              {
                type: "p",
                text: "RIVIERA STRATEGIE primarily receives compensation corresponding, depending on the case, to:",
              },
              {
                type: "ul",
                items: [
                  "booking fees;",
                  "coordination fees;",
                  "organization fees;",
                  "remuneration provided for by contract;",
                  "a commission agreed according to the nature of the operation.",
                ],
              },
              {
                type: "p",
                text: "The main price of the service may, depending on the nature of the service concerned, be invoiced directly by the executing partner professional.",
              },
              {
                type: "p",
                text: "Main services are carried out by legally independent partner professionals, each remaining solely responsible for its legal, administrative, social, tax and operational obligations.",
              },
              {
                type: "p",
                text: "Any compensation due to RIVIERA STRATEGIE is communicated to the client before final validation of the booking.",
              },
            ],
          },
          {
            id: "politique-annulation-standard",
            heading: "5. Standard cancellation policy",
            blocks: [
              {
                type: "ul",
                items: [
                  "more than 72 hours before the service: refund possible excluding incurred fees;",
                  "between 72 hours and 24 hours before: retention of up to 50%;",
                  "less than 24 hours before: retention of up to 100%.",
                ],
              },
            ],
          },
          {
            id: "forte-demande-evenements-majeurs",
            heading: "6. Peak demand periods and major events",
            blocks: [
              {
                type: "p",
                text: "For certain specific periods (Cannes Film Festival, Monaco Grand Prix, conferences, high-end events or peak demand):",
              },
              {
                type: "ul",
                items: [
                  "more than 7 days before: partial refund possible;",
                  "between 7 days and 72 hours: retention of up to 70%;",
                  "less than 72 hours before: retention of up to 100%.",
                ],
              },
            ],
          },
          {
            id: "absence-client",
            heading: "7. Client absence",
            blocks: [
              { type: "p", text: "In the event of a delay exceeding 15 minutes without prior notice:" },
              {
                type: "ul",
                items: [
                  "waiting time may be invoiced;",
                  "the mission may be cancelled;",
                  "the service may be due in full.",
                ],
              },
            ],
          },
          {
            id: "force-majeure",
            heading: "8. Force majeure",
            blocks: [
              {
                type: "p",
                text: "In the event of exceptional circumstances beyond the control of the parties, a rescheduling or a commercial credit may be offered subject to availability and applicable constraints.",
              },
            ],
          },
        ],
      },
    ],
  },

  legalNotice: {
    title: "Legal notice",
    meta: {
      title: "Legal notice",
      description:
        "Riviera Prime legal notice: publisher, hosting, intellectual property, and legal information.",
    },
    intro: [
      {
        type: "p",
        text: "In accordance with the provisions of Law No. 2004-575 of 21 June 2004 on confidence in the digital economy, the following information is provided to users of this website:",
      },
    ],
    groups: [
      {
        sections: [
          {
            id: "editeur-du-site",
            heading: "1. Website publisher",
            blocks: [
              { type: "p", text: "RIVIERA STRATEGIE" },
              { type: "p", text: "Limited liability company with share capital of €5,000.00." },
              { type: "h3", text: "Registered office" },
              {
                type: "address",
                lines: [
                  "867 Avenue de Provence, Résidence Les Fougasses Bâtiment 2,",
                  "83600 Fréjus, France",
                ],
              },
              {
                type: "p",
                text: "Registered with the Fréjus Trade and Companies Register under number 944 948 074.",
              },
              {
                type: "p",
                text: "Individual VAT identification number: FR83944948074.",
              },
              { type: "p", text: "Trade name used: Riviera Prime." },
              { type: "h3", text: "Legal representative" },
              { type: "p", text: "Mr Kosivtchouk Youriy, acting as Managing Director." },
              {
                type: "p",
                text: [
                  "Email address: kosivtchoukyouriy@gmail.com",
                  "Phone: 06 14 62 27 83",
                ],
              },
            ],
          },
          {
            id: "directeur-publication",
            heading: "2. Publication director",
            blocks: [{ type: "p", text: "Mr Kosivtchouk Youriy." }],
          },
          {
            id: "hebergement-site",
            heading: "3. Website hosting",
            blocks: [
              {
                type: "address",
                lines: ["OVHcloud", "2 rue Kellermann, 59100 Roubaix, France."],
              },
            ],
          },
          {
            id: "acces-site",
            heading: "4. Site access",
            blocks: [
              {
                type: "p",
                text: "The website is accessible at all times, subject to temporary interruptions for maintenance, technical updates or any case of force majeure.",
              },
            ],
          },
          {
            id: "propriete-intellectuelle",
            heading: "5. Intellectual property",
            blocks: [
              {
                type: "p",
                text: "All elements on the website, including texts, names, logos, visuals, photographs, graphics, structure, presentation and content, are protected by legal provisions relating to intellectual property.",
              },
              {
                type: "p",
                text: "Any reproduction, representation, distribution, adaptation or exploitation, in whole or in part, without prior written authorization, is strictly prohibited.",
              },
            ],
          },
        ],
      },
    ],
  },

  cookies: {
    title: "Privacy and cookie policy",
    meta: {
      title: "Cookie policy",
      description:
        "Riviera Prime cookie policy: types of cookies used, consent, and preference management.",
    },
    groups: [
      {
        sections: [
          {
            id: "responsable-traitement",
            heading: "1. Data controller",
            blocks: [
              { type: "p", text: "The controller of the personal data collected on this website is:" },
              { type: "p", text: "RIVIERA STRATEGIE" },
            ],
          },
          {
            id: "donnees-collectees",
            heading: "2. Data that may be collected",
            blocks: [
              { type: "p", text: "Depending on the nature of the requests submitted, the following data may in particular be collected:" },
              {
                type: "ul",
                items: [
                  "first and last name;",
                  "phone number;",
                  "email address;",
                  "booking information;",
                  "pick-up location;",
                  "destination;",
                  "requested date and time;",
                  "information useful for organizing the request;",
                  "technical browsing data.",
                ],
              },
            ],
          },
          {
            id: "finalites-traitement",
            heading: "3. Purposes of processing",
            blocks: [
              { type: "p", text: "Data is processed in order to:" },
              {
                type: "ul",
                items: [
                  "respond to requests received;",
                  "organize bookings;",
                  "coordinate requested services;",
                  "share information strictly necessary with the partners concerned;",
                  "provide commercial follow-up;",
                  "manage payments;",
                  "prevent fraudulent use;",
                  "comply with legal and regulatory obligations.",
                ],
              },
            ],
          },
          {
            id: "bases-juridiques",
            heading: "4. Legal bases",
            blocks: [
              { type: "p", text: "Processing relies, depending on the situation, on:" },
              {
                type: "ul",
                items: [
                  "performance of a contract;",
                  "pre-contractual measures;",
                  "consent;",
                  "legitimate interest;",
                  "compliance with a legal obligation.",
                ],
              },
            ],
          },
          {
            id: "destinataires-donnees",
            heading: "5. Recipients of data",
            blocks: [
              { type: "p", text: "Data may only be shared with:" },
              {
                type: "ul",
                items: [
                  "partner professionals concerned by the request;",
                  "technical service providers;",
                  "payment service providers;",
                  "legally competent authorities where the regulations so require.",
                ],
              },
            ],
          },
          {
            id: "duree-conservation",
            heading: "6. Retention period",
            blocks: [
              {
                type: "p",
                text: "Data is kept for the period necessary for its purpose and then archived for the applicable legal periods.",
              },
            ],
          },
          {
            id: "droits-personnes",
            heading: "7. Rights of data subjects",
            blocks: [
              { type: "p", text: "Every person has:" },
              {
                type: "ul",
                items: [
                  "a right of access;",
                  "a right of rectification;",
                  "a right of erasure;",
                  "a right to object;",
                  "a right to restriction;",
                  "a right to portability.",
                ],
              },
              { type: "p", text: "Any request may be sent to: kosivtchoukyouriy@gmail.com" },
              {
                type: "p",
                text: "In the event of a persistent difficulty, a complaint may be lodged with the French Data Protection Authority (CNIL).",
              },
            ],
          },
          {
            id: "cookies",
            heading: "8. Cookies",
            blocks: [
              { type: "p", text: "The website may use:" },
              {
                type: "ul",
                items: [
                  "cookies strictly necessary for its operation;",
                  "audience measurement cookies;",
                  "advertising cookies;",
                  "personalization cookies.",
                ],
              },
              { type: "p", text: "Non-essential cookies are only placed after the user's express consent." },
              { type: "p", text: "Consent may be withdrawn at any time." },
              { type: "p", text: "Tools that may be used:" },
              {
                type: "ul",
                items: ["Google Analytics", "Google Ads", "Meta Pixel"],
              },
            ],
          },
        ],
      },
    ],
  },
};
