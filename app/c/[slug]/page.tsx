import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCreator, creators } from "@/lib/creators";

export function generateStaticParams() {
  return creators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return { title: "Creator not found" };
  return {
    title: `${creator.name} · LuxePatron`,
    description: creator.tagline
  };
}

export default async function CreatorPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  return (
    <article>
      <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={creator.cover}
          alt={creator.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/20" />
      </div>

      <div className="mx-auto -mt-32 max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end">
          <div className="relative h-36 w-36 overflow-hidden rounded-3xl ring-2 ring-gold-300/40 md:h-44 md:w-44">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
          <div className="pb-2">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-300/80">
              {creator.category} · {creator.location}
            </div>
            <h1 className="mt-2 font-display text-5xl text-gold-50 md:text-6xl">
              {creator.name}
              {creator.verified && (
                <span className="ml-3 text-gold-300/90">✦</span>
              )}
            </h1>
            <div className="mt-2 text-gold-100/70">{creator.handle} · {creator.followers} following</div>
          </div>
        </div>

        <div className="mt-14 grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
                About
              </div>
              <p className="mt-4 font-display text-2xl leading-relaxed text-gold-50/90 md:text-3xl">
                {creator.tagline}
              </p>
              <p className="mt-6 text-gold-100/70 leading-relaxed">
                {creator.bio}
              </p>
            </section>

            <section>
              <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
                Of note
              </div>
              <ul className="mt-4 space-y-3">
                {creator.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-gold-100/80"
                  >
                    <span className="mt-2 inline-block h-1 w-6 bg-gold-grad shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {creator.testimonials.length > 0 && (
              <section>
                <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
                  From patrons
                </div>
                <div className="mt-6 space-y-6">
                  {creator.testimonials.map((t, i) => (
                    <blockquote
                      key={i}
                      className="card p-8"
                    >
                      <div className="font-display text-xl leading-relaxed text-gold-50/90">
                        "{t.quote}"
                      </div>
                      <div className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-200/70">
                        {t.author}
                        {t.role && <> · {t.role}</>}
                      </div>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-5">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
              Membership tiers
            </div>
            {creator.tiers.map((t) => (
              <div
                key={t.id}
                className={`relative rounded-2xl border p-6 ${
                  t.featured
                    ? "border-gold-400/50 bg-gradient-to-b from-gold-500/10 to-transparent"
                    : "border-white/5 bg-ink-800/40"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-6 rounded-full bg-gold-gradient px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-900">
                    Most chosen
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-2xl text-gold-50">
                    {t.name}
                  </div>
                  {t.seatsLeft !== undefined && (
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold-300/80">
                      {t.seatsLeft} {t.seatsLeft === 1 ? "seat" : "seats"} left
                    </div>
                  )}
                </div>
                <div className="mt-2 font-display text-4xl text-gold-grad">
                  ${t.price.toLocaleString()}
                  <span className="text-base text-gold-100/60">
                    /{t.cadence === "month" ? "mo" : "yr"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gold-100/70">
                  {t.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gold-100/80">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-gold-300">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout?creator=${creator.slug}&tier=${t.id}`}
                  className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-medium transition ${
                    t.featured
                      ? "bg-gold-gradient text-ink-900 hover:brightness-110"
                      : "border border-gold-300/30 text-gold-100 hover:border-gold-300/60"
                  }`}
                >
                  Become a {t.name.toLowerCase()}
                </Link>
              </div>
            ))}
            <div className="card p-5 text-xs leading-relaxed text-gold-100/60">
              All memberships are subject to a one-time concierge review.
              Patrons are identity-verified. Cancel anytime; current cycle is
              non-refundable.
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
