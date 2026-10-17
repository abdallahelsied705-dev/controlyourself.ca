import Link from "next/link";
import { Tv, Mail } from "lucide-react";

const WHATSAPP = "https://wa.me/212710141872";
const EMAIL = "supportteamiptv@gmail.com";

const columns: Record<string, { label: string; href: string }[]> = {
  "Le service": [
    { label: "Forfaits", href: "/fr/product" },
    { label: "Tarifs", href: "/fr#pricing" },
    { label: "Chaînes", href: "/fr#channels" },
    { label: "Essai gratuit", href: "/fr#pricing" },
  ],
  Entreprise: [
    { label: "Contact", href: "/fr/contact" },
    { label: "Site en anglais", href: "/" },
    { label: "Blogue (EN)", href: "/blog" },
  ],
  Légal: [
    { label: "Politique de confidentialité", href: "/privacy-policy" },
    { label: "Conditions d'utilisation", href: "/terms-of-service" },
    { label: "Politique de remboursement", href: "/refund-policy" },
    { label: "DMCA", href: "/dmca" },
  ],
};

export default function FrFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand-700/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/fr" className="mb-4 flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
                <Tv className="text-white" size={18} />
              </span>
              <span className="font-display">
                IPTV<span className="text-brand-400"> Canada</span>
              </span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400">
              L&apos;IPTV au Canada, en toute simplicité : plus de 50 000 chaînes en direct et 200 000 films et séries
              jusqu&apos;en 4K, diffusés par Internet, avec assistance sur WhatsApp.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/212710141872?text=controlyourself.ca%20-%20Essai%20gratuit%2024%20h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105"
              >
                Essai gratuit
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-400 transition-colors hover:text-white"
              >
                WhatsApp : +212 710 141 872
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-white"
              >
                <Mail size={12} />
                {EMAIL}
              </a>
            </div>
          </div>

          {Object.entries(columns).map(([group, items]) => (
            <div key={group}>
              <p className="mb-4 text-sm font-semibold text-white">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-zinc-400 transition-all hover:pl-1 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} IPTV Canada. Tous droits réservés.
          </p>
          <p className="text-xs text-zinc-600">À des fins de divertissement. Respectez les lois en vigueur.</p>
        </div>
      </div>
    </footer>
  );
}
