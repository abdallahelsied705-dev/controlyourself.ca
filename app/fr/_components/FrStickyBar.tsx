"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function FrStickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-900/85 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="hidden sm:flex items-center gap-1.5 text-green-400 text-xs font-medium flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            En direct
          </span>
          <p className="text-zinc-300 text-sm truncate">
            <span className="text-white font-semibold">50 000+ chaînes</span> · Jusqu&apos;en 4K · Essai gratuit de 24 h
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://wa.me/212710141872?text=controlyourself.ca%20-%20Essai%20gratuit%2024%20h"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105"
          >
            Démarrer l&apos;essai
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
