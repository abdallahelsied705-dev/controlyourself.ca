import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Star } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import JsonLd from "../../components/JsonLd";
import { products, getProduct, getRelatedProducts } from "../../lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: { absolute: product.metaTitle },
    description: product.metaDescription,
    alternates: {
      canonical: `https://www.controlyourself.ca/product/${slug}`,
      languages: {
        "en-CA": `https://www.controlyourself.ca/product/${slug}`,
        "fr-CA": `https://www.controlyourself.ca/fr/product/${slug}`,
        "x-default": `https://www.controlyourself.ca/product/${slug}`,
      },
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://www.controlyourself.ca/product/${slug}`,
    },
  };
}

const TRIAL_LINK = "https://wa.me/212710141872?text=controlyourself.ca%20-%20Free%2024-Hour%20Trial";

const whatsIncluded = [
  "50,000+ Live Channels",
  "200,000+ VODs",
  "4K / FHD / HD Quality",
  "7-Day Catch-Up TV",
  "EPG Programme Guide",
  "Anti-Freeze™ Technology",
  "Auto Updates",
  "Multi-Device (1–4)",
  "24/7 Support",
  "Free Setup Help",
  "VPN Compatible",
  "48-Hour Refund if It Doesn't Work",
];

function getMonths(slug: string): string {
  const map: Record<string, string> = {
    "1-month-iptv-canada": "1 Month",
    "3-month-iptv-canada": "3 Months",
    "6-month-iptv-canada": "6 Months",
    "12-month-iptv-canada": "12 Months",
    "24-month-iptv-canada": "24 Months",
  };
  return map[slug] ?? "—";
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(slug, 4);
  const waSubscribeLink = `https://wa.me/212710141872?text=${encodeURIComponent(product.whatsappMessage)}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDescription,
    image: "https://www.controlyourself.ca/opengraph-image",
    brand: { "@type": "Brand", name: "IPTV Canada" },
    offers: {
      "@type": "Offer",
      price: product.price.toString(),
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: `https://www.controlyourself.ca/product/${product.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.controlyourself.ca" },
      { "@type": "ListItem", position: 2, name: "Product", item: "https://www.controlyourself.ca/product" },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.controlyourself.ca/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="bg-ink-900 pt-[100px]">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav className="text-zinc-500 text-sm flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/product" className="hover:text-white transition-colors">Product</Link>
            <span>/</span>
            <span className="text-zinc-300">{product.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div>
                {product.badge && (
                  <span className="inline-block bg-brand-500/15 text-brand-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    {product.badge}
                  </span>
                )}
                <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
                  {product.h1}
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  {product.heroSubtitle}
                </p>

                {/* Price badge */}
                <div className="inline-flex items-baseline gap-2 bg-ink-800 border border-brand-500/30 rounded-2xl px-5 py-3 mb-8">
                  <span className="text-4xl font-extrabold text-white">C$${product.price}</span>
                  <span className="text-zinc-400 text-sm">{product.period}</span>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-brand-400 text-brand-400" />
                    ))}
                  </div>
                  <span className="text-zinc-400 text-sm">Try it free for 24 hours before you buy</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waSubscribeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm text-center"
                  >
                    Subscribe Now — C$${product.price}
                  </a>
                  <a
                    href={TRIAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 hover:border-brand-500/40 text-zinc-300 hover:text-white font-medium px-6 py-3 rounded-full transition-colors text-sm text-center"
                  >
                    Free 24-Hour Trial
                  </a>
                </div>
              </div>

              {/* Right: TV illustration */}
              <div className="flex items-center justify-center">
                <svg
                  viewBox="0 0 320 220"
                  className="w-full max-w-[320px]"
                  aria-hidden="true"
                >
                  {/* TV body */}
                  <rect x="10" y="10" width="300" height="180" rx="16" fill="#140f0c" stroke="#f97316" strokeWidth="2" />
                  {/* Screen bezel */}
                  <rect x="24" y="22" width="272" height="148" rx="8" fill="#0a1024" />
                  {/* Canadian flag - simplified */}
                  {/* White background */}
                  <rect x="26" y="24" width="268" height="144" rx="6" fill="#ffffff" />
                  {/* Red bands left and right */}
                  <rect x="26" y="24" width="67" height="144" fill="#D52B1E" />
                  <rect x="227" y="24" width="67" height="144" fill="#D52B1E" />
                  {/* Maple leaf */}
                  <text x="160" y="120" textAnchor="middle" fontSize="86" fill="#D52B1E">🍁</text>
                  {/* Amber overlay / channel info */}
                  <rect x="26" y="140" width="268" height="32" rx="0" fill="rgba(0,0,0,0.65)" />
                  <text x="40" y="160" fill="#fb923c" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    IPTV Canada
                  </text>
                  <text x="190" y="160" fill="white" fontSize="10" fontFamily="monospace">
                    50,000+ Channels
                  </text>
                  {/* Stand */}
                  <rect x="140" y="190" width="40" height="14" rx="4" fill="#16203f" />
                  <rect x="110" y="202" width="100" height="8" rx="4" fill="#1d2a50" />
                  {/* Amber glow under TV */}
                  <ellipse cx="160" cy="215" rx="90" ry="6" fill="#f97316" opacity="0.14" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 bg-ink-950 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Everything Included
              </p>
              <h2 className="text-3xl font-bold text-white">
                What&apos;s in your {product.name} subscription
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatsIncluded.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-ink-800 border border-white/5 rounded-xl px-5 py-3.5"
                >
                  <span className="w-6 h-6 bg-brand-500/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-brand-400" />
                  </span>
                  <span className="text-zinc-200 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Perfect For
              </p>
              <h2 className="text-3xl font-bold text-white">
                Who is the {product.name} for?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {product.whoIsItFor.map((item) => (
                <div
                  key={item.title}
                  className="bg-ink-800 border border-white/5 hover:border-brand-500/20 rounded-2xl p-7 transition-all"
                >
                  <div className="w-10 h-10 bg-brand-500/15 rounded-xl flex items-center justify-center mb-4">
                    <Check size={18} className="text-brand-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Highlights */}
        <section className="py-16 px-4 bg-ink-950 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Price", value: `C$${product.price} one-off` },
                { label: "Channels", value: "50,000+" },
                { label: "Quality", value: "4K Ultra HD" },
                { label: "Access", value: getMonths(product.slug) },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-brand-500/10 to-brand-600/5 border border-brand-500/20 rounded-2xl p-5 text-center"
                >
                  <p className="text-brand-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    {stat.label}
                  </p>
                  <p className="text-white font-bold text-xl leading-tight">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Customer Reviews
              </p>
              <h2 className="text-3xl font-bold text-white">
                What customers say about the {product.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {product.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-ink-800 border border-white/5 rounded-2xl p-7 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-400 text-brand-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-ink-950 border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                FAQ
              </p>
              <h2 className="text-3xl font-bold text-white">
                Frequently asked questions
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {product.faq.map((item) => (
                <div
                  key={item.q}
                  className="bg-ink-800 border border-white/5 rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-500/20 to-brand-600/10 border border-brand-500/25 rounded-3xl p-10 sm:p-14 text-center">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Ready to Watch?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to start watching IPTV Canada?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Get the {product.name} for C$${product.price} — or try us free for 24 hours with no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waSubscribeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                Subscribe Now — C$${product.price}
              </a>
              <a
                href={TRIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-brand-500/50 text-zinc-300 hover:text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                Free 24-Hour Trial
              </a>
            </div>
          </div>
        </section>

        {/* Related Plans */}
        <section className="py-16 px-4 bg-ink-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Other Plans
              </p>
              <h2 className="text-2xl font-bold text-white">
                Explore other IPTV Canada plans
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedProducts.map((rel) => {
                const relWaLink = `https://wa.me/212710141872?text=${encodeURIComponent(rel.whatsappMessage)}`;
                return (
                  <div
                    key={rel.slug}
                    className={`relative rounded-2xl border p-6 flex flex-col transition-all ${
                      rel.highlight
                        ? "bg-gradient-to-br from-brand-500 to-brand-600 border-brand-400"
                        : "bg-ink-800 border-white/5 hover:border-brand-500/30"
                    }`}
                  >
                    {rel.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                          rel.highlight ? "bg-white text-brand-600" : "bg-brand-500 text-white"
                        }`}
                      >
                        {rel.badge}
                      </span>
                    )}
                    <h3
                      className={`text-base font-bold mb-1 ${rel.highlight ? "text-white" : "text-white"}`}
                    >
                      {rel.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5 mb-5">
                      <span className={`text-3xl font-extrabold ${rel.highlight ? "text-white" : "text-white"}`}>
                        C$${rel.price}
                      </span>
                      <span className={`text-xs ${rel.highlight ? "text-brand-100" : "text-zinc-400"}`}>
                        {rel.period}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      <Link
                        href={`/product/${rel.slug}`}
                        className={`text-center text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
                          rel.highlight
                            ? "bg-white text-brand-600 hover:bg-brand-50"
                            : "bg-brand-500 hover:bg-brand-400 text-white"
                        }`}
                      >
                        View Plan
                      </Link>
                      <a
                        href={relWaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-center text-xs font-medium px-5 py-2 rounded-full transition-colors ${
                          rel.highlight
                            ? "bg-white/20 hover:bg-white/30 text-white"
                            : "border border-white/10 hover:border-brand-500/40 text-zinc-400 hover:text-white"
                        }`}
                      >
                        Subscribe Now
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/product"
                className="text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors"
              >
                View all plans →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
