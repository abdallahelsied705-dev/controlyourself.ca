import { Star, Quote } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import ClientClones from "../../components/ClientClones";

const reviews = [
  {
    name: "Jean T.",
    location: "Calgary, AB",
    avatar: "JT",
    rating: 5,
    title: "J'ai coupé le câble sans jamais regretter",
    body: "Je payais près de 120 $ par mois pour le câble et j'en regardais à peine la moitié. J'ai bien plus de chaînes, la 4K est plus nette sur ma télé, et ça me revient à quelques dollars par mois sur l'année. Stable depuis que j'ai changé.",
    plan: "Forfait 12 mois",
  },
  {
    name: "Sophie M.",
    location: "Toronto, ON",
    avatar: "SM",
    rating: 5,
    title: "Je pensais que ce serait compliqué — non",
    body: "Je ne suis pas du tout techno, mais le guide Firestick m'a tout expliqué et je regardais en dix minutes environ. Le sport en direct était l'essentiel pour moi, et tout y est en HD.",
    plan: "Forfait 3 mois",
  },
  {
    name: "David K.",
    location: "Edmonton, AB",
    avatar: "DK",
    rating: 5,
    title: "Le plus stable que j'aie utilisé",
    body: "J'ai essayé deux ou trois services IPTV et c'est le premier qui ne coupe pas le dimanche après-midi de matchs. Quand j'ai écrit au soutien, on m'a répondu vite. La reprise scelle l'affaire pour moi.",
    plan: "Forfait 12 mois",
  },
  {
    name: "Lise R.",
    location: "Ottawa, ON",
    avatar: "LR",
    rating: 5,
    title: "Toute la maisonnée est réglée",
    body: "Avec quatre connexions, plus personne ne se bat pour la télécommande — les enfants ont leurs émissions, mon mari le match, moi mes téléromans, en même temps. Un vrai aubaine pour ce que ça offre.",
    plan: "Forfait 12 mois",
  },
  {
    name: "Ahmed H.",
    location: "Windsor, ON",
    avatar: "AH",
    rating: 5,
    title: "L'offre internationale est le meilleur du lot",
    body: "Je passe des chaînes canadiennes à une foule de chaînes arabes et asiatiques, et l'image tient aussi bien sur celles-là que sur les grands réseaux. La variété m'a honnêtement surpris.",
    plan: "Forfait 3 mois",
  },
  {
    name: "Caroline W.",
    location: "Victoria, BC",
    avatar: "CW",
    rating: 4,
    title: "Pouvoir simplement leur écrire, c'est génial",
    body: "J'ai écrit tard un soir avec une question d'installation de base et j'ai eu une réponse en quelques minutes. On n'a pas ça avec les grands fournisseurs. C'est stable depuis quatre mois.",
    plan: "Forfait 1 mois",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? "fill-yellow-400 text-yellow-400" : "text-zinc-600"} />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  const colors: Record<string, string> = {
    JT: "from-brand-500 to-brand-700",
    SM: "from-accent-400 to-accent-600",
    DK: "from-violet-500 to-violet-700",
    LR: "from-rose-500 to-rose-700",
    AH: "from-sky-400 to-sky-600",
    CW: "from-amber-500 to-amber-700",
  };
  return (
    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[initials] ?? "from-brand-500 to-brand-700"} ring-2 ring-white/10 flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="spotlight relative w-[340px] shrink-0 rounded-3xl border border-white/[0.07] bg-ink-900/90 p-6 transition-colors hover:border-brand-500/30 sm:w-[380px]">
      <Quote size={36} className="absolute right-5 top-5 text-white/[0.05]" />
      <div className="mb-4 flex items-center gap-3">
        <Avatar initials={r.avatar} />
        <div>
          <p className="text-sm font-semibold text-white">{r.name}</p>
          <p className="text-xs text-zinc-500">{r.location}</p>
        </div>
        <span className="ml-auto whitespace-nowrap rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brand-300">
          {r.plan}
        </span>
      </div>
      <Stars count={r.rating} />
      <h3 className="mb-2 mt-3 text-sm font-semibold text-white">{r.title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{r.body}</p>
    </div>
  );
}

export default function FrTestimonials() {
  const half = Math.ceil(reviews.length / 2);
  const rows = [reviews.slice(0, half), reviews.slice(half)];

  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Avis des clients"
          title={
            <>
              Ce que disent <span className="text-gradient">les téléspectateurs d&apos;ici</span>
            </>
          }
          className="mb-10!"
        />

        <p className="reveal -mt-4 mb-14 text-center text-zinc-400">
          Ne les croyez pas sur parole —{" "}
          <a href="#pricing" className="text-brand-300 underline underline-offset-4 hover:text-brand-200">
            essayez gratuitement pendant 24 h
          </a>
          .
        </p>
      </div>

      <div className="reveal flex flex-col gap-5">
        {rows.map((row, idx) => (
          <div key={idx} className="mask-x pause-on-hover flex overflow-hidden">
            <div className={`flex shrink-0 gap-5 pr-5 ${idx % 2 ? "animate-marquee-reverse" : "animate-marquee"} [animation-duration:60s]`}>
              {row.map((r) => (
                <ReviewCard key={r.name} r={r} />
              ))}
              <ClientClones count={3}>
                {row.map((r) => (
                  <ReviewCard key={r.name} r={r} />
                ))}
              </ClientClones>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
