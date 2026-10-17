import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import FrNav from "../../_components/FrNav";
import FrFooter from "../../_components/FrFooter";
import FrWhatsAppButton from "../../_components/FrWhatsAppButton";
import { frPlans, getFrPlan, included } from "../../_components/frProducts";
import { SITE_URL } from "../../../lib/site";

const BASE = SITE_URL;

export function generateStaticParams() {
  return frPlans.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const plan = getFrPlan(slug);
  if (!plan) return {};
  return {
    title: { absolute: plan.metaTitle },
    description: plan.metaDescription,
    alternates: {
      canonical: `${BASE}/fr/product/${slug}`,
      languages: {
        "en-CA": `${BASE}/product/${slug}`,
        "fr-CA": `${BASE}/fr/product/${slug}`,
        "x-default": `${BASE}/product/${slug}`,
      },
    },
    openGraph: { type: "website", locale: "fr_CA", url: `${BASE}/fr/product/${slug}`, siteName: "IPTV Canada", title: plan.metaTitle, description: plan.metaDescription },
    twitter: { card: "summary_large_image", title: plan.metaTitle, description: plan.metaDescription },
  };
}

export default async function FrProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = getFrPlan(slug);
  if (!plan) notFound();

  const wa = `https://wa.me/212710141872?text=${encodeURIComponent(`controlyourself.ca - Forfait ${plan.label} IPTV Canada (${plan.priceStr})`)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${BASE}/fr/product/${slug}#product`,
        name: `Abonnement IPTV Canada ${plan.label}`,
        description: plan.metaDescription,
        brand: { "@type": "Brand", name: "IPTV Canada" },
        offers: {
          "@type": "Offer",
          price: plan.price.toString(),
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          url: `${BASE}/fr/product/${slug}`,
          seller: { "@id": `${BASE}/#organization` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE}/fr` },
          { "@type": "ListItem", position: 2, name: "Forfaits", item: `${BASE}/fr/product` },
          { "@type": "ListItem", position: 3, name: plan.label, item: `${BASE}/fr/product/${slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        inLanguage: "fr-CA",
        mainEntity: plan.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <div lang="fr-CA">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FrNav />
      <main className="bg-ink-950">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mx-auto max-w-5xl px-4 pt-28 text-sm text-zinc-500 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/fr" className="hover:text-white">Accueil</Link></li>
            <ChevronRight size={14} />
            <li><Link href="/fr/product" className="hover:text-white">Forfaits</Link></li>
            <ChevronRight size={14} />
            <li className="text-zinc-300">{plan.label}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden py-14">
          <div className="pointer-events-none absolute -top-40 right-[-8%] h-[460px] w-[560px] bg-brand-600/20 blur-[130px] animate-blob" />
          <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              {plan.badge && (
                <span className="mb-4 inline-flex rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-950">
                  {plan.badge}
                </span>
              )}
              <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{plan.h1}</h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">{plan.subtitle}</p>
            </div>

            <div className="glow-border rounded-[1.4rem]">
              <div className="rounded-[1.3rem] bg-ink-900 p-7 text-center">
                <p className="text-sm font-semibold text-zinc-300">{plan.label}</p>
                <p className="mt-3 font-display text-5xl font-extrabold text-white">{plan.priceStr}</p>
                <p className="mt-1 text-xs text-brand-300">{plan.perMonth} · {plan.period}</p>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
                >
                  S&apos;abonner — {plan.priceStr}
                  <ArrowRight size={16} />
                </a>
                <p className="mt-3 text-xs text-zinc-500">ou essai gratuit de 24 h, sans carte</p>
              </div>
            </div>
          </div>
        </section>

        {/* Included */}
        <section className="border-y border-white/5 bg-ink-900 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ce que comprend votre abonnement {plan.label}</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-800/60 p-4 text-sm text-zinc-200">
                  <Check size={18} className="mt-0.5 shrink-0 text-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">À qui s&apos;adresse le forfait {plan.label}?</h2>
            <ul className="mt-6 space-y-3">
              {plan.whoFor.map((w) => (
                <li key={w} className="flex gap-3 text-zinc-300">
                  <Check size={18} className="mt-1 shrink-0 text-accent-400" />
                  <span className="leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-white/5 bg-ink-900 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Questions sur le forfait {plan.label}</h2>
            <div className="mt-8 space-y-4">
              {plan.faq.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-white/10 bg-ink-800/60 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-white">
                    {f.q}
                    <span className="ml-4 text-brand-300 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-zinc-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Prêt à commencer?</h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Obtenez le forfait {plan.label} pour {plan.priceStr} — ou testez-nous gratuitement pendant 24 h, sans carte.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-8 py-4 text-base font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
              >
                S&apos;abonner — {plan.priceStr}
                <ArrowRight size={18} />
              </a>
              <Link
                href="/fr/product"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-zinc-200 transition-colors hover:border-brand-400/50 hover:text-white"
              >
                Comparer les forfaits
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FrFooter />
      <FrWhatsAppButton />
    </div>
  );
}
