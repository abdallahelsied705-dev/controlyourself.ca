import Link from "next/link";
import { Check, Minus } from "lucide-react";

// Answer-first content for the "IPTV Canada" query: short, quotable passages and
// tables that search engines and AI answers can lift directly.

const facts = [
  { label: "Live channels", value: "50,000+" },
  { label: "Movies & series", value: "200,000+" },
  { label: "Price from", value: "C$6.63 / month" },
  { label: "Free trial", value: "24 hours" },
  { label: "Picture quality", value: "Up to 4K" },
  { label: "Setup time", value: "Under 5 min" },
];

const plans = [
  { plan: "1 month", price: 13.99, months: 1 },
  { plan: "3 months", price: 34.99, months: 3 },
  { plan: "6 months", price: 54.99, months: 6 },
  { plan: "12 months", price: 94.99, months: 12 },
  { plan: "24 months", price: 159, months: 24 },
];

const comparison: { feature: string; iptv: string | boolean; satellite: string | boolean; cable: string | boolean }[] = [
  { feature: "Monthly cost", iptv: "From C$6.63", satellite: "C$120–C$160", cable: "C$95–C$135" },
  { feature: "Contract", iptv: "None", satellite: "12–24 months", cable: "12 months" },
  { feature: "Dish or technician visit", iptv: false, satellite: true, cable: true },
  { feature: "Live channels", iptv: "50,000+", satellite: "200–500", cable: "~250" },
  { feature: "Watch on phone, tablet & TV", iptv: true, satellite: "Extra cost", cable: "Extra cost" },
  { feature: "Works abroad", iptv: true, satellite: false, cable: false },
];

function Cell({ value, good }: { value: string | boolean; good?: boolean }) {
  if (value === true)
    return <Check size={18} className={good ? "mx-auto text-accent-400" : "mx-auto text-zinc-400"} aria-label="Yes" />;
  if (value === false) return <Minus size={18} className="mx-auto text-zinc-600" aria-label="No" />;
  return <span className={good ? "font-semibold text-white" : "text-zinc-400"}>{value}</span>;
}

export default function IptvUkGuide() {
  return (
    <section id="what-is-iptv-canada" className="relative bg-ink-950 py-24" aria-labelledby="what-is-iptv-canada-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Definition */}
        <div className="reveal lg:col-span-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            IPTV Canada explained
          </span>
          <h2 id="what-is-iptv-canada-title" className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            What is IPTV Canada?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            <strong className="text-white">IPTV Canada</strong> means watching television in Canada over the internet
            (Internet Protocol Television) rather than through a satellite dish, antenna or cable box. Your live
            channels, sports, movies and series arrive through your internet line, so all you need is a subscription,
            an IPTV app on your Smart TV, Firestick or phone, and a steady connection — no technician, no wiring, no
            two-year contract.{" "}
            <Link href="/blog/what-is-iptv-complete-guide" className="text-brand-300 underline-offset-4 hover:underline">
              Read the full beginner&apos;s guide to IPTV
            </Link>
            .
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Our <strong className="text-zinc-200">IPTV Canada</strong> subscription carries 50,000+ live channels and
            200,000+ movies and series on demand. Prices run from C$13.99 for a single month down to the equivalent of
            about C$6.63 a month on the 24-month plan, and every option includes 7-day catch-up, a full electronic program
            guide (EPG) and WhatsApp support around the clock.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-white">How does IPTV work in Canada?</h3>
          <ol className="mt-4 space-y-3">
            {[
              "Pick a plan and how many devices you want to watch on — or try the free 24-hour trial first.",
              "We send your M3U link or Xtream Codes login over WhatsApp, usually within a few minutes.",
              "Paste those details into an IPTV app such as TiviMate or IPTV Smarters Pro and the channels load.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4 text-zinc-300">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-300">
                  {i + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-zinc-500">
            You need at least 10 Mbps internet for HD and 25 Mbps for 4K.{" "}
            <Link href="/setup" className="text-brand-300 underline-offset-4 hover:underline">
              See device setup guides
            </Link>
            , compare providers in our{" "}
            <Link href="/blog/best-iptv-canada" className="text-brand-300 underline-offset-4 hover:underline">
              best IPTV Canada 2026 guide
            </Link>
            , or read the full{" "}
            <Link href="/blog/iptv-subscription-canada" className="text-brand-300 underline-offset-4 hover:underline">
              IPTV subscription Canada guide
            </Link>
            .
          </p>
        </div>

        {/* Facts + prices */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="reveal glass rounded-3xl p-6" style={{ "--delay": "100ms" } as React.CSSProperties}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">IPTV Canada at a glance</h3>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs text-zinc-500">{f.label}</dt>
                  <dd className="font-display text-xl font-bold text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900" style={{ "--delay": "180ms" } as React.CSSProperties}>
            <h3 className="px-6 pt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              How much does IPTV cost in Canada?
            </h3>
            <table className="mt-3 w-full text-sm">
              <caption className="sr-only">IPTV Canada subscription prices for one device</caption>
              <thead>
                <tr className="text-left text-xs text-zinc-500">
                  <th scope="col" className="px-6 py-2 font-medium">Plan</th>
                  <th scope="col" className="px-6 py-2 text-right font-medium">Price</th>
                  <th scope="col" className="px-6 py-2 text-right font-medium">Per month</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.plan} className="border-t border-white/5">
                    <th scope="row" className="px-6 py-3 text-left font-medium text-zinc-200">
                      <Link href={`/product/${p.months}-month-iptv-canada`} className="underline-offset-4 hover:text-white hover:underline">
                        {p.plan}
                      </Link>
                    </th>
                    <td className="px-6 py-3 text-right font-semibold text-white">C${p.price}</td>
                    <td className="px-6 py-3 text-right text-brand-300">C${(p.price / p.months).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-6 py-4 text-xs text-zinc-500">Prices for 1 device. No setup fee, no contract.</p>
          </div>
        </div>

        {/* Comparison */}
        <div className="reveal lg:col-span-5">
          <h3 className="text-2xl font-bold text-white">IPTV Canada vs satellite and cable TV</h3>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/[0.07] bg-ink-900">
            <table className="w-full min-w-[560px] text-sm">
              <caption className="sr-only">Comparison of IPTV Canada, satellite TV and cable TV</caption>
              <thead>
                <tr className="text-xs uppercase tracking-wider text-zinc-500">
                  <th scope="col" className="px-6 py-4 text-left font-medium">Feature</th>
                  <th scope="col" className="bg-brand-500/10 px-6 py-4 text-center font-semibold text-brand-300">IPTV Canada</th>
                  <th scope="col" className="px-6 py-4 text-center font-medium">Satellite TV</th>
                  <th scope="col" className="px-6 py-4 text-center font-medium">Cable TV</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-white/5">
                    <th scope="row" className="px-6 py-4 text-left font-medium text-zinc-300">{row.feature}</th>
                    <td className="bg-brand-500/[0.06] px-6 py-4 text-center"><Cell value={row.iptv} good /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.satellite} /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.cable} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
