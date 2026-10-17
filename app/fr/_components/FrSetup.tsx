import { CreditCard, Download, Tv2, MessageCircle } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Choisissez un forfait (ou l'essai)",
    description:
      "Choisissez la durée et le nombre d'appareils qui vous conviennent, d'un mois à deux ans — ou commencez par l'essai gratuit de 24 h. Aucune carte requise pour essayer.",
    detail: "Activé dès le paiement",
  },
  {
    number: "02",
    icon: Download,
    title: "Ajoutez une appli de lecture gratuite",
    description:
      "Installez une appli IPTV standard sur votre appareil — TiviMate, IPTV Smarters Pro ou GSE Smart IPTV font l'affaire. Nous vous indiquons la bonne pour votre matériel.",
    detail: "Des guides pour chaque appareil",
  },
  {
    number: "03",
    icon: Tv2,
    title: "Collez vos identifiants et regardez",
    description:
      "Entrez le lien M3U ou les identifiants Xtream Codes que nous vous envoyons et votre liste de chaînes, la reprise et la vidéothèque se chargent aussitôt.",
    detail: "À l'écran en moins de 5 minutes",
  },
];

export default function FrSetup() {
  return (
    <section id="setup" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Installation facile"
          title={
            <>
              Prêt en <span className="text-gradient">3 étapes simples</span>
            </>
          }
          subtitle="Aucune compétence technique requise. Si vous savez installer une appli, vous saurez faire fonctionner tout ça."
        />

        <div className="relative">
          <div className="absolute left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] top-10 hidden h-px overflow-hidden bg-white/10 lg:block">
            <div className="h-full w-1/3 animate-[sweep_3.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description, detail }, i) => (
              <div
                key={number}
                className="reveal group relative flex flex-col items-center text-center"
                style={{ "--delay": `${i * 150}ms` } as React.CSSProperties}
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-brand-500/40 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 ring-8 ring-ink-950 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={30} className="text-white" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-xs font-bold text-white ring-4 ring-ink-950">
                    {number.slice(1)}
                  </span>
                </div>

                <div className="spotlight w-full rounded-3xl border border-white/[0.07] bg-ink-900/80 p-7 transition-colors duration-300 group-hover:border-brand-500/30">
                  <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                  <p className="mx-auto mb-5 max-w-xs text-sm leading-relaxed text-zinc-400">{description}</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-maple-500/25 bg-maple-500/10 px-3 py-1.5 text-xs font-medium text-maple-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-maple-400" />
                    {detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brand-900/60 via-ink-800 to-ink-800 p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#25D366]/15 blur-3xl" />
          <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-1 text-xl font-semibold text-white">Besoin d&apos;aide pour démarrer?</p>
              <p className="text-sm text-zinc-400">Notre équipe configure tout pour vous — gratuitement.</p>
            </div>
            <a
              href="https://wa.me/212710141872?text=Bonjour%2C%20j'ai%20besoin%20d'aide%20pour%20installer%20mon%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#0e7a52] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              Obtenir de l&apos;aide gratuite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
