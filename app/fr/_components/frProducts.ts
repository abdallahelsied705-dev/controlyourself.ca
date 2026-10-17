// French (Québec) content for the /fr/product/[slug] detail pages. Mirrors the
// five plans in app/lib/products.ts; prices in CAD shown Québec-style (X,XX $).
export type FrPlan = {
  slug: string;
  months: number;
  price: number; // numeric, for schema (CAD)
  priceStr: string; // display, e.g. "54,99 $"
  perMonth: string;
  period: string;
  badge?: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  whoFor: string[];
  faq: { q: string; a: string }[];
};

export const included = [
  "50 000+ chaînes en direct",
  "200 000+ films et séries sur demande",
  "Qualité 4K / FHD / HD",
  "Reprise TV sur 7 jours",
  "Guide électronique (EPG)",
  "Technologie anti-gel",
  "Mises à jour automatiques",
  "1 à 4 appareils",
  "Soutien 7 jours sur 7",
  "Aide à l'installation gratuite",
  "Compatible VPN",
  "Remboursement 48 h si ça ne fonctionne pas",
];

export const frPlans: FrPlan[] = [
  {
    slug: "1-month-iptv-canada",
    months: 1,
    price: 13.99,
    priceStr: "13,99 $",
    perMonth: "13,99 $/mois",
    period: "paiement unique",
    label: "1 mois",
    metaTitle: "Abonnement IPTV Canada 1 mois – 13,99 $ | IPTV Canada",
    metaDescription:
      "Un mois d'IPTV Canada pour 13,99 $ : 50 000+ chaînes en direct, jusqu'en 4K et reprise sur 7 jours. Sans contrat, sans renouvellement, activation après un essai gratuit.",
    h1: "IPTV Canada 1 mois — 13,99 $, paiement unique",
    subtitle:
      "La façon la plus simple de voir si l'IPTV vous convient. Un mois complet d'accès — 50 000+ chaînes, jusqu'en 4K et reprise sur 7 jours — pour un seul paiement de 13,99 $ qui ne se renouvelle jamais tout seul.",
    whoFor: [
      "Vous voulez tester le service avant de vous engager plus longtemps.",
      "Vous êtes de passage et avez besoin de la télé pour quelques semaines.",
      "Vous préférez payer au mois sans aucun engagement.",
    ],
    faq: [
      { q: "Est-ce que ça se renouvelle automatiquement?", a: "Non. Vous payez 13,99 $ une fois pour 30 jours d'accès — aucun prélèvement récurrent, rien à annuler. À la fin des 30 jours le service s'arrête, et c'est à vous de décider de reprendre ou non." },
      { q: "Puis-je essayer avant de payer?", a: "Oui — demandez l'essai gratuit de 24 heures sur WhatsApp. Aucune carte requise; nous l'activons pendant que vous patientez." },
      { q: "Sur combien d'appareils puis-je regarder?", a: "De 1 à 4 connexions, à choisir au moment de l'achat. Chaque connexion diffuse indépendamment." },
    ],
  },
  {
    slug: "3-month-iptv-canada",
    months: 3,
    price: 34.99,
    priceStr: "34,99 $",
    perMonth: "≈ 11,66 $/mois",
    period: "aux 3 mois",
    label: "3 mois",
    metaTitle: "Abonnement IPTV Canada 3 mois – 34,99 $ | IPTV Canada",
    metaDescription:
      "Trois mois d'IPTV Canada pour 34,99 $ (environ 11,66 $/mois) : 50 000+ chaînes, jusqu'en 4K et reprise sur 7 jours. Sans contrat, installation rapide sur WhatsApp.",
    h1: "IPTV Canada 3 mois — 34,99 $, paiement unique",
    subtitle:
      "Trois mois d'IPTV Canada pour 34,99 $ — environ 7 $ de moins qu'au tarif mensuel. Un choix sensé pour une télé fiable le temps d'une saison, sans vous lier pour six mois.",
    whoFor: [
      "Vous voulez couvrir une saison de sport ou l'hiver.",
      "Vous avez aimé le mois d'essai et voulez un peu plus de temps.",
      "Vous cherchez une première baisse de prix sans long engagement.",
    ],
    faq: [
      { q: "Combien j'économise par rapport au mois?", a: "34,99 $ pour trois mois revient à environ 11,66 $ par mois, contre 13,99 $ au mois — soit environ 7 $ d'économie sur la même période." },
      { q: "Est-ce que ça se renouvelle tout seul?", a: "Non, c'est un paiement unique pour 90 jours. Vous reprenez quand vous le souhaitez." },
      { q: "La qualité change-t-elle selon le forfait?", a: "Non — tous les forfaits offrent exactement la même chose. Seules la durée et le prix par mois changent." },
    ],
  },
  {
    slug: "6-month-iptv-canada",
    months: 6,
    price: 54.99,
    priceStr: "54,99 $",
    perMonth: "≈ 9,17 $/mois",
    period: "aux 6 mois",
    badge: "Le plus populaire",
    label: "6 mois",
    metaTitle: "Abonnement IPTV Canada 6 mois – 54,99 $ | IPTV Canada",
    metaDescription:
      "Six mois d'IPTV Canada pour 54,99 $ (environ 9,17 $/mois) — notre forfait le plus populaire : 50 000+ chaînes, jusqu'en 4K, reprise sur 7 jours. Sans contrat.",
    h1: "IPTV Canada 6 mois — 54,99 $, paiement unique",
    subtitle:
      "Le forfait que la plupart des gens choisissent. Six mois d'IPTV Canada pour 54,99 $ — environ 9,17 $ par mois — le bon équilibre entre une vraie économie et la liberté de réévaluer avant de vous engager pour un an.",
    whoFor: [
      "La télé est allumée presque tous les soirs et la fin de semaine.",
      "Vous voulez une économie réelle sans vous engager pour un an.",
      "Vous cherchez le meilleur rapport entre prix et souplesse.",
    ],
    faq: [
      { q: "Pourquoi est-ce le plus populaire?", a: "C'est le meilleur compromis prix-souplesse : environ 9,17 $ par mois, soit un tiers de moins que le tarif mensuel, sans vous engager pour une année complète." },
      { q: "La 4K est-elle incluse?", a: "Oui — toute la plage de qualité est incluse. Là où une chaîne diffuse en 4K, vous l'obtenez en 4K; ailleurs en Full HD ou HD. Rien n'est réservé à un forfait plus cher." },
      { q: "Puis-je ajouter des appareils?", a: "Oui, de 1 à 4 connexions simultanées, au choix lors de l'achat." },
    ],
  },
  {
    slug: "12-month-iptv-canada",
    months: 12,
    price: 94.99,
    priceStr: "94,99 $",
    perMonth: "≈ 7,92 $/mois",
    period: "par année",
    label: "12 mois",
    metaTitle: "Abonnement IPTV Canada 12 mois – 94,99 $ | IPTV Canada",
    metaDescription:
      "Un an d'IPTV Canada pour 94,99 $ — environ 7,92 $ par mois pour 50 000+ chaînes, jusqu'en 4K et reprise sur 7 jours. Sans contrat, sans renouvellement.",
    h1: "IPTV Canada 12 mois — 94,99 $, paiement unique",
    subtitle:
      "Un an d'IPTV Canada pour 94,99 $ — environ 7,92 $ par mois. Le meilleur rapport qualité-prix pour qui sait déjà que l'IPTV a remplacé le câble pour de bon.",
    whoFor: [
      "Vous avez déjà coupé le câble et ne reviendrez pas en arrière.",
      "Vous voulez le prix mensuel le plus bas avec un seul paiement.",
      "Vous préférez régler la télé une fois pour l'année.",
    ],
    faq: [
      { q: "Combien j'économise sur l'année?", a: "94,99 $ pour douze mois revient à environ 7,92 $ par mois, contre 13,99 $ au mois — soit environ 73 $ d'économie sur l'année." },
      { q: "Est-ce un paiement unique?", a: "Oui. Vous payez 94,99 $ une fois pour 12 mois d'accès; rien ne se renouvelle automatiquement." },
      { q: "Et si ça ne fonctionne pas chez moi?", a: "Il y a un essai gratuit pour tester d'abord, et un remboursement sous 48 h si le service ne fonctionne pas. Écrivez-nous sur WhatsApp avant d'acheter si vous hésitez." },
    ],
  },
  {
    slug: "24-month-iptv-canada",
    months: 24,
    price: 159,
    priceStr: "159 $",
    perMonth: "≈ 6,63 $/mois",
    period: "aux 2 ans",
    badge: "Meilleure valeur",
    label: "24 mois",
    metaTitle: "Abonnement IPTV Canada 24 mois – 159 $ | IPTV Canada",
    metaDescription:
      "Deux ans d'IPTV Canada pour 159 $ — environ 6,63 $ par mois, notre tarif le plus bas : 50 000+ chaînes, jusqu'en 4K et reprise sur 7 jours. Sans contrat.",
    h1: "IPTV Canada 24 mois — 159 $, paiement unique",
    subtitle:
      "Deux ans d'IPTV Canada pour 159 $ — environ 6,63 $ par mois, notre tarif le plus bas. Vous bloquez le meilleur prix et vous n'y pensez plus.",
    whoFor: [
      "Vous voulez le prix par mois le plus bas possible.",
      "Vous êtes convaincu et préférez ne plus vous en occuper pendant deux ans.",
      "Vous voulez vous protéger de toute hausse de prix.",
    ],
    faq: [
      { q: "Pourquoi choisir 24 mois?", a: "C'est le tarif le plus bas : environ 6,63 $ par mois, soit plus de la moitié de moins que le tarif mensuel, pour un seul paiement de 159 $." },
      { q: "Est-ce que le prix peut augmenter en cours de route?", a: "Non. Le paiement unique couvre les 24 mois complets au prix payé; rien ne change pendant la période." },
      { q: "Puis-je d'abord essayer?", a: "Oui — demandez l'essai gratuit de 24 heures sur WhatsApp avant de vous engager." },
    ],
  },
];

export function getFrPlan(slug: string): FrPlan | undefined {
  return frPlans.find((p) => p.slug === slug);
}
