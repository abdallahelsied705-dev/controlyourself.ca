import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, Clock, ArrowRight } from "lucide-react";
import FrNav from "../_components/FrNav";
import FrFooter from "../_components/FrFooter";
import { SITE_URL } from "../../lib/site";

const BASE = SITE_URL;
const WA = "https://wa.me/212710141872?text=controlyourself.ca%20-%20J'ai%20une%20question";
const EMAIL = "supportteamiptv@gmail.com";

const TITLE = "Contact — IPTV Canada (service en français)";
const DESCRIPTION =
  "Joignez l'équipe IPTV Canada en français sur WhatsApp (+212 710 141 872) ou par courriel. Essai gratuit, aide à l'installation et dépannage, jour et nuit.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${BASE}/fr/contact`,
    languages: { "en-CA": `${BASE}/contact`, "fr-CA": `${BASE}/fr/contact`, "x-default": `${BASE}/contact` },
  },
  openGraph: { type: "website", locale: "fr_CA", url: `${BASE}/fr/contact`, siteName: "IPTV Canada", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function FrContact() {
  return (
    <div lang="fr-CA">
      <FrNav />
      <main className="bg-ink-950">
        <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="pointer-events-none absolute -top-40 right-[-8%] h-[460px] w-[560px] bg-brand-600/20 blur-[130px] animate-blob" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">Parlons-en</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
              Une question sur les forfaits, l&apos;installation ou l&apos;essai gratuit? Écrivez-nous — nous répondons
              en français, le plus souvent en quelques minutes.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group rounded-2xl border border-white/10 bg-ink-900 p-7"
            >
              <MessageCircle size={28} className="text-brand-300" />
              <p className="mt-4 text-lg font-semibold text-white">WhatsApp</p>
              <p className="mt-1 text-sm text-zinc-400">La façon la plus rapide de nous joindre.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                +212 710 141 872 <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </p>
            </a>

            <a href={`mailto:${EMAIL}`} className="card-hover group rounded-2xl border border-white/10 bg-ink-900 p-7">
              <Mail size={28} className="text-accent-400" />
              <p className="mt-4 text-lg font-semibold text-white">Courriel</p>
              <p className="mt-1 text-sm text-zinc-400">Pour les questions plus détaillées.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400">
                {EMAIL} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </p>
            </a>

            <div className="rounded-2xl border border-white/10 bg-ink-900 p-7 sm:col-span-2">
              <Clock size={24} className="text-brand-300" />
              <p className="mt-4 text-lg font-semibold text-white">Disponibilité</p>
              <p className="mt-1 text-sm text-zinc-400">
                Assistance 7 jours sur 7. Nous activons les essais gratuits et aidons à l&apos;installation à toute
                heure — écrivez-nous simplement sur WhatsApp.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.9)] transition-transform hover:scale-[1.03]"
            >
              Obtenir l&apos;essai gratuit de 24 h
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-6">
              <Link href="/fr" className="text-sm text-brand-300 underline-offset-4 hover:underline">
                ← Retour à l&apos;accueil
              </Link>
            </p>
          </div>
        </section>
      </main>
      <FrFooter />
    </div>
  );
}
