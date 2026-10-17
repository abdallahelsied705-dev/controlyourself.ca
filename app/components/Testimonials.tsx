import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ClientClones from "./ClientClones";

const reviews = [
  {
    name: "James T.",
    location: "Calgary, AB",
    avatar: "JT",
    rating: 5,
    title: "Cut the cord and never looked back",
    body: "I was paying close to C$120 a month for cable and barely watched half of it. This gives me far more channels, the 4K looks sharper on my TV, and it's a few bucks a month over the year. Rock solid since I switched.",
    plan: "12-Month Plan",
  },
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    avatar: "SM",
    rating: 5,
    title: "Thought it'd be complicated — it wasn't",
    body: "I'm not techy at all but the Firestick guide walked me through it and I was watching in about ten minutes. The live sports were the main thing for me and it's all there in HD.",
    plan: "3-Month Plan",
  },
  {
    name: "David K.",
    location: "Edmonton, AB",
    avatar: "DK",
    rating: 5,
    title: "The most stable one I've used",
    body: "I've bounced between a couple of IPTV services and this is the first that doesn't drop out on a Sunday afternoon of games. When I did message support they actually got back to me fast. Catch-up seals it for me.",
    plan: "12-Month Plan",
  },
  {
    name: "Lisa R.",
    location: "Ottawa, ON",
    avatar: "LR",
    rating: 5,
    title: "Sorted the whole household",
    body: "With four connections nobody's fighting over the remote — the kids get their shows, my husband has the game, I get my dramas, all at once. Honestly a bargain for what it does.",
    plan: "12-Month Plan",
  },
  {
    name: "Ahmed H.",
    location: "Windsor, ON",
    avatar: "AH",
    rating: 5,
    title: "The international line-up is the best bit",
    body: "I flip between Canadian channels and a load of Arabic and Asian ones, and the picture holds up just as well on those as the main networks. The range genuinely surprised me.",
    plan: "3-Month Plan",
  },
  {
    name: "Caroline W.",
    location: "Victoria, BC",
    avatar: "CW",
    rating: 4,
    title: "Being able to just text them is great",
    body: "I messaged late one evening with a basic setup question and had an answer within minutes. You don't get that with the big providers. It's been steady for four months now.",
    plan: "1-Month Plan",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-zinc-600"}
        />
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
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[initials] ?? "from-brand-500 to-brand-700"} ring-2 ring-white/10 flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
    >
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

export default function Testimonials() {
  const half = Math.ceil(reviews.length / 2);
  const rows = [reviews.slice(0, half), reviews.slice(half)];

  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title={
            <>
              What <span className="text-gradient">Canadian viewers</span> say
            </>
          }
          className="mb-10!"
        />

        <p className="reveal -mt-4 mb-14 text-center text-zinc-400">
          Don&apos;t take their word for it —{" "}
          <a href="#pricing" className="text-brand-300 underline underline-offset-4 hover:text-brand-200">
            try it free for 24 hours
          </a>
          .
        </p>
      </div>

      <div className="reveal flex flex-col gap-5">
        {rows.map((row, idx) => (
          <div key={idx} className="mask-x pause-on-hover flex overflow-hidden">
            <div
              className={`flex shrink-0 gap-5 pr-5 ${idx % 2 ? "animate-marquee-reverse" : "animate-marquee"} [animation-duration:60s]`}
            >
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
