"use client";

import { useState } from "react";
import { X } from "lucide-react";

const TRIAL_URL = "https://wa.me/212710141872?text=controlyourself.ca%20-%20Essai%20gratuit%2024%20h";

export default function FrOfferBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-accent-600 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-[sweep_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto flex h-[42px] max-w-7xl items-center justify-center gap-2 px-8 text-center sm:gap-3 sm:px-10">
        <span className="hidden rounded-full bg-white px-2.5 py-1 text-[11px] font-black uppercase tracking-widest text-brand-700 md:inline-flex">
          Essai gratuit
        </span>

        <p className="whitespace-nowrap text-xs font-bold sm:text-sm">
          <span className="hidden sm:inline">📺 Testez IPTV Canada gratuitement pendant 24 h — sans carte · Forfaits dès 6,63 $/mois</span>
          <span className="sm:hidden">📺 Essai gratuit 24 h · Sans carte</span>
        </p>

        <a
          href={TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 transition-transform hover:scale-105 sm:px-4 sm:py-1.5"
        >
          Démarrer l&apos;essai
        </a>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
          aria-label="Fermer"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
