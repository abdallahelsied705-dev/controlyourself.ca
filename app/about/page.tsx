import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Tv, Users, Globe, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "About IPTV Canada — Our Approach to Canadian Streaming" },
  description:
    "Who we are: an IPTV Canada service built on honest pricing, a stable stream and real WhatsApp support. 50,000+ live channels in up to 4K, with no contracts.",
  alternates: { canonical: "https://www.controlyourself.ca/about" },
  openGraph: {
    title: "About IPTV Canada — Premium Canadian IPTV Service",
    description: "An IPTV Canada service with 50,000+ live channels, 4K streaming and 24/7 WhatsApp support.",
    url: "https://www.controlyourself.ca/about",
  },
};

const stats = [
  { icon: Users, value: "24/7", label: "WhatsApp Support" },
  { icon: Tv, value: "50,000+", label: "Live Channels" },
  { icon: Globe, value: "Worldwide", label: "Available In" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About IPTV Canada",
  url: "https://www.controlyourself.ca/about",
  description:
    "IPTV Canada is a Canadian IPTV service built on honest pricing, a stable stream and real support — 50,000+ live channels and 200,000+ on-demand titles in up to 4K.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <JsonLd data={aboutSchema} />
      <Navbar />

      <div className="bg-ink-900 border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to Home
          </Link>
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A simpler way to watch Canadian TV
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            IPTV Canada exists to give viewers a cheaper, less fiddly alternative to satellite and cable — one clear price, a stable stream, and a real person on WhatsApp when you need one.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-ink-800 border border-white/5 rounded-2xl p-6 text-center">
              <Icon size={22} className="text-brand-400 mx-auto mb-3" />
              <p className="text-white font-bold text-2xl mb-1">{value}</p>
              <p className="text-zinc-400 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Why we built this</h2>
          <p className="text-zinc-300 leading-8">
            Canadian TV has drifted in one direction for years: higher monthly bills, longer tie-ins, extra boxes to rent, and channels bundled so you pay for plenty you never watch. We thought viewers deserved the opposite — the programs and live sports people actually want, delivered straight over the internet they already pay for, at a price that isn&apos;t designed to creep up every renewal.
          </p>
          <p className="text-zinc-300 leading-8">
            So IPTV Canada is deliberately simple. You pick how long you want and how many devices you need, you pay once with no rolling contract, and you stream 50,000+ live channels and 200,000+ on-demand titles in up to 4K through a standard IPTV app on the kit you already own. No dish, no technician, no small print.
          </p>
          <p className="text-zinc-300 leading-8">
            We&apos;d rather earn the next renewal than trap you into it, which shapes how we run the service: a stream tuned to stay steady through peak-time sport, new channels and titles added at no extra cost, and setup help from a person on WhatsApp rather than a ticket queue.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-ink-800 border border-white/5 rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-zinc-300 leading-8">
            To make great television in Canada affordable and hassle-free for any household — fair pricing, no contracts, no hidden fees and no drop in quality. Good TV shouldn&apos;t be reserved for people willing to sign up to a pricey satellite package.
          </p>
        </div>

        {/* Why us */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">Why Customers Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Built to stay steady", "Our servers are load-balanced and tuned for Canadian peak hours, so the picture holds up on a Sunday-afternoon game, not just late at night."],
              ["A real person on WhatsApp", "Your message is answered by a human, not a bot or a ticket queue — the same WhatsApp number you use to subscribe, any hour of the day."],
              ["No long contracts", "One month to two years, your choice, paid once with nothing rolling on in the background. No tie-in, no exit penalty."],
              ["It only gets better", "New channels and on-demand titles are added at no extra cost, and we act on what customers actually ask us for."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-ink-800 border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold mb-2">{title}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-brand-950/40 to-ink-800 border border-brand-900/30 rounded-2xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Ready to join us?</h3>
          <p className="text-zinc-400 mb-7 max-w-md mx-auto">
            Test the service free for 24 hours — no card details needed. See how it looks on your own TV first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212710141872?text=controlyourself.ca%20-%20Free%2024-Hour%20Trial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Start Free Trial
            </a>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
