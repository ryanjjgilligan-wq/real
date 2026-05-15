import Link from "next/link";
import Image from "next/image";
import { creators } from "@/lib/creators";

export const metadata = { title: "Patron portal · LuxePatron" };

export default function DashboardPage() {
  const memberships = [
    { creator: creators[0], tier: creators[0].tiers[0], next: "Feb 18, 2026" },
    { creator: creators[3], tier: creators[3].tiers[1], next: "Feb 02, 2026" }
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
            Patron portal
          </div>
          <h1 className="mt-3 font-display text-5xl text-gold-50">
            Good evening, Patron.
          </h1>
        </div>
        <div className="hidden text-right md:block">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-200/60">
            Concierge
          </div>
          <div className="text-sm text-gold-100/80">Your atelier · 24/7</div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <KPI label="Active memberships" value={memberships.length.toString()} />
        <KPI label="Lifetime patronage" value="$48,200" />
        <KPI label="Upcoming touchpoints" value="3" />
      </div>

      <section className="mt-16">
        <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
          Your memberships
        </div>
        <div className="mt-6 space-y-4">
          {memberships.map((m) => (
            <div key={m.creator.slug} className="card flex items-center gap-6 p-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-gold-300/30">
                <Image
                  src={m.creator.avatar}
                  alt={m.creator.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-display text-xl text-gold-50">
                  {m.creator.name}
                </div>
                <div className="text-sm text-gold-100/70">
                  {m.tier.name} · ${m.tier.price.toLocaleString()}/
                  {m.tier.cadence === "month" ? "mo" : "yr"}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-[0.18em] text-gold-100/50">
                  Next billing
                </div>
                <div className="text-sm text-gold-100/80">{m.next}</div>
              </div>
              <Link
                href={`/c/${m.creator.slug}`}
                className="btn-ghost text-xs"
              >
                Manage
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
          Upcoming
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Event
            when="Feb 04 · 14:00 CET"
            title="Quarterly strategy intensive"
            who="Selene Vance"
          />
          <Event
            when="Feb 22 · 06:00 SGT"
            title="Macro outlook call"
            who="Kai Mercer"
          />
        </div>
      </section>
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-6">
      <div className="text-[11px] uppercase tracking-[0.2em] text-gold-100/50">
        {label}
      </div>
      <div className="mt-3 font-display text-4xl text-gold-grad">{value}</div>
    </div>
  );
}

function Event({
  when,
  title,
  who
}: {
  when: string;
  title: string;
  who: string;
}) {
  return (
    <div className="card p-5">
      <div className="text-[11px] uppercase tracking-[0.2em] text-gold-200/70">
        {when}
      </div>
      <div className="mt-2 font-display text-xl text-gold-50">{title}</div>
      <div className="text-sm text-gold-100/60">With {who}</div>
    </div>
  );
}
