import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Setup from "./components/Setup";
import Channels from "./components/Channels";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBar from "./components/StickyBar";
import JsonLd from "./components/JsonLd";
import OfferBanner from "./components/OfferBanner";
import SocialProof from "./components/SocialProof";
import FinalCTA from "./components/FinalCTA";
import { homeFaqs } from "./lib/faqs";
import { SITE_URL } from "./lib/site";

const BASE_URL = SITE_URL;

const TITLE = "IPTV Canada 2026 — 50,000+ Live Channels & 4K Subscription";
const DESCRIPTION =
  "A Canadian IPTV subscription with 50,000+ live channels and 200,000+ movies & series in up to 4K, streamed over your internet. Works on Firestick, Smart TV, Android & iPhone. Plans from C$13.99, free 24-hour trial.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: BASE_URL,
    languages: { "en-CA": BASE_URL, "fr-CA": `${BASE_URL}/fr`, "x-default": BASE_URL },
  },
  openGraph: { title: TITLE, description: DESCRIPTION, url: BASE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const plans = [
  { name: "IPTV Canada 1 Month Plan", slug: "1-month-iptv-canada", price: "13.99" },
  { name: "IPTV Canada 3 Month Plan", slug: "3-month-iptv-canada", price: "34.99" },
  { name: "IPTV Canada 6 Month Plan", slug: "6-month-iptv-canada", price: "54.99" },
  { name: "IPTV Canada 12 Month Plan", slug: "12-month-iptv-canada", price: "94.99" },
  { name: "IPTV Canada 24 Month Plan", slug: "24-month-iptv-canada", price: "159" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "IPTV Canada",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg`, width: 512, height: 512 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "supportteamiptv@gmail.com",
        telephone: "+212710141872",
        availableLanguage: "English",
        areaServed: "CA",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "IPTV Canada",
      inLanguage: "en-CA",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-CA",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#product` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${BASE_URL}/opengraph-image` },
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#product`,
      name: "IPTV Canada Subscription",
      description:
        "A Canadian IPTV subscription delivering 50,000+ live channels and 200,000+ movies and series on demand in up to 4K, with 7-day catch-up, a full EPG and WhatsApp support around the clock.",
      image: `${BASE_URL}/opengraph-image`,
      brand: { "@type": "Brand", name: "IPTV Canada" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CAD",
        lowPrice: "13.99",
        highPrice: "159",
        offerCount: plans.length,
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price,
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          url: `${BASE_URL}/product/${p.slug}`,
          seller: { "@id": `${BASE_URL}/#organization` },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <OfferBanner />
      <Navbar withBanner />
      <main>
        <Hero />
        <Guide />
        <Features />
        <Pricing />
        <Devices />
        <Setup />
        <Channels />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBar />
      <SocialProof />
    </>
  );
}
