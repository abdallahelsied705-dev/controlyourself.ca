"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Tv, Globe } from "lucide-react";

const links = [
  { label: "Accueil", href: "/fr" },
  { label: "Forfaits", href: "/fr/product" },
  { label: "Chaînes", href: "/fr#chaines" },
  { label: "Tarifs", href: "/fr#tarifs" },
  { label: "Contact", href: "/fr/contact" },
];

export default function FrNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
          scrolled || open
            ? "mt-3 border-white/10 bg-ink-900/75 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "mt-0 border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/fr" className="group flex items-center gap-2.5 text-lg font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-600/40 transition-transform group-hover:rotate-6">
              <Tv size={18} className="text-white" />
            </span>
            <span className="font-display">
              IPTV<span className="text-brand-400"> Canada</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/"
              hrefLang="en-CA"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:border-brand-400/50 hover:text-white"
            >
              <Globe size={13} /> EN
            </Link>
            <Link
              href="/fr#tarifs"
              className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105"
            >
              Commencer
            </Link>
          </div>

          <button
            className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 md:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-white/10 p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/"
                hrefLang="en-CA"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                English
              </Link>
              <Link
                href="/fr#tarifs"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
