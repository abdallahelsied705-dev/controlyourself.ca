import { Tv2, Wifi, MonitorPlay, Globe, Clock, HeadphonesIcon } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

const features = [
  {
    icon: Tv2,
    title: "50 000+ chaînes en direct",
    description:
      "Les réseaux canadiens et les chaînes premium, aux côtés du sport, des infos, de la jeunesse et de milliers d'options internationales — une seule bibliothèque pour tous les genres et toutes les régions.",
    span: "lg:col-span-2",
    tint: "from-brand-500/25",
  },
  {
    icon: MonitorPlay,
    title: "Image jusqu'en 4K",
    description:
      "Diffusion en SD, HD, Full HD et 4K avec un son de qualité Dolby, ajustée automatiquement à ce que votre connexion peut gérer.",
    tint: "from-accent-500/20",
  },
  {
    icon: Wifi,
    title: "Stable aux heures de pointe",
    description:
      "Des serveurs à charge répartie et une diffusion anti-gel gardent l'image stable le samedi soir de sport, pas seulement à 3 h du matin.",
    tint: "from-sky-500/20",
  },
  {
    icon: Globe,
    title: "Tous vos appareils",
    description:
      "Firestick, télé intelligente, Android, iPhone, iPad, boîtier MAG, Windows ou Mac — si l'appareil exécute une appli IPTV, il fait tourner notre service.",
    tint: "from-brand-500/20",
  },
  {
    icon: Clock,
    title: "Reprise sur 7 jours",
    description:
      "Match manqué ou épisode d'hier soir? Revenez jusqu'à sept jours en arrière sur les chaînes compatibles et regardez quand ça vous arrange.",
    tint: "from-violet-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "De vraies personnes sur WhatsApp",
    description:
      "Aide à l'installation et dépannage par un humain, à toute heure, sur le même numéro WhatsApp qui sert à vous abonner.",
    span: "lg:col-span-3",
    tint: "from-brand-500/15",
  },
];

export default function FrFeatures() {
  return (
    <section id="features" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pourquoi nous choisir"
          title={
            <>
              Tout ce qu&apos;il vous faut, <span className="text-gradient">rien de superflu</span>
            </>
          }
          subtitle="Conçu pour les téléspectateurs d'ici qui veulent que ça marche, tout simplement. Sans contrat, sans frais-surprise, sans jargon."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, span, tint }, i) => (
            <div
              key={title}
              className={`reveal from-scale spotlight group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 ${span ?? ""}`}
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${tint} to-transparent blur-2xl transition-transform duration-700 group-hover:scale-150`} />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/30 to-brand-700/10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon size={22} className="text-brand-300" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-zinc-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
