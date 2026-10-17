import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Scissors,
  Check,
  Minus,
  Tv,
  Smartphone,
  MonitorPlay,
  Zap,
  ShieldCheck,
  Headphones,
  Clock,
  Globe,
} from "lucide-react";
import FrNav from "./_components/FrNav";
import FrFooter from "./_components/FrFooter";
import { SITE_URL } from "../lib/site";

const BASE = SITE_URL;
const WA = "https://wa.me/212710141872?text=controlyourself.ca%20-%20Essai%20gratuit%2024%20h";

const TITLE = "IPTV Québec & Canada français — 50 000+ chaînes en 4K | IPTV Canada";
const DESCRIPTION =
  "Abonnement IPTV au Canada : plus de 50 000 chaînes en direct et 200 000 films et séries jusqu'en 4K, diffusés par Internet. Fonctionne sur Firestick, télé intelligente, Android et iPhone. Sans contrat, essai gratuit de 24 h, prix en dollars canadiens.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${BASE}/fr`,
    languages: { "en-CA": BASE, "fr-CA": `${BASE}/fr`, "x-default": BASE },
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${BASE}/fr`,
    siteName: "IPTV Canada",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const plans = [
  { slug: "1-month-iptv-canada", label: "1 mois", price: "13,99", perMonth: "13,99 $/mois", popular: false },
  { slug: "3-month-iptv-canada", label: "3 mois", price: "34,99", perMonth: "≈ 11,66 $/mois", popular: false },
  { slug: "6-month-iptv-canada", label: "6 mois", price: "54,99", perMonth: "≈ 9,17 $/mois", popular: true },
  { slug: "12-month-iptv-canada", label: "12 mois", price: "94,99", perMonth: "≈ 7,92 $/mois", popular: false },
  { slug: "24-month-iptv-canada", label: "24 mois", price: "159", perMonth: "≈ 6,63 $/mois", popular: false },
];

const comparison: { feature: string; iptv: string | boolean; cable: string | boolean }[] = [
  { feature: "Coût mensuel", iptv: "Dès 6,63 $", cable: "95 $ – 135 $" },
  { feature: "Engagement", iptv: "Aucun", cable: "12 mois" },
  { feature: "Antenne, câblodistributeur ou technicien", iptv: false, cable: true },
  { feature: "Chaînes en direct", iptv: "50 000+", cable: "~250" },
  { feature: "Sur téléphone, tablette et télé", iptv: true, cable: "Frais en sus" },
  { feature: "Fonctionne à l'étranger", iptv: true, cable: false },
];

const faqs = [
  {
    q: "Qu'est-ce que l'IPTV au Québec?",
    a: "L'IPTV, c'est la télévision diffusée par Internet plutôt que par une antenne, un câblodistributeur ou une soucoupe. Vous prenez un abonnement, installez une appli IPTV sur votre télé, votre Firestick ou votre téléphone, entrez les identifiants que nous vous envoyons, et vous regardez les chaînes, le sport, les films et les séries en quelques minutes.",
  },
  {
    q: "Combien coûte l'IPTV au Canada?",
    a: "Nos forfaits IPTV Canada commencent à 13,99 $ pour un mois sur un appareil. Plus la durée est longue, moins vous payez par mois : 34,99 $ pour 3 mois, 54,99 $ pour 6 mois, 94,99 $ pour 12 mois (environ 7,92 $ par mois) et 159 $ pour 24 mois. Aucun contrat ni frais d'installation.",
  },
  {
    q: "Y a-t-il un essai gratuit?",
    a: "Oui — nous offrons un essai gratuit de 24 heures pour tester les chaînes et la qualité d'image sur votre propre appareil avant de payer. Aucune carte requise : écrivez-nous sur WhatsApp et nous activons l'essai pendant que vous patientez.",
  },
  {
    q: "L'IPTV est-elle légale au Canada?",
    a: "La technologie elle-même est légale — les diffuseurs canadiens utilisent exactement le même mode de diffusion par Internet dans leurs propres applis. Ce qui compte, c'est que le contenu soit dûment autorisé : choisissez un fournisseur aux conditions claires qui répond aux avis de droit d'auteur, et ne partagez jamais vos identifiants.",
  },
  {
    q: "Sur quels appareils l'IPTV fonctionne-t-elle?",
    a: "Sur Amazon Firestick et Fire TV, les télés intelligentes Samsung et LG, les boîtiers Android TV, les téléphones Android, iPhone, iPad, Apple TV, les boîtiers MAG, Windows et Mac. N'importe quel lecteur IPTV standard convient : TiviMate, IPTV Smarters Pro ou GSE Smart IPTV sont les plus populaires.",
  },
  {
    q: "Quelle vitesse Internet faut-il?",
    a: "Visez au moins 10 Mbps pour la HD et 25 Mbps pour la 4K. La plupart des connexions résidentielles gèrent la 4K sans problème. Si votre Wi-Fi faiblit en soirée, un câble Ethernet vers la télé donne l'image la plus stable.",
  },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

function Cell({ value, good }: { value: string | boolean; good?: boolean }) {
  if (value === true) return <Check size={18} className={good ? "mx-auto text-accent-400" : "mx-auto text-zinc-400"} aria-label="Oui" />;
  if (value === false) return <Minus size={18} className="mx-auto text-zinc-600" aria-label="Non" />;
  return <span className={good ? "font-semibold text-white" : "text-zinc-400"}>{value}</span>;
}

export default function FrHome() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE}/fr#webpage`,
        url: `${BASE}/fr`,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "fr-CA",
      },
      {
        "@type": "Product",
        "@id": `${BASE}/fr#product`,
        name: "Abonnement IPTV Canada",
        description: DESCRIPTION,
        brand: { "@type": "Brand", name: "IPTV Canada" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "CAD",
          lowPrice: "13.99",
          highPrice: "159",
          offerCount: plans.length,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE}/fr#faq`,
        inLanguage: "fr-CA",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <div lang="fr-CA">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FrNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-950 pb-16 pt-36 sm:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="anim-gradient absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(70% 55% at 85% 0%, rgba(249,115,22,0.22), transparent 60%), radial-gradient(55% 55% at 10% 15%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(80% 60% at 50% 115%, rgba(234,88,12,0.18), transparent 60%)",
              }}
            />
            <div className="absolute -top-40 right-[-8%] h-[520px] w-[620px] bg-brand-600/25 blur-[130px] animate-blob" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="hero-in inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-100 backdrop-blur">
              <Scissors size={13} className="text-brand-300" />
              Couper le câble, en français, au Québec
              <span className="leading-none">⚜️</span>
            </div>

            <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Coupez le câble.
              <span className="mt-2 block text-gradient">Gardez tout ce</span>
              <span className="mt-2 block text-white">qui vaut la peine.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              IPTV Canada diffuse plus de 50 000 chaînes en direct et 200 000 films et séries jusqu&apos;en 4K,
              directement par votre connexion Internet — sans soucoupe, sans boîtier de câble, sans contrat de deux ans.
              Installez-le sur le Firestick, la télé ou le téléphone que vous avez déjà, en quelques minutes.
            </p>

            <div className="hero-in mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={delay(240)}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.9)] transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Essai gratuit de 24 h
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/fr#tarifs"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-zinc-200 backdrop-blur transition-colors hover:border-brand-400/50 hover:text-white sm:w-auto"
              >
                Voir les forfaits
              </Link>
            </div>

            <p className="hero-in mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-zinc-500" style={delay(320)}>
              <span className="inline-flex items-center gap-1.5"><Clock size={14} className="text-accent-400" /> Essai de 24 h</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-300" /> Sans carte bancaire</span>
              <span className="inline-flex items-center gap-1.5"><Zap size={14} className="text-brand-300" /> Prêt en quelques minutes</span>
            </p>
          </div>
        </section>

        {/* Comparison — couper le câble */}
        <section id="chaines" className="relative bg-ink-950 py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                IPTV ou câble?
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Pourquoi les Québécois coupent le câble</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Le câble et le satellite coûtent cher et vous enferment dans un contrat. L&apos;IPTV vous donne bien plus
                de chaînes, en 4K, sur tous vos appareils, pour une fraction du prix — et vous pouvez partir quand vous
                voulez.
              </p>
            </div>

            <div className="reveal mt-10 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-ink-800/80 text-zinc-300">
                    <th className="px-4 py-4 font-medium sm:px-6">Caractéristique</th>
                    <th className="px-4 py-4 text-center font-semibold text-brand-300 sm:px-6">IPTV Canada</th>
                    <th className="px-4 py-4 text-center font-medium sm:px-6">Câble / satellite</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 ? "bg-white/[0.015]" : ""}>
                      <td className="px-4 py-4 text-zinc-300 sm:px-6">{row.feature}</td>
                      <td className="px-4 py-4 text-center sm:px-6"><Cell value={row.iptv} good /></td>
                      <td className="px-4 py-4 text-center sm:px-6"><Cell value={row.cable} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Devices */}
        <section className="bg-ink-900 py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="reveal text-3xl font-bold text-white sm:text-4xl">Sur tous vos appareils</h2>
            <p className="reveal mx-auto mt-4 max-w-2xl text-zinc-400">
              Aucun matériel à acheter. Installez une appli IPTV et connectez-vous — c&apos;est tout.
            </p>
            <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Tv, label: "Télé intelligente" },
                { icon: MonitorPlay, label: "Firestick / Fire TV" },
                { icon: Smartphone, label: "Android & iPhone" },
                { icon: Globe, label: "Apple TV, MAG, PC" },
              ].map((d) => (
                <div key={d.label} className="card-hover rounded-2xl border border-white/[0.07] bg-ink-800/70 p-6">
                  <d.icon size={28} className="mx-auto text-brand-300" />
                  <p className="mt-3 text-sm font-medium text-zinc-200">{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="tarifs" className="relative bg-ink-950 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="reveal text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Des forfaits simples, en dollars canadiens</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                Le même service complet dans tous les forfaits — seules la durée et le prix par mois changent. Paiement
                unique, sans renouvellement automatique.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
                    {p.price} <span className="text-base font-medium text-zinc-400">$CA</span>
                  </p>
                  <p className="mt-1 text-xs text-brand-300">{p.perMonth}</p>
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
                    Choisir
                    <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>

            <p className="reveal mt-8 text-center text-sm text-zinc-500">
              Vous pouvez ajouter jusqu&apos;à quatre appareils.{" "}
              <Link href="/fr/product" className="text-brand-300 underline-offset-4 hover:underline">
                Voir le détail des forfaits
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-ink-900 py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="reveal text-center text-3xl font-bold text-white sm:text-4xl">Questions fréquentes</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="reveal group rounded-2xl border border-white/10 bg-ink-800/60 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-white">
                    {f.q}
                    <span className="ml-4 text-brand-300 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-zinc-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-ink-950 py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[130px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Headphones size={32} className="mx-auto text-brand-300" />
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
              Essayez pendant 24 h, gratuitement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Écrivez-nous sur WhatsApp et nous activons votre essai tout de suite. Aucune carte, aucun engagement.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.9)] transition-transform hover:scale-[1.03]"
            >
              Démarrer l&apos;essai gratuit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>
      <FrFooter />
    </div>
  );
}
