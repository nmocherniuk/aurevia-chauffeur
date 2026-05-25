export type LegalBlock =
  | { type: "p"; text: string | readonly string[] }
  | { type: "ul"; items: readonly string[] }
  | { type: "h3"; text: string }
  | { type: "address"; lines: readonly string[] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: readonly LegalBlock[];
};

export type LegalGroup = {
  /** Optional title rendered as <h2> before the group's sections. */
  groupTitle?: string;
  sections: readonly LegalSection[];
};

export type LegalPage = {
  /** Page <h1>. */
  title: string;
  /** SEO metadata. */
  meta: { title: string; description: string };
  /** Optional intro blocks rendered before the first group. */
  intro?: readonly LegalBlock[];
  groups: readonly LegalGroup[];
};

export type LegalContent = {
  privacyPolicy: LegalPage;
  terms: LegalPage;
  legalNotice: LegalPage;
  cookies: LegalPage;
};

export const legalContent: LegalContent = {
  privacyPolicy: {
    title: "Politique de confidentialité",
    meta: {
      title: "Politique de confidentialité",
      description:
        "Politique de confidentialité Riviera Prime: données collectées, finalités, conservation, sécurité et droits des utilisateurs.",
    },
    intro: [
      {
        type: "p",
        text: "La présente politique de confidentialité a pour objet d’informer les utilisateurs des modalités selon lesquelles la plateforme collecte et traite leurs données à caractère personnel, conformément au Règlement (UE) 2016/679 (RGPD) et à la législation française applicable.",
      },
      {
        type: "p",
        text: "La plateforme agit en qualité d’intermédiaire de mise en relation entre des clients et des professionnels indépendants, notamment des chauffeurs privés et des agents de sécurité. Elle n’exécute pas directement les prestations opérationnelles confiées aux partenaires.",
      },
    ],
    groups: [
      {
        sections: [
          {
            id: "donnees-collectees",
            heading: "1. Données collectées",
            blocks: [
              {
                type: "p",
                text: "Dans le cadre de l’utilisation de la plateforme et de la gestion des demandes, les données suivantes peuvent être collectées :",
              },
              {
                type: "ul",
                items: [
                  "nom et prénom ;",
                  "numéro de téléphone ;",
                  "adresse électronique ;",
                  "adresses de prise en charge et de destination ;",
                  "informations relatives à la réservation, telles que la date, l’horaire, la nature de la prestation et les contraintes particulières ;",
                  "contenu des échanges nécessaires au traitement de la demande et au suivi de la réservation.",
                ],
              },
              {
                type: "p",
                text: "Concernant le paiement, les transactions sont traitées via Stripe ou toute solution équivalente. Les données bancaires complètes ne sont pas stockées directement par la plateforme. Seules les informations strictement nécessaires au suivi administratif et comptable des opérations peuvent être conservées, telles que le statut du paiement, la référence de transaction, le montant et la date.",
              },
            ],
          },
          {
            id: "finalites-traitement",
            heading: "2. Finalités du traitement",
            blocks: [
              {
                type: "p",
                text: "Les données personnelles sont traitées pour les finalités suivantes :",
              },
              {
                type: "ul",
                items: [
                  "réception et gestion des demandes de réservation ;",
                  "coordination des prestations avec les professionnels indépendants concernés ;",
                  "communication avec les clients avant, pendant et après la prestation ;",
                  "traitement et suivi des paiements ;",
                  "prévention des fraudes, abus et utilisations non autorisées ;",
                  "amélioration de la qualité de service ;",
                  "respect des obligations légales, fiscales, comptables et réglementaires applicables.",
                ],
              },
            ],
          },
          {
            id: "partage-donnees",
            heading: "3. Partage des données",
            blocks: [
              {
                type: "p",
                text: "Les données peuvent être transmises, dans la stricte mesure nécessaire à l’exécution du service demandé :",
              },
              {
                type: "ul",
                items: [
                  "aux professionnels partenaires chargés de la prestation, tels que des chauffeurs privés ou agents de sécurité ;",
                  "à Stripe ou à tout prestataire de paiement équivalent, pour le traitement sécurisé des paiements ;",
                  "à Meta (WhatsApp Cloud API), lorsque ce canal est utilisé pour les échanges opérationnels liés à l’organisation ou au suivi de la réservation ;",
                  "aux prestataires techniques intervenant dans l’hébergement, la maintenance ou le fonctionnement de la plateforme ;",
                  "aux autorités compétentes, lorsque la loi l’exige.",
                ],
              },
            ],
          },
          {
            id: "duree-conservation",
            heading: "4. Durée de conservation",
            blocks: [
              {
                type: "p",
                text: "Les données personnelles sont conservées pendant une durée proportionnée aux finalités pour lesquelles elles ont été collectées.",
              },
              {
                type: "p",
                text: "Les informations nécessaires à la gestion des réservations sont conservées pendant la durée nécessaire au traitement de la demande et à l’exécution de la relation commerciale. Elles peuvent ensuite être archivées pendant la durée requise pour satisfaire aux obligations légales, comptables, fiscales ou probatoires applicables.",
              },
              {
                type: "p",
                text: "À l’issue des durées de conservation applicables, les données sont supprimées ou anonymisées, sauf obligation légale imposant une conservation plus longue.",
              },
            ],
          },
          {
            id: "securite",
            heading: "5. Sécurité",
            blocks: [
              {
                type: "p",
                text: "La plateforme met en œuvre des mesures techniques et organisationnelles appropriées afin d’assurer la sécurité et la confidentialité des données personnelles, et de les protéger contre la destruction, la perte, l’altération, la divulgation non autorisée ou l’accès non autorisé.",
              },
              {
                type: "p",
                text: "Ces mesures sont adaptées à la nature des données traitées et au niveau de risque présenté par les traitements concernés.",
              },
            ],
          },
          {
            id: "droits-utilisateurs",
            heading: "6. Droits des utilisateurs",
            blocks: [
              {
                type: "p",
                text: "Conformément au RGPD, toute personne concernée dispose, dans les conditions prévues par la réglementation applicable, des droits suivants :",
              },
              {
                type: "ul",
                items: [
                  "droit d’accès ;",
                  "droit de rectification ;",
                  "droit d’effacement ;",
                  "droit à la limitation du traitement ;",
                  "droit d’opposition pour motifs légitimes.",
                ],
              },
              {
                type: "p",
                text: "Lorsque le traitement est fondé sur le consentement, celui-ci peut être retiré à tout moment, sans remettre en cause la licéité des traitements effectués avant ce retrait.",
              },
              {
                type: "p",
                text: "Les utilisateurs peuvent exercer leurs droits en contactant la plateforme via le canal de contact dédié aux demandes relatives à la protection des données.",
              },
              {
                type: "p",
                text: "En cas de difficulté non résolue, l’utilisateur peut introduire une réclamation auprès de la CNIL.",
              },
            ],
          },
          {
            id: "cookies",
            heading: "7. Cookies",
            blocks: [
              {
                type: "p",
                text: "La plateforme peut utiliser des cookies et technologies similaires nécessaires à son fonctionnement, à la mesure d’audience et, le cas échéant, à l’amélioration de l’expérience utilisateur.",
              },
              {
                type: "p",
                text: "Les modalités détaillées relatives à l’utilisation des cookies et au recueil du consentement sont précisées dans la Politique de cookies.",
              },
            ],
          },
          {
            id: "positionnement-juridique",
            heading: "8. Positionnement juridique de la plateforme",
            blocks: [
              {
                type: "p",
                text: "La plateforme intervient en qualité d’intermédiaire et d’opérateur de services numériques. Les professionnels réalisant les prestations sont juridiquement indépendants et demeurent seuls responsables de leurs obligations professionnelles, administratives, sociales, fiscales et réglementaires.",
              },
              {
                type: "p",
                text: "Dans ce cadre, certaines données personnelles peuvent être transmises à ces professionnels indépendants lorsque cela est nécessaire pour organiser, confirmer et exécuter la prestation demandée par le client.",
              },
            ],
          },
        ],
      },
    ],
  },

  terms: {
    title: "Conditions générales",
    meta: {
      title: "Conditions générales",
      description:
        "Consultez les conditions générales d'utilisation, de réservation, de paiement et d'annulation des services Riviera Prime.",
    },
    groups: [
      {
        groupTitle: "Conditions générales d’utilisation",
        sections: [
          {
            id: "objet-du-site",
            heading: "1. Objet du site",
            blocks: [
              {
                type: "p",
                text: "Riviera Prime propose un service premium d’organisation, de réservation et de coordination permettant l’accès à un réseau de professionnels indépendants intervenant notamment dans :",
              },
              {
                type: "ul",
                items: [
                  "le transport privé de personnes avec chauffeur ;",
                  "la sécurité privée ;",
                  "des prestations haut de gamme associées.",
                ],
              },
            ],
          },
          {
            id: "role-de-la-societe",
            heading: "2. Rôle de la société",
            blocks: [
              { type: "p", text: "RIVIERA STRATEGIE intervient principalement en qualité :" },
              {
                type: "ul",
                items: [
                  "de société d’organisation ;",
                  "de coordinateur de réservations ;",
                  "de facilitateur commercial ;",
                  "d’opérateur de services numériques.",
                ],
              },
              {
                type: "p",
                text: "La société reçoit les demandes des clients, organise leur traitement et coordonne, selon les besoins exprimés, l’intervention de partenaires professionnels indépendants sélectionnés.",
              },
              {
                type: "p",
                text: "La société n’assure pas directement l’exécution matérielle des prestations opérationnelles confiées aux partenaires.",
              },
            ],
          },
          {
            id: "partenaires-executants",
            heading: "3. Partenaires exécutants",
            blocks: [
              {
                type: "p",
                text: "Les prestations opérationnelles sont réalisées par des professionnels juridiquement indépendants.",
              },
              { type: "p", text: "Chaque partenaire demeure seul responsable :" },
              {
                type: "ul",
                items: [
                  "de ses autorisations administratives ;",
                  "de ses assurances ;",
                  "de son personnel ;",
                  "du respect des règles professionnelles ;",
                  "de la conformité réglementaire de son activité ;",
                  "de la bonne exécution de la mission confiée.",
                ],
              },
            ],
          },
          {
            id: "responsabilite",
            heading: "4. Responsabilité",
            blocks: [
              { type: "p", text: "La société ne saurait être tenue responsable :" },
              {
                type: "ul",
                items: [
                  "des retards imputables au partenaire exécutant ;",
                  "d’un incident survenu durant la prestation ;",
                  "d’un manquement du prestataire ;",
                  "d’un cas de force majeure ;",
                  "d’une indisponibilité temporaire du site.",
                ],
              },
              {
                type: "p",
                text: "En tout état de cause, la responsabilité éventuelle de la société est limitée aux sommes effectivement perçues au titre de la réservation concernée, sauf disposition légale impérative contraire.",
              },
            ],
          },
          {
            id: "liens-externes",
            heading: "5. Liens externes",
            blocks: [
              {
                type: "p",
                text: "Le site peut contenir des liens vers des sites tiers. La société n’exerce aucun contrôle sur leur contenu ni sur leur fonctionnement.",
              },
            ],
          },
          {
            id: "mediation-consommation",
            heading: "6. MÉDIATION DE LA CONSOMMATION",
            blocks: [
              {
                type: "p",
                text: "En cas de litige non résolu après réclamation préalable, le client consommateur peut saisir gratuitement :",
              },
              { type: "p", text: "ANM Conso" },
              { type: "p", text: "2 rue de Colmar, 94300 Vincennes." },
            ],
          },
        ],
      },
      {
        groupTitle: "Conditions de réservation, paiement et annulation",
        sections: [
          {
            id: "demande-reservation",
            heading: "1. Demande de réservation",
            blocks: [
              { type: "p", text: "Toute demande transmise par l’utilisateur demeure soumise :" },
              {
                type: "ul",
                items: [
                  "à la disponibilité des partenaires ;",
                  "à la validation opérationnelle ;",
                  "à la faisabilité logistique ;",
                  "à la confirmation finale.",
                ],
              },
              { type: "p", text: "La réservation n’est définitive qu’après confirmation écrite." },
            ],
          },
          {
            id: "tarification",
            heading: "2. Tarification",
            blocks: [
              { type: "p", text: "Les conditions tarifaires peuvent être :" },
              {
                type: "ul",
                items: [
                  "fixes ;",
                  "établies sur devis ;",
                  "variables selon le lieu, l’horaire, la durée, l’urgence, le niveau de service ou toute contrainte particulière.",
                ],
              },
            ],
          },
          {
            id: "paiement",
            heading: "3. Paiement",
            blocks: [
              { type: "p", text: "Les paiements sont sécurisés par Stripe ou toute solution équivalente." },
              { type: "p", text: "Selon les situations, le paiement peut prendre la forme :" },
              {
                type: "ul",
                items: [
                  "d’un règlement intégral à la réservation ;",
                  "d’un acompte ;",
                  "d’un règlement différé ;",
                  "d’un paiement après confirmation.",
                ],
              },
              {
                type: "p",
                text: "Toute contestation abusive, opposition injustifiée ou utilisation frauduleuse pourra entraîner suspension du dossier et toute action utile.",
              },
            ],
          },
          {
            id: "remuneration-societe",
            heading: "4. Rémunération de la société",
            blocks: [
              {
                type: "p",
                text: "RIVIERA STRATEGIE perçoit principalement une rémunération correspondant, selon les cas :",
              },
              {
                type: "ul",
                items: [
                  "à des frais de réservation ;",
                  "à des frais de coordination ;",
                  "à des frais d’organisation ;",
                  "à une rémunération contractuellement prévue ;",
                  "à une commission convenue selon la nature de l’opération.",
                ],
              },
              {
                type: "p",
                text: "Le prix principal de la prestation peut, selon la nature du service concerné, être facturé directement par le partenaire professionnel exécutant.",
              },
              {
                type: "p",
                text: "Les prestations principales sont réalisées par des partenaires professionnels juridiquement indépendants, chacun demeurant seul responsable de ses obligations légales, administratives, sociales, fiscales et opérationnelles.",
              },
              {
                type: "p",
                text: "Toute rémunération revenant à RIVIERA STRATEGIE est portée à la connaissance du client avant validation définitive de la réservation.",
              },
            ],
          },
          {
            id: "politique-annulation-standard",
            heading: "5. Politique d’annulation standard",
            blocks: [
              {
                type: "ul",
                items: [
                  "plus de 72 heures avant la prestation : remboursement possible hors frais engagés ;",
                  "entre 72 heures et 24 heures avant : retenue pouvant atteindre 50 % ;",
                  "moins de 24 heures avant : retenue pouvant atteindre 100 %.",
                ],
              },
            ],
          },
          {
            id: "forte-demande-evenements-majeurs",
            heading: "6. Périodes de forte demande et événements majeurs",
            blocks: [
              {
                type: "p",
                text: "Pour certaines périodes particulières (Festival de Cannes, Grand Prix de Monaco, congrès, événements haut de gamme ou forte demande) :",
              },
              {
                type: "ul",
                items: [
                  "plus de 7 jours avant : remboursement partiel possible ;",
                  "entre 7 jours et 72 heures : retenue pouvant atteindre 70 % ;",
                  "moins de 72 heures avant : retenue pouvant atteindre 100 %.",
                ],
              },
            ],
          },
          {
            id: "absence-client",
            heading: "7. Absence du client",
            blocks: [
              { type: "p", text: "En cas de retard supérieur à 15 minutes sans information préalable :" },
              {
                type: "ul",
                items: [
                  "attente facturable ;",
                  "mission susceptible d’être annulée ;",
                  "prestation pouvant être due intégralement.",
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
                text: "En cas de circonstances exceptionnelles indépendantes de la volonté des parties, un report ou un avoir commercial pourra être proposé selon les disponibilités et contraintes applicables.",
              },
            ],
          },
        ],
      },
    ],
  },

  legalNotice: {
    title: "Mentions légales",
    meta: {
      title: "Mentions légales",
      description:
        "Mentions légales du site Riviera Prime: éditeur, hébergeur, propriété intellectuelle et informations légales.",
    },
    intro: [
      {
        type: "p",
        text: "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est porté à la connaissance des utilisateurs du présent site internet les informations suivantes :",
      },
    ],
    groups: [
      {
        sections: [
          {
            id: "editeur-du-site",
            heading: "1. Éditeur du site",
            blocks: [
              { type: "p", text: "RIVIERA STRATEGIE" },
              { type: "p", text: "Société à responsabilité limitée au capital social de 5 000,00 euros." },
              { type: "h3", text: "Siège social" },
              {
                type: "address",
                lines: [
                  "867 Avenue de Provence, Résidence Les Fougasses Bâtiment 2,",
                  "83600 Fréjus, France",
                ],
              },
              {
                type: "p",
                text: "Immatriculée au Registre du Commerce et des Sociétés de Fréjus sous le numéro 944 948 074.",
              },
              {
                type: "p",
                text: "Numéro individuel d’identification à la taxe sur la valeur ajoutée : FR83944948074.",
              },
              { type: "p", text: "Nom commercial exploité : Riviera Prime." },
              { type: "h3", text: "Représentant légal" },
              { type: "p", text: "Monsieur Kosivtchouk Youriy, agissant en qualité de Gérant." },
              {
                type: "p",
                text: [
                  "Adresse électronique : kosivtchoukyouriy@gmail.com",
                  "Téléphone : 06 14 62 27 83",
                ],
              },
            ],
          },
          {
            id: "directeur-publication",
            heading: "2. Directeur de la publication",
            blocks: [{ type: "p", text: "Monsieur Kosivtchouk Youriy." }],
          },
          {
            id: "hebergement-site",
            heading: "3. Hébergement du site",
            blocks: [
              {
                type: "address",
                lines: ["OVHcloud", "2 rue Kellermann, 59100 Roubaix, France."],
              },
            ],
          },
          {
            id: "acces-site",
            heading: "4. Accès au site",
            blocks: [
              {
                type: "p",
                text: "Le site est accessible en permanence, sous réserve d’interruptions temporaires liées à la maintenance, aux mises à jour techniques ou à tout cas de force majeure.",
              },
            ],
          },
          {
            id: "propriete-intellectuelle",
            heading: "5. Propriété intellectuelle",
            blocks: [
              {
                type: "p",
                text: "L’ensemble des éléments présents sur le site, notamment textes, dénominations, logos, visuels, photographies, graphismes, structure, présentation et contenus, est protégé par les dispositions légales relatives à la propriété intellectuelle.",
              },
              {
                type: "p",
                text: "Toute reproduction, représentation, diffusion, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite.",
              },
            ],
          },
        ],
      },
    ],
  },

  cookies: {
    title: "Politique de confidentialité et cookies",
    meta: {
      title: "Politique de cookies",
      description:
        "Politique de cookies Riviera Prime: types de cookies utilisés, consentement et gestion des préférences.",
    },
    groups: [
      {
        sections: [
          {
            id: "responsable-traitement",
            heading: "1. Responsable du traitement",
            blocks: [
              { type: "p", text: "Le responsable du traitement des données personnelles collectées sur le présent site est :" },
              { type: "p", text: "RIVIERA STRATEGIE" },
            ],
          },
          {
            id: "donnees-collectees",
            heading: "2. Données susceptibles d’être collectées",
            blocks: [
              { type: "p", text: "Selon la nature des demandes adressées, les données suivantes peuvent notamment être collectées :" },
              {
                type: "ul",
                items: [
                  "nom et prénom ;",
                  "numéro de téléphone ;",
                  "adresse électronique ;",
                  "informations relatives à la réservation ;",
                  "lieu de prise en charge ;",
                  "destination ;",
                  "date et horaire souhaités ;",
                  "informations utiles à l’organisation de la demande ;",
                  "données techniques de navigation.",
                ],
              },
            ],
          },
          {
            id: "finalites-traitement",
            heading: "3. Finalités du traitement",
            blocks: [
              { type: "p", text: "Les données sont traitées afin de :" },
              {
                type: "ul",
                items: [
                  "répondre aux demandes reçues ;",
                  "organiser les réservations ;",
                  "coordonner les prestations sollicitées ;",
                  "transmettre les informations strictement nécessaires aux partenaires concernés ;",
                  "assurer le suivi commercial ;",
                  "gérer les paiements ;",
                  "prévenir les utilisations frauduleuses ;",
                  "satisfaire aux obligations légales et réglementaires.",
                ],
              },
            ],
          },
          {
            id: "bases-juridiques",
            heading: "4. Bases juridiques",
            blocks: [
              { type: "p", text: "Les traitements reposent, selon les situations, sur :" },
              {
                type: "ul",
                items: [
                  "l’exécution d’un contrat ;",
                  "les mesures précontractuelles ;",
                  "le consentement ;",
                  "l’intérêt légitime ;",
                  "le respect d’une obligation légale.",
                ],
              },
            ],
          },
          {
            id: "destinataires-donnees",
            heading: "5. Destinataires des données",
            blocks: [
              { type: "p", text: "Les données peuvent être transmises uniquement :" },
              {
                type: "ul",
                items: [
                  "aux partenaires professionnels concernés par la demande ;",
                  "aux prestataires techniques ;",
                  "aux prestataires de paiement ;",
                  "aux autorités légalement compétentes lorsque la réglementation l’exige.",
                ],
              },
            ],
          },
          {
            id: "duree-conservation",
            heading: "6. Durée de conservation",
            blocks: [
              {
                type: "p",
                text: "Les données sont conservées pendant la durée nécessaire à leur finalité puis archivées selon les délais légaux applicables.",
              },
            ],
          },
          {
            id: "droits-personnes",
            heading: "7. Droits des personnes",
            blocks: [
              { type: "p", text: "Toute personne dispose :" },
              {
                type: "ul",
                items: [
                  "d’un droit d’accès ;",
                  "d’un droit de rectification ;",
                  "d’un droit d’effacement ;",
                  "d’un droit d’opposition ;",
                  "d’un droit de limitation ;",
                  "d’un droit à la portabilité.",
                ],
              },
              { type: "p", text: "Toute demande peut être adressée à : kosivtchoukyouriy@gmail.com" },
              {
                type: "p",
                text: "En cas de difficulté persistante, une réclamation peut être introduite auprès de la Commission Nationale de l’Informatique et des Libertés.",
              },
            ],
          },
          {
            id: "cookies",
            heading: "8. Cookies",
            blocks: [
              { type: "p", text: "Le site peut utiliser :" },
              {
                type: "ul",
                items: [
                  "des cookies strictement nécessaires à son fonctionnement ;",
                  "des cookies de mesure d’audience ;",
                  "des cookies publicitaires ;",
                  "des cookies de personnalisation.",
                ],
              },
              { type: "p", text: "Les cookies non essentiels ne sont déposés qu’après consentement exprès de l’utilisateur." },
              { type: "p", text: "Le consentement peut être retiré à tout moment." },
              { type: "p", text: "Outils susceptibles d’être utilisés :" },
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
