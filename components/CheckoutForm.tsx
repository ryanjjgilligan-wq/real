"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CheckoutForm({
  creator,
  tier,
  price,
  cadence
}: {
  creator: string;
  tier: string;
  price: number;
  cadence: "month" | "year";
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      creator,
      tier,
      price,
      cadence,
      email: form.get("email"),
      name: form.get("name")
    };
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    router.push(`/checkout/success?ref=${data.ref}`);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Section title="Patron details">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full name" name="name" required />
          <Field label="Email" name="email" type="email" required />
        </div>
        <Field label="Company / Family office (optional)" name="org" />
      </Section>

      <Section title="Payment method">
        <Field label="Card number" name="card" placeholder="•••• •••• •••• ••••" required />
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Expiry" name="exp" placeholder="MM / YY" required />
          <Field label="CVC" name="cvc" placeholder="•••" required />
          <Field label="ZIP" name="zip" placeholder="10024" required />
        </div>
      </Section>

      <Section title="Notes to creator (private)">
        <textarea
          name="notes"
          rows={4}
          placeholder="A few words on what brought you to this patronage."
          className="w-full rounded-xl border border-white/10 bg-ink-800/40 px-4 py-3 text-gold-50 placeholder:text-gold-100/30 focus:border-gold-300/50 focus:outline-none"
        />
      </Section>

      <button type="submit" disabled={loading} className="btn-primary w-full text-base">
        {loading ? "Processing…" : `Confirm — $${price.toLocaleString()}/${cadence === "month" ? "mo" : "yr"}`}
      </button>
    </form>
  );
}

function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-gold-300/70">
        {title}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-[0.18em] text-gold-100/60">
        {label}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-800/40 px-4 py-3 text-gold-50 placeholder:text-gold-100/30 focus:border-gold-300/50 focus:outline-none"
      />
    </label>
  );
}
