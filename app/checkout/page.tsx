import Link from "next/link";
import { notFound } from "next/navigation";
import { getCreator } from "@/lib/creators";
import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata = { title: "Checkout · LuxePatron" };

export default async function CheckoutPage({
  searchParams
}: {
  searchParams: Promise<{ creator?: string; tier?: string }>;
}) {
  const { creator: slug, tier: tierId } = await searchParams;
  if (!slug || !tierId) notFound();
  const creator = getCreator(slug);
  const tier = creator?.tiers.find((t) => t.id === tierId);
  if (!creator || !tier) notFound();

  const fee = Math.round(tier.price * 0.029 + 0.3);
  const total = tier.price;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href={`/c/${creator.slug}`}
        className="text-xs uppercase tracking-[0.2em] text-gold-200/70 hover:text-gold-100"
      >
        ← Back to {creator.name}
      </Link>

      <h1 className="mt-6 font-display text-5xl text-gold-50">Checkout</h1>
      <p className="mt-3 text-gold-100/70">
        You are one step away from becoming a {tier.name.toLowerCase()} of{" "}
        {creator.name}.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <CheckoutForm creator={creator.name} tier={tier.name} price={tier.price} cadence={tier.cadence} />
        </div>

        <aside className="lg:col-span-2">
          <div className="card p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-300/70">
              Order summary
            </div>
            <div className="mt-6 flex items-start justify-between">
              <div>
                <div className="font-display text-2xl text-gold-50">
                  {creator.name}
                </div>
                <div className="text-sm text-gold-100/60">{tier.name}</div>
              </div>
              <div className="text-right">
                <div className="font-display text-2xl text-gold-grad">
                  ${tier.price.toLocaleString()}
                </div>
                <div className="text-xs text-gold-100/50">
                  per {tier.cadence === "month" ? "month" : "year"}
                </div>
              </div>
            </div>

            <div className="hairline my-6" />

            <ul className="space-y-2 text-sm text-gold-100/80">
              {tier.perks.slice(0, 4).map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-gold-300">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="hairline my-6" />

            <div className="space-y-2 text-sm text-gold-100/70">
              <Row label="Membership" value={`$${total.toLocaleString()}`} />
              <Row label="Processing fee" value={`$${fee.toFixed(2)}`} />
              <Row label="Concierge fee" value="$0.00" />
            </div>
            <div className="hairline my-4" />
            <div className="flex items-baseline justify-between">
              <div className="text-sm text-gold-100/70">Due today</div>
              <div className="font-display text-3xl text-gold-grad">
                ${(total + fee).toLocaleString()}
              </div>
            </div>
            <div className="mt-6 text-[11px] leading-relaxed text-gold-100/50">
              Membership renews automatically every {tier.cadence}. You may
              cancel anytime in your patron portal; the current cycle is
              non-refundable. By continuing you agree to LuxePatron's House
              Terms and Privacy Notice.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}
