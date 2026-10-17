import Link from "next/link";
import { Check, Minus } from "lucide-react";

const facts = [
  { label: "Chaînes en direct", value: "50 000+" },
  { label: "Films et séries", value: "200 000+" },
  { label: "Prix à partir de", value: "6,63 $ / mois" },
  { label: "Essai gratuit", value: "24 heures" },
  { label: "Qualité d'image", value: "Jusqu'en 4K" },
  { label: "Temps d'installation", value: "Moins de 5 min" },
];

const plans = [
  { plan: "1 mois", price: 13.99, months: 1 },
  { plan: "3 mois", price: 34.99, months: 3 },
  { plan: "6 mois", price: 54.99, months: 6 },
  { plan: "12 mois", price: 94.99, months: 12 },
  { plan: "24 mois", price: 159, months: 24 },
];

const comparison: { feature: string; iptv: string | boolean; satellite: string | boolean; cable: string | boolean }[] = [
  { feature: "Coût mensuel", iptv: "Dès 6,63 $", satellite: "120 $ – 160 $", cable: "95 $ – 135 $" },
  { feature: "Engagement", iptv: "Aucun", satellite: "12 à 24 mois", cable: "12 mois" },
  { feature: "Soucoupe ou visite d'un technicien", iptv: false, satellite: true, cable: true },
  { feature: "Chaînes en direct", iptv: "50 000+", satellite: "200 à 500", cable: "~250" },
  { feature: "Sur téléphone, tablette et télé", iptv: true, satellite: "Frais en sus", cable: "Frais en sus" },
  { feature: "Fonctionne à l'étranger", iptv: true, satellite: false, cable: false },
];

function Cell({ value, good }: { value: string | boolean; good?: boolean }) {
  if (value === true) return <Check size={18} className={good ? "mx-auto text-accent-400" : "mx-auto text-zinc-400"} aria-label="Oui" />;
  if (value === false) return <Minus size={18} className="mx-auto text-zinc-600" aria-label="Non" />;
  return <span className={good ? "font-semibold text-white" : "text-zinc-400"}>{value}</span>;
}

export default function FrGuide() {
  return (
    <section id="what-is-iptv-canada" className="relative bg-ink-950 py-24" aria-labelledby="what-is-iptv-canada-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="reveal lg:col-span-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            L&apos;IPTV expliquée
          </span>
          <h2 id="what-is-iptv-canada-title" className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Qu&apos;est-ce que l&apos;IPTV au Canada?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            L&apos;<strong className="text-white">IPTV au Canada</strong>, c&apos;est regarder la télévision par Internet
            (Internet Protocol Television) plutôt que par une soucoupe, une antenne ou un boîtier de câble. Vos chaînes,
            le sport, les films et les séries arrivent par votre ligne Internet : il vous suffit d&apos;un abonnement,
            d&apos;une appli IPTV sur votre télé, votre Firestick ou votre téléphone, et d&apos;une connexion stable —
            aucun technicien, aucun câblage, aucun contrat de deux ans.{" "}
            <Link href="/blog/what-is-iptv-complete-guide" className="text-brand-300 underline-offset-4 hover:underline">
              Lire le guide complet du débutant (en anglais)
            </Link>
            .
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Notre abonnement <strong className="text-zinc-200">IPTV Canada</strong> comprend plus de 50 000 chaînes en
            direct et 200 000 films et séries sur demande. Les prix vont de 13,99 $ pour un mois jusqu&apos;à l&apos;équivalent
            d&apos;environ 6,63 $ par mois sur le forfait de 24 mois, et chaque option inclut la reprise sur 7 jours, un
            guide électronique complet (EPG) et le soutien WhatsApp jour et nuit.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-white">Comment fonctionne l&apos;IPTV au Canada?</h3>
          <ol className="mt-4 space-y-3">
            {[
              "Choisissez un forfait et le nombre d'appareils — ou commencez par l'essai gratuit de 24 heures.",
              "Nous vous envoyons votre lien M3U ou vos identifiants Xtream Codes sur WhatsApp, souvent en quelques minutes.",
              "Collez ces informations dans une appli IPTV comme TiviMate ou IPTV Smarters Pro et les chaînes se chargent.",
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
            Il faut au moins 10 Mbps pour la HD et 25 Mbps pour la 4K.{" "}
            <Link href="/setup" className="text-brand-300 underline-offset-4 hover:underline">
              Voir les guides d&apos;installation
            </Link>{" "}
            ou comparer les fournisseurs dans notre{" "}
            <Link href="/blog/best-iptv-canada" className="text-brand-300 underline-offset-4 hover:underline">
              guide du meilleur IPTV Canada 2026 (en anglais)
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="reveal glass rounded-3xl p-6" style={{ "--delay": "100ms" } as React.CSSProperties}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">IPTV Canada en bref</h3>
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
              Combien coûte l&apos;IPTV au Canada?
            </h3>
            <table className="mt-3 w-full text-sm">
              <caption className="sr-only">Prix de l&apos;abonnement IPTV Canada pour un appareil</caption>
              <thead>
                <tr className="text-left text-xs text-zinc-500">
                  <th scope="col" className="px-6 py-2 font-medium">Forfait</th>
                  <th scope="col" className="px-6 py-2 text-right font-medium">Prix</th>
                  <th scope="col" className="px-6 py-2 text-right font-medium">Par mois</th>
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
                    <td className="px-6 py-3 text-right font-semibold text-white">{p.price.toFixed(2).replace(".", ",")} $</td>
                    <td className="px-6 py-3 text-right text-brand-300">{(p.price / p.months).toFixed(2).replace(".", ",")} $</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-6 py-4 text-xs text-zinc-500">Prix pour 1 appareil. Sans frais d&apos;installation, sans contrat.</p>
          </div>
        </div>

        <div className="reveal lg:col-span-5">
          <h3 className="text-2xl font-bold text-white">IPTV Canada contre le satellite et le câble</h3>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/[0.07] bg-ink-900">
            <table className="w-full min-w-[560px] text-sm">
              <caption className="sr-only">Comparaison entre IPTV Canada, le satellite et le câble</caption>
              <thead>
                <tr className="text-xs uppercase tracking-wider text-zinc-500">
                  <th scope="col" className="px-6 py-4 text-left font-medium">Caractéristique</th>
                  <th scope="col" className="bg-brand-500/10 px-6 py-4 text-center font-semibold text-brand-300">IPTV Canada</th>
                  <th scope="col" className="px-6 py-4 text-center font-medium">Satellite</th>
                  <th scope="col" className="px-6 py-4 text-center font-medium">Câble</th>
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
