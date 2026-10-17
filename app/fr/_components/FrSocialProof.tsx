"use client";

import { useEffect, useState } from "react";

const notifications = [
  { flag: "🇨🇦", name: "Jean", city: "Toronto", plan: "12 mois" },
  { flag: "🇨🇦", name: "Sophie", city: "Vancouver", plan: "6 mois" },
  { flag: "🇨🇦", name: "David", city: "Calgary", plan: "24 mois" },
  { flag: "🇨🇦", name: "Lise", city: "Montréal", plan: "3 mois" },
  { flag: "🇨🇦", name: "Ahmed", city: "Edmonton", plan: "12 mois" },
  { flag: "🇨🇦", name: "Emma", city: "Ottawa", plan: "6 mois" },
  { flag: "🇨🇦", name: "Mohammed", city: "Mississauga", plan: "24 mois" },
  { flag: "🇨🇦", name: "Charlotte", city: "Winnipeg", plan: "12 mois" },
  { flag: "🇨🇦", name: "Olivier", city: "Hamilton", plan: "3 mois" },
  { flag: "🇨🇦", name: "Fatima", city: "Halifax", plan: "6 mois" },
  { flag: "🇨🇦", name: "Ryan", city: "Victoria", plan: "12 mois" },
  { flag: "🇨🇦", name: "Aisha", city: "Surrey", plan: "24 mois" },
  { flag: "🇨🇦", name: "Pierre", city: "Québec", plan: "12 mois" },
  { flag: "🇨🇦", name: "Marc", city: "Saskatoon", plan: "6 mois" },
  { flag: "🇨🇦", name: "Khalid", city: "Windsor", plan: "24 mois" },
  { flag: "🇨🇦", name: "Michel", city: "London, ON", plan: "12 mois" },
  { flag: "🇨🇦", name: "Chantal", city: "Kitchener", plan: "6 mois" },
  { flag: "🇨🇦", name: "Josée", city: "Regina", plan: "12 mois" },
];

function getMinutesAgo() {
  const options = [1, 2, 3, 5, 7, 10, 12, 15];
  return options[Math.floor(Math.random() * options.length)];
}

export default function FrSocialProof() {
  const [current, setCurrent] = useState<(typeof notifications)[0] | null>(null);
  const [visible, setVisible] = useState(false);
  const [minutesAgo, setMinutesAgo] = useState(3);

  useEffect(() => {
    let index = Math.floor(Math.random() * notifications.length);

    function showNext() {
      index = (index + 1) % notifications.length;
      setMinutesAgo(getMinutesAgo());
      setCurrent(notifications[index]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    }

    const first = setTimeout(showNext, 5000);
    const interval = setInterval(showNext, 9000);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-24 left-4 z-50 hidden md:block transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-ink-800 border border-brand-500/20 rounded-2xl px-4 py-3 shadow-2xl shadow-black/60 flex items-center gap-3 max-w-[260px]">
        <div className="w-9 h-9 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-lg flex-shrink-0">
          {current.flag}
        </div>

        <div className="min-w-0">
          <p className="text-white text-xs font-semibold leading-snug">
            {current.name} de {current.city}
          </p>
          <p className="text-brand-400 text-[11px] font-medium">s&apos;est abonné au forfait {current.plan}</p>
          <p className="text-zinc-500 text-[10px] mt-0.5">il y a {minutesAgo} min</p>
        </div>

        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0 ml-auto" />
      </div>
    </div>
  );
}
