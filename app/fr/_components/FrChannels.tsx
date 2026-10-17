import SectionHeader from "../../components/SectionHeader";
import ClientClones from "../../components/ClientClones";

const categories = [
  { emoji: "🇨🇦", name: "Chaînes canadiennes", count: "1 000+" },
  { emoji: "🏆", name: "Sports", count: "300+" },
  { emoji: "🎬", name: "Films et séries", count: "200 000+" },
  { emoji: "📰", name: "Nouvelles", count: "200+" },
  { emoji: "👶", name: "Jeunesse", count: "150+" },
  { emoji: "🌍", name: "International", count: "5 000+" },
  { emoji: "🎵", name: "Musique", count: "100+" },
  { emoji: "🕹️", name: "Jeux et eSport", count: "80+" },
];

const rowA = [
  "Football", "Basketball", "Baseball", "Hockey", "Boxe", "MMA",
  "Soccer", "Golf", "Tennis", "Sport auto", "Sport universitaire", "Lutte",
];
const rowB = [
  "Divertissement", "Films 4K", "Documentaires", "Jeunesse et famille", "Infos 24/7", "Succès musicaux",
  "Téléréalité", "Comédie", "Drame", "Nature", "Histoire", "International",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-brand-500/50 hover:text-white">
      {children}
    </span>
  );
}

function Marquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-x pause-on-hover flex overflow-hidden">
      <div className={`flex shrink-0 gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
        <ClientClones>
          {items.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </ClientClones>
      </div>
    </div>
  );
}

export default function FrChannels() {
  return (
    <section id="channels" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="La grille des chaînes"
          title={
            <>
              <span className="text-gradient">50 000+</span> chaînes au bout des doigts
            </>
          }
          subtitle="Toutes les grandes chaînes canadiennes, le sport en direct que les gens cherchent vraiment, et des milliers d'options internationales."
        />
      </div>

      <div className="reveal relative mb-16 flex flex-col gap-3">
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className="reveal from-scale spotlight group rounded-2xl border border-white/[0.07] bg-ink-900/80 p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
            style={{ "--delay": `${i * 60}ms` } as React.CSSProperties}
          >
            <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-125">{cat.emoji}</div>
            <div className="mb-1 text-sm font-semibold text-white">{cat.name}</div>
            <div className="font-display text-lg font-bold text-brand-300">{cat.count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
