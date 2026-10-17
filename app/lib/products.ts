export type WhoIsItForItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  perMonth: string;
  period: string;
  badge?: string;
  highlight: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  whatsappMessage: string;
  whoIsItFor: WhoIsItForItem[];
  faq: FaqItem[];
  testimonials: Testimonial[];
};

export const products: Product[] = [
  {
    slug: "1-month-iptv-canada",
    name: "1 Month IPTV Canada",
    price: 13.99,
    perMonth: "C$13.99/mo",
    period: "one-time payment",
    highlight: false,
    metaTitle: "1 Month IPTV Canada Subscription – C$13.99 | IPTV Canada",
    metaDescription:
      "One month of IPTV Canada for C$13.99: 50,000+ live channels, up to 4K and 7-day catch-up. No contract, no auto-renewal, instant activation after a free trial.",
    h1: "1 Month IPTV Canada — C$13.99 One-Time Payment",
    heroSubtitle:
      "The simplest way to find out whether IPTV is right for you. A full month of access — 50,000+ live channels, up to 4K and 7-day catch-up — for a single C$13.99 payment that never renews on its own.",
    whatsappMessage: "controlyourself.ca - I'd like to subscribe to the 1 Month IPTV Canada plan (C$13.99)",
    whoIsItFor: [
      {
        title: "First-time cord-cutters",
        description:
          "Thinking about dropping cable or satellite but not ready to commit? One month lets you put the full line-up through its paces on your own TV and internet — browse the 50,000+ channels, test the 4K streams, and compare it to your current bill with nothing locked in past 30 days.",
      },
      {
        title: "Short stays and temporary setups",
        description:
          "In a rental, a dorm, or a new place for a few weeks? A single month covers live TV, sports and on-demand for the length of your stay, so you skip the two-year cable contract you don't need.",
      },
      {
        title: "One-event viewers",
        description:
          "Only want TV for a specific playoff run, a season finale, or the holidays? One month lines up with the thing you actually care about and then simply stops.",
      },
    ],
    faq: [
      {
        q: "Does the 1-month plan renew automatically?",
        a: "No. You pay C$13.99 once for 30 days of access — there's no recurring charge and nothing to cancel. When the 30 days end the service just stops, and it's entirely up to you whether to buy another month.",
      },
      {
        q: "Can I move up to a longer plan later?",
        a: "Yes. When your month is up you can switch to any longer plan — 3, 6, 12 or 24 months. Send us a message on WhatsApp and we'll move you over right away.",
      },
      {
        q: "Do I get fewer channels on the 1-month plan?",
        a: "No — every plan carries the exact same line-up: 50,000+ live channels, 200,000+ on-demand titles, up to 4K, 7-day catch-up and the full guide. The only thing that changes between plans is how long it lasts and the price per month.",
      },
      {
        q: "How fast can I start watching?",
        a: "Usually within about 10 minutes. As soon as your payment clears we send your login and a setup guide over WhatsApp, any time of day.",
      },
      {
        q: "What if it doesn't work for me?",
        a: "Message us on WhatsApp and we'll troubleshoot it first. If the service isn't as described you can request a refund within 48 hours of buying, and if a technical fault can't be resolved within 72 hours of you reporting it, we refund the unused time pro-rata. Full details are on our refund policy page.",
      },
    ],
    testimonials: [
      {
        name: "James T.",
        city: "Calgary, AB",
        rating: 5,
        text: "I just wanted to test it before paying for anything longer, and one month was perfect. The sports actually looked sharper than my old cable box. I've since moved to the 6-month plan.",
      },
      {
        name: "Priya S.",
        city: "Mississauga, ON",
        rating: 5,
        text: "Grabbed a month while staying with family. Set up in about five minutes and had hundreds of channels going. For C$13.99 it's a steal — I'll get it again next time I'm in town.",
      },
      {
        name: "Daniel H.",
        city: "Winnipeg, MB",
        rating: 5,
        text: "Used a single month to follow the playoffs. Not one drop-out, even on the late games, and support answered quickly when I had a question on day one.",
      },
    ],
  },
  {
    slug: "3-month-iptv-canada",
    name: "3 Months IPTV Canada",
    price: 34.99,
    perMonth: "C$11.66/mo",
    period: "one-time payment",
    highlight: false,
    metaTitle: "3 Month IPTV Canada Subscription – C$34.99 | IPTV Canada",
    metaDescription:
      "Three months of IPTV Canada for C$34.99 (about C$11.66/month): 50,000+ channels, up to 4K and 7-day catch-up. No contract, no auto-renewal, quick WhatsApp setup.",
    h1: "3 Months IPTV Canada — C$34.99 One-Time Payment",
    heroSubtitle:
      "Three months of IPTV Canada for C$34.99 — about C$7 less than paying month to month. A sensible pick if you want dependable TV for a season without tying yourself down for half a year.",
    whatsappMessage: "controlyourself.ca - I'd like to subscribe to the 3 Month IPTV Canada plan (C$34.99)",
    whoIsItFor: [
      {
        title: "Occasional but particular viewers",
        description:
          "You don't have the TV on every night, but when you do you want it to look right and never stall. Three months gives you the whole 50,000+ channel line-up and 200,000+ on-demand titles at a lower monthly rate than paying as you go — with no long commitment.",
      },
      {
        title: "Students covering a semester",
        description:
          "A college quarter is roughly three months, and so is this. Keep live sports, entertainment and on-demand shows running for the term — handy in a shared apartment where everyone wants real TV without a cable contract.",
      },
      {
        title: "Travelers away for a season",
        description:
          "Working away from home for a few months? This keeps you tuned into your usual entertainment, news and sports wherever you are, and it works on the road without a VPN.",
      },
    ],
    faq: [
      {
        q: "How much cheaper is 3 months than paying monthly?",
        a: "C$34.99 for three months works out to about C$11.66 a month, versus C$13.99 a month on the single-month plan — so you save roughly C$7 over the same period. It's the first real step down in price.",
      },
      {
        q: "Can more than one person watch at once?",
        a: "Yes. Plans run from 1 to 4 simultaneous connections, so you could be watching on the TV while someone else is on a tablet and the kids are on a phone — all on one subscription.",
      },
      {
        q: "Will it auto-charge when the 3 months end?",
        a: "Never. There's no automatic renewal — access just expires at the end. We might send a friendly reminder, but you're only charged again if you ask us to set up a new plan.",
      },
      {
        q: "What if something goes wrong during the 3 months?",
        a: "WhatsApp support is available throughout your subscription and most issues are sorted in minutes. If the service isn't as described you can request a refund within 48 hours of purchase under our refund policy.",
      },
    ],
    testimonials: [
      {
        name: "Sophie R.",
        city: "Edmonton, AB",
        rating: 5,
        text: "Three months was ideal for a semester of TV. Plenty of channels, the sports coverage is great, and the setup guide was easy to follow. Well worth it.",
      },
      {
        name: "Marcus K.",
        city: "Hamilton, ON",
        rating: 5,
        text: "The trial sold me, so I took three months and haven't had a single problem — entertainment, news, all the sports, all steady. I'll probably step up to six months next.",
      },
      {
        name: "Claire W.",
        city: "Victoria, BC",
        rating: 4,
        text: "Good value over three months. I work shifts, so the 7-day catch-up is the part I use most — being able to go back a week is a real game changer. Reliable throughout.",
      },
    ],
  },
  {
    slug: "6-month-iptv-canada",
    name: "6 Months IPTV Canada",
    price: 54.99,
    perMonth: "C$9.17/mo",
    period: "one-time payment",
    badge: "Most Popular",
    highlight: true,
    metaTitle: "6 Month IPTV Canada Subscription – C$54.99 | IPTV Canada",
    metaDescription:
      "Six months of IPTV Canada for C$54.99 (about C$9.17/month) — our most popular plan: 50,000+ channels, up to 4K, 7-day catch-up and quick setup. No contract.",
    h1: "6 Months IPTV Canada — C$54.99 One-Time Payment",
    heroSubtitle:
      "The plan most people land on. Six months of IPTV Canada for C$54.99 — about C$9.17 a month — the right balance between a real saving and still being able to reassess before committing to a full year.",
    whatsappMessage: "controlyourself.ca - I'd like to subscribe to the 6 Month IPTV Canada plan (C$54.99)",
    whoIsItFor: [
      {
        title: "Regular evening-and-weekend viewers",
        description:
          "If the TV is on most evenings and all weekend, this is the comfortable middle ground. You get live sports, drama, documentaries and news without cable prices, at about C$9.17 a month, and you can still take stock in six months instead of a year.",
      },
      {
        title: "Followers of a half-season",
        description:
          "Football runs fall through winter; basketball and hockey run fall through spring. Six months covers the busy stretch of whatever you follow — and you can add another six months to catch the rest.",
      },
      {
        title: "Families testing life after cable",
        description:
          "Thinking of cutting the cord? Six months is long enough to be sure the whole household is covered — kids' channels, sports, networks and news — before you move to a longer plan.",
      },
    ],
    faq: [
      {
        q: "Why do most people pick the 6-month plan?",
        a: "It's the best trade-off between price and flexibility. At about C$9.17 a month you're paying a third less than the monthly rate, but you're not committing to a whole year up front. Plenty of customers then renew for another six months or step up to the 12-month plan.",
      },
      {
        q: "Do I still get 4K on this plan?",
        a: "Yes — every plan includes the full quality range. Where a channel is broadcast in 4K you'll get 4K; where it's Full HD or HD you'll get that. Nothing is held back for a higher-priced plan.",
      },
      {
        q: "Can I use it while traveling during the six months?",
        a: "Yes. The service travels with you — keep your usual channels on the road or abroad, with no VPN needed.",
      },
      {
        q: "How does the 7-day catch-up work?",
        a: "On supported channels you can replay anything from the previous seven days. Open the guide, find the program you missed and play it back on demand, on your TV, phone, tablet or laptop.",
      },
      {
        q: "Can I add another device connection?",
        a: "Yes. Every plan supports 1 to 4 simultaneous connections — just tell us how many screens you need when you subscribe and we'll set it up that way.",
      },
    ],
    testimonials: [
      {
        name: "Mark B.",
        city: "Toronto, ON",
        rating: 5,
        text: "I keep renewing the 6-month plan every time it runs out. Live sports in 4K, no buffering, and my friends can't believe how little I pay. Should've switched a long time ago.",
      },
      {
        name: "Emma F.",
        city: "Ottawa, ON",
        rating: 5,
        text: "Left cable after years and genuinely don't miss it. Everything I watched before is here plus a lot more, and the whole family uses it across different rooms and devices with no trouble.",
      },
      {
        name: "Tariq M.",
        city: "Windsor, ON",
        rating: 5,
        text: "Running on my Firestick inside ten minutes. The international channels alone are a huge step up from what I had, and the six-month price is hard to argue with. WhatsApp replies came back in minutes.",
      },
    ],
  },
  {
    slug: "12-month-iptv-canada",
    name: "12 Months IPTV Canada",
    price: 94.99,
    perMonth: "C$7.92/mo",
    period: "one-time payment",
    highlight: false,
    metaTitle: "12 Month IPTV Canada Subscription – C$7.92/Month | IPTV Canada",
    metaDescription:
      "A year of IPTV Canada for C$94.99 — about C$7.92 a month for 50,000+ channels, up to 4K and 7-day catch-up. No contract, no auto-renewal, quick setup.",
    h1: "12 Months IPTV Canada — C$94.99 One-Time Payment",
    heroSubtitle:
      "A full year of IPTV Canada for C$94.99 — about C$7.92 a month. The plan for people who already know IPTV suits them and want guaranteed access across every season and schedule for the year ahead.",
    whatsappMessage: "controlyourself.ca - I'd like to subscribe to the 12 Month IPTV Canada plan (C$94.99)",
    whoIsItFor: [
      {
        title: "Households that watch every day",
        description:
          "The TV is on daily and you've already proven IPTV works for you. A year of uninterrupted access for C$94.99 — less than a single month of most cable packages — means no admin and nothing to think about for twelve months.",
      },
      {
        title: "Serious sports fans",
        description:
          "A full year takes in every football, basketball, baseball and hockey season, plus the big fight nights, racing and tennis. Subscribe once and you're never scrambling to renew mid-season.",
      },
      {
        title: "Families chasing the best value",
        description:
          "For a household with kids, a year at about C$7.92 a month comes in well under any cable or satellite deal. Kids' channels, family movies and live sports are all covered for everyone, all year.",
      },
    ],
    faq: [
      {
        q: "Is C$94.99 genuinely the whole cost for a year?",
        a: "Yes. C$94.99 is everything — one payment for 365 days. There's no setup fee, no hardware to buy, no installation charge and no hidden extras. The price you see is the price you pay.",
      },
      {
        q: "What happens when the 12 months are up?",
        a: "Access simply ends — there's no auto-renewal and no surprise charge. We'll send a reminder as your year winds down so you can renew on whichever plan suits you then, if you want to.",
      },
      {
        q: "Does a year cover all the sports?",
        a: "Yes. Your 12 months run from the day you activate, taking in every event broadcast on the channels in our line-up during that time — football, basketball, baseball, hockey, racing, tennis, golf and boxing.",
      },
      {
        q: "Can the whole family share it?",
        a: "Yes — plans support up to 4 simultaneous connections, so everyone can watch on their own device at the same time. One subscription, several screens.",
      },
      {
        q: "What internet speed do I need across the year?",
        a: "We suggest at least 10 Mbps for HD and 25 Mbps for 4K, which most home connections clear easily. If you're somewhere rural with slower speeds, SD streams run on about 5 Mbps.",
      },
    ],
    testimonials: [
      {
        name: "Gareth P.",
        city: "Halifax, NS",
        rating: 5,
        text: "I renew the 12-month plan every year now. At around six bucks a month I can't see the case for going back to cable — the whole football season, the fights, the racing, all there. Easily my best TV decision.",
      },
      {
        name: "Naomi A.",
        city: "Saskatoon, SK",
        rating: 5,
        text: "Signed the family up and we've not looked back. The kids have their cartoon channels, my husband has the games and I catch up on shows — all on different devices at once. Remarkable for the price.",
      },
      {
        name: "Robert C.",
        city: "Surrey, BC",
        rating: 5,
        text: "I was paying over C$120 a month for cable. Now it's C$94.99 once a year for the same channels, a better 4K picture and more to watch. The setup guide had it running on my Samsung TV in minutes.",
      },
    ],
  },
  {
    slug: "24-month-iptv-canada",
    name: "24 Months IPTV Canada",
    price: 159,
    perMonth: "C$6.63/mo",
    period: "one-time payment",
    badge: "Best Value",
    highlight: false,
    metaTitle: "24 Month IPTV Canada Subscription – C$159 | IPTV Canada",
    metaDescription:
      "Two years of IPTV Canada for C$159 — about C$6.63 a month. 50,000+ channels, up to 4K and 7-day catch-up in a single payment. No contract, no auto-renewal.",
    h1: "24 Months IPTV Canada — C$159 One-Time Payment",
    heroSubtitle:
      "The lowest monthly rate we offer. Two full years of IPTV Canada for C$159 — about C$6.63 a month — in one payment, with the same 50,000+ channels and up to 4K, and nothing to renew for two years.",
    whatsappMessage: "controlyourself.ca - I'd like to subscribe to the 24 Month IPTV Canada plan (C$159)",
    whoIsItFor: [
      {
        title: "People who already know IPTV is for them",
        description:
          "If you're already on a 6 or 12-month plan and treat IPTV as your main way of watching TV, two years is the natural next step: pay once, ignore renewals until 2028, and get the cheapest month we offer.",
      },
      {
        title: "Big and multi-generational households",
        description:
          "Homes where grandparents, parents and kids all watch different things get the most from two years. Spread across up to four connections over 24 months, the per-viewer cost becomes very small.",
      },
      {
        title: "Anyone watching the budget closely",
        description:
          "If rock-bottom cost without dropping quality is the goal, this is the one. At about C$6.63 a month you still get the same 4K channels, the same 7-day catch-up and the same WhatsApp support — for less than a single coffee a week.",
      },
    ],
    faq: [
      {
        q: "What makes two years the best value?",
        a: "At about C$6.63 a month it's the lowest per-month price we offer. Against the C$13.99 single-month plan you save roughly C$175 over the same two years — and you don't touch a renewal for two full years.",
      },
      {
        q: "What if there's a technical problem during the two years?",
        a: "Your subscription is fully supported for the entire 24 months. If anything stops working, WhatsApp support will work through it with you — keeping long-term customers happy is the whole point of this plan.",
      },
      {
        q: "Do I get new channels added during my 24 months?",
        a: "Yes. The line-up is updated with new channels and content at no extra cost, and existing subscribers pick those up automatically — there's never an upgrade to pay for.",
      },
      {
        q: "Will it keep working on new devices and apps?",
        a: "Yes. The service uses the standard M3U / Xtream Codes format that every major IPTV player reads, so as new devices and apps appear over your two years your same login keeps working with them.",
      },
      {
        q: "Can I buy it as a gift for someone?",
        a: "Yes. Two years makes a good gift — especially for older relatives who just want reliable TV. We'll set the subscription up and send a simple guide written for their specific device.",
      },
    ],
    testimonials: [
      {
        name: "Kevin O.",
        city: "Quebec City, QC",
        rating: 5,
        text: "Two years means I don't even think about renewing, and at under five bucks a month it's a no-brainer. The sports coverage is everything I wanted. Best thing I've bought in a while.",
      },
      {
        name: "Linda M.",
        city: "London, ON",
        rating: 5,
        text: "Got this for my mom, who was paying C$95 a month for cable. Set it up on her Smart TV and she can't tell the quality apart — except now she has far more channels. She's saving a small fortune over the two years.",
      },
      {
        name: "Hassan B.",
        city: "Vancouver, BC",
        rating: 5,
        text: "I keep coming back to the 24-month plan — as soon as it ends I renew. The international channel range is the best I've found and the whole family watches together. No outages so far.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
