import Link from "next/link";
import Image from "next/image";
import type { Creator } from "@/lib/creators";

export function CreatorCard({ creator }: { creator: Creator }) {
  const starting = Math.min(...creator.tiers.map((t) => t.price));
  return (
    <Link
      href={`/c/${creator.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-800 transition hover:border-gold-400/40"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={creator.cover}
          alt={creator.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ink-900/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-300/20 backdrop-blur">
          {creator.category}
        </div>
      </div>
      <div className="relative -mt-10 flex items-start gap-4 px-6 pb-6">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-gold-300/30">
          <Image
            src={creator.avatar}
            alt={creator.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="pt-8">
          <div className="font-display text-2xl text-gold-50">
            {creator.name}
            {creator.verified && (
              <span className="ml-2 text-gold-300/80">✦</span>
            )}
          </div>
          <div className="text-xs text-gold-100/50">{creator.location}</div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <p className="text-sm leading-relaxed text-gold-100/80">
          {creator.tagline}
        </p>
        <div className="hairline my-5" />
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold-100/40">
              From
            </div>
            <div className="font-display text-2xl text-gold-grad">
              ${starting.toLocaleString()}
              <span className="text-sm text-gold-100/60">/mo</span>
            </div>
          </div>
          <div className="text-xs text-gold-200/80 transition group-hover:translate-x-1">
            View profile →
          </div>
        </div>
      </div>
    </Link>
  );
}
