import type { Metadata } from "next";
import FrNav from "./_components/FrNav";
import FrHero from "./_components/FrHero";
import FrGuide from "./_components/FrGuide";
import FrFeatures from "./_components/FrFeatures";
import FrPricing from "./_components/FrPricing";
import FrDevices from "./_components/FrDevices";
import FrSetup from "./_components/FrSetup";
import FrChannels from "./_components/FrChannels";
import FrTestimonials from "./_components/FrTestimonials";
import FrFAQ from "./_components/FrFAQ";
import FrFinalCTA from "./_components/FrFinalCTA";
import FrFooter from "./_components/FrFooter";
import FrWhatsAppButton from "./_components/FrWhatsAppButton";
import FrStickyBar from "./_components/FrStickyBar";
import FrOfferBanner from "./_components/FrOfferBanner";
import FrSocialProof from "./_components/FrSocialProof";
import { faqsFr } from "./_components/faqsFr";
import { SITE_URL } from "../lib/site";

const BASE = SITE_URL;

const TITLE = "IPTV Québec & Canada — 50 000+ chaînes en 4K | IPTV Canada";
const DESCRIPTION =
  "Abonnement IPTV au Canada : 50 000+ chaînes en direct et 200 000+ films et séries jusqu'en 4K par Internet. Sur Firestick, télé et téléphone. Essai gratuit de 24 h.";

const plans = [
  { slug: "1-month-iptv-canada", price: "13.99" },
  { slug: "3-month-iptv-canada", price: "34.99" },
  { slug: "6-month-iptv-canada", price: "54.99" },
  { slug: "12-month-iptv-canada", price: "94.99" },
  { slug: "24-month-iptv-canada", price: "159" },
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${BASE}/fr`,
    languages: { "en-CA": BASE, "fr-CA": `${BASE}/fr`, "x-default": BASE },
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${BASE}/fr`,
    siteName: "IPTV Canada",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "IPTV Canada",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/favicon.svg`, width: 512, height: 512 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "supportteamiptv@gmail.com",
        telephone: "+212710141872",
        availableLanguage: ["French", "English"],
        areaServed: "CA",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/fr#webpage`,
      url: `${BASE}/fr`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "fr-CA",
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/fr#product` },
    },
    {
      "@type": "Product",
      "@id": `${BASE}/fr#product`,
      name: "Abonnement IPTV Canada",
      description:
        "Un abonnement IPTV canadien offrant plus de 50 000 chaînes en direct et 200 000 films et séries sur demande jusqu'en 4K, avec reprise sur 7 jours, un guide complet et le soutien WhatsApp jour et nuit.",
      brand: { "@type": "Brand", name: "IPTV Canada" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CAD",
        lowPrice: "13.99",
        highPrice: "159",
        offerCount: plans.length,
        offers: plans.map((p) => ({
          "@type": "Offer",
          price: p.price,
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: `${BASE}/product/${p.slug}`,
          seller: { "@id": `${BASE}/#organization` },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE}/fr#faq`,
      inLanguage: "fr-CA",
      mainEntity: faqsFr.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function FrHome() {
  return (
    <div lang="fr-CA">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FrOfferBanner />
      <FrNav withBanner />
      <main>
        <FrHero />
        <FrGuide />
        <FrFeatures />
        <FrPricing />
        <FrDevices />
        <FrSetup />
        <FrChannels />
        <FrTestimonials />
        <FrFAQ />
        <FrFinalCTA />
      </main>
      <FrFooter />
      <FrWhatsAppButton />
      <FrStickyBar />
      <FrSocialProof />
    </div>
  );
}
