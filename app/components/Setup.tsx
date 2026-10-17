import { CreditCard, Download, Tv2, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Pick a Plan (or Trial)",
    description:
      "Choose the length and number of devices that suit you, from one month to two years — or start with the free 24-hour trial first. No card details needed to try it.",
    detail: "Activated as soon as you pay",
  },
  {
    number: "02",
    icon: Download,
    title: "Add a Free Player App",
    description:
      "Install any standard IPTV app on your device — TiviMate, IPTV Smarters Pro or GSE Smart IPTV all work. We'll point you to the right one for your gear.",
    detail: "Guides written for every device",
  },
  {
    number: "03",
    icon: Tv2,
    title: "Paste Your Login & Watch",
    description:
      "Drop the M3U link or Xtream Codes details we send you into the app and your full channel list, catch-up and on-demand library load straight away.",
    detail: "Watching in under 5 minutes",
  },
];

export default function Setup() {
  return (
    <section id="setup" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Easy Setup"
          title={
            <>
              Up and running in <span className="text-gradient">3 simple steps</span>
            </>
          }
          subtitle="No technical know-how required. If you can install an app, you can get this working."
        />

        <div className="relative">
          {/* Connector line (desktop) with travelling pulse */}
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

        {/* CTA strip */}
        <div className="reveal relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brand-900/60 via-ink-800 to-ink-800 p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#25D366]/15 blur-3xl" />
          <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-1 text-xl font-semibold text-white">Need help getting started?</p>
              <p className="text-sm text-zinc-400">Our support team will set everything up for you — for free.</p>
            </div>
            <a
              href="https://wa.me/212710141872?text=Hi%2C%20I%20need%20help%20setting%20up%20my%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#0e7a52] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              Get Free Setup Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
