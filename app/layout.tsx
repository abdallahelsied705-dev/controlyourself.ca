import type { Metadata } from "next";
import { Inter, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Motion from "./components/Motion";
import { SITE_URL } from "./lib/site";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IPTV Canada | 50,000+ Channels in 4K, Free 24-Hour Trial",
    template: "%s — IPTV Canada",
  },
  description:
    "IPTV Canada subscription: 50,000+ live channels and 200,000+ movies & series in up to 4K over your internet. Works on Firestick, Smart TV, Android & iPhone. No contract, free 24-hour trial.",
  keywords: [
    "IPTV Canada",
    "Canadian IPTV",
    "IPTV subscription Canada",
    "best IPTV Canada",
    "IPTV Canada free trial",
    "Firestick IPTV Canada",
    "4K IPTV Canada",
    "IPTV box Canada",
    "IPTV Toronto",
    "IPTV Montreal",
    "IPTV Vancouver",
    "cancel cable Canada",
    "cut the cord Canada",
    "cord cutting Canada",
  ],
  authors: [{ name: "IPTV Canada" }],
  creator: "IPTV Canada",
  publisher: "IPTV Canada",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "IPTV Canada",
    title: "IPTV Canada | 50,000+ Channels in 4K, Free 24-Hour Trial",
    description:
      "A Canadian IPTV subscription with 50,000+ live channels and 200,000+ movies & series in up to 4K. No dish, no contract, free 24-hour trial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Canada | 50,000+ Channels in 4K, Free 24-Hour Trial",
    description:
      "A Canadian IPTV subscription with 50,000+ live channels and 200,000+ movies & series in up to 4K. No dish, no contract, free 24-hour trial.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Motion />
        <Analytics />
      </body>
    </html>
  );
}
