import { CreatorCard } from "@/components/CreatorCard";
import { creators } from "@/lib/creators";

export const metadata = {
  title: "Explore creators · LuxePatron"
};

export default function ExplorePage() {
  const categories = Array.from(new Set(creators.map((c) => c.category)));
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
            The roster
          </div>
          <h1 className="mt-3 font-display text-5xl text-gold-50 md:text-6xl">
            Explore creators
          </h1>
          <p className="mt-4 max-w-xl text-gold-100/70">
            Hand-selected. Seat-capped. Every creator on LuxePatron operates at
            the highest tier of their craft. Tiers begin at $500/month.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Pill active>All</Pill>
          {categories.map((c) => (
            <Pill key={c}>{c}</Pill>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {creators.map((c) => (
          <CreatorCard key={c.slug} creator={c} />
        ))}
      </div>
    </div>
  );
}

function Pill({
  children,
  active
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`cursor-pointer rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition ${
        active
          ? "border border-gold-300/40 bg-gold-500/10 text-gold-100"
          : "border border-white/10 text-gold-100/60 hover:border-gold-300/30"
      }`}
    >
      {children}
    </span>
  );
}
