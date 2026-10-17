"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

const deviceOptions = [1, 2, 3, 4];

const plans = [
  {
    name: "1 mois",
    months: 1,
    devicePrices: { 1: "13,99", 2: "20", 3: "27", 4: "34" },
    period: "paiement unique",
    description: "Essayer sans s'engager",
    highlight: false,
  },
  {
    name: "3 mois",
    months: 3,
    devicePrices: { 1: "34,99", 2: "48", 3: "62", 4: "75" },
    period: "aux 3 mois",
    description: "Une saison de sport réglée",
    highlight: false,
  },
  {
    name: "6 mois",
    months: 6,
    devicePrices: { 1: "54,99", 2: "75", 3: "95", 4: "115" },
    period: "aux 6 mois",
    badge: "Populaire",
    description: "Le juste milieu prix-souplesse",
    highlight: true,
  },
  {
    name: "12 mois",
    months: 12,
    devicePrices: { 1: "94,99", 2: "130", 3: "165", 4: "200" },
    period: "par année",
    description: "Meilleur prix mensuel, un seul paiement",
    highlight: false,
  },
  {
    name: "24 mois",
    months: 24,
    devicePrices: { 1: "159", 2: "215", 3: "270", 4: "325" },
    period: "aux 2 ans",
    badge: "Meilleure valeur",
    description: "Le tarif le plus bas, et on n'y pense plus",
    highlight: false,
  },
];

const features = [
  "50 000+ chaînes en direct",
  "Qualité 4K Ultra HD",
  "Reprise TV sur 7 jours",
  "Vidéothèque (200 000+ titres)",
  "Soutien prioritaire 24/7",
  "Aide à l'installation gratuite",
];

const highlights = [
  { icon: "📱", label: "Sur tous vos appareils" },
  { icon: "❄️", label: "Technologie Anti-gel 9.8" },
  { icon: "🎬", label: "+200K films et séries (VSD)" },
  { icon: "📺", label: "+50 000 chaînes premium en direct" },
  { icon: "🎥", label: "Qualité 4K / HD / FHD / UHD" },
  { icon: "🔄", label: "Mises à jour gratuites et automatiques" },
  { icon: "📅", label: "Guide EPG inclus" },
  { icon: "↩️", label: "Remboursement sous 48 h" },
  { icon: "🎧", label: "Soutien gratuit 24/7" },
  { icon: "🔒", label: "Confidentialité et VPN intégré" },
];

export default function FrPricing() {
  const [devices, setDevices] = useState<1 | 2 | 3 | 4>(1);

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-accent-600/15 blur-[120px] animate-aurora [animation-delay:-8s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tarifs"
          title={
            <>
              Des prix <span className="text-gradient">simples et honnêtes</span>
            </>
          }
          subtitle="Un prix clair par forfait. Aucuns frais cachés, aucun contrat à renouvellement, et un essai gratuit de 24 h avant de décider."
          className="mb-12!"
        />

        <div className="reveal mb-14 flex flex-col items-center">
          <p className="mb-4 text-sm text-zinc-400">Combien d&apos;appareils vous faut-il?</p>
          <div className="relative inline-grid grid-cols-4 rounded-full border border-white/10 bg-ink-800 p-1">
            <span
              className="absolute inset-y-1 left-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 shadow-lg shadow-brand-600/40 transition-transform duration-300 ease-out"
              style={{ width: "calc((100% - 0.5rem) / 4)", transform: `translateX(${(devices - 1) * 100}%)` }}
            />
            {deviceOptions.map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3 | 4)}
                className={`relative z-10 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                  devices === d ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {d} {d === 1 ? "appareil" : "appareils"}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan, i) => {
            const price = plan.devicePrices[devices as keyof typeof plan.devicePrices];
            const href = `https://wa.me/212710141872?text=${encodeURIComponent(`controlyourself.ca - Forfait ${plan.name} / ${devices} ${devices === 1 ? "appareil" : "appareils"} - ${price} $`)}`;

            const body = (
              <div className={`relative flex h-full flex-col rounded-[1.2rem] p-6 ${plan.highlight ? "bg-gradient-to-b from-ink-700 to-ink-900" : ""}`}>
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold ${
                      plan.highlight
                        ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-600/40"
                        : "bg-white text-brand-700"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <p className="mb-0.5 text-base font-bold text-white">{plan.name}</p>
                <p className="mb-5 text-xs text-zinc-500">{plan.description}</p>

                <div className="mb-1 flex items-start gap-1">
                  <span key={price} className="font-display text-5xl font-bold text-white animate-[pop_0.4s_ease-out]">
                    {price}
                  </span>
                  <span className="mt-1.5 text-lg font-semibold text-zinc-400">$</span>
                </div>
                <p className="mb-6 text-xs text-zinc-500">
                  {plan.period} · {devices} {devices === 1 ? "connexion" : "connexions"}
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-auto flex items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/40 hover:shadow-brand-500/60"
                      : "border border-white/15 bg-white/5 text-white hover:border-brand-500/60 hover:bg-brand-500/15"
                  }`}
                >
                  S&apos;abonner
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/fr/product"
                  className="mt-3 text-center text-xs text-zinc-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Détails du forfait {plan.name}
                </Link>
              </div>
            );

            return (
              <div key={plan.name} className="reveal" style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}>
                {plan.highlight ? (
                  <div className="glow-border h-full lg:-my-4 lg:scale-105">{body}</div>
                ) : (
                  <div className="spotlight h-full rounded-[1.25rem] border border-white/10 bg-ink-800/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    {body}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="reveal glass rounded-2xl p-7">
          <p className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-400">Inclus dans chaque forfait</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                  <Check size={11} className="text-brand-300" />
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="reveal flex items-center gap-3 rounded-xl border border-white/[0.06] bg-ink-800/60 px-4 py-3 transition-colors hover:border-brand-500/30"
              style={{ "--delay": `${(i % 5) * 50}ms` } as React.CSSProperties}
            >
              <span className="flex-shrink-0 text-xl">{h.icon}</span>
              <span className="text-xs font-medium leading-snug text-zinc-300">{h.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Chaque forfait commence par un essai gratuit de 24 h. Écrivez-nous sur WhatsApp pour l&apos;activer — aucune
          carte requise.
        </p>
      </div>
    </section>
  );
}
