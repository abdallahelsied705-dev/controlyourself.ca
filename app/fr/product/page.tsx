import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FrNav from "../_components/FrNav";
import FrFooter from "../_components/FrFooter";
import { SITE_URL } from "../../lib/site";

const BASE = SITE_URL;

const TITLE = "Forfaits IPTV Canada — tarifs en dollars canadiens | IPTV Canada";
const DESCRIPTION =
  "Forfaits IPTV Canada en dollars canadiens : 1 à 24 mois, dès 6,63 $/mois. 50 000+ chaînes, jusqu'en 4K, sans contrat, essai gratuit de 24 h.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${BASE}/fr/product`,
    languages: { "en-CA": `${BASE}/product`, "fr-CA": `${BASE}/fr/product`, "x-default": `${BASE}/product` },
  },
  openGraph: { type: "website", locale: "fr_CA", url: `${BASE}/fr/product`, siteName: "IPTV Canada", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const plans = [
  { slug: "1-month-iptv-canada", label: "1 mois", price: "13,99", perMonth: "13,99 $/mois", blurb: "Pour essayer sans vous engager.", popular: false },
  { slug: "3-month-iptv-canada", label: "3 mois", price: "34,99", perMonth: "≈ 11,66 $/mois", blurb: "De la télé fiable pour une saison.", popular: false },
  { slug: "6-month-iptv-canada", label: "6 mois", price: "54,99", perMonth: "≈ 9,17 $/mois", blurb: "Le choix de la plupart des clients.", popular: true },
  { slug: "12-month-iptv-canada", label: "12 mois", price: "94,99", perMonth: "≈ 7,92 $/mois", blurb: "Un an, au meilleur rapport qualité-prix.", popular: false },
  { slug: "24-month-iptv-canada", label: "24 mois", price: "159", perMonth: "≈ 6,63 $/mois", blurb: "Le prix par mois le plus bas.", popular: false },
];

const included = [
  "Plus de 50 000 chaînes en direct",
  "200 000+ films et séries sur demande",
  "Qualité jusqu'en 4K Ultra HD",
  "Reprise sur 7 jours et guide complet",
  "Jusqu'à 4 appareils en simultané",
  "Assistance sur WhatsApp, jour et nuit",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${BASE}/fr/product#product`,
      name: "Abonnement IPTV Canada",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "IPTV Canada" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CAD",
        lowPrice: "13.99",
        highPrice: "159",
        offerCount: 5,
        offers: [
          { "@type": "Offer", price: "13.99", priceCurrency: "CAD", availability: "https://schema.org/InStock", url: `${BASE}/product/1-month-iptv-canada` },
          { "@type": "Offer", price: "34.99", priceCurrency: "CAD", availability: "https://schema.org/InStock", url: `${BASE}/product/3-month-iptv-canada` },
          { "@type": "Offer", price: "54.99", priceCurrency: "CAD", availability: "https://schema.org/InStock", url: `${BASE}/product/6-month-iptv-canada` },
          { "@type": "Offer", price: "94.99", priceCurrency: "CAD", availability: "https://schema.org/InStock", url: `${BASE}/product/12-month-iptv-canada` },
          { "@type": "Offer", price: "159", priceCurrency: "CAD", availability: "https://schema.org/InStock", url: `${BASE}/product/24-month-iptv-canada` },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE}/fr` },
        { "@type": "ListItem", position: 2, name: "Forfaits", item: `${BASE}/fr/product` },
      ],
    },
  ],
};

export default function FrProduct() {
  return (
    <div lang="fr-CA">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FrNav />
      <main className="bg-ink-950">
        <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="pointer-events-none absolute -top-40 right-[-8%] h-[460px] w-[560px] bg-brand-600/20 blur-[130px] animate-blob" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">Forfaits IPTV Canada</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
              Le même service complet dans tous les forfaits — seules la durée et le prix par mois changent. Paiement
              unique, sans renouvellement automatique, prix en dollars canadiens.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {plans.map((p) => (
                <div
                  key={p.slug}
                  className={`reveal card-hover relative flex flex-col rounded-2xl border bg-ink-900 p-6 ${
                    p.popular ? "border-brand-500/60 ring-1 ring-brand-500/40" : "border-white/10"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                      Le plus populaire
                    </span>
                  )}
                  <p className="text-sm font-semibold text-zinc-300">{p.label}</p>
                  <p className="mt-3 font-display text-3xl font-bold text-white">
                    {p.price} <span className="text-base font-medium text-zinc-400">$</span>
                  </p>
                  <p className="mt-1 text-xs text-brand-300">{p.perMonth}</p>
                  <p className="mt-3 flex-1 text-sm text-zinc-400">{p.blurb}</p>
                  <a
                    href={`https://wa.me/212710141872?text=controlyourself.ca%20-%20Forfait%20${p.label.replace(" ", "%20")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-shine relative mt-6 inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                      p.popular
                        ? "bg-gradient-to-r from-brand-600 to-brand-400 text-ink-950"
                        : "border border-white/15 bg-white/5 text-zinc-100 hover:border-brand-400/50"
                    }`}
                  >
                    S&apos;abonner
                    <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink-900 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="reveal text-center text-3xl font-bold text-white sm:text-4xl">Inclus dans chaque forfait</h2>
            <ul className="reveal mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-800/60 p-4 text-sm text-zinc-200">
                  <Check size={18} className="mt-0.5 shrink-0 text-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="reveal mt-12 text-center">
              <Link href="/fr#pricing" className="text-sm text-brand-300 underline-offset-4 hover:underline">
                ← Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FrFooter />
    </div>
  );
}
