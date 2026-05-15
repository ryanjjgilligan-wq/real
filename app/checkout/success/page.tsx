import Link from "next/link";

export const metadata = { title: "Welcome · LuxePatron" };

export default async function SuccessPage({
  searchParams
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <div className="font-display text-7xl text-gold-grad">✦</div>
      <h1 className="mt-8 font-display text-5xl text-gold-50">
        You're in.
      </h1>
      <p className="mt-6 text-gold-100/70">
        Your patronage is confirmed. A welcome note from your creator's atelier
        is on its way, along with your concierge contact and first private
        access.
      </p>
      {ref && (
        <div className="mt-6 rounded-full border border-gold-300/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold-200/80">
          Reference · {ref}
        </div>
      )}
      <div className="mt-10 flex gap-3">
        <Link href="/dashboard" className="btn-primary">
          Open patron portal
        </Link>
        <Link href="/explore" className="btn-ghost">
          Explore more creators
        </Link>
      </div>
    </div>
  );
}
