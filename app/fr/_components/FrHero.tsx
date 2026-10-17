import { ArrowRight, Play, ShieldCheck, Sparkles, Zap, Radio, Tv, Smartphone, MonitorPlay, Scissors } from "lucide-react";
import CountUp from "../../components/CountUp";

const TRIAL_URL = "https://wa.me/212710141872?text=controlyourself.ca%20-%20Essai%20gratuit%2024%20h";

const stats = [
  { to: 50000, suffix: "+", label: "Chaînes en direct" },
  { to: 200000, suffix: "+", label: "Films et séries" },
  { to: 99.9, decimals: 1, suffix: "%", label: "Disponibilité" },
  { to: 24, suffix: "/7", label: "Soutien WhatsApp" },
];

const nowPlaying = [
  { ch: "101", name: "Hockey en direct", tag: "SPORTS", live: true },
  { ch: "208", name: "Soirée cinéma", tag: "CINÉMA" },
  { ch: "312", name: "Nouvelles nationales", tag: "INFOS" },
];

const ribbon = [
  "✂️ Coupez le câble",
  "🏒 Sports en direct",
  "🎬 200 000+ films",
  "📺 50 000+ chaînes",
  "⚡ 4K Ultra HD",
  "📰 Infos 24/7",
  "👶 Jeunesse",
  "🌍 International",
  "↩️ Reprise 7 jours",
  "🍁 Chaînes canadiennes",
];

const devices = [
  { icon: Tv, label: "Télé" },
  { icon: MonitorPlay, label: "Firestick" },
  { icon: Smartphone, label: "Téléphone" },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

function CordCutterPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="conic-ring absolute left-1/2 top-1/2 -z-10 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-25 blur-md" />

      <div className="glow-border rounded-[1.6rem]">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-ink-900 p-6">
          <div className="absolute -right-3 -top-3 rotate-12 animate-bob text-brand-500/30">
            <Scissors size={88} strokeWidth={1.2} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Votre facture de télé mensuelle</p>

          <div className="mt-4 flex items-end gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500">Câble</p>
              <p className="relative text-3xl font-bold text-zinc-500">
                <span className="relative">
                  89 $
                  <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-maple-500" />
                </span>
              </p>
            </div>
            <ArrowRight size={22} className="mb-2 text-zinc-600" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-brand-300">IPTV Canada</p>
              <p className="font-display text-4xl font-extrabold text-white">
                6<span className="text-2xl">,63 $</span>
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-brand-600/20 to-accent-500/10 p-4 ring-1 ring-brand-500/25">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-zinc-300">Vous gardez, par année</span>
              <span className="font-display text-xl font-bold text-brand-300">
                <CountUp to={988} /> $
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {nowPlaying.map((n) => (
              <div
                key={n.ch}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  n.live ? "bg-brand-500/15 ring-1 ring-brand-500/40" : "bg-white/[0.03]"
                }`}
              >
                <span className="font-mono text-[10px] text-zinc-500">{n.ch}</span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-white">{n.name}</span>
                {n.live ? (
                  <span className="flex items-center gap-1 rounded bg-maple-500 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                    <span className="h-1 w-1 animate-pulse rounded-full bg-white" /> Direct
                  </span>
                ) : (
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-zinc-300">{n.tag}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
            {devices.map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-1 text-zinc-400">
                <d.icon size={20} className="text-brand-300" />
                <span className="text-[10px] font-medium">{d.label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1 text-zinc-400">
              <span className="text-lg leading-none">🍁</span>
              <span className="text-[10px] font-medium">+ encore</span>
            </div>
          </div>
        </div>
      </div>

      <div className="glass absolute -left-5 top-8 hidden items-center gap-2 rounded-xl px-3 py-2 shadow-2xl shadow-black/40 animate-bob [animation-delay:-2s] sm:flex">
        <Zap size={14} className="text-brand-300" />
        <span className="text-xs font-semibold text-white">0 mise en mémoire</span>
      </div>
      <div className="glass absolute -right-5 bottom-20 hidden items-center gap-2 rounded-xl px-3 py-2 shadow-2xl shadow-black/40 animate-bob [animation-delay:-4s] sm:flex">
        <ShieldCheck size={14} className="text-accent-400" />
        <span className="text-xs font-semibold text-white">Sans contrat</span>
      </div>
    </div>
  );
}

export default function FrHero() {
  return (
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
        <div className="absolute left-[-12%] top-24 h-[440px] w-[500px] bg-accent-500/12 blur-[130px] animate-blob [animation-delay:-5s]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            background: "repeating-linear-gradient(115deg, #fb923c 0 2px, transparent 2px 70px)",
            maskImage: "radial-gradient(ellipse at 80% 0%, #000 10%, transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="text-center lg:text-left">
          <div className="hero-in inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-100 backdrop-blur">
            <Scissors size={13} className="text-brand-300" />
            Couper le câble, en toute simplicité au Canada
            <span className="leading-none">🍁</span>
          </div>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Coupez le câble.
            <span className="mt-2 block text-gradient">Gardez tout ce</span>
            <span className="mt-2 block text-white">qui vaut la peine.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl lg:mx-0">
            IPTV Canada diffuse plus de 50 000 chaînes en direct et 200 000 films et séries jusqu&apos;en 4K, directement
            par votre connexion Internet — sans soucoupe, sans boîtier de câble, sans contrat de deux ans. Installez-le
            sur le Firestick, la télé ou le téléphone que vous avez déjà, en quelques minutes.
          </p>

          <div className="hero-in mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start" style={delay(240)}>
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.9)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Démarrer l&apos;essai gratuit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-zinc-200 backdrop-blur transition-colors hover:border-brand-400/50 hover:text-white sm:w-auto"
            >
              <Play size={16} className="fill-current" />
              Voir les forfaits
            </a>
          </div>

          <p className="hero-in mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-zinc-500 lg:justify-start" style={delay(320)}>
            <span className="inline-flex items-center gap-1.5"><Sparkles size={14} className="text-accent-400" /> Essai gratuit de 24 h</span>
            <span className="inline-flex items-center gap-1.5"><Radio size={14} className="text-brand-300" /> Sans carte bancaire</span>
            <span className="inline-flex items-center gap-1.5"><Zap size={14} className="text-brand-300" /> Prêt en quelques minutes</span>
          </p>
        </div>

        <div className="hero-in" style={delay(200)}>
          <CordCutterPanel />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mask-x pause-on-hover flex overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 py-3 backdrop-blur">
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3 [animation-duration:45s]">
            {[...ribbon, ...ribbon].map((r, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-zinc-300"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group bg-ink-900/90 px-6 py-6 text-center backdrop-blur transition-colors hover:bg-ink-800/90">
              <p className="font-display text-3xl font-bold text-white">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-brand-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
