import Link from "next/link";
import { CreatorCard } from "@/components/CreatorCard";
import { creators } from "@/lib/creators";

export default function HomePage() {
  const featured = creators.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-gold-700/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-ink-800/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-200">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              Now accepting 2026 patrons
            </div>
            <h1 className="font-display text-6xl leading-[1.05] tracking-tight md:text-8xl">
              <span className="text-gold-grad">Private access</span>
              <br />
              <span className="text-gold-50">to the world's most</span>
              <br />
              <span className="text-gold-50">coveted creators.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gold-100/70">
              LuxePatron is an invitation-only membership platform. Subscribe to
              elite operators, artists, physicians, and thought leaders for the
              kind of access no scroll can buy. Memberships begin at $500 per
              month.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/explore" className="btn-primary">
                Explore creators
              </Link>
              <Link href="#creators" className="btn-ghost">
                Apply as a creator
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-12 text-center md:gap-24">
              <Stat n="64" label="Curated creators" />
              <Stat n="$8.4M" label="Patron revenue last quarter" />
              <Stat n="38" label="Countries represented" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
              In residence
            </div>
            <h2 className="mt-3 font-display text-4xl text-gold-50 md:text-5xl">
              Featured this season
            </h2>
          </div>
          <Link href="/explore" className="text-sm text-gold-200/80 hover:text-gold-100">
            See all 64 creators →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <CreatorCard key={c.slug} creator={c} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
            The patronage
          </div>
          <h2 className="mt-3 font-display text-4xl text-gold-50 md:text-5xl">
            How LuxePatron works
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Step
            n="01"
            title="Discover"
            body="Browse a hand-curated roster of creators operating at the highest tier of their craft. No follower-count gimmicks. No discovery feed."
          />
          <Step
            n="02"
            title="Subscribe"
            body="Choose a tier — from a monthly correspondence to a yearly bespoke commission. Tiers are seat-capped. Many sell out."
          />
          <Step
            n="03"
            title="Belong"
            body="Receive private access, off-the-record material, in-person time, and the standing invitations that come with being known."
          />
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="font-display text-3xl leading-relaxed text-gold-50/90 md:text-4xl">
          "There is a market for paying attention. There has always been a
          market for being paid attention to.
          <span className="text-gold-grad"> LuxePatron is where the two finally meet.</span>"
        </div>
        <div className="mt-8 text-xs uppercase tracking-[0.25em] text-gold-200/60">
          Robb Report · 2026
        </div>
      </section>

      {/* For creators */}
      <section id="creators" className="mx-auto max-w-7xl px-6 py-24">
        <div className="card relative overflow-hidden p-12 md:p-16">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
                For creators
              </div>
              <h2 className="mt-3 font-display text-4xl text-gold-50 md:text-5xl">
                An audience worth keeping.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gold-100/70">
                You don't need more reach. You need patrons who pay you what
                your time is worth. LuxePatron handles billing, identity
                verification, dispute resolution, and the quiet logistics of
                running a high-ticket practice — so you can return to your work.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gold-100/80">
                <li>· 88% creator take rate. No tiered penalties.</li>
                <li>· Concierge onboarding within 14 days.</li>
                <li>· Vetted patron base. Identity-verified.</li>
                <li>· Bring your existing list — we'll migrate it.</li>
              </ul>
              <div className="mt-8">
                <Link href="/login?role=creator" className="btn-primary">
                  Apply to host a roster
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <PricingExample
                tier="The Letter"
                price="$950"
                patrons="240"
                revenue="$228,000/mo"
              />
              <PricingExample
                tier="Inner Circle"
                price="$2,400"
                patrons="12"
                revenue="$28,800/mo"
                featured
              />
              <PricingExample
                tier="Founding Patron"
                price="$45,000/yr"
                patrons="2"
                revenue="$90,000/yr"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <h2 className="font-display text-5xl text-gold-50 md:text-6xl">
          <span className="text-gold-grad">Membership</span> is not a feed.
        </h2>
        <p className="mt-6 text-lg text-gold-100/70">
          It is a standing relationship with a person whose attention is rare.
        </p>
        <div className="mt-10">
          <Link href="/explore" className="btn-primary">
            Begin your patronage
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-gold-grad md:text-5xl">{n}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gold-100/50">
        {label}
      </div>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="card p-8">
      <div className="font-display text-5xl text-gold-grad">{n}</div>
      <div className="mt-4 font-display text-2xl text-gold-50">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-gold-100/70">{body}</p>
    </div>
  );
}

function PricingExample({
  tier,
  price,
  patrons,
  revenue,
  featured
}: {
  tier: string;
  price: string;
  patrons: string;
  revenue: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        featured
          ? "border-gold-400/40 bg-gold-500/5"
          : "border-white/5 bg-ink-800/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-display text-xl text-gold-50">{tier}</div>
        <div className="text-sm text-gold-100/70">{price}</div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-gold-100/50">
        <div>{patrons} patrons</div>
        <div className="text-gold-grad font-medium">{revenue}</div>
      </div>
    </div>
  );
}
